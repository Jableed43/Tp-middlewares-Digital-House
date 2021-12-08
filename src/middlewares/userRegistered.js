module.exports =
(req, res, next) =>{
const {user} =req.query
    switch (user) {
        case 'Ada':
        case 'Greta':
        case 'Vim':
        case 'Tim':
            next()
            break;
    
        default:
            texto='No tiene los privilegios para ingresar al sitio'
        res.render('index', {texto: 'No tiene los privilegios para ingresar al sitio'})
        
            break;
    }

}