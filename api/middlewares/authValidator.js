import jwt from 'jwt-simple';
import config from '../config/index.js';
import User from '../models/User.js';

const isAuth =  async (req, res, next) => {
    try {
        /**ver si esta pasando el token,
         * sino se envia,notificar error 400 */
        const token = req.headers.authorization;
        if(!token){
            return res.status(400).json({
                msg: 'Cabecera Authorization Faltante',
            });
        }
         /**decodificar token*/
        const payload = jwt.decode(token, config.jwt.secret);
        /**buscar usuario con el token*/
        const user = await User.findById(payload.userId);

        if(!user){
            return res.status(401).json({
                msg: 'Usuario inválido',         
            })
        }
        
        req.userId = user.id
        next()
    } catch (error) {
        return res.status(401).json({
            msg: 'Token invalido',
        })
    }
}
    
export default isAuth;