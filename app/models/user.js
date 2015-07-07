var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs'),
    userSchema = mongoose.Schema({
        local: {
            email: String,
            password: String
        },
        facebook: {
            id: String,
            token: String,
            email: String,
            name: String
        },
        twitter: {
            id: String,
            token: String,
            displayName: String,
            username: String
        },
        google: {
            id: String,
            token: String,
            email: String,
            name: String
        }
    });

userSchema.methods.generateHash = function(password) {
   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);  // should probably use async
};

userSchema.methods.validPassword = function(password) {
   return bcrypt.compareSync(password, this.local.password);    // should probably use async
};

var User = mongoose.model('User', userSchema);

//module.export = mongoose.model('User');
