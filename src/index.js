const connect = require('./database/connect')
const app = require('./server');
const config = require('./config/config')

connect().then(async function onServerinit () {
    config.logger.info('MongoDB connected')
    
    app.listen(process.env.PORT, () => {
        config.logger.info(`Server is running in port ${process.env.PORT}`)
    }) 
})