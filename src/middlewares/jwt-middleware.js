//crear middleware
const jwksRsa = require('jwks-rsa')
const { expressjwt: expressJwt } = require('express-jwt')

const jwtCheck = expressJwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://bernersmusicapp.eu.auth0.com/.well-known/jwks.json'  
    }),
    audience: 'https://express.sample', 
    issuer: 'https://bernersmusicapp.eu.auth0.com/', 
    algorithms: ['RS256'] 
})

module.exports = { jwtCheck }