

var contacts = require('./contacts')


module.exports= function(app) {
    app.post('/api/contact/', contacts.createContact)                //create

    app.put('/api/contact/:id', contacts.updateContact)              //update

    app.get('/contacts', contacts.fetchContacts)                    //return all the contacts
    app.get('/api/contact/:id', contacts.fetchSingleContat)         //update


    app.delete('/api/contacts', contacts.destroyAllContacts)        //delete all contacts
    app.delete('/api/contacts/:id', contacts.destroySingleContact)  //delete a specfic employee

    app.all('*',contacts.displayError)                              //any other url will be returned with an page not found error

}