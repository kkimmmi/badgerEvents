const mongosse = require('mongoose');

const userSchema = new mongosse.Schema(
    {
    name: String,
    passward: String,
    email: String,
},{
    collection:"userInfo",
});

mongosse.model("userInfo",userSchema);