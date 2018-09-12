var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {
    User: User
};

//create documents:

// var newUser = new User({
//     email: ''
// });

// newUser.save().then((doc) => {
//     console.log('Saved user', doc)
// }, (e) => {
//     console.log('unable to save user', e);
// });