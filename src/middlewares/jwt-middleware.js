//crear middleware
const jwksRsa = require('jwks-rsa')
const { expressjwt: expressJwt } = require('express-jwt')

const jwtCheck = expressJwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://bernersmusicapp.eu.auth0.com/.well-known/jwks.json'  //issuer+.well.....
    }),
    audience: 'https://express.sample', //apis , identifier
    issuer: 'https://bernersmusicapp.eu.auth0.com/', //aplication , domain
    algorithms: ['RS256'] //apis
})

module.exports = { jwtCheck }