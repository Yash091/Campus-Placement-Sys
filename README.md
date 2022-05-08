# Campus-Placement-Sys

Campus Placement system is the project which is beneficial for college students, various companies visiting the campus for recruitment and even the college placement admin. The system allows the students to create their profiles and upload all their details including their marks onto the system and can apply for jobs which admin has updated.

## Pre-Requisites

1. Any IDE (eg. VS Code , Sublime etc).
2. Node JS
3. NPM Installer

## Instructions

- You can clone the repository

  1. Make sure your machine is having internet connection.
  2. Open shell (which ever your OS support) on your PC.
  3. Change drive to the location where you want your project to be copied
  4. Now type or copy-paste the below given commands.
    ```
      https://github.com/Yash091/Campus-Placement-Sys
    ```
  5. Press Enter and the project will be cloned in you system.

- You can directly download the zip file and extract it

**After extracting the zip file or after cloning the repository**

1. Open the folder Campus-Placement-Sys-master in terminal. In this you will find 2 folders.
    - Client
    - Server
2. To run Client folder, type the following commands in terminal
    1. cd client
    1. npm install
    1. npm start
    Frontend port - 3000
3. To run Server folder, type the following commands in terminal
    1. cd server
    1. npm install
    1. npm start
    Backend port - 8000
    
    **Note: For running backend you need to do a few things**
    - Connect your Workbench by writing this in the [this](./server/database/conn.js) file
      ```
        let db = sql.createConnection({ 
            host: "localhost",
            user: "root",
            password: <Your password>,
            database: "campus_placement",
          });
      ```
      - Type this command in your workbench to create database.
        ```
          Create database campus_placement
        ```
      - Type this command in your workbench to use your database
        ```
          Use campus_placement
        ```
    - Then You need to create tables using these commands,
      - Students Table
        ```
          CREATE TABLE if not exists student(
            Enrol_num VARCHAR(30) PRIMARY KEY,
            Pasword VARCHAR(30) NOT NULL,
            Email VARCHAR(45) NOT NULL,
            SName VARCHAR(50) NOT NULL,
            Cur_sem INT NOT NULL,
            Cgpa DOUBLE NOT NULL,
            Course VARCHAR(50) NOT NULL,
            Mobile VARCHAR(11) NOT NULL,
            Gender VARCHAR(10) NOT NULL,
            S_resume VARCHAR(100) NOT NULL,
            );
        ```
      - Company Table
        ```
          CREATE TABLE if not exists company(
                Com_Name VARCHAR(60) PRIMARY KEY,
                Com_Type VARCHAR(60) NOT NULL,
                Com_Desc VARCHAR(600) NOT NULL
            );
        ```
      - Job Table
        ```
          CREATE TABLE if not exists job(
                Job_id INT AUTO_INCREMENT PRIMARY KEY,
                Job_Name VARCHAR(40) NOT NULL,
                Job_Desc VARCHAR(400) NOT NULL,
                Job_salary DOUBLE NOT NULL,
                Com_Name VARCHAR(60) NOT NULL,
                FOREIGN KEY (Com_Name) REFERENCES company(Com_Name) ON DELETE
                CASCADE
            );
        ```
      - Job Apply Table
        ```
          CREATE TABLE if not exists jobapply(
                pid INT AUTO_INCREMENT PRIMARY KEY ,
                Enrol_num VARCHAR(30) NOT NULL,
                Sname VARCHAR(50) NOT NULL,
                Job_id INT NOT NULL,
                Job_Name VARCHAR(60) NOT NULL,
                Com_Name VARCHAR(60) NOT NULL,
                FOREIGN KEY (Com_Name) REFERENCES company(Com_Name) ON DELETE
                CASCADE,
                FOREIGN KEY (Enrol_num) REFERENCES student(Enrol_num) ON DELETE CASCADE,
                FOREIGN KEY (Job_id) REFERENCES job(Job_id) ON DELETE CASCADE
            );
        ```
      - Admin Table
        ```
          CREATE TABLE if not exists officer(
                aid INT PRIMARY KEY,
                admin_pass VARCHAR(40) NOT NULL);
                INSERT INTO officer ( admin_pass)
                VALUES
                (1,"12345");
            );
        ```
        
4. Your project will start running if you followed the instructions properly.
