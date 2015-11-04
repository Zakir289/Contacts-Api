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


## Some SUmmary on MongoClient Interface 


```javascript
 //lets require/import the mongodb native drivers.
  var mongodb = require('mongodb')
  ```
