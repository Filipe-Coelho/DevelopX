CREATE TABLE IF NOT EXISTS client (
  clientid INT NOT NULL AUTO_INCREMENT,
  clientname VARCHAR(255) NOT NULL,
 incldate DATETIME NULL,
  PRIMARY KEY (clientid));

CREATE TABLE IF NOT EXISTS accounthistory (
  accounthistoryid INT NOT NULL AUTO_INCREMENT,
  client_clientid INT NOT NULL,
  identifier INT NOT NULL Unique ,
  withdrawDate DATETIME NOT NULL,
  withdrawAmount INT NOT NULL,
  notes VARCHAR(255) NOT NULL,
  PRIMARY KEY (accounthistoryid, client_clientid),
  CONSTRAINT fk_accounthistory_client1
    FOREIGN KEY (client_clientid)
    REFERENCES client (clientid)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE IF NOT EXISTS notes (
  notesid INT NOT NULL AUTO_INCREMENT,
  notevalue DECIMAL(10) NOT NULL,
  PRIMARY KEY (notesid));
  
INSERT INTO notes (notesid, notevalue) VALUES (1, 10.00);
INSERT INTO notes (notesid, notevalue) VALUES (2, 20.00);
INSERT INTO notes (notesid, notevalue) VALUES (3, 50.00);
INSERT INTO notes (notesid, notevalue) VALUES (4, 100.00);

INSERT INTO Client(clientid, identifier, clientname, incldate) VALUES (1, 123, 'Filipe', CURRENT_TIMESTAMP );




