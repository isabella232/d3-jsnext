{
  "filepath": "/selection/text.js",
  "shared": [],
  "dependencies": [
    "d3_selectionPrototype"
  ],
  "helpers": [],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_selectionPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "text"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "value"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "arguments"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "each"
                        }
                      },
                      "arguments": [
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "typeof",
                              "argument": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Literal",
                              "value": "function",
                              "raw": "\"function\""
                            }
                          },
                          "consequent": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "defaults": [],
                            "body": {
                              "type": "BlockStatement",
                              "body": [
                                {
                                  "type": "VariableDeclaration",
                                  "declarations": [
                                    {
                                      "type": "VariableDeclarator",
                                      "id": {
                                        "type": "Identifier",
                                        "name": "v"
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "value"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "apply"
                                          }
                                        },
                                        "arguments": [
                                          {
                                            "type": "ThisExpression"
                                          },
                                          {
                                            "type": "Identifier",
                                            "name": "arguments"
                                          }
                                        ]
                                      }
                                    }
                                  ],
                                  "kind": "var"
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "textContent"
                                      }
                                    },
                                    "right": {
                                      "type": "ConditionalExpression",
                                      "test": {
                                        "type": "BinaryExpression",
                                        "operator": "==",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "v"
                                        },
                                        "right": {
                                          "type": "Literal",
                                          "value": null,
                                          "raw": "null"
                                        }
                                      },
                                      "consequent": {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\""
                                      },
                                      "alternate": {
                                        "type": "Identifier",
                                        "name": "v"
                                      }
                                    }
                                  }
                                }
                              ]
                            },
                            "rest": null,
                            "generator": false,
                            "expression": false
                          },
                          "alternate": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "BinaryExpression",
                              "operator": "==",
                              "left": {
                                "type": "Identifier",
                                "name": "value"
                              },
                              "right": {
                                "type": "Literal",
                                "value": null,
                                "raw": "null"
                              }
                            },
                            "consequent": {
                              "type": "FunctionExpression",
                              "id": null,
                              "params": [],
                              "defaults": [],
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "textContent"
                                        }
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": "",
                                        "raw": "\"\""
                                      }
                                    }
                                  }
                                ]
                              },
                              "rest": null,
                              "generator": false,
                              "expression": false
                            },
                            "alternate": {
                              "type": "FunctionExpression",
                              "id": null,
                              "params": [],
                              "defaults": [],
                              "body": {
                                "type": "BlockStatement",
                                "body": [
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "AssignmentExpression",
                                      "operator": "=",
                                      "left": {
                                        "type": "MemberExpression",
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression"
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "name": "textContent"
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "value"
                                      }
                                    }
                                  }
                                ]
                              },
                              "rest": null,
                              "generator": false,
                              "expression": false
                            }
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "ThisExpression"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "node"
                          }
                        },
                        "arguments": []
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "textContent"
                      }
                    }
                  }
                }
              ]
            },
            "rest": null,
            "generator": false,
            "expression": false
          }
        }
      }
    ]
  },
  "src": "d3_selectionPrototype.text = function (value) {\n    return arguments.length ? this.each(typeof value === 'function' ? function () {\n        var v = value.apply(this, arguments);\n        this.textContent = v == null ? '' : v;\n    } : value == null ? function () {\n        this.textContent = '';\n    } : function () {\n        this.textContent = value;\n    }) : this.node().textContent;\n};"
}