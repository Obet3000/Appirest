const {Router} = require('express');
const {
    usuariosGet, 
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
} = require('../Controllers/controllers/usuarios');

const router = Router();


router.get('/', usuariosGet);
router.put('/:id',usuariosPut);
router.post('/', usuariosPost);
router.patch('/', usuariosPatch);
router.delete ('/', usuariosDelete);
module.exports = router;

