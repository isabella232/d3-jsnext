{
  "filepath": "/geom/voronoi/beach.js",
  "shared": [],
  "dependencies": [
    "d3_geom_voronoiRedBlackNode",
    "d3_geom_voronoiBeachPool",
    "d3_geom_voronoiDetachCircle",
    "d3_geom_voronoiBeaches",
    "abs",
    "d3_geom_voronoiSetEdgeEnd",
    "d3_geom_voronoiCreateEdge",
    "d3_geom_voronoiAttachCircle"
  ],
  "helpers": [
    "d3_geom_voronoiBeach",
    "d3_geom_voronoiCreateBeach",
    "d3_geom_voronoiDetachBeach",
    "d3_geom_voronoiRemoveBeach",
    "d3_geom_voronoiAddBeach",
    "d3_geom_voronoiLeftBreakPoint",
    "d3_geom_voronoiRightBreakPoint"
  ],
  "exports": [],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiBeach"
        },
        "params": [],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiRedBlackNode"
                },
                "arguments": [
                  {
                    "type": "ThisExpression"
                  }
                ]
              }
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
                    "name": "edge"
                  }
                },
                "right": {
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
                      "name": "site"
                    }
                  },
                  "right": {
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
                        "name": "circle"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    }
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
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiCreateBeach"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "site"
          }
        ],
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
                    "name": "beach"
                  },
                  "init": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiBeachPool"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "pop"
                        }
                      },
                      "arguments": []
                    },
                    "right": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiBeach"
                      },
                      "arguments": []
                    }
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
                    "type": "Identifier",
                    "name": "beach"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "site"
                  }
                },
                "right": {
                  "type": "Identifier",
                  "name": "site"
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "beach"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiDetachBeach"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "beach"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "beach"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiBeaches"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "remove"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "beach"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiBeachPool"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "beach"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiRedBlackNode"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "beach"
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiRemoveBeach"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "beach"
          }
        ],
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
                    "name": "circle"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "beach"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "circle"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "circle"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "circle"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "cy"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "vertex"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "value": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "kind": "init"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "previous"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "beach"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "P"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "next"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "beach"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "N"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "disappearing"
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [
                      {
                        "type": "Identifier",
                        "name": "beach"
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachBeach"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "beach"
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "previous"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lArc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "circle"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "abs"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "lArc"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "circle"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "abs"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "lArc"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "circle"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "cy"
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "ε"
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "previous"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "lArc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "P"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "disappearing"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "unshift"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "lArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiDetachBeach"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "lArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "lArc"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "previous"
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "disappearing"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "unshift"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rArc"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "next"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "LogicalExpression",
                  "operator": "&&",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "rArc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "circle"
                    }
                  },
                  "right": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "abs"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "x"
                          },
                          "right": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "rArc"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "circle"
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          }
                        }
                      ]
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ε"
                    }
                  }
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "<",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "abs"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "rArc"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "circle"
                            }
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "cy"
                          }
                        }
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "ε"
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "next"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "rArc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "N"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "disappearing"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "push"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "rArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiDetachBeach"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "rArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "rArc"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "next"
                      }
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "disappearing"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "push"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rArc"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rArc"
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "nArcs"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "disappearing"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "length"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "iArc"
                  },
                  "init": null
                }
              ],
              "kind": "var"
            },
            {
              "type": "ForStatement",
              "init": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "iArc"
                },
                "right": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1"
                }
              },
              "test": {
                "type": "BinaryExpression",
                "operator": "<",
                "left": {
                  "type": "Identifier",
                  "name": "iArc"
                },
                "right": {
                  "type": "Identifier",
                  "name": "nArcs"
                }
              },
              "update": {
                "type": "UpdateExpression",
                "operator": "++",
                "argument": {
                  "type": "Identifier",
                  "name": "iArc"
                },
                "prefix": true
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "rArc"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "disappearing"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "iArc"
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "lArc"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "name": "disappearing"
                        },
                        "property": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "Identifier",
                            "name": "iArc"
                          },
                          "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          }
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiSetEdgeEnd"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "rArc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "edge"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "lArc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "site"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "rArc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "site"
                          }
                        },
                        {
                          "type": "Identifier",
                          "name": "vertex"
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "lArc"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "disappearing"
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "rArc"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "name": "disappearing"
                  },
                  "property": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "nArcs"
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1"
                    }
                  }
                }
              }
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
                    "type": "Identifier",
                    "name": "rArc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "edge"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiCreateEdge"
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "lArc"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "site"
                      }
                    },
                    {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "rArc"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "site"
                      }
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Identifier",
                      "name": "vertex"
                    }
                  ]
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiAttachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiAttachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rArc"
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiAddBeach"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "site"
          }
        ],
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
                    "name": "x"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "directrix"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "y"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rArc"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "dxl"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "dxr"
                  },
                  "init": null
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "node"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiBeaches"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "_"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "WhileStatement",
              "test": {
                "type": "Identifier",
                "name": "node"
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "dxl"
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geom_voronoiLeftBreakPoint"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "node"
                            },
                            {
                              "type": "Identifier",
                              "name": "directrix"
                            }
                          ]
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "x"
                        }
                      }
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "dxl"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "ε"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "Identifier",
                          "name": "node"
                        },
                        "right": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "node"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "L"
                          }
                        }
                      }
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "dxr"
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "Identifier",
                                "name": "x"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_geom_voronoiRightBreakPoint"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "directrix"
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "Identifier",
                              "name": "dxr"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "ε"
                            }
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "UnaryExpression",
                                  "operator": "!",
                                  "argument": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "R"
                                    }
                                  },
                                  "prefix": true
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "lArc"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "node"
                                        }
                                      }
                                    },
                                    {
                                      "type": "BreakStatement",
                                      "label": null
                                    }
                                  ]
                                },
                                "alternate": null
                              },
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "AssignmentExpression",
                                  "operator": "=",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "node"
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "node"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "R"
                                    }
                                  }
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "IfStatement",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "dxl"
                                  },
                                  "right": {
                                    "type": "UnaryExpression",
                                    "operator": "-",
                                    "argument": {
                                      "type": "Identifier",
                                      "name": "ε"
                                    },
                                    "prefix": true
                                  }
                                },
                                "consequent": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "lArc"
                                        },
                                        "right": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "node"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "P"
                                          }
                                        }
                                      }
                                    },
                                    {
                                      "type": "ExpressionStatement",
                                      "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                          "type": "Identifier",
                                          "name": "rArc"
                                        },
                                        "right": {
                                          "type": "Identifier",
                                          "name": "node"
                                        }
                                      }
                                    }
                                  ]
                                },
                                "alternate": {
                                  "type": "IfStatement",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": ">",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "dxr"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "ε"
                                      },
                                      "prefix": true
                                    }
                                  },
                                  "consequent": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "lArc"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "node"
                                          }
                                        }
                                      },
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "rArc"
                                          },
                                          "right": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "name": "node"
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "name": "N"
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  },
                                  "alternate": {
                                    "type": "BlockStatement",
                                    "body": [
                                      {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "lArc"
                                          },
                                          "right": {
                                            "type": "AssignmentExpression",
                                            "operator": "=",
                                            "left": {
                                              "type": "Identifier",
                                              "name": "rArc"
                                            },
                                            "right": {
                                              "type": "Identifier",
                                              "name": "node"
                                            }
                                          }
                                        }
                                      }
                                    ]
                                  }
                                }
                              },
                              {
                                "type": "BreakStatement",
                                "label": null
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "newArc"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geom_voronoiCreateBeach"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "site"
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
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiBeaches"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "insert"
                  }
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  {
                    "type": "Identifier",
                    "name": "newArc"
                  }
                ]
              }
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "LogicalExpression",
                "operator": "&&",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  "prefix": true
                },
                "right": {
                  "type": "UnaryExpression",
                  "operator": "!",
                  "argument": {
                    "type": "Identifier",
                    "name": "rArc"
                  },
                  "prefix": true
                }
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": null
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "operator": "===",
                "left": {
                  "type": "Identifier",
                  "name": "lArc"
                },
                "right": {
                  "type": "Identifier",
                  "name": "rArc"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiDetachCircle"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "lArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "name": "rArc"
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiCreateBeach"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "lArc"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "site"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiBeaches"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "insert"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "newArc"
                        },
                        {
                          "type": "Identifier",
                          "name": "rArc"
                        }
                      ]
                    }
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
                          "type": "Identifier",
                          "name": "newArc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "edge"
                        }
                      },
                      "right": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "rArc"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "edge"
                          }
                        },
                        "right": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_geom_voronoiCreateEdge"
                          },
                          "arguments": [
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "lArc"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "site"
                              }
                            },
                            {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "newArc"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "site"
                              }
                            }
                          ]
                        }
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiAttachCircle"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "lArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geom_voronoiAttachCircle"
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "name": "rArc"
                        }
                      ]
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "rArc"
                },
                "prefix": true
              },
              "consequent": {
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
                          "type": "Identifier",
                          "name": "newArc"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "edge"
                        }
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geom_voronoiCreateEdge"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "lArc"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "site"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "newArc"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "site"
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": null
                  }
                ]
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiDetachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rArc"
                  }
                ]
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lSite"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lArc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "site"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ax"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lSite"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "ay"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "lSite"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "y"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "bx"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "site"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ax"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "by"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "site"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ay"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rSite"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "rArc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "site"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cx"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "rSite"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "x"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ax"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cy"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "rSite"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "y"
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "ay"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "d"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "bx"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cy"
                        }
                      },
                      "right": {
                        "type": "BinaryExpression",
                        "operator": "*",
                        "left": {
                          "type": "Identifier",
                          "name": "by"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "cx"
                        }
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "hb"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "bx"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "bx"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "by"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "by"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "hc"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "cx"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "cx"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "*",
                      "left": {
                        "type": "Identifier",
                        "name": "cy"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "cy"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "vertex"
                  },
                  "init": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "value": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "cy"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "hb"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "by"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "hc"
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ax"
                          }
                        },
                        "kind": "init"
                      },
                      {
                        "type": "Property",
                        "key": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "value": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "/",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "bx"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "hc"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "cx"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "hb"
                                }
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "ay"
                          }
                        },
                        "kind": "init"
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
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiSetEdgeEnd"
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "rArc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "edge"
                    }
                  },
                  {
                    "type": "Identifier",
                    "name": "lSite"
                  },
                  {
                    "type": "Identifier",
                    "name": "rSite"
                  },
                  {
                    "type": "Identifier",
                    "name": "vertex"
                  }
                ]
              }
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
                    "type": "Identifier",
                    "name": "newArc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "edge"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiCreateEdge"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "lSite"
                    },
                    {
                      "type": "Identifier",
                      "name": "site"
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Identifier",
                      "name": "vertex"
                    }
                  ]
                }
              }
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
                    "type": "Identifier",
                    "name": "rArc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "edge"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiCreateEdge"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "site"
                    },
                    {
                      "type": "Identifier",
                      "name": "rSite"
                    },
                    {
                      "type": "Literal",
                      "value": null,
                      "raw": "null"
                    },
                    {
                      "type": "Identifier",
                      "name": "vertex"
                    }
                  ]
                }
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiAttachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "lArc"
                  }
                ]
              }
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_geom_voronoiAttachCircle"
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "name": "rArc"
                  }
                ]
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiLeftBreakPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "arc"
          },
          {
            "type": "Identifier",
            "name": "directrix"
          }
        ],
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
                    "name": "site"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "arc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "site"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rfocx"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "rfocy"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "y"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "pby2"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "rfocy"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "directrix"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "pby2"
                },
                "prefix": true
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "name": "rfocx"
                }
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "arc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "P"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "lArc"
                },
                "prefix": true
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "UnaryExpression",
                  "operator": "-",
                  "argument": {
                    "type": "Identifier",
                    "name": "Infinity"
                  },
                  "prefix": true
                }
              },
              "alternate": null
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "Identifier",
                  "name": "site"
                },
                "right": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "lArc"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "site"
                  }
                }
              }
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lfocx"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "lfocy"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "y"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "plby2"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "lfocy"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "directrix"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "Identifier",
                  "name": "plby2"
                },
                "prefix": true
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "name": "lfocx"
                }
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "hl"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "lfocx"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "rfocx"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "aby2"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "pby2"
                      }
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "plby2"
                      }
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "b"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "Identifier",
                      "name": "hl"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "plby2"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "aby2"
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "UnaryExpression",
                        "operator": "-",
                        "argument": {
                          "type": "Identifier",
                          "name": "b"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "Math"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "sqrt"
                          }
                        },
                        "arguments": [
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "b"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "b"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "aby2"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "-",
                                "left": {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "BinaryExpression",
                                      "operator": "-",
                                      "left": {
                                        "type": "BinaryExpression",
                                        "operator": "/",
                                        "left": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "hl"
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "hl"
                                          }
                                        },
                                        "right": {
                                          "type": "BinaryExpression",
                                          "operator": "*",
                                          "left": {
                                            "type": "UnaryExpression",
                                            "operator": "-",
                                            "argument": {
                                              "type": "Literal",
                                              "value": 2,
                                              "raw": "2"
                                            },
                                            "prefix": true
                                          },
                                          "right": {
                                            "type": "Identifier",
                                            "name": "plby2"
                                          }
                                        }
                                      },
                                      "right": {
                                        "type": "Identifier",
                                        "name": "lfocy"
                                      }
                                    },
                                    "right": {
                                      "type": "BinaryExpression",
                                      "operator": "/",
                                      "left": {
                                        "type": "Identifier",
                                        "name": "plby2"
                                      },
                                      "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                      }
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "rfocy"
                                  }
                                },
                                "right": {
                                  "type": "BinaryExpression",
                                  "operator": "/",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "pby2"
                                  },
                                  "right": {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                  }
                                }
                              }
                            }
                          }
                        ]
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "aby2"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "rfocx"
                  }
                }
              },
              "alternate": null
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "BinaryExpression",
                "operator": "/",
                "left": {
                  "type": "BinaryExpression",
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "name": "rfocx"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "lfocx"
                  }
                },
                "right": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2"
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geom_voronoiRightBreakPoint"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "arc"
          },
          {
            "type": "Identifier",
            "name": "directrix"
          }
        ],
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
                    "name": "rArc"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "arc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "N"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "IfStatement",
              "test": {
                "type": "Identifier",
                "name": "rArc"
              },
              "consequent": {
                "type": "ReturnStatement",
                "argument": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geom_voronoiLeftBreakPoint"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "rArc"
                    },
                    {
                      "type": "Identifier",
                      "name": "directrix"
                    }
                  ]
                }
              },
              "alternate": null
            },
            {
              "type": "VariableDeclaration",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "site"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "arc"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "site"
                    }
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ConditionalExpression",
                "test": {
                  "type": "BinaryExpression",
                  "operator": "===",
                  "left": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "site"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "y"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "directrix"
                  }
                },
                "consequent": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "site"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x"
                  }
                },
                "alternate": {
                  "type": "Identifier",
                  "name": "Infinity"
                }
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
      }
    ]
  },
  "src": "function d3_geom_voronoiBeach() {\n    d3_geom_voronoiRedBlackNode(this);\n    this.edge = this.site = this.circle = null;\n}\nfunction d3_geom_voronoiCreateBeach(site) {\n    var beach = d3_geom_voronoiBeachPool.pop() || new d3_geom_voronoiBeach();\n    beach.site = site;\n    return beach;\n}\nfunction d3_geom_voronoiDetachBeach(beach) {\n    d3_geom_voronoiDetachCircle(beach);\n    d3_geom_voronoiBeaches.remove(beach);\n    d3_geom_voronoiBeachPool.push(beach);\n    d3_geom_voronoiRedBlackNode(beach);\n}\nfunction d3_geom_voronoiRemoveBeach(beach) {\n    var circle = beach.circle, x = circle.x, y = circle.cy, vertex = {\n            x: x,\n            y: y\n        }, previous = beach.P, next = beach.N, disappearing = [beach];\n    d3_geom_voronoiDetachBeach(beach);\n    var lArc = previous;\n    while (lArc.circle && abs(x - lArc.circle.x) < ε && abs(y - lArc.circle.cy) < ε) {\n        previous = lArc.P;\n        disappearing.unshift(lArc);\n        d3_geom_voronoiDetachBeach(lArc);\n        lArc = previous;\n    }\n    disappearing.unshift(lArc);\n    d3_geom_voronoiDetachCircle(lArc);\n    var rArc = next;\n    while (rArc.circle && abs(x - rArc.circle.x) < ε && abs(y - rArc.circle.cy) < ε) {\n        next = rArc.N;\n        disappearing.push(rArc);\n        d3_geom_voronoiDetachBeach(rArc);\n        rArc = next;\n    }\n    disappearing.push(rArc);\n    d3_geom_voronoiDetachCircle(rArc);\n    var nArcs = disappearing.length, iArc;\n    for (iArc = 1; iArc < nArcs; ++iArc) {\n        rArc = disappearing[iArc];\n        lArc = disappearing[iArc - 1];\n        d3_geom_voronoiSetEdgeEnd(rArc.edge, lArc.site, rArc.site, vertex);\n    }\n    lArc = disappearing[0];\n    rArc = disappearing[nArcs - 1];\n    rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, rArc.site, null, vertex);\n    d3_geom_voronoiAttachCircle(lArc);\n    d3_geom_voronoiAttachCircle(rArc);\n}\nfunction d3_geom_voronoiAddBeach(site) {\n    var x = site.x, directrix = site.y, lArc, rArc, dxl, dxr, node = d3_geom_voronoiBeaches._;\n    while (node) {\n        dxl = d3_geom_voronoiLeftBreakPoint(node, directrix) - x;\n        if (dxl > ε)\n            node = node.L;\n        else {\n            dxr = x - d3_geom_voronoiRightBreakPoint(node, directrix);\n            if (dxr > ε) {\n                if (!node.R) {\n                    lArc = node;\n                    break;\n                }\n                node = node.R;\n            } else {\n                if (dxl > -ε) {\n                    lArc = node.P;\n                    rArc = node;\n                } else if (dxr > -ε) {\n                    lArc = node;\n                    rArc = node.N;\n                } else {\n                    lArc = rArc = node;\n                }\n                break;\n            }\n        }\n    }\n    var newArc = d3_geom_voronoiCreateBeach(site);\n    d3_geom_voronoiBeaches.insert(lArc, newArc);\n    if (!lArc && !rArc)\n        return;\n    if (lArc === rArc) {\n        d3_geom_voronoiDetachCircle(lArc);\n        rArc = d3_geom_voronoiCreateBeach(lArc.site);\n        d3_geom_voronoiBeaches.insert(newArc, rArc);\n        newArc.edge = rArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);\n        d3_geom_voronoiAttachCircle(lArc);\n        d3_geom_voronoiAttachCircle(rArc);\n        return;\n    }\n    if (!rArc) {\n        newArc.edge = d3_geom_voronoiCreateEdge(lArc.site, newArc.site);\n        return;\n    }\n    d3_geom_voronoiDetachCircle(lArc);\n    d3_geom_voronoiDetachCircle(rArc);\n    var lSite = lArc.site, ax = lSite.x, ay = lSite.y, bx = site.x - ax, by = site.y - ay, rSite = rArc.site, cx = rSite.x - ax, cy = rSite.y - ay, d = 2 * (bx * cy - by * cx), hb = bx * bx + by * by, hc = cx * cx + cy * cy, vertex = {\n            x: (cy * hb - by * hc) / d + ax,\n            y: (bx * hc - cx * hb) / d + ay\n        };\n    d3_geom_voronoiSetEdgeEnd(rArc.edge, lSite, rSite, vertex);\n    newArc.edge = d3_geom_voronoiCreateEdge(lSite, site, null, vertex);\n    rArc.edge = d3_geom_voronoiCreateEdge(site, rSite, null, vertex);\n    d3_geom_voronoiAttachCircle(lArc);\n    d3_geom_voronoiAttachCircle(rArc);\n}\nfunction d3_geom_voronoiLeftBreakPoint(arc, directrix) {\n    var site = arc.site, rfocx = site.x, rfocy = site.y, pby2 = rfocy - directrix;\n    if (!pby2)\n        return rfocx;\n    var lArc = arc.P;\n    if (!lArc)\n        return -Infinity;\n    site = lArc.site;\n    var lfocx = site.x, lfocy = site.y, plby2 = lfocy - directrix;\n    if (!plby2)\n        return lfocx;\n    var hl = lfocx - rfocx, aby2 = 1 / pby2 - 1 / plby2, b = hl / plby2;\n    if (aby2)\n        return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;\n    return (rfocx + lfocx) / 2;\n}\nfunction d3_geom_voronoiRightBreakPoint(arc, directrix) {\n    var rArc = arc.N;\n    if (rArc)\n        return d3_geom_voronoiLeftBreakPoint(rArc, directrix);\n    var site = arc.site;\n    return site.y === directrix ? site.x : Infinity;\n}"
}