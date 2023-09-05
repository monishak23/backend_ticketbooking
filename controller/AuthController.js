const User = require('../model/User'); // Corrected the model import
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }

    // Create a new User instance with hashed password
    const newUser = new User({
      username: req.body.username,
      password: hashedPass, // Use the hashed password here
    });

    newUser
      .save()
      .then((user) => {
        res.json({
          message: 'User added successfully',
        });
      })
      .catch((error) => {
        res.json({
          message: 'An error occurred',
          error: error.message, // Provide the error message for debugging
        });
      });
  });
};

const login = (req, res, next) =>{
    var username = req.body.username
    var password = req.body.password
    

    User.findOne({ username: username })
    .then(user => {
        console.log('Input Username:', username);
        //console.log('Database Username:', user.username);
        if(user){
            bcrypt.compare(password,user.password,function(err,result){
                if(err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token = jwt.sign({username: user.username},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                        message:'Login successful',
                        token,
                        username: user.username
                    })
                }else{
                    res.json({
                        message:'Password does not match'
                    })
                }

            })
        }else{
            res.json({
                message:'No user found'
            })
        }
    })
}

module.exports = {
  register,login
};
