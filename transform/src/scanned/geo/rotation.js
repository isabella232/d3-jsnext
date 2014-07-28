{
  "filepath": "/geo/rotation.js",
  "shared": [],
  "dependencies": [
    "d3_radians",
    "d3_degrees",
    "d3_geo_equirectangular",
    "d3_geo_compose",
    "d3_asin"
  ],
  "helpers": [
    "d3_geo_identityRotation",
    "d3_geo_rotation",
    "d3_geo_forwardRotationλ",
    "d3_geo_rotationλ",
    "d3_geo_rotationφγ"
  ],
  "exports": [
    "d3.geo.rotation"
  ],
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
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3"
              },
              "property": {
                "type": "Identifier",
                "name": "geo"
              }
            },
            "property": {
              "type": "Identifier",
              "name": "rotation"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "rotate"
              }
            ],
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
                      "type": "Identifier",
                      "name": "rotate"
                    },
                    "right": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_geo_rotation"
                      },
                      "arguments": [
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "%",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "rotate"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 360,
                              "raw": "360"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_radians"
                          }
                        },
                        {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                              "type": "Identifier",
                              "name": "rotate"
                            },
                            "property": {
                              "type": "Literal",
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "d3_radians"
                          }
                        },
                        {
                          "type": "ConditionalExpression",
                          "test": {
                            "type": "BinaryExpression",
                            "operator": ">",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "name": "rotate"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "length"
                              }
                            },
                            "right": {
                              "type": "Literal",
                              "value": 2,
                              "raw": "2"
                            }
                          },
                          "consequent": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "MemberExpression",
                              "computed": true,
                              "object": {
                                "type": "Identifier",
                                "name": "rotate"
                              },
                              "property": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                              }
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "d3_radians"
                            }
                          },
                          "alternate": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    }
                  }
                },
                {
                  "type": "FunctionDeclaration",
                  "id": {
                    "type": "Identifier",
                    "name": "forward"
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "coordinates"
                    }
                  ],
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
                            "type": "Identifier",
                            "name": "coordinates"
                          },
                          "right": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "name": "rotate"
                            },
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "coordinates"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_radians"
                                }
                              },
                              {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "MemberExpression",
                                  "computed": true,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "coordinates"
                                  },
                                  "property": {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                  }
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "d3_radians"
                                }
                              }
                            ]
                          }
                        }
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "SequenceExpression",
                          "expressions": [
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "coordinates"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 0,
                                  "raw": "0"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_degrees"
                              }
                            },
                            {
                              "type": "AssignmentExpression",
                              "operator": "*=",
                              "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                  "type": "Identifier",
                                  "name": "coordinates"
                                },
                                "property": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "d3_degrees"
                              }
                            },
                            {
                              "type": "Identifier",
                              "name": "coordinates"
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
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "name": "forward"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "invert"
                      }
                    },
                    "right": {
                      "type": "FunctionExpression",
                      "id": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "name": "coordinates"
                        }
                      ],
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
                                "type": "Identifier",
                                "name": "coordinates"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "name": "rotate"
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "name": "invert"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "coordinates"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 0,
                                        "raw": "0"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  },
                                  {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "MemberExpression",
                                      "computed": true,
                                      "object": {
                                        "type": "Identifier",
                                        "name": "coordinates"
                                      },
                                      "property": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                      }
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "d3_radians"
                                    }
                                  }
                                ]
                              }
                            }
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "SequenceExpression",
                              "expressions": [
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "*=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "coordinates"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_degrees"
                                  }
                                },
                                {
                                  "type": "AssignmentExpression",
                                  "operator": "*=",
                                  "left": {
                                    "type": "MemberExpression",
                                    "computed": true,
                                    "object": {
                                      "type": "Identifier",
                                      "name": "coordinates"
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 1,
                                      "raw": "1"
                                    }
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "d3_degrees"
                                  }
                                },
                                {
                                  "type": "Identifier",
                                  "name": "coordinates"
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
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "name": "forward"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_identityRotation"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "λ"
          },
          {
            "type": "Identifier",
            "name": "φ"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": ">",
                      "left": {
                        "type": "Identifier",
                        "name": "λ"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "π"
                      }
                    },
                    "consequent": {
                      "type": "BinaryExpression",
                      "operator": "-",
                      "left": {
                        "type": "Identifier",
                        "name": "λ"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "τ"
                      }
                    },
                    "alternate": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "<",
                        "left": {
                          "type": "Identifier",
                          "name": "λ"
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "-",
                          "argument": {
                            "type": "Identifier",
                            "name": "π"
                          },
                          "prefix": true
                        }
                      },
                      "consequent": {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "Identifier",
                          "name": "λ"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "τ"
                        }
                      },
                      "alternate": {
                        "type": "Identifier",
                        "name": "λ"
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "name": "φ"
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_geo_identityRotation"
            },
            "property": {
              "type": "Identifier",
              "name": "invert"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_geo_equirectangular"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_geo_rotation"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "δλ"
          },
          {
            "type": "Identifier",
            "name": "δφ"
          },
          {
            "type": "Identifier",
            "name": "δγ"
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
                  "type": "Identifier",
                  "name": "δλ"
                },
                "consequent": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "δφ"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "δγ"
                    }
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_compose"
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geo_rotationλ"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "δλ"
                          }
                        ]
                      },
                      {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_geo_rotationφγ"
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "δφ"
                          },
                          {
                            "type": "Identifier",
                            "name": "δγ"
                          }
                        ]
                      }
                    ]
                  },
                  "alternate": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_rotationλ"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δλ"
                      }
                    ]
                  }
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "operator": "||",
                    "left": {
                      "type": "Identifier",
                      "name": "δφ"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "δγ"
                    }
                  },
                  "consequent": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_rotationφγ"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δφ"
                      },
                      {
                        "type": "Identifier",
                        "name": "δγ"
                      }
                    ]
                  },
                  "alternate": {
                    "type": "Identifier",
                    "name": "d3_geo_identityRotation"
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
          "name": "d3_geo_forwardRotationλ"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "δλ"
          }
        ],
        "defaults": [],
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "FunctionExpression",
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "name": "λ"
                  },
                  {
                    "type": "Identifier",
                    "name": "φ"
                  }
                ],
                "defaults": [],
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "SequenceExpression",
                        "expressions": [
                          {
                            "type": "AssignmentExpression",
                            "operator": "+=",
                            "left": {
                              "type": "Identifier",
                              "name": "λ"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "δλ"
                            }
                          },
                          {
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "ConditionalExpression",
                                "test": {
                                  "type": "BinaryExpression",
                                  "operator": ">",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "π"
                                  }
                                },
                                "consequent": {
                                  "type": "BinaryExpression",
                                  "operator": "-",
                                  "left": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "name": "τ"
                                  }
                                },
                                "alternate": {
                                  "type": "ConditionalExpression",
                                  "test": {
                                    "type": "BinaryExpression",
                                    "operator": "<",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "λ"
                                    },
                                    "right": {
                                      "type": "UnaryExpression",
                                      "operator": "-",
                                      "argument": {
                                        "type": "Identifier",
                                        "name": "π"
                                      },
                                      "prefix": true
                                    }
                                  },
                                  "consequent": {
                                    "type": "BinaryExpression",
                                    "operator": "+",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "λ"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "τ"
                                    }
                                  },
                                  "alternate": {
                                    "type": "Identifier",
                                    "name": "λ"
                                  }
                                }
                              },
                              {
                                "type": "Identifier",
                                "name": "φ"
                              }
                            ]
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
          "name": "d3_geo_rotationλ"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "δλ"
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
                    "name": "rotation"
                  },
                  "init": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_geo_forwardRotationλ"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δλ"
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
                    "type": "Identifier",
                    "name": "rotation"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "invert"
                  }
                },
                "right": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_geo_forwardRotationλ"
                  },
                  "arguments": [
                    {
                      "type": "UnaryExpression",
                      "operator": "-",
                      "argument": {
                        "type": "Identifier",
                        "name": "δλ"
                      },
                      "prefix": true
                    }
                  ]
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "rotation"
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
          "name": "d3_geo_rotationφγ"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "δφ"
          },
          {
            "type": "Identifier",
            "name": "δγ"
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
                    "name": "cosδφ"
                  },
                  "init": {
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
                        "name": "cos"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δφ"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sinδφ"
                  },
                  "init": {
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
                        "name": "sin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δφ"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "cosδγ"
                  },
                  "init": {
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
                        "name": "cos"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δγ"
                      }
                    ]
                  }
                },
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "name": "sinδγ"
                  },
                  "init": {
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
                        "name": "sin"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "δγ"
                      }
                    ]
                  }
                }
              ],
              "kind": "var"
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "name": "rotation"
              },
              "params": [
                {
                  "type": "Identifier",
                  "name": "λ"
                },
                {
                  "type": "Identifier",
                  "name": "φ"
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
                          "name": "cosφ"
                        },
                        "init": {
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
                              "name": "cos"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "φ"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "x"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
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
                                "name": "cos"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "cosφ"
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
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
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
                                "name": "sin"
                              }
                            },
                            "arguments": [
                              {
                                "type": "Identifier",
                                "name": "λ"
                              }
                            ]
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "cosφ"
                          }
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "z"
                        },
                        "init": {
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
                              "name": "sin"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Identifier",
                              "name": "φ"
                            }
                          ]
                        }
                      },
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "name": "k"
                        },
                        "init": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "z"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "cosδφ"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "sinδφ"
                            }
                          }
                        }
                      }
                    ],
                    "kind": "var"
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
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
                              "name": "atan2"
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
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosδγ"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "sinδγ"
                                }
                              }
                            },
                            {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "x"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosδφ"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "z"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "sinδφ"
                                }
                              }
                            }
                          ]
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "name": "d3_asin"
                          },
                          "arguments": [
                            {
                              "type": "BinaryExpression",
                              "operator": "+",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosδγ"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "sinδγ"
                                }
                              }
                            }
                          ]
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
              "type": "ExpressionStatement",
              "expression": {
                "type": "AssignmentExpression",
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "rotation"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "invert"
                  }
                },
                "right": {
                  "type": "FunctionExpression",
                  "id": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "name": "λ"
                    },
                    {
                      "type": "Identifier",
                      "name": "φ"
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
                              "name": "cosφ"
                            },
                            "init": {
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
                                  "name": "cos"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "φ"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "x"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
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
                                    "name": "cos"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "λ"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "cosφ"
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
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
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
                                    "name": "sin"
                                  }
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "λ"
                                  }
                                ]
                              },
                              "right": {
                                "type": "Identifier",
                                "name": "cosφ"
                              }
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "z"
                            },
                            "init": {
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
                                  "name": "sin"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "name": "φ"
                                }
                              ]
                            }
                          },
                          {
                            "type": "VariableDeclarator",
                            "id": {
                              "type": "Identifier",
                              "name": "k"
                            },
                            "init": {
                              "type": "BinaryExpression",
                              "operator": "-",
                              "left": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "z"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "cosδγ"
                                }
                              },
                              "right": {
                                "type": "BinaryExpression",
                                "operator": "*",
                                "left": {
                                  "type": "Identifier",
                                  "name": "y"
                                },
                                "right": {
                                  "type": "Identifier",
                                  "name": "sinδγ"
                                }
                              }
                            }
                          }
                        ],
                        "kind": "var"
                      },
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "ArrayExpression",
                          "elements": [
                            {
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
                                  "name": "atan2"
                                }
                              },
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "y"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "cosδγ"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "z"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "sinδγ"
                                    }
                                  }
                                },
                                {
                                  "type": "BinaryExpression",
                                  "operator": "+",
                                  "left": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "cosδφ"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "k"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "sinδφ"
                                    }
                                  }
                                }
                              ]
                            },
                            {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "d3_asin"
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
                                      "name": "k"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "cosδφ"
                                    }
                                  },
                                  "right": {
                                    "type": "BinaryExpression",
                                    "operator": "*",
                                    "left": {
                                      "type": "Identifier",
                                      "name": "x"
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "name": "sinδφ"
                                    }
                                  }
                                }
                              ]
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
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "Identifier",
                "name": "rotation"
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
  "src": "d3.geo.rotation = function (rotate) {\n    rotate = d3_geo_rotation(rotate[0] % 360 * d3_radians, rotate[1] * d3_radians, rotate.length > 2 ? rotate[2] * d3_radians : 0);\n    function forward(coordinates) {\n        coordinates = rotate(coordinates[0] * d3_radians, coordinates[1] * d3_radians);\n        return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;\n    }\n    forward.invert = function (coordinates) {\n        coordinates = rotate.invert(coordinates[0] * d3_radians, coordinates[1] * d3_radians);\n        return coordinates[0] *= d3_degrees, coordinates[1] *= d3_degrees, coordinates;\n    };\n    return forward;\n};\nfunction d3_geo_identityRotation(λ, φ) {\n    return [\n        λ > π ? λ - τ : λ < -π ? λ + τ : λ,\n        φ\n    ];\n}\nd3_geo_identityRotation.invert = d3_geo_equirectangular;\nfunction d3_geo_rotation(δλ, δφ, δγ) {\n    return δλ ? δφ || δγ ? d3_geo_compose(d3_geo_rotationλ(δλ), d3_geo_rotationφγ(δφ, δγ)) : d3_geo_rotationλ(δλ) : δφ || δγ ? d3_geo_rotationφγ(δφ, δγ) : d3_geo_identityRotation;\n}\nfunction d3_geo_forwardRotationλ(δλ) {\n    return function (λ, φ) {\n        return λ += δλ, [\n            λ > π ? λ - τ : λ < -π ? λ + τ : λ,\n            φ\n        ];\n    };\n}\nfunction d3_geo_rotationλ(δλ) {\n    var rotation = d3_geo_forwardRotationλ(δλ);\n    rotation.invert = d3_geo_forwardRotationλ(-δλ);\n    return rotation;\n}\nfunction d3_geo_rotationφγ(δφ, δγ) {\n    var cosδφ = Math.cos(δφ), sinδφ = Math.sin(δφ), cosδγ = Math.cos(δγ), sinδγ = Math.sin(δγ);\n    function rotation(λ, φ) {\n        var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδφ + x * sinδφ;\n        return [\n            Math.atan2(y * cosδγ - k * sinδγ, x * cosδφ - z * sinδφ),\n            d3_asin(k * cosδγ + y * sinδγ)\n        ];\n    }\n    rotation.invert = function (λ, φ) {\n        var cosφ = Math.cos(φ), x = Math.cos(λ) * cosφ, y = Math.sin(λ) * cosφ, z = Math.sin(φ), k = z * cosδγ - y * sinδγ;\n        return [\n            Math.atan2(y * cosδγ + z * sinδγ, x * cosδφ + k * sinδφ),\n            d3_asin(k * cosδφ - x * sinδφ)\n        ];\n    };\n    return rotation;\n}"
}