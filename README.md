# Node-MongoDB
Fetch data from MongoDB using NodeJs
----- Setting Up MongoDB----------------
1. Install Mongodb
2.create data\db folder as mongodb requires a data folder to store its files.
-> md data
-> cd data
-> md db
3. open command prompt and go to mongodb\bin path and give the following command to start the mongo process

> mongod --dbpath "d:\data\db"
4. open another command prompt and go to mongodb\bin path and give the following command to start the mongo shell

> mongo

5. In mongo shell, type the following commands

i. command to create/open a database
-> use <databasename>
ex: use mydb
mydb is the databsae name
ii.  command to create a collection
-> db.createCollection("collectionname")
ex: db.createCollection("Longiin")
iii. command to insert a record/document
-> db.<collectionname>.insert(records);
ex: db.Longiin.insert({name:"abc",email:"abc@xyz.com"});
iv. command to display the records from a collection
-> db.<collectionname>.find()
ex: db.Longiin.find()
---- starting Node---------
1. open cmd and go to path where Login.js file is and tyep 
2. >node login.js
3. open login.html in browser and check with the values that are inserted in the database.
