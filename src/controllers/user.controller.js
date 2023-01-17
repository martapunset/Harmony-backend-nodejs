
async function privatePing(req, res, next) {
    console.log('privada');
    return res.status(200).json({
        msg: 'Back logueado dice: Bienvenido a Harmony'
    })
}
  async function publicPing (req, res, next) {
    console.log('publica');
    return res.status(200).json({
        msg: 'Back dice: No hace falta que te loguees'
    })
     
}
  module.exports={publicPing, privatePing}


 