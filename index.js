const mongoose = require('mongoose');
  
// Database connection
mongoose.connect('mongodb://1ocalhost:27017/demoDatabase', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
  
const userSchema = mongoose.Schema({
    name: { type: String },
    age: { type: Number }
});
  
// User model
const User1 = mongoose.model('User1',userSchema);
    
// Function call
async function insertData(){
    const user1 = await User1.insertMany([
        { name: 'ruhi', age: 20},
        { name: 'Juhi', age: 21},
        { name: 'neha', age: 22}
        ])
        .then(function(){
            console.log("inserted successfully")  // Success
        })
        .catch(function(error){
            console.log(error)      // Failure
    });
    user1.save();
}

insertData();
hellooooo juhi 
