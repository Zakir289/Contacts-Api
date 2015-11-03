var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts_database'); //Add connection success messages based on requirement

var Schema = mongoose.Schema;

var contacts = new Schema({
    _id: {type: Number, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    b_date: {type: Date}
});

var contactsModel = mongoose.model('customers', contacts);


var handlers = {

    createContact: function (req, res) {
        var contact = new contactsModel({
            _id: req.body.id,
            name: req.body.name,
            email: req.body.email,
            b_date: req.body.b_date
        });

        contact.save(function (err) {
            if (!err) {
                res.send(contact)
            } else {
                res.send('"May be duplication of contact, please find the error"   ' + err)
                //res.status(404) -- add status if needed
            }
        });


    },

    updateContact: function (req, res) {
        return contactsModel.findById(req.params.id, function (err, contact) {
            if (contact) {
                contact.name = req.body.name;
                contact.contactemail = req.body.email;
                contact.b_date = req.body.b_date;
                return contact.save(function (err) {
                    if (!err) {
                        res.send(contact)
                    } else {
                        res.send('"Not updated properly"      ' + err)
                    }
                })
            }
            else {
                res.send(' "Record not found"     ' + err)
            }
        })
    },

    fetchContacts: function (req, res) {

        contactsModel.find(function (err, contacts) {
            if (!err) {
                //res.send(contacts);
                res.send(JSON.stringify(contacts))  //if needed as JSON
            } else {
                res.send("something went wrong" + err);
            }
        });
    },

    fetchSingleContat: function (req, res) {
        contactsModel.findById(req.params.id, function (err, contact) {
            if (contact) {
                res.send(contact);
            } else {
                res.send('"The specified id not ID   " + Please find the complete error ' + err)
            }
        });

    },

    destroyAllContacts: function (req, res) {
        contactsModel.remove(function (err) {
            if (!err) {
                res.send('All contacts succesfully deleted')

            } else {
                res.send('"Some things went wrong while deleting contats, Please find the complete error below' + err)
            }
        })

    },

    destroySingleContact: function (req, res) {
        contactsModel.findById(req.params.id, function (err, contact) {
            if (contact) {
                return contact.remove(function (err) {
                    if (!err) {
                        res.send('Successfully  ' + contact + 'deleted')
                    } else {
                        res.send('contacts could not be deleted Please find the complete error  ' + err)
                    }
                });
            }
            else {
                res.send('specified contact not found' + err)
            }
        });
    },

    displayError: function (req, res) {
        res.status(404).send("The specified page not found")
    }

}

module.exports = handlers;














