const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

function connectDB(app, port, db) {
  mongoose
    .connect(db)
    .then(() => {
      app.listen(port, () => {
        console.log(
          `Connected and listening on port: http://localhost:${port}`
        );
      });
    })
    .catch((err) => console.log(err));
}

module.exports = {
  connectDB,
};

// const mongoose = require('mongoose')
// const config = require('../config/config')

// mongoose.set('strictQuery', false)

// function connect() {

//     return mongoose.connect(config.db.uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
// }

// module.exports = connect
