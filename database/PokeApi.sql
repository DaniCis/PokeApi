SET check_function_bodies = false;

DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS tipo;
DROP TABLE IF EXISTS tipo_pokemon;
DROP TABLE IF EXISTS habilidad;
DROP TABLE IF EXISTS habilidad_pokemon;
DROP TABLE IF EXISTS evolucion;

/* Table 'pokemon' */
CREATE TABLE pokemon(
  id_pokemon integer NOT NULL,
  nombre_pokemon varchar(25) NOT NULL,
  descripcion_pokemon varchar(100) NOT NULL,
  altura_pokemon double precision NOT NULL,
  peso_pokemon double precision NOT NULL,
  PRIMARY KEY(id_pokemon)
);

/* Table 'tipo' */
CREATE TABLE tipo
  (id_tipo integer NOT NULL, nombre_tipo varchar(25) NOT NULL, PRIMARY KEY(id_tipo))
  ;

/* Table 'tipo_pokemon' */
CREATE TABLE tipo_pokemon(
pokemon_id_pokemon integer NOT NULL, tipo_id_tipo integer NOT NULL,
  PRIMARY KEY(pokemon_id_pokemon, tipo_id_tipo)
);

/* Table 'habilidad' */
CREATE TABLE habilidad(
id_habilidad integer NOT NULL, nombre_habilidad varchar(25) NOT NULL,
  PRIMARY KEY(id_habilidad)
);

/* Table 'habilidad_pokemon' */
CREATE TABLE habilidad_pokemon(
pokemon_id_pokemon integer NOT NULL, habilidad_id_habilidad integer NOT NULL,
  PRIMARY KEY(pokemon_id_pokemon, habilidad_id_habilidad)
);

/* Table 'evolucion' */
CREATE TABLE evolucion(
pokemon_id_pokemon integer NOT NULL, pokemon_id_fin integer NOT NULL,
  PRIMARY KEY(pokemon_id_pokemon, pokemon_id_fin)
);

/* Relation 'pokemon_tipo_pokemon' */
ALTER TABLE tipo_pokemon
  ADD CONSTRAINT pokemon_tipo_pokemon
    FOREIGN KEY (pokemon_id_pokemon) REFERENCES pokemon (id_pokemon);

/* Relation 'tipo_tipo_pokemon' */
ALTER TABLE tipo_pokemon
  ADD CONSTRAINT tipo_tipo_pokemon
    FOREIGN KEY (tipo_id_tipo) REFERENCES tipo (id_tipo);

/* Relation 'pokemon_habilidad_pokemon' */
ALTER TABLE habilidad_pokemon
  ADD CONSTRAINT pokemon_habilidad_pokemon
    FOREIGN KEY (pokemon_id_pokemon) REFERENCES pokemon (id_pokemon);

/* Relation 'habilidad_habilidad_pokemon' */
ALTER TABLE habilidad_pokemon
  ADD CONSTRAINT habilidad_habilidad_pokemon
    FOREIGN KEY (habilidad_id_habilidad) REFERENCES habilidad (id_habilidad);

/* Relation 'pokemon_evolucion' */
ALTER TABLE evolucion
  ADD CONSTRAINT pokemon_evolucion
    FOREIGN KEY (pokemon_id_pokemon) REFERENCES pokemon (id_pokemon);

/* Relation 'pokemon_evolucion' */
ALTER TABLE evolucion
  ADD CONSTRAINT pokemon_evolucion2
    FOREIGN KEY (pokemon_id_fin) REFERENCES pokemon (id_pokemon);


