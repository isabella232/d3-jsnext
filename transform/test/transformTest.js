module.exports = function ( src ) {
	return src.replace( /require\(\s*['"]\.\.\/\.\.\/['"]\s*\)/, 'require("../d3")');
};