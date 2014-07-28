{
  "filepath": "/color/lab.js",
  "shared": [
    {
      "path": "/color/_lab.js",
      "properties": [
        "d3_lab_K",
        "d3_lab_X",
        "d3_lab_Y",
        "d3_lab_Z"
      ],
      "name": "LAB"
    }
  ],
  "dependencies": [
    "d3_hcl",
    "d3_hcl_lab",
    "d3_rgb_lab",
    "d3_rgb",
    "d3_lab_K",
    "d3_lab_X",
    "d3_lab_Y",
    "d3_lab_Z",
    "d3_color",
    "d3_xyz_rgb",
    "d3_degrees"
  ],
  "helpers": [
    "d3_lab",
    "d3_labPrototype",
    "d3_lab_rgb",
    "d3_lab_hcl",
    "d3_lab_xyz"
  ],
  "exports": [
    "d3.lab"
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
              "type": "Identifier",
              "name": "d3"
            },
            "property": {
              "type": "Identifier",
              "name": "lab"
            }
          },
          "right": {
            "type": "Identifier",
            "name": "d3_lab"
          }
        }
      },
      {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_lab"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "l"
          },
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
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
                  "type": "BinaryExpression",
                  "operator": "instanceof",
                  "left": {
                    "type": "ThisExpression"
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_lab"
                  }
                },
                "consequent": {
                  "type": "UnaryExpression",
                  "operator": "void",
                  "argument": {
                    "type": "SequenceExpression",
                    "expressions": [
                      {
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
                            "name": "l"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "prefix": true
                        }
                      },
                      {
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
                            "name": "a"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "Identifier",
                            "name": "a"
                          },
                          "prefix": true
                        }
                      },
                      {
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
                            "name": "b"
                          }
                        },
                        "right": {
                          "type": "UnaryExpression",
                          "operator": "+",
                          "argument": {
                            "type": "Identifier",
                            "name": "b"
                          },
                          "prefix": true
                        }
                      }
                    ]
                  },
                  "prefix": true
                },
                "alternate": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "BinaryExpression",
                    "operator": "<",
                    "left": {
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
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "consequent": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "BinaryExpression",
                      "operator": "instanceof",
                      "left": {
                        "type": "Identifier",
                        "name": "l"
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_lab"
                      }
                    },
                    "consequent": {
                      "type": "NewExpression",
                      "callee": {
                        "type": "Identifier",
                        "name": "d3_lab"
                      },
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "l"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "a"
                          }
                        },
                        {
                          "type": "MemberExpression",
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "name": "l"
                          },
                          "property": {
                            "type": "Identifier",
                            "name": "b"
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "ConditionalExpression",
                      "test": {
                        "type": "BinaryExpression",
                        "operator": "instanceof",
                        "left": {
                          "type": "Identifier",
                          "name": "l"
                        },
                        "right": {
                          "type": "Identifier",
                          "name": "d3_hcl"
                        }
                      },
                      "consequent": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_hcl_lab"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "l"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "c"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "h"
                            }
                          }
                        ]
                      },
                      "alternate": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "d3_rgb_lab"
                        },
                        "arguments": [
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "AssignmentExpression",
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "name": "l"
                              },
                              "right": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "name": "d3_rgb"
                                },
                                "arguments": [
                                  {
                                    "type": "Identifier",
                                    "name": "l"
                                  }
                                ]
                              }
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "r"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "g"
                            }
                          },
                          {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "name": "l"
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "b"
                            }
                          }
                        ]
                      }
                    }
                  },
                  "alternate": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "l"
                      },
                      {
                        "type": "Identifier",
                        "name": "a"
                      },
                      {
                        "type": "Identifier",
                        "name": "b"
                      }
                    ]
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LAB"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_lab_K"
            }
          },
          "operator": "=",
          "right": {
            "type": "Literal",
            "value": 18,
            "raw": "18"
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LAB"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_lab_X"
            }
          },
          "operator": "=",
          "right": {
            "type": "Literal",
            "value": 0.95047,
            "raw": "0.950470"
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LAB"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_lab_Y"
            }
          },
          "operator": "=",
          "right": {
            "type": "Literal",
            "value": 1,
            "raw": "1"
          }
        }
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "LAB"
            },
            "property": {
              "type": "Identifier",
              "name": "d3_lab_Z"
            }
          },
          "operator": "=",
          "right": {
            "type": "Literal",
            "value": 1.08883,
            "raw": "1.088830"
          }
        }
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "d3_labPrototype"
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_color"
              },
              "arguments": []
            }
          }
        ]
      },
      {
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "MemberExpression",
              "computed": false,
              "object": {
                "type": "Identifier",
                "name": "d3_lab"
              },
              "property": {
                "type": "Identifier",
                "name": "prototype"
              }
            },
            "init": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "name": "d3_color"
              },
              "arguments": []
            }
          }
        ]
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
              "name": "d3_labPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "brighter"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab"
                    },
                    "arguments": [
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
                            "name": "min"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 100,
                            "raw": "100"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "+",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "d3_lab_K"
                              },
                              "right": {
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
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "b"
                        }
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_labPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "darker"
            }
          },
          "right": {
            "type": "FunctionExpression",
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "name": "k"
              }
            ],
            "defaults": [],
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab"
                    },
                    "arguments": [
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
                            "name": "max"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                          },
                          {
                            "type": "BinaryExpression",
                            "operator": "-",
                            "left": {
                              "type": "MemberExpression",
                              "computed": false,
                              "object": {
                                "type": "ThisExpression"
                              },
                              "property": {
                                "type": "Identifier",
                                "name": "l"
                              }
                            },
                            "right": {
                              "type": "BinaryExpression",
                              "operator": "*",
                              "left": {
                                "type": "Identifier",
                                "name": "d3_lab_K"
                              },
                              "right": {
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
                                  "type": "Identifier",
                                  "name": "k"
                                },
                                "alternate": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1"
                                }
                              }
                            }
                          }
                        ]
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "b"
                        }
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
        "type": "ExpressionStatement",
        "expression": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "d3_labPrototype"
            },
            "property": {
              "type": "Identifier",
              "name": "rgb"
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
                      "name": "d3_lab_rgb"
                    },
                    "arguments": [
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "l"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "a"
                        }
                      },
                      {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "ThisExpression"
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "b"
                        }
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_lab_rgb"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "l"
          },
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
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
                    "name": "y"
                  },
                  "init": {
                    "type": "BinaryExpression",
                    "operator": "/",
                    "left": {
                      "type": "BinaryExpression",
                      "operator": "+",
                      "left": {
                        "type": "Identifier",
                        "name": "l"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 16,
                        "raw": "16"
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "value": 116,
                      "raw": "116"
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
                    "type": "BinaryExpression",
                    "operator": "+",
                    "left": {
                      "type": "Identifier",
                      "name": "y"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Identifier",
                        "name": "a"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 500,
                        "raw": "500"
                      }
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
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "y"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Identifier",
                        "name": "b"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 200,
                        "raw": "200"
                      }
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
                  "type": "Identifier",
                  "name": "x"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab_xyz"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "x"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_lab_X"
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
                  "name": "y"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab_xyz"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "y"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_lab_Y"
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
                  "name": "z"
                },
                "right": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_lab_xyz"
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "name": "z"
                      }
                    ]
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "d3_lab_Z"
                  }
                }
              }
            },
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "d3_rgb"
                },
                "arguments": [
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xyz_rgb"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "-",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 3.2404542,
                              "raw": "3.2404542"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 1.5371385,
                              "raw": "1.5371385"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 0.4985314,
                            "raw": "0.4985314"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "z"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xyz_rgb"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "+",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "UnaryExpression",
                              "operator": "-",
                              "argument": {
                                "type": "Literal",
                                "value": 0.969266,
                                "raw": "0.9692660"
                              },
                              "prefix": true
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 1.8760108,
                              "raw": "1.8760108"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 0.041556,
                            "raw": "0.0415560"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "z"
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "d3_xyz_rgb"
                    },
                    "arguments": [
                      {
                        "type": "BinaryExpression",
                        "operator": "+",
                        "left": {
                          "type": "BinaryExpression",
                          "operator": "-",
                          "left": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 0.0556434,
                              "raw": "0.0556434"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "x"
                            }
                          },
                          "right": {
                            "type": "BinaryExpression",
                            "operator": "*",
                            "left": {
                              "type": "Literal",
                              "value": 0.2040259,
                              "raw": "0.2040259"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "y"
                            }
                          }
                        },
                        "right": {
                          "type": "BinaryExpression",
                          "operator": "*",
                          "left": {
                            "type": "Literal",
                            "value": 1.0572252,
                            "raw": "1.0572252"
                          },
                          "right": {
                            "type": "Identifier",
                            "name": "z"
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
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "name": "d3_lab_hcl"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "l"
          },
          {
            "type": "Identifier",
            "name": "a"
          },
          {
            "type": "Identifier",
            "name": "b"
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
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "l"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                },
                "consequent": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_hcl"
                  },
                  "arguments": [
                    {
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
                            "name": "atan2"
                          }
                        },
                        "arguments": [
                          {
                            "type": "Identifier",
                            "name": "b"
                          },
                          {
                            "type": "Identifier",
                            "name": "a"
                          }
                        ]
                      },
                      "right": {
                        "type": "Identifier",
                        "name": "d3_degrees"
                      }
                    },
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
                          "name": "sqrt"
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
                              "name": "a"
                            },
                            "right": {
                              "type": "Identifier",
                              "name": "a"
                            }
                          },
                          "right": {
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
                          }
                        }
                      ]
                    },
                    {
                      "type": "Identifier",
                      "name": "l"
                    }
                  ]
                },
                "alternate": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "Identifier",
                    "name": "d3_hcl"
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "name": "NaN"
                    },
                    {
                      "type": "Identifier",
                      "name": "NaN"
                    },
                    {
                      "type": "Identifier",
                      "name": "l"
                    }
                  ]
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
          "name": "d3_lab_xyz"
        },
        "params": [
          {
            "type": "Identifier",
            "name": "x"
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
                  "type": "BinaryExpression",
                  "operator": ">",
                  "left": {
                    "type": "Identifier",
                    "name": "x"
                  },
                  "right": {
                    "type": "Literal",
                    "value": 0.206893034,
                    "raw": "0.206893034"
                  }
                },
                "consequent": {
                  "type": "BinaryExpression",
                  "operator": "*",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "*",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
                    },
                    "right": {
                      "type": "Identifier",
                      "name": "x"
                    }
                  },
                  "right": {
                    "type": "Identifier",
                    "name": "x"
                  }
                },
                "alternate": {
                  "type": "BinaryExpression",
                  "operator": "/",
                  "left": {
                    "type": "BinaryExpression",
                    "operator": "-",
                    "left": {
                      "type": "Identifier",
                      "name": "x"
                    },
                    "right": {
                      "type": "BinaryExpression",
                      "operator": "/",
                      "left": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4"
                      },
                      "right": {
                        "type": "Literal",
                        "value": 29,
                        "raw": "29"
                      }
                    }
                  },
                  "right": {
                    "type": "Literal",
                    "value": 7.787037,
                    "raw": "7.787037"
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
    ]
  },
  "src": "d3.lab = d3_lab;\nfunction d3_lab(l, a, b) {\n    return this instanceof d3_lab ? void (this.l = +l, this.a = +a, this.b = +b) : arguments.length < 2 ? l instanceof d3_lab ? new d3_lab(l.l, l.a, l.b) : l instanceof d3_hcl ? d3_hcl_lab(l.l, l.c, l.h) : d3_rgb_lab((l = d3_rgb(l)).r, l.g, l.b) : new d3_lab(l, a, b);\n}\nLAB.d3_lab_K = 18;\nLAB.d3_lab_X = 0.95047;\nLAB.d3_lab_Y = 1;\nLAB.d3_lab_Z = 1.08883;\nvar d3_labPrototype = new d3_color();\nvar d3_lab.prototype = new d3_color();\nd3_labPrototype.brighter = function (k) {\n    return new d3_lab(Math.min(100, this.l + d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);\n};\nd3_labPrototype.darker = function (k) {\n    return new d3_lab(Math.max(0, this.l - d3_lab_K * (arguments.length ? k : 1)), this.a, this.b);\n};\nd3_labPrototype.rgb = function () {\n    return d3_lab_rgb(this.l, this.a, this.b);\n};\nfunction d3_lab_rgb(l, a, b) {\n    var y = (l + 16) / 116, x = y + a / 500, z = y - b / 200;\n    x = d3_lab_xyz(x) * d3_lab_X;\n    y = d3_lab_xyz(y) * d3_lab_Y;\n    z = d3_lab_xyz(z) * d3_lab_Z;\n    return new d3_rgb(d3_xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), d3_xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z), d3_xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z));\n}\nfunction d3_lab_hcl(l, a, b) {\n    return l > 0 ? new d3_hcl(Math.atan2(b, a) * d3_degrees, Math.sqrt(a * a + b * b), l) : new d3_hcl(NaN, NaN, l);\n}\nfunction d3_lab_xyz(x) {\n    return x > 0.206893034 ? x * x * x : (x - 4 / 29) / 7.787037;\n}"
}