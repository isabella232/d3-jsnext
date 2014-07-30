var groupByIdentifier = require( '../../../../groupByIdentifier' );

module.exports = function ( node, parent, scanned ) {
	var i, statement, toHoist = [];

	// Discover top-level definitions
	scanned.definedInModule = scanned.scope().defined.filter( function ( name ) {
		return !groupByIdentifier[ name ];
	});

	scanned.leaveScope();

	i = node.body.length;
	while ( i-- ) {
		statement = node.body[i];
		if ( statement._shouldHoist ) {
			node.body.splice( i, 1 );
			toHoist.push( statement );
		}
	}

	if ( toHoist.length ) {
		spliceArgs = [ 0, 0 ].concat( toHoist );
		node.body.splice.apply( node.body, spliceArgs );
	}
};