const login = (email, passwd, callback) => {
    var err;
    var bd_data=''; // simula la inf proveniente de vs
    if (email == 'joe@doe.com' && passwd == "1234") {
        //consultar en BD info faltante
        bd_data = {
            'email': email,
            'depto': 'ventas',
            'phone': '5528936549'
        }
    } else {
        error = {'mensaje': 'Credenciales incorrectas'}
    }
    callback(err,bd_data);    
}
exports.login = login;

