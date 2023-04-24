const {response} = require('express');


const usuariosGet = (req, res = response) => {
    const{q,nombre = 'No name', apikey, page = 1, limit} = req.query
res.json({
msg:" api GET desde controlador",
    q,
    nombre, 
    apikey,
    page,
    limit
});
}

const usuariosPut = (req,res = response) => {
    const id = req.params;
    res.json({
        msg: "api Put desde controlador",
        id
    })

}


const usuariosDelete = (req, res = response) => {
    //const { id } = req.params;
    
    res.json({
        msg: `API DELETE desde controlador`
    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, correo} = req.body;
    
    res.json({
        msg:  `API POST desde controlador`,
        //body
        nombre, 
        correo
    });
}



const usuariosPatch = (req, res = response) => {
    //const { id } = req.params;
    //const { nombre, correo, edad } = req.body;
    
    res.json({
        msg: `API PATCH desde controlador`
    });
}

module.exports = {
usuariosGet, 
usuariosPut,
usuariosPatch,
usuariosPost,
usuariosDelete
};