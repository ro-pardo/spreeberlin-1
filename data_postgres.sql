DROP TABLE IF EXISTS marker_projekte;
DROP TABLE IF EXISTS marker_geschichte;
DROP TABLE IF EXISTS aktuelles;
DROP TABLE IF EXISTS geschichte;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS bojen;

CREATE TABLE bojen(
    id SERIAL PRIMARY KEY,
    ts_key VARCHAR(255) NOT NULL
);
CREATE TABLE images(
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    article_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE marker_projekte(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    excerpt VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE marker_geschichte(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    excerpt VARCHAR(255) DEFAULT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE aktuelles(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subheading VARCHAR(255) DEFAULT NULL,
    pic_url_small VARCHAR(255) DEFAULT NULL,
    pic_url_large VARCHAR(255) DEFAULT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE geschichte(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    subheading VARCHAR(255) DEFAULT NULL,
    pic_url_small VARCHAR(255) DEFAULT NULL,
    pic_url_large VARCHAR(255) DEFAULT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

INSERT INTO bojen (id,ts_key) VALUES (1535067, 'JR0958HI80A0IHF5');
INSERT INTO bojen (id,ts_key) VALUES (1534209, 'D3S4TG7VS8FQTGVD');
INSERT INTO bojen (id, ts_key) VALUES (1539607, 'CNSX2LDPQDYNPESI');

INSERT INTO images (filename, type, article_id) VALUES ('RosaRoehreBerlin.jpg', 'geschichte', 3);
INSERT INTO images (filename, type, article_id) VALUES ('RosaRoehreBerlin02.jpg', 'geschichte', 3);
INSERT INTO images (filename, type, article_id) VALUES ('RosaRoehreBerlin03.jpg', 'geschichte', 3);

INSERT INTO marker_projekte (name, latitude, longitude,url,excerpt) VALUES ('Mediaspree', 52.5029,13.4428,'https://www.spreeberlin.de/news/eu-water','Mediaspree ist eines der größten Investorenprojekte in Berlin. Es strebt die Ansiedlung von Kommunikations- und Medienunternehmen entlang eines Teils des Spreeufers und eine diesem Bereich entsprechende Umstrukturierung an.');
INSERT INTO marker_projekte (name, latitude, longitude,url,excerpt) VALUES ('Spreepark Berlin', 52.4846,13.4913,'https://www.spreepark.berlin/','Verwilderte Überreste einer stillgelegten Familienattraktion mit geführten Touren & saisonalen Events.');

INSERT INTO marker_geschichte (name, latitude, longitude,url,excerpt) VALUES ('Luisenstädtischer Kanal', 52.48457466219416,13.4933247343920492,'https://de.wikipedia.org/wiki/Luisenst%C3%A4dtischer_Kanal','Der Luisenstädtische Kanal ist ein historischer innerstädtischer Kanal in der Berliner Luisenstadt, der die Spree mit dem Landwehrkanal verband.');

INSERT INTO geschichte (name, subheading, pic_url_small,pic_url_large ,text) VALUES ('Historisches Stadtbäder', 'Vergessene Nutzung der Spree','HistorischesFlussbad02.jpg','HistorischesFlussbad02-p-1080.jpeg','Während in vorindustrieller Zeit wohl dutzende Badestellen insbesondere am Mühlendamm genutzt wurden, verschlechterte die Industrialisierung die Wasserqualität in Berliner Gewässern so stark, dass die meisten von ihnen geschlossen wurden. Doch es gab Ausnahmen, etwa das Städtische Flussbad Lichtenberg unmittelbar am Rummelsburger See, das von 1927 bis 1950 in Betrieb war. Auch direkt vor dem Berliner Schloss befand sich eine Badeanstalt in der Spree, die schließlich 1924 geschlossen wurde. Das berühmteste Flussbad aber war sicherlich die “Pfuelsche Badeanstalt” auf der Höhe der heutigen East Side Gallery.Im Jahr 1817 begründete der Militär und Politiker Ernst Heinrich Adolf von Pfuel in der Köpenicker Straße 12 die erste offizielle Flussbadeanstalt, die ursprünglich dem Zweck militärischen Schwimmtrainings diente, bald aber auch zivil genutzt wurde. Sie besaß ein umschlossenes Wasserbecken und Angelkonstruktionen sollten den ungeübten und ausschließlich männlichen Schwimmern dabei helfen, über Wasser zu bleiben. Die Badeanstalt wurde unterschiedlichen Quellen zufolge noch bis 1925 oder 1933 betrieben, ehe auch sie geschlossen wurde. Der Verein “Flussbad Berlin e.V.” ist nun die erste Initiative, die sich seit 2012 wieder dafür einsetzt, die Spree am Spreekanal in Mitte zu einem öffentlichen Schwimmbereich umzugestalten (s. Flussbad).Relevanz: Sportliche und soziale Nutzung der Spree');

INSERT INTO geschichte (name, subheading, pic_url_small,pic_url_large ,text) VALUES ('Spreekanal & Inseln', 'Die Wiege Berlins','SpreekanalSpreeinseln.jpg','SpreekanalSpreeinseln.jpg','Mitten im Zentrum Berlins teilt sich die Spree in zwei Arme, die die Spreeinsel umfließen. Diese Stelle ist die Wiege der alten Städte Kölln und Berlin. Während Kölln auf der Spreeinsel errichtet wurde, entstand Berlin direkt gegenüber am Ostufer der Spree. Während der östliche Arm als Hauptarm der Spree gilt, wird der westliche Arm als Spreekanal bezeichnet. Er spaltet sich im Norden am Bodemuseum von der Spree ab, fließt als Kupfergraben und Schleusengraben an der Museumsinsel vorbei, um schließlich als Friedrichsgracht im Süden wieder in die Hauptspree zu münden. Es kann nicht eindeutig nachvollzogen werden, ob der Spreekanal ursprünglich ein natürlicher Seitenarm der Spree war oder ob hier die vorhandene Moorlandschaft vertieft und somit ein neuer künstlicher Flusslauf geschaffen wurde.Da der Hauptarm der Spree am südlichen Ende der Spreeinsel durch den Bau des Mühlendamms im 13. Jahrhundert für Schiffe und Flöße unpassierbar geworden war, wurde der “Cöllnische Stadtgraben”, wie er damals genannt wurde, schließlich aufgrund des gesteigerten Schiff- und Warenverkehrs weiter ausgebaut und befestigt. Hier entstand im 16. Jahrhundert der Vorläufer der späteren historischen Stadtschleuse. Damit war der Spreekanal für einige Jahrhunderte die zentrale Infrastruktur für Schiffverkehr und Warenhandel und Lebensader der Stadt Berlin. Heute gehört der rund zwei Kilometer lange Spreekanal zur Spree-Oder-Wasserstraße und ist für die Schifffahrt größtenteils gesperrt. Relevanz: Historische Nutzung und Kanalisierung der Spree');

INSERT INTO geschichte (name, subheading, pic_url_small,pic_url_large ,text) VALUES ('Die Rosa Röhre', 'Stauraumkanal für Abwässer unter dem Mauerpark','RosaRöhreBerlin.jpg','RosaRoehreBerlin.jpg','Fährt man mit der S-Bahn vom Tiergarten zum Zoologischen Garten, sticht auf der rechten Seite ein ungewöhnliches Bauwerk ins Auge. ');

INSERT INTO aktuelles (name, subheading, pic_url_small,pic_url_large ,text) VALUES ('EU Water Framework','EU Wasserqualitäts Richtlinien','/images/news/EU_s.png','/images/new/EU_l.png','In diesem Rahmen sind alle europäischen Länder aufgefordert, ihre Gewässer in einem „guten Zustand“ zu halten und zusätzlich einmal an den verschmutzten Gewässern zu arbeiten. So kann ein gemeinsame Standard auf dem ganzen Kontinent geschaffen werden. Das Programm läuft derzeit und soll bis 2033 gehen. Bis dahin ist der „gute Zustand“, per Definition: „Die Gewässer sind in gutem Zustand, wenn ihre Lebensgemeinschaften, ihre Struktur, die chemischen Bestandteile in den Oberflächengewässern oder die chemischen Bestandteile und ihre Menge im Grundwasser nur geringfügig vom Menschen beeinflusst werden“. (4) erreicht sein.');