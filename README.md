MEAN Web Development [Amos Q.Haviv]
===================================
The MEAN stack is a collection of the most popular 
modern tools for web development: 
it comrises MongoDB, Express, AngularJS Node.js. 

## Set up and run an Express application [expressjs.com/de/starter/generator.html]
### cmd
Microsoft Windows [Version 10.0.10586]
(c) 2015 Microsoft Corporation. Alle Rechte vorbehalten.
### npm install express-generator -g
### express -h
### D:\1. hk\node_ws>express -v
4.13.1
### D:\1. hk\node_ws>node -v
v5.9.0
### D:\1. hk\node_ws>npm -v
3.7.3
### D:\1. hk\node_ws>express MEAN_MVC_2 -e -s
   create : MEAN_MVC_2
   create : MEAN_MVC_2/package.json
   create : MEAN_MVC_2/app.js
   create : MEAN_MVC_2/public
   create : MEAN_MVC_2/public/javascripts
   create : MEAN_MVC_2/public/images
   create : MEAN_MVC_2/public/stylesheets
   create : MEAN_MVC_2/public/stylesheets/style.css
   create : MEAN_MVC_2/views
   create : MEAN_MVC_2/views/index.ejs
   create : MEAN_MVC_2/views/error.ejs
   create : MEAN_MVC_2/routes
   create : MEAN_MVC_2/routes/index.js
   create : MEAN_MVC_2/routes/users.js
   create : MEAN_MVC_2/bin
   create : MEAN_MVC_2/bin/www

   install dependencies:
     > cd MEAN_MVC_2 && npm install

   run the app:
     > SET DEBUG=MEAN_MVC_2:* & npm start

## Develop an MVC structure to support your project development [Nikola Breznjak]

### mkdir app && cd app && mkdir controllers && mkdir models && mkdir routes && mkdir views && cd .. && mkdir config && cd config && mkdir env && cd .. && mkdir public && cd public && mkdir css && mkdir img && mkdir js && cd .. && tree

### D:\1. hk\node_ws\MEAN_MVC_2>tree
Auflistung der Ordnerpfade für Volume Data
Volumeseriennummer : CAAB-9F8E
+---app
¦   +---controllers
¦   +---models
¦   +---routes
¦   +---views
+---config
¦   +---env
+---public
    +---css
    +---img
    +---js
+package.json
+README.md
+server.js

D:\1. hk\node_ws>MEAN_MVC_2

### D:\1. hk\node_ws\MEAN_MVC_2\app
code is based on the MEAN.JS framework ==> MEAN Web Development by Amos Haviv 
https://hackhands.com/delving-node-js-express-web-framework 

The app folder is where we'll keep our Express application logic and is divided into the following folders 
that represent a separation of functionality to comply with the MVC pattern: 

controllers - contains Express application controllers 

models - contains Express application models 

routes - contains Express application routing middleware 

views - contains Express application views 

So, basicalls, this whole MVC thing is jast away 
you structure your application in order 
to help yoe maintain it later when the project becomes big... 

### D:\1. hk\node_ws\MEAN_MVC_2\config
code is based on the MEAN.JS framework ==> MEAN Web Development by Amos Haviv 
https://hackhands.com/delving-node-js-express-web-framework 

The config folder is where we'll keep our Express application configuration files. 
It will contain several files and folders: 
env - contains Express application environment configuration files 
 


config.js - contains configuration code of our Express application 
 
express.js - contains initialization code of our Express application 
require() method is used to load the module into your code [CommonJS standart specify] 
exports-object is contained in each module and allows you to expose pieces of your code when the module is loaded 
module-object was originally used to provide metadata information about the module. It also contains the pointer to an exports object as a property 
