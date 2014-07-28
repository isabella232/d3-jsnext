{
  "filepath": "/svg/area.js",
  "shared": [],
  "dependencies": [
    "d3_geom_pointX",
    "d3_geom_pointY",
    "d3_true",
    "d3_svg_lineLinear",
    "d3_functor",
    "d3_svg_lineInterpolators",
    "d3_svg_lineStepBefore",
    "d3_svg_lineStepAfter",
    "d3_identity"
  ],
  "helpers": [
    "d3_svg_area"
  ],
  "exports": [
    "d3.svg.area"
  ],
  "ast": {
    "type": "Program",
    "body": [
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_svg_area"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "projection"
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
                    "name": "x0"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_pointX"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "x1"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_pointX"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y0"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "y1"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_geom_pointY"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "defined"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_true"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolate"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "d3_svg_lineLinear"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolateKey"
                  },
                  "init": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "interpolate"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "key"
                    }
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "interpolateReverse"
                  },
                  "init": {
                    "type": "Identifier",
                    "name": "interpolate"
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "L"
                  },
                  "init": {
                    "type": "Literal",
                    "value": "L",
                    "raw": "\"L\""
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "tension"
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0.7,
                    "raw": ".7"
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "area"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "data"
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
                          "name": "segments"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "points0"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "points1"
                        },
                        "init": {
                          "type": "ArrayExpression",
                          "elements": []
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "init": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                          },
                          "prefix": true
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "n"
                        },
                        "init": {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "data"
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
                          "name": "d"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fx0"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_functor"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "x0"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fy0"
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_functor"
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "y0"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fx1"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "x0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x1"
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "x"
                                  }
                                }
                              ]
                            },
                            "rest": null,
                            "generator": false,
                            "expression": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_functor"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "x1"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "fy1"
                        },
                        "init": {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": "===",
                            "left": {
                              "type": "Identifier",
                              "name": "y0"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y1"
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
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "name": "y"
                                  }
                                }
                              ]
                            },
                            "rest": null,
                            "generator": false,
                            "expression": false
                          },
                          "alternate": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "d3_functor"
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "y1"
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "init": null
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "y"
                        },
                        "init": null
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "name": "segment"
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
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "segments"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "push"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": "M",
                                "raw": "\"M\""
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "interpolate"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "projection"
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "points1"
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "tension"
                                  }
                                ]
                              },
                              {
                                "type": "Identifier",
                                "name": "L"
                              },
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "interpolateReverse"
                                },
                                "arguments": [
                                  {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "Identifier",
                                      "name": "projection"
                                    },
                                    "arguments": [
                                      {
                                        "type": "CallExpression",
                                        "callee": {
                                          "type": "MemberExpression",
                                          "computed": false,
                                          "object": {
                                            "type": "Identifier",
                                            "name": "points0"
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "name": "reverse"
                                          }
                                        },
                                        "arguments": []
                                      }
                                    ]
                                  },
                                  {
                                    "type": "Identifier",
                                    "name": "tension"
                                  }
                                ]
                              },
                              {
                                "type": "Literal",
                                "value": "Z",
                                "raw": "\"Z\""
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
                    "type": "WhileStatement",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "<",
                      "left": {
                        "type": "UpdateExpression",
                        "operator": "++",
                        "argument": {
                          "type": "Identifier",
                          "name": "i"
                        },
                        "prefix": true
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "n"
                      }
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "IfStatement",
                          "test": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "defined"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "call"
                              }
                            },
                            "arguments": [
                              {
                                "type": "ThisExpression"
                              },
                              {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "d"
                                },
                                "right": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "data"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "i"
                              }
                            ]
                          },
                          "consequent": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "CallExpression",
                                  "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "points0"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "x"
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "fx0"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "call"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "ThisExpression"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "d"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ]
                                            },
                                            "prefix": true
                                          }
                                        },
                                        {
                                          "type": "AssignmentExpression",
                                          "operator": "=",
                                          "left": {
                                            "type": "Identifier",
                                            "name": "y"
                                          },
                                          "right": {
                                            "type": "UnaryExpression",
                                            "operator": "+",
                                            "argument": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "computed": false,
                                                "object": {
                                                  "type": "Identifier",
                                                  "name": "fy0"
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "name": "call"
                                                }
                                              },
                                              "arguments": [
                                                {
                                                  "type": "ThisExpression"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "d"
                                                },
                                                {
                                                  "type": "Identifier",
                                                  "name": "i"
                                                }
                                              ]
                                            },
                                            "prefix": true
                                          }
                                        }
                                      ]
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
                                      "name": "points1"
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "name": "push"
                                    }
                                  },
                                  "arguments": [
                                    {
                                      "type": "ArrayExpression",
                                      "elements": [
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "fx1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "call"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            ]
                                          },
                                          "prefix": true
                                        },
                                        {
                                          "type": "UnaryExpression",
                                          "operator": "+",
                                          "argument": {
                                            "type": "CallExpression",
                                            "callee": {
                                              "type": "MemberExpression",
                                              "computed": false,
                                              "object": {
                                                "type": "Identifier",
                                                "name": "fy1"
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "name": "call"
                                              }
                                            },
                                            "arguments": [
                                              {
                                                "type": "ThisExpression"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "d"
                                              },
                                              {
                                                "type": "Identifier",
                                                "name": "i"
                                              }
                                            ]
                                          },
                                          "prefix": true
                                        }
                                      ]
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "alternate": {
                            "type": "IfStatement",
                            "test": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "points0"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
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
                                      "name": "segment"
                                    },
                                    "arguments": []
                                  }
                                },
                                {
                                  "type": "ExpressionStatement",
                                  "expression": {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "points0"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
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
                                      "name": "points1"
                                    },
                                    "right": {
                                      "type": "ArrayExpression",
                                      "elements": []
                                    }
                                  }
                                }
                              ]
                            },
                            "alternate": null
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "points0"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "length"
                      }
                    },
                    "consequent": {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "segment"
                        },
                        "arguments": []
                      }
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "name": "segments"
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
                            "type": "Identifier",
                            "name": "segments"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "join"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "",
                            "raw": "\"\""
                          }
                        ]
                      },
                      "alternate": {
                        "type": "Literal",
                        "value": null,
                        "raw": "null"
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "x1"
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
                            "name": "x0"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "x1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "_"
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x0"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "x0"
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
                            "name": "x0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "x1"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "x1"
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
                            "name": "x1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "y1"
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
                            "name": "y0"
                          },
                          "right": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "y1"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "_"
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y0"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "y0"
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
                            "name": "y0"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "y1"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "y1"
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
                            "name": "y1"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "defined"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "defined"
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
                            "name": "defined"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "interpolate"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "interpolateKey"
                          }
                        },
                        "alternate": null
                      },
                      {
                        "type": "IfStatement",
                        "test": {
                          "type": "BinaryExpression",
                          "operator": "===",
                          "left": {
                            "type": "UnaryExpression",
                            "operator": "typeof",
                            "argument": {
                              "type": "Identifier",
                              "name": "_"
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
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "interpolateKey"
                            },
                            "right": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "interpolate"
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "_"
                              }
                            }
                          }
                        },
                        "alternate": {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "name": "interpolateKey"
                            },
                            "right": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "AssignmentExpression",
                                "operator": "=",
                                "left": {
                                  "type": "Identifier",
                                  "name": "interpolate"
                                },
                                "right": {
                                  "type": "LogicalExpression",
                                  "operator": "||",
                                  "left": {
                                    "type": "CallExpression",
                                    "callee": {
                                      "type": "MemberExpression",
                                      "computed": false,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "d3_svg_lineInterpolators"
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "name": "get"
                                      }
                                    },
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "name": "_"
                                      }
                                    ]
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_svg_lineLinear"
                                  }
                                }
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "key"
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
                            "type": "Identifier",
                            "name": "interpolateReverse"
                          },
                          "right": {
                            "type": "LogicalExpression",
                            "operator": "||",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "interpolate"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "reverse"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "interpolate"
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
                            "name": "L"
                          },
                          "right": {
                            "type": "ConditionalExpression",
                            "test": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "interpolate"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "closed"
                              }
                            },
                            "consequent": {
                              "type": "Literal",
                              "value": "M",
                              "raw": "\"M\""
                            },
                            "alternate": {
                              "type": "Literal",
                              "value": "L",
                              "raw": "\"L\""
                            }
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
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
                    "name": "area"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "tension"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "_"
                    }
                  ],
                  "defaults": [],
                  "body": {
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
                              "name": "arguments"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "length"
                            }
                          },
                          "prefix": true
                        },
                        "consequent": {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "name": "tension"
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
                            "name": "tension"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "_"
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "Identifier",
                          "name": "area"
                        }
                      }
                    ]
                  },
                  "rest": null,
                  "generator": false,
                  "expression": false
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "area"
              }
            }
          ]
        },
        "rest": null,
        "generator": false,
        "expression": false
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
              "name": "d3_svg_lineStepBefore"
            },
            "property": {
              "type": "Identifier",
              "name": "reverse"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_svg_lineStepAfter"
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
              "name": "d3_svg_lineStepAfter"
            },
            "property": {
              "type": "Identifier",
              "name": "reverse"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_svg_lineStepBefore"
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "svg"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "area"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_svg_area"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "d3_identity"
                      }
                    ]
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
  "src": "function d3_svg_area(projection) {\n    var x0 = d3_geom_pointX, x1 = d3_geom_pointX, y0 = 0, y1 = d3_geom_pointY, defined = d3_true, interpolate = d3_svg_lineLinear, interpolateKey = interpolate.key, interpolateReverse = interpolate, L = 'L', tension = 0.7;\n    function area(data) {\n        var segments = [], points0 = [], points1 = [], i = -1, n = data.length, d, fx0 = d3_functor(x0), fy0 = d3_functor(y0), fx1 = x0 === x1 ? function () {\n                return x;\n            } : d3_functor(x1), fy1 = y0 === y1 ? function () {\n                return y;\n            } : d3_functor(y1), x, y;\n        function segment() {\n            segments.push('M', interpolate(projection(points1), tension), L, interpolateReverse(projection(points0.reverse()), tension), 'Z');\n        }\n        while (++i < n) {\n            if (defined.call(this, d = data[i], i)) {\n                points0.push([\n                    x = +fx0.call(this, d, i),\n                    y = +fy0.call(this, d, i)\n                ]);\n                points1.push([\n                    +fx1.call(this, d, i),\n                    +fy1.call(this, d, i)\n                ]);\n            } else if (points0.length) {\n                segment();\n                points0 = [];\n                points1 = [];\n            }\n        }\n        if (points0.length)\n            segment();\n        return segments.length ? segments.join('') : null;\n    }\n    area.x = function (_) {\n        if (!arguments.length)\n            return x1;\n        x0 = x1 = _;\n        return area;\n    };\n    area.x0 = function (_) {\n        if (!arguments.length)\n            return x0;\n        x0 = _;\n        return area;\n    };\n    area.x1 = function (_) {\n        if (!arguments.length)\n            return x1;\n        x1 = _;\n        return area;\n    };\n    area.y = function (_) {\n        if (!arguments.length)\n            return y1;\n        y0 = y1 = _;\n        return area;\n    };\n    area.y0 = function (_) {\n        if (!arguments.length)\n            return y0;\n        y0 = _;\n        return area;\n    };\n    area.y1 = function (_) {\n        if (!arguments.length)\n            return y1;\n        y1 = _;\n        return area;\n    };\n    area.defined = function (_) {\n        if (!arguments.length)\n            return defined;\n        defined = _;\n        return area;\n    };\n    area.interpolate = function (_) {\n        if (!arguments.length)\n            return interpolateKey;\n        if (typeof _ === 'function')\n            interpolateKey = interpolate = _;\n        else\n            interpolateKey = (interpolate = d3_svg_lineInterpolators.get(_) || d3_svg_lineLinear).key;\n        interpolateReverse = interpolate.reverse || interpolate;\n        L = interpolate.closed ? 'M' : 'L';\n        return area;\n    };\n    area.tension = function (_) {\n        if (!arguments.length)\n            return tension;\n        tension = _;\n        return area;\n    };\n    return area;\n}\nd3_svg_lineStepBefore.reverse = d3_svg_lineStepAfter;\nd3_svg_lineStepAfter.reverse = d3_svg_lineStepBefore;\nd3.svg.area = function () {\n    return d3_svg_area(d3_identity);\n};"
}