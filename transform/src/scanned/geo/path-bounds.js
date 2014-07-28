{
  "filepath": "/geo/path-bounds.js",
  "shared": [
    {
      "path": "/geo/_pathBounds.js",
      "properties": [
        "d3_geo_pathBoundsX0",
        "d3_geo_pathBoundsY0",
        "d3_geo_pathBoundsX1",
        "d3_geo_pathBoundsY1"
      ],
      "name": "GEO_PATHBOUNDS"
    }
  ],
  "dependencies": [
    "d3_noop"
  ],
  "helpers": [
    "d3_geo_pathBounds",
    "d3_geo_pathBoundsPoint"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "EmptyStatement",
        "_isReplacement": true
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_geo_pathBounds"
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "point"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsPoint"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "lineEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonStart"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                },
                {
                  "type": "Property",
                  "key": {
                    "type": "Identifier",
                    "name": "polygonEnd"
                  },
                  "value": {
                    "type": "Identifier",
                    "name": "d3_noop"
                  },
                  "kind": "init"
                }
              ]
            }
          }
        ]
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_pathBoundsPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x"
          },
          {
            "type": "Identifier",
            "name": "y"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "GEO_PATHBOUNDS"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsX0"
                  },
                  "_isReplacement": true
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "GEO_PATHBOUNDS"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "d3_geo_pathBoundsX0"
                    },
                    "_isReplacement": true
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "x"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "GEO_PATHBOUNDS"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsX1"
                  },
                  "_isReplacement": true
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "GEO_PATHBOUNDS"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "d3_geo_pathBoundsX1"
                    },
                    "_isReplacement": true
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "x"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "y"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "GEO_PATHBOUNDS"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsY0"
                  },
                  "_isReplacement": true
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "GEO_PATHBOUNDS"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "d3_geo_pathBoundsY0"
                    },
                    "_isReplacement": true
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "y"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": ">",
                "left": {
                  "type": "Identifier",
                  "name": "y"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "GEO_PATHBOUNDS"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "d3_geo_pathBoundsY1"
                  },
                  "_isReplacement": true
                }
              },
              "consequent": {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "AssignmentExpression",
                  "operator": "=",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "GEO_PATHBOUNDS"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "d3_geo_pathBoundsY1"
                    },
                    "_isReplacement": true
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "y"
                  }
                }
              },
              "alternate": null
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  }
}