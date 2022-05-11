DROP TABLE IF EXISTS marker_projekte;
DROP TABLE IF EXISTS marker_geschichte;
DROP TABLE IF EXISTS aktuelles;
DROP TABLE IF EXISTS geschichte;

CREATE TABLE marker_projekte(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    excerpt VARCHAR(255) NOT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE marker_geschichte(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL,
    excerpt VARCHAR(255) DEFAULT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE aktuelles(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    subheading VARCHAR(255) DEFAULT NULL,
    pic_url VARCHAR(255) DEFAULT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

CREATE TABLE geschichte(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    subheading VARCHAR(255) DEFAULT NULL,
    pic_url VARCHAR(255) DEFAULT NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

INSERT INTO marker_projekte (name, latitude, longitude,url,excerpt) VALUES ('Mediaspree', 52.5029,13.4428,'https://de.wikipedia.org/wiki/Mediaspree','Mediaspree ist eines der größten Investorenprojekte in Berlin. Es strebt die Ansiedlung von Kommunikations- und Medienunternehmen entlang eines Teils des Spreeufers und eine diesem Bereich entsprechende Umstrukturierung an.');
INSERT INTO marker_projekte (name, latitude, longitude,url,excerpt) VALUES ('Spreepark Berlin', 52.4846,13.4913,'https://www.spreepark.berlin/','Verwilderte Überreste einer stillgelegten Familienattraktion mit geführten Touren & saisonalen Events.');

INSERT INTO marker_geschichte (name, latitude, longitude,url,excerpt) VALUES ('Luisenstädtischer Kanal', 52.50595612691541,13.418082631381372,'https://de.wikipedia.org/wiki/Luisenst%C3%A4dtischer_Kanal','Der Luisenstädtische Kanal ist ein historischer innerstädtischer Kanal in der Berliner Luisenstadt, der die Spree mit dem Landwehrkanal verband.');


INSERT INTO geschichte(name, subheading, pic_url,text) VALUES ('Flussbad 1922','Über das aussterben der Flusskrebse und den Siegeszug des Louisiana Flusskrebses','/Flusskrebse.png','Die europäischen Flusskrebse waren bis ins 19.Jh hinein sehr zahlreich in den europäischen Gewässern vertreten. Im Mittelalter kam ihnen eine besondere Bedeutung als Fastenspeiße zu, da es mit den damaligen Mitteln kein Problem<br>war, sie auch über weite Distanzen lebend zu transportieren. Mancherorts wurden sogar Kirchen mit den Abbildungen oder Schnitzereien von den lokal wirtschaftlich wichtigen Krebsen geschmückt. Die Flusskrebse der Spree wurden eine Zeit lang bis nach Frankreich exportiert und dort als eine Delikat- esse gehandhabt. Doch wie konnte es eigentlich dazu kommen, dass die Tiere, die so häufig waren, dass man sie scharenweise in allen nur erdenklichen Ge- wässern, egal ob Fluss, Bach oder See, finden konnte, plötzlich anfingen, populationsweise auszusterben.');

INSERT INTO aktuelles(name, subheading, pic_url,text) VALUES ('EU Water Framework','Die Europäische Union hat die Wasserrahmenrichtlinie 2000 geschaffen', '/EU.png','In diesem Rahmen sind alle europäischen Länder aufgefordert, ihre Gewässer in einem „guten Zustand“ zu halten und zusätzlich einmal an den verschmutzten Gewässern zu arbeiten. So kann ein gemeinsame Standard auf dem ganzen Kontinent geschaffen werden. Das Programm läuft derzeit und soll bis 2033 gehen. Bis dahin ist der „gute Zustand“, per Definition: „Die Gewässer sind in gutem Zustand, wenn ihre Lebensgemeinschaften, ihre Struktur, die chemischen Bestandteile in den Oberflächengewässern oder die chemischen Bestandteile und ihre Menge im Grundwasser nur geringfügig vom Menschen beeinflusst werden“. (4) erreicht sein.');


