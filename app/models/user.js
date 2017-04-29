'use strict';
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    facebook: {
        name: String,
        token: String,
        id: String,
        pic: String
    }, 
    google: {
        name: String,
        token: String
    },
    twitter: {
        name: String,
        pic: String,
        token: String
    },
    local: {
        name: String,
        email: String,
        token: String
    },
    books: [{
        title: String, 
        author: String,
        isbn: String,
        pic: String
    }]
});

export default mongoose.model('User', userSchema);