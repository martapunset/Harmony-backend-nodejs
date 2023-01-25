const { AUTH0_AUDIENCE } = require("../config/config");
const { AUTH0_ISSUER } = require("../config/config");
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${AUTH0_ISSUER}.well-known/jwks.json`,
  }),
  audience: AUTH0_AUDIENCE,
  issuer: AUTH0_ISSUER,
  algorithms: ["RS256"],
});

module.exports = {
  checkJwt,
};

// async function checkParam(req, res, next) {
//     const { id } = req.params
//     try {
//         id && console.log(`Check the id ${id}`)
//         next()
//     } catch (error) {
//         next(error)
//     }
// }

// async function doubleCheckParam(req, res, next) {
//     const { id } = req.params
//     try {
//         id && console.log(`Double check the id ${id}`)
//         next()
//     } catch (error) {
//         next(error)
//     }
// }

// module.exports = { chechParam, doubleCheckParam }
