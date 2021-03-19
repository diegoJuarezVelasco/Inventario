var express = require('express');
var router = express.Router();
var usuario = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("frmLogin", {})
});

// Esto solo realiza el proceso de autenticación(para el ejemplo),
// pero aún no tiene elementos de SEGURIDAD
router.post('/login', ( req , res , next )=>{
  //console.log( req.body.email , req.body.passwd );
  usuario.login(req.body.email,req.body.passwd,( e , d )=>{ // req.body.passwd SHA256
    if (d) {
      res.send('Login correcto');
      ses=req.session;
      console.log(ses.id);
      ses.userdata = d;
      console.log(ses);
      // crear la sesion
      /*
      1.- reutilizar la sesion origial del chrome
      2.- hacer una nueva, desechando la de web browser
      */

    } else {
      res.json(e);
    }

  });

});
module.exports = router;