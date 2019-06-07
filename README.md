# DjangoReact
A challenge on implementing CRUD operations using Django and React 

<p>This project is about a application in Python-Django Framework with React.js on front-end<p>
  
<p>To clone this project you can do it by running a command by navigating to a directory where you want to create repository
    on your system:
<p>
  
  ```git clone https://github.com/kulksaur/DjangoReact.git```
  
<h2> Steps to start the Django server and react.js application <h2>
 
 <p> If you check the repository, we have 2 main folders named 'backend' and 'frontend'. And now we will walkthrough on 
     initial set-up to get started. </p>
     
 <h3> Starting the Django (Backend) Server </h3>
  <p> As for the use-case, I have used mongoDB to store our data, and Django byDefault uses SqlLite. So I have changed the database which you can find in our environment variables file which is 'custom_settings.py' in path 'backend/src/djangoReact/'. <p>
  
  <p> Please change your mongoDB instance URL (Host), and you may keep the database same. Also, if you notice any connection errors with database, please add USER and PASSWORD fields of your mondoDB User <p/>
  
  <p> Its time to install all the dependencies for our Django (backend) server <p> 
  <p> Navigate to the folder 'backend/' and run the following command<p>
    
    ```pip install
    ```
    
  <p> This will install all the dependencies </p>
  
  <p> Now we will do the migrations which are required for your initial set-up. Run the following commands by navigating to your 'backend/src' folder <p>
  
  ```python manage.py makemigrations
  
     python manage.py migrate
  ```
  
  <p> Now we have to import the initial data to our database, this can be done using fixtures which I have created in 'backend/src/posts/fixtures/' in a "fixtures.json" file. Fixtures is nothing but a json representation of your initial data according to your model specified in django. This helps to dump initial data into database' </p>
  
  <p> To dump the data we will run the following command by navigating to your 'backend/src/' <p>
  
  ```python manage.py loadddata fixtures
  ```
  
  <p> Now its the time to start our django server. we can do it by running following command <p>
  
  ```python manage.py runserver
  ```
  
  <p> The server will be started and available on 'http://localhost:8000/
  
  <hr>
  
  <h3> Starting the React.js (Frontend) Application </h3>
  
  <p> Front end is little bit easy to start, we just need to install the dependencies by navigating to 'frontend/user-interface' and executing the following command</p>
  
  ```
    npm install
  ```
  
  <p> Now we can start the application by executing the following command <p>
  
  ```
    npm start
  ```
  
  
  
  
  
