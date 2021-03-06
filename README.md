# DjangoReact
<h2> CRUD application for Posts using Django-framework and React.js </h2>

<p> For the Designing purposes I have used Antd Library which is very popular for styling react apps, having a bunch of features in it </p>

<p>This project is about a application in Python-Django Framework with React.js on front-end<p>
  
<p>To clone this project you can do it by running a command by navigating to a directory where you want to create repository
    on your system:
<p>
  
  ```
  git clone https://github.com/kulksaur/DjangoReact.git
  ```
  
<h2> Steps to start the Django server and react.js application <h2>
 
 <p> If you check the repository, we have 2 main folders named 'backend' and 'frontend'. And now we will walkthrough on 
     initial set-up to get started. </p>
     
 <h3><ins> Starting the Django (Backend) Server </ins></h3>
  <p> As for the use-case, I have used mongoDB to store our data, and Django byDefault uses SqlLite. So I have changed the database which you can find in our environment variables file which is 'custom_settings.py' in path 'backend/src/djangoReact/'. <p>
  
  <p> Please change your mongoDB instance URL (Host), and you may keep the database same. Also, if you notice any connection errors with database, please add USER and PASSWORD fields of your mondoDB User <p/>
  
  <p> Its time to install all the dependencies for our Django (backend) server <p> 
  <p> Navigate to the folder 'backend/src' and run the following command<p>
  <p> *Now I assume you have installed pipenv, and we will use it to create environment and install everything*</p>
  <p> Run the following commands in 'backend/src'</p>
  
    pipenv install 
    pipenv shell
    
  <p> You will enter inside a shell from which we will do the steps given below </p>
  
   <p> Now we will need to apply our database structure to the Database Instance, we use migrate command for that. So execute following: <p>
  
  ```python manage.py migrate```
  
  <p> Check your database - you should be having a database created in it </p>
  
  <p> Now we have to import the initial data to our database, this can be done using fixtures which I have created in 'backend/src/posts/fixtures/' in a "fixtures.json" file. Fixtures is nothing but a json representation of your initial data according to your model specified in django. This helps to dump initial data into database' </p>
  
  <p> To dump the data we will run the following command from your pipenv shell<p>
  
  ```python manage.py loaddata fixtures.json```
  
  
  <p> Now its the time to start our django server. we can do it by running following command through the same shell<p>
  
  ```python manage.py runserver```
  
  <p> The server will be started and available on 'http://localhost:8000/
  
  <hr>
  
  <h3><ins> Starting the React.js (Frontend) Application </ins></h3>
  
  <p> Front end is little bit easy to start, we just need to install the dependencies by navigating to 'frontend/user-interface' and executing the following command</p>
  
  ```npm install```
  
  <p> Now we can start the application by executing the following command <p>
  
  ```npm start```
  
  <p> The application will be available on http://localhost:3000/
  
  
  <hr>
  
  <h3><ins> Running Unit Tests for Backend Server and FrontEnd Application </ins></h3>
  
  <p><ins> Running Unit Tests for the Backend Server </ins><p>
  
  <p> Make sure you are navigated to 'backend/src' folder and inside pipenv shell. 
      You will run the following command </p>
  
  ```python manage.py test```
  
  <p><ins> Running Component Unit Tests for the Front-End Application </ins><p>
  
  <p> Make sure you are navigated to 'frontend/user-interface' folder. 
      You will run the following command </p>
  
  ```npm test```
  
  <p> Press 'a' to run all the unit-tests </p>
    
  
