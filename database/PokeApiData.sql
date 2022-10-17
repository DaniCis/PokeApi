/* tipos*/
INSERT INTO tipo VALUES(1,'Agua');
INSERT INTO tipo VALUES(2,'Planta');
INSERT INTO tipo VALUES(3,'Fuego');
INSERT INTO tipo VALUES(4,'Veneno');
INSERT INTO tipo VALUES(5,'Bicho');
INSERT INTO tipo VALUES(6,'Volador');
INSERT INTO tipo VALUES(7,'Tierra');
INSERT INTO tipo VALUES(8,'Eléctrico');
INSERT INTO tipo VALUES(9,'Hada');
INSERT INTO tipo VALUES(10,'Normal');

/*habilidad*/
INSERT INTO habilidad VALUES(1,'Espesura');
INSERT INTO habilidad VALUES(2,'Mar Llamas');
INSERT INTO habilidad VALUES(3,'Torrente');
INSERT INTO habilidad VALUES(4,'Polvo Escudo');
INSERT INTO habilidad VALUES(5,'Mudar');
INSERT INTO habilidad VALUES(6,'Ojo Compuesto');
INSERT INTO habilidad VALUES(7,'Enjambre');
INSERT INTO habilidad VALUES(8,'Vista Lince');
INSERT INTO habilidad VALUES(9,'Tumbos');
INSERT INTO habilidad VALUES(10,'Fuga');
INSERT INTO habilidad VALUES(11,'Electricidad estática');

/*pokemon*/

INSERT INTO pokemon VALUES (1,'Bulbasaur', 'Nace con una semilla en el lomo que brota con el paso del tiempo', 0.7,6.9);
INSERT INTO pokemon VALUES (2, 'Ivysaur', 'Cuando le crece bastante el bulbo del lomo pierde la capacidad de erguirse sobre las patas traseras', 1,13);
INSERT INTO pokemon VALUES (3, 'Venusaur', 'La planta florece cuando absorbe energía solar lo cual le obliga a buscar siempre la luz del sol', 2,100);
INSERT INTO pokemon VALUES (4, 'Chamander','Prefiere las cosas calientes. Cuando llueve le sale vapor de la punta de la cola',0.6,8.5);
INSERT INTO pokemon VALUES (5, 'Charmeleon','Ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.' ,1.1, 19);
INSERT INTO pokemon VALUES (6,'Charizard', 'Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer' ,1.7,90.5);
INSERT INTO pokemon VALUES (7, 'Squirtle', 'Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble', 0.5, 9);
INSERT INTO pokemon VALUES (8,'Wartortle','Los ejemplares más ancianos tienen musgo sobre el caparazón', 1, 22.5);
INSERT INTO pokemon VALUES (9,'Blastoise','Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. Suele esconderse en el caparazón', 1.6,85.5);
INSERT INTO pokemon VALUES (10,'Caterpie','Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos',0.3,2.9);
INSERT INTO pokemon VALUES (11, 'Metapod','Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evoluciona',0.7,9.9);
INSERT INTO pokemon VALUES (12,'Butterfree','Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas',1.1,32);
INSERT INTO pokemon VALUES(13,'Weedle','El aguijón de la cabeza es muy puntiagudo. Se alimenta de hojas oculto en la espesura de bosques',0.3,3.2);
INSERT INTO pokemon VALUES(14,'Kakuna', 'Aunque es casi incapaz de moverse, puede envenenar a los enemigos con su aguijón',0.6,10);
INSERT INTO pokemon VALUES(15,'Beedrill','Tiene tres aguijones venenosos con los que ataca a sus enemigos una y otra vez',1,29.5);
INSERT INTO pokemon VALUES(16,'Pidgey','Su docilidad es tal que suelen defenderse levantando arena en lugar de contraatacar',0.3,1.8);
INSERT INTO pokemon VALUES(17,'Pidgeotto','Su vitalidad y resistencia le permiten cubrir grandes distancias del territorio en busca de presas',1.1,30);
INSERT INTO pokemon VALUES(18,'Pidgeot','Vuela a una velocidad de 2 mach en busca de presas. Sus grandes garras son muy peligrosas.',1.5,39.5);
INSERT INTO pokemon VALUES(19,'Rattata','Es propenso a hincar los incisivos en cualquier cosa que se le ponga por delante', 0.3,3.5);
INSERT INTO pokemon VALUES(20,'Raticate','Gracias a las membranas de las patas traseras, puede nadar por los ríos para capturar presas',0.7,18.5);
INSERT INTO pokemon VALUES(25,'Pikachu','Entre más potente la energía eléctrica que genera más suaves y elásticas se vuelven sus mejillas',0.4,6);


