drop database if exists webUsers;
drop user if exists 'webuser'@'localhost';

create database webUsers;
use webUsers;
create user 'webuser'@'localhost' identified by 'webpass';
grant all privileges on webUsers.* to 'webuser'@'localhost';

create table users(
   userID int AUTO_INCREMENT,
   username varchar(30) not null, index(username),
   lastname varchar(50),
   firstname varchar(30),
   passwd varchar(30),
   email varchar(255),
   urole varchar(30),
   lastModified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
   primary key(userID)
)engine=innodb;

INSERT INTO users (username, lastname, firstname, passwd, email, urole) VALUES
('jdoe', 'Doe', 'John', 'Password123!', 'jdoe@example.com', 'Admin'),
('jsmith', 'Smith', 'Jane', 'SecurePass2026', 'jsmith@example.com', 'User'),
('mgarcia', 'Garcia', 'Maria', 'MariaPass88', 'mgarcia@example.com', 'User'),
('dchen', 'Chen', 'David', 'David#Pass99', 'dchen@example.com', 'Manager'),
('awilson', 'Wilson', 'Alex', 'AlexW_Secret', 'awilson@example.com', 'User'),
('ebrown', 'Brown', 'Emily', 'EmilyB!2026', 'ebrown@example.com', 'User'),
('rjohnson', 'Johnson', 'Robert', 'RobJ_Admin1', 'rjohnson@example.com', 'Admin'),
('smartinez', 'Martinez', 'Sofia', 'SofiM_Pass1', 'smartinez@example.com', 'User'),
('jlee', 'Lee', 'James', 'JamesLee#123', 'jlee@example.com', 'User'),
('kpatel', 'Patel', 'Kavita', 'KavitaP$456', 'kpatel@example.com', 'Manager'),
('twilliams', 'Williams', 'Thomas', 'TomW_Pass78', 'twilliams@example.com', 'User'),
('hkim', 'Kim', 'Hannah', 'HannahK!990', 'hkim@example.com', 'User'),
('cjakobsson', 'Jakobsson', 'Carl', 'CarlJ_Secret', 'cjakobsson@example.com', 'User'),
('mrodriguez', 'Rodriguez', 'Manuel', 'MannyR#2026', 'mrodriguez@example.com', 'User'),
('aturner', 'Turner', 'Alice', 'AliceT_Admin', 'aturner@example.com', 'Admin'),
('bross', 'Ross', 'Brian', 'BrianR!Pass1', 'bross@example.com', 'User'),
('lgupta', 'Gupta', 'Lakshmi', 'LakshmiG$22', 'lgupta@example.com', 'User'),
('pkovacs', 'Kovacs', 'Peter', 'PeteK_Manager', 'pkovacs@example.com', 'Manager'),
('sclark', 'Clark', 'Sarah', 'SarahC_Secret', 'sclark@example.com', 'User'),
('dbaker', 'Baker', 'Daniel', 'DanB_Pass345', 'dbaker@example.com', 'User'),
('oross', 'Rossi', 'Olivia', 'OliviaR!7788', 'orossi@example.com', 'User'),
('atakahashi', 'Takahashi', 'Akira', 'AkiraT#Pass', 'atakahashi@example.com', 'User'),
('nkhan', 'Khan', 'Nadia', 'NadiaK_Admin9', 'nkhan@example.com', 'Admin'),
('gharris', 'Harris', 'George', 'GeorgeH$55', 'gharris@example.com', 'User'),
('zmurphy', 'Murphy', 'Zoe', 'ZoeM_Pass12', 'zmurphy@example.com', 'User'),
('ewagner', 'Wagner', 'Eric', 'EricW_Secret!', 'ewagner@example.com', 'User'),
('vnguyen', 'Nguyen', 'Victoria', 'VickyN_Mgr26', 'vnguyen@example.com', 'Manager'),
('itaylor', 'Taylor', 'Ian', 'IanT_Password', 'itaylor@example.com', 'User'),
('mbecker', 'Becker', 'Maya', 'MayaB#7766', 'mbecker@example.com', 'User'),
('lsantos', 'Santos', 'Luis', 'LuisS_Pass321', 'lsantos@example.com', 'User'),
('kperez', 'Perez', 'Karen', 'KarenP!Secure', 'kperez@example.com', 'User'),
('aali', 'Ali', 'Ahmed', 'AhmedA_Pass9', 'aali@example.com', 'User'),
('rschmidt', 'Schmidt', 'Rachel', 'RachelS_Admin', 'rschmidt@example.com', 'Admin'),
('jwright', 'Wright', 'Justin', 'JustinW#8877', 'jwright@example.com', 'User'),
('smitchell', 'Mitchell', 'Sophia', 'SophiaM_Pass', 'smitchell@example.com', 'User'),
('kvargas', 'Vargas', 'Kevin', 'KevV_Mgr2026', 'kvargas@example.com', 'Manager'),
('eanderson', 'Anderson', 'Elena', 'ElenaA$Pass1', 'eanderson@example.com', 'User'),
('bking', 'King', 'Benjamin', 'BenK_Secret99', 'bking@example.com', 'User'),
('cnelson', 'Nelson', 'Chloe', 'ChloeN!Pass12', 'cnelson@example.com', 'User'),
('msoto', 'Soto', 'Miguel', 'MiguelS#3322', 'msoto@example.com', 'User'),
('ahill', 'Hill', 'Amber', 'AmberH_Secret', 'ahill@example.com', 'User'),
('dscott', 'Scott', 'Dylan', 'DylanS!Pass88', 'dscott@example.com', 'User'),
('pgreen', 'Green', 'Paige', 'PaigeG_Admin!', 'pgreen@example.com', 'Admin'),
('wadam', 'Adams', 'William', 'WillA#Pass10', 'wadams@example.com', 'User'),
('schoi', 'Choi', 'Seung', 'SeungC_Pass77', 'schoi@example.com', 'User'),
('nbrooks', 'Brooks', 'Nicole', 'NikkiB_Manager', 'nbrooks@example.com', 'Manager'),
('jyoung', 'Young', 'Jason', 'JasonY!2026', 'jyoung@example.com', 'User'),
('hparker', 'Parker', 'Hazel', 'HazelP#Pass55', 'hparker@example.com', 'User'),
('revan', 'Evans', 'Ryan', 'RyanE_Secret1', 'revans@example.com', 'User'),
('gmorris', 'Morris', 'Grace', 'GraceM$Pass99', 'gmorris@example.com', 'User');