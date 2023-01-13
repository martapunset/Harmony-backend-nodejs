//modulo de rutas del usuario
//traernos el router de express
const userRouter = require('express').Router()
const userController = require('../controllers/user.controller')

userRouter
    .post("/segundo", userController.createUser)
// userRouter.get("/", userController.createUser)

//esto va en el controller:
    // .get("/", (req, res) => {
    //     //console.log('all albums');
    //     try{
    //         res.status(200).send("get all users") //par amanejar la base de datos, data
    //     } catch (error) {
    //         req.status(500).send({status:'FALSE'}) 
    //     }
    // })

    // .post("/album", (req, res) => {
    //     const body = req.body
    //     console.log(body);
    //     try {
    //         res.status(201).send({status:"OK", msg:"User created"})    
    //     } catch (error) {
    //         req.status(500).send('FALSE')
    //     }
    // }) //crear un nuevoalbum de ahi /album

    // .delete("/:id", (req, res) => {
    //     const {id} = req.params
    //     try {
    //         res.status(201).send({status:"OK", msg:`Deleted user ${id}`})    
    //     } catch (error) {
    //         req.status(500).send({ status: 'FALSE'})
    //     }
    // })

module.exports = userRouter