/*tipo de pokemon*/
INSERT INTO tipo_pokemon VALUES(1,2);
INSERT INTO tipo_pokemon VALUES(1,4);
INSERT INTO tipo_pokemon VALUES(2,2);
INSERT INTO tipo_pokemon VALUES(2,4);
INSERT INTO tipo_pokemon VALUES(3,2);
INSERT INTO tipo_pokemon VALUES(3,4);
INSERT INTO tipo_pokemon VALUES(4,3);
INSERT INTO tipo_pokemon VALUES(5,3);
INSERT INTO tipo_pokemon VALUES(6,3);
INSERT INTO tipo_pokemon VALUES(6,6);
INSERT INTO tipo_pokemon VALUES(7,1);
INSERT INTO tipo_pokemon VALUES(8,1);
INSERT INTO tipo_pokemon VALUES(9,1);
INSERT INTO tipo_pokemon VALUES(10,5);
INSERT INTO tipo_pokemon VALUES(11,5);
INSERT INTO tipo_pokemon VALUES(12,5);
INSERT INTO tipo_pokemon VALUES(12,6);
INSERT INTO tipo_pokemon VALUES(13,4);
INSERT INTO tipo_pokemon VALUES(13,5);
INSERT INTO tipo_pokemon VALUES(14,4);
INSERT INTO tipo_pokemon VALUES(14,5);
INSERT INTO tipo_pokemon VALUES(15,4);
INSERT INTO tipo_pokemon VALUES(15,5);
INSERT INTO tipo_pokemon VALUES(16,6);
INSERT INTO tipo_pokemon VALUES(16,10);
INSERT INTO tipo_pokemon VALUES(17,6);
INSERT INTO tipo_pokemon VALUES(17,10);
INSERT INTO tipo_pokemon VALUES(18,6);
INSERT INTO tipo_pokemon VALUES(18,10);
INSERT INTO tipo_pokemon VALUES(19,10);
INSERT INTO tipo_pokemon VALUES(20,10);
INSERT INTO tipo_pokemon VALUES(25,8);

/*habilidad de pokemon*/
INSERT INTO habilidad_pokemon VALUES(1,1);
INSERT INTO habilidad_pokemon VALUES(2,1);
INSERT INTO habilidad_pokemon VALUES(3,1);
INSERT INTO habilidad_pokemon VALUES(4,2);
INSERT INTO habilidad_pokemon VALUES(5,2);
INSERT INTO habilidad_pokemon VALUES(6,2);
INSERT INTO habilidad_pokemon VALUES(7,3);
INSERT INTO habilidad_pokemon VALUES(8,3);
INSERT INTO habilidad_pokemon VALUES(9,3);
INSERT INTO habilidad_pokemon VALUES(10,4);
INSERT INTO habilidad_pokemon VALUES(11,5);
INSERT INTO habilidad_pokemon VALUES(12,6);
INSERT INTO habilidad_pokemon VALUES(13,4);
INSERT INTO habilidad_pokemon VALUES(14,5);
INSERT INTO habilidad_pokemon VALUES(15,7);
INSERT INTO habilidad_pokemon VALUES(16,8);
INSERT INTO habilidad_pokemon VALUES(16,9);
INSERT INTO habilidad_pokemon VALUES(17,8);
INSERT INTO habilidad_pokemon VALUES(17,9);
INSERT INTO habilidad_pokemon VALUES(18,8);
INSERT INTO habilidad_pokemon VALUES(18,9);
INSERT INTO habilidad_pokemon VALUES(19,10);
INSERT INTO habilidad_pokemon VALUES(20,10);
INSERT INTO habilidad_pokemon VALUES(25,11);

/*evoluciones*/
INSERT INTO evolucion VALUES(1,2);
INSERT INTO evolucion VALUES(2,3);
INSERT INTO evolucion VALUES(4,5);
INSERT INTO evolucion VALUES(5,6);
INSERT INTO evolucion VALUES(7,8);
INSERT INTO evolucion VALUES(8,9);
INSERT INTO evolucion VALUES(10,11);
INSERT INTO evolucion VALUES(11,12);
INSERT INTO evolucion VALUES(13,14);
INSERT INTO evolucion VALUES(14,15);
INSERT INTO evolucion VALUES(16,17);
INSERT INTO evolucion VALUES(17,18);
INSERT INTO evolucion VALUES(19,20);