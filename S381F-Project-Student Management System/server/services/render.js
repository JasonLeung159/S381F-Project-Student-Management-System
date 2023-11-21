const axios = require('axios');


exports.homeRoutes = (req, res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(logdata){
            res.render('login', { users : logdata.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.index = (req, res) =>{
    axios.get('http://localhost:3000/api/users')
        .then(function(logdata){
            res.render('index', { users : logdata.data });
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

exports.update_user = (req, res) =>{
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

