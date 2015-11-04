# Contacts-Api
## Mongoose + Node.js

* I am pointing to local **mongodb** with default port and **server port 3000**. Please change according to your needs.


You can find the Rest end points in **index.js** of **controllers** folders.

**Summary of end points:**

1. **/api/contact/**        (type = post)     to create the contact
2. **/api/contact/:id**     (type = put)      to update the contact
3. **/api/contact/:id**     (type=get)        to read the contact
4. **/api/contacts**        (type=delete)     to delete all the contacts
5. **/api/contacts/:id**    (type=delete)     to delete specified contact


For **Create, Update** we need send the values of **Id, Name, Email, DOB**. You can see them accordingly in contacts.js.

* The document will be stored in the Mongo based on the **id** you passed, It should always be **Unique**.

* other than **Mongoose** we can use **MongoClient** according to the requirement.


## Some Summary on MongoClient Interface(which I did not used in the above program)


```javascript
 //Import the mongodb native drivers
  var mongodb = require('mongodb')
  
   // Connection URL. This is where your mongodb server is running.
  var url = 'mongodb://localhost:27017/contact_database';
  
  

MongoClient.connect(url, function (err, db) {
    if (err) {
    } else {
 collection = db.collection('customer');  //customer is Collection here(like table in RDB)
    }
});

//Inserting a document will be done using "collection.insert()

    var contact = {             //prepare the contact first 
            _id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            b_date: req.body.b_date
        };

        collection.insert([contact],function (err) { //sytax to insert the code
            if (!err) {
                res.send(contact)
            } else {
                res.send('"May be duplication of contact, please find the error"   ' + err)
                //res.status(404) -- add status if needed
            }
        });

  
  //can insert Multiple contacts using the syntax 
  
    collection.insert([contact1, contact2, contact3], function (err, result) {
    })
    
    //To update use collection.update()
    //To fecth use collection.find()
    
    
    As far I see, Mongoose is more comfortable when compared to Mongo client
    
    
    
    
  ```
