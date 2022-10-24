const options = {   
    definition:{
        openapi: "3.0.0",
        info:{
            title:"Poke Api Docs",
            version:"1.0.0",
            contact: {
                name: 'Daniela Cisneros',
                email: 'danicisneros2@hotmail.com',
                url: 'https://github.com/DaniCis',
            }
        },
        servers:[
            {
                url:"http://localhost:4000",
                description: 'Local Server',
            }
        ],
        tags:[
            {
                name:"Pokemon",
            },
            {
                name:"Ability",
            },
            {
                name:"Type",
            }
        ],
        components:{
            schemas:{
                id: {
                    type: "integer", 
                    description: "An id of a pokemon",
                    example: "1", 
                },
                nombre:{
                    type: "string", 
                    description: "Name of a pokemon",
                    example: "bulbasaur", 
                },
                Pokemon:{
                    type:'object',
                    properties:{
                        id_pokemon:{
                            type:'integer',
                            description:'ID of pokemon',
                            example:'1',
                        },
                        nombre_pokemon:{
                            type: 'string',
                            description:"Name of Pokemon",
                            example:'Bulbasaur'
                        },
                        descripcion_pokemon:{
                            type: 'string',
                            description:"Description of Pokemon",
                            example:'There is a plant seed on its back right from the day this Pokémon is born.'
                        },
                        altura_pokemon:{
                            type: 'double',
                            description:"Height of Pokemon",
                            example:'0.7'
                        },
                        peso_pokemon:{
                            type: 'double',
                            description:"Weight of Pokemon",
                            example:'6.9'
                        },
                        evolucion_pokemon:{
                            type: 'boolean',
                            description:"Name of Pokemon",
                            example:'true'
                        },
                        imagen_pokemon:{
                            type: 'string',
                            description:"Image Url of Pokemon",
                            example:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png'
                        },
                    },
                },
                Ability:{
                    type:'object',
                    properties:{
                        id_habilidad:{
                            type:'integer',
                            description: 'Id of ability',
                            example:'1'
                        },
                        nombre_habilidad:{
                            type:'string',
                            description:'Name of ability',
                            example:'Overgrow'
                        }
                    },
                },
                Type:{
                    type:'object',
                    properties:{
                        id_tipo:{
                            type:'integer',
                            description: 'Id of type',
                            example:'1'
                        },
                        nombre_tipo:{
                            type:'string',
                            description:'Name of type',
                            example:'Grass'
                        }
                    },
                },
                Error:{
                    type: 'object', 
                    properties: {
                        message: {
                            type: "string", 
                            description: "Error message", 
                            example: "Not found",
                        },
                        internal_code: {
                            type: "string",
                            description: "Error internal code",
                            example: "Invalid parameters",
                        },
                    },
                }
            }
        },
        paths:{
            "/api/v1/pokemon": {
                "get": {
                  "tags": ["Pokemon"],
                  "description": "Returns all pokemons from the database",
                  "operationId": 'getPokemon',
                  "parameters":[],
                  "responses": {
                    "200": {          
                      "description": "A list of all pokemons.",
                      "content": {
                        "application/json": {
                          "schema": {
                            "type": "array",
                            "items": {
                              "$ref": "#/components/schemas/Pokemon"
                            }
                          }
                        }
                      }
                    }
                  }
                }
            },
            "/api/v1/pokemon/principal":{
                "get": {
                    "tags": ["Pokemon"],
                    "operationId": 'getTenPokemon',
                    "description": "Returns 10 random pokemons from the database",
                    "parameters":[],
                    "responses": {
                      "200": {          
                        "description": "A list of ten pokemons.",
                        "content": {
                          "application/json": {
                            "schema": {
                              "type": "array",
                              "items": {
                                "$ref": "#/components/schemas/Pokemon"
                              }
                            }
                          }
                        }
                      }
                    }
                }
            },
            "/api/v1/pokemon/{id}":{
                "get": {
                    "tags": ["Pokemon"],
                    "description": "Returns info of a single pokemon",
                    "operationId":"getOnePokemon",
                    "parameters":[
                        {
                            name: "id",
                            in: "path",
                            schema: {
                              $ref: "#/components/schemas/id",
                            },
                            required: true,
                            description: "A single pokemon id",
                          },
                    ],
                    "responses": {
                      "200": {          
                        "description": "Information of one pokemon.",
                        "content": {
                          "application/json": {
                            "schema": {
                              "type": "array",
                              "items": {
                                "$ref": "#/components/schemas/Pokemon"
                              }
                            }
                          }
                        }
                      },
                      "404": {
                        "description": "Pokemon not found",
                        "content": {
                          "application/json": {
                            "schema": {
                              "$ref": "#/components/schemas/Error",
                            },
                          },
                        },
                      },
                    }
                }
            },
            "/api/v1/pokemon/search/{nom}":{
                "get": {
                    "tags": ["Pokemon"],
                    "description": "Search a pokemon by its name",
                    "parameters":[
                        {
                            name: "nom",
                            in: "path",
                            schema: {
                              $ref: "#/components/schemas/nombre",
                            },
                            required: true,
                            description: "Pokemon's name",
                          },
                    ],
                    "responses": {
                      "200": {          
                        "description": "Pokemon found by its name",
                        "content": {
                          "application/json": {
                            "schema": {
                              "type": "array",
                              "items": {
                                "$ref": "#/components/schemas/Pokemon"
                              }
                            }
                          }
                        }
                      },
                      "404": {
                        "description": "Pokemon not found",
                        "content": {
                          "application/json": {
                            "schema": {
                              "$ref": "#/components/schemas/Error",
                            },
                          },
                        },
                      },
                    }
                }
            },
            "/api/v1/ability/{id}":{
                "get": {
                    "tags": ["Ability"],
                    "description": "Returns abilities of a pokemon",
                    "parameters":[
                        {
                            name: "id",
                            in: "path",
                            schema: {
                              $ref: "#/components/schemas/id",
                            },
                            required: true,
                            description: "A single pokemon id",
                          },
                    ],
                    "responses": {
                      "200": {          
                        "description": "List of abilities of a single pokemon",
                        "content": {
                          "application/json": {
                            "schema": {
                              "type": "array",
                              "items": {
                                "$ref": "#/components/schemas/Pokemon"
                              }
                            }
                          }
                        }
                      },
                      "404": {
                        "description": "Pokemon not found",
                        "content": {
                          "application/json": {
                            "schema": {
                              "$ref": "#/components/schemas/Error",
                            },
                          },
                        },
                      },
                    }
                }
            },
            "/api/v1/type/{id}":{
                "get": {
                    "tags": ["Type"],
                    "description": "Returns types of a single pokemon",
                    "parameters":[
                        {
                            name: "id",
                            in: "path",
                            schema: {
                              $ref: "#/components/schemas/id",
                            },
                            required: true,
                            description: "A single pokemon id",
                          },
                    ],
                    "responses": {
                      "200": {          
                        "description": "List of types of a single pokemon.",
                        "content": {
                          "application/json": {
                            "schema": {
                              "type": "array",
                              "items": {
                                "$ref": "#/components/schemas/Pokemon"
                              }
                            }
                          }
                        }
                      },
                      "404": {
                        "description": "Pokemon not found",
                        "content": {
                          "application/json": {
                            "schema": {
                              "$ref": "#/components/schemas/Error",
                            },
                          },
                        },
                      },
                    }
                }
            },
        },
    },
    apis:["./routes/pokemon-routes.js"]
}

module.exports = options