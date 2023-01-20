const { Schema, model } = require('mongoose')

const ArtistsSchema = Schema({
    title: {
        type: String,
        required: [true, 'The title is super required']
    }
})

const ArtistsModel = model('artists', ArtistsSchema )

module.exports = ArtistsModel