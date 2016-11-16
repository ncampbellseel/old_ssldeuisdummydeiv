CREATE SCHEMA IF NOT EXISTS rds_demo DEFAULT CHARACTER SET utf8;
USE rds_demo;

CREATE TABLE IF NOT EXISTS rds_demo.video (
  id INT NOT NULL AUTO_INCREMENT,  
  s3_key VARCHAR(40) NOT NULL,
  production_no VARCHAR(40) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS rds_demo.user (
  id INT NOT NULL AUTO_INCREMENT,  
  username VARCHAR(40) NOT NULL,
  password VARCHAR(40) NOT NULL,
  PRIMARY KEY (id));   

CREATE TABLE IF NOT EXISTS rds_demo.notification (
  id INT NOT NULL AUTO_INCREMENT,
  crime_ref_no VARCHAR(50) NOT NULL,
  date_time DATETIME NOT NULL,
  status VARCHAR(50),
  sent_by_user INT NOT NULL,
    CONSTRAINT FK_SENT_BY_USER
    FOREIGN KEY (sent_by_user)
    REFERENCES rds_demo.user (id),
  PRIMARY KEY (id)); 
  
CREATE TABLE IF NOT EXISTS rds_demo.link (
  id INT NOT NULL AUTO_INCREMENT,
  notification_id INT NOT NULL,
  video_id INT NOT NULL,
  url VARCHAR (150) NOT NULL,
  transcript VARCHAR (1000) NOT NULL,
    CONSTRAINT FK_NOTIFICATION_ID
    FOREIGN KEY (notification_id)
    REFERENCES rds_demo.notification (id),
	    CONSTRAINT FK_VIDEO_ID
    FOREIGN KEY (video_id)
    REFERENCES rds_demo.video (id),
  PRIMARY KEY (id)); 
  
