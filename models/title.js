const mongoose = require('mongoose')

const TitleSchema = new mongoose.Schema({
    Awards: { type: Array },
    Genres: { type: Array },
    OtherNames: { type: Array },
    Participants: { type: Array },
    ReleaseYear: { type: Number },
    Storylines: { type: Array },
    TitleId: { type: Number },
    TitleName: { type: String },
    TitleNameSortable: { type: String },
    TitleNameSortable: { type: String }
})

// Need to specify collection Titles as third param because it was defaulting to titles
module.exports = mongoose.model('Title', TitleSchema, "Titles");