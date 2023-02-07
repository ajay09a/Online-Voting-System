const User = require('../models/user')


module.exports.profile = function(req, res){
    if (req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if (user){
                return res.render('user_profile', {
                    title: "User Profile",
                    user: user
                })
            }else{
                return res.redirect('/users/sign-in');

            }
        });
    }else{
        return res.redirect('/users/sign-in');

    }
}


// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = function(req, res){
    User.findOne({aadhar: req.body.aadhar}, function(err, user){
        if(err){
            console.log("error in finding the user for signing up");
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log("error in creating the user while signing up");
                    return;
                }
                return res.redirect('/user/sign-in')
            })
        }
        else{
            return res.redirect('back');
        }
    })
}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    // steps to authenticate
    // find the user
    User.findOne({aadhar: req.body.aadhar}, function(err, user){
        if(err){console.log('error in finding user in signing in'); return}
        // handle user found
        if (user){
            // handle session creation
            res.cookie('user_id', user.id);
            return res.redirect('/user/profile');

        }else{
            // handle user not found

            return res.redirect('back');
        }


    });

}

module.exports.deleteSession = function(req, res){
    req.logOut();
    return res.redirect('back');
}