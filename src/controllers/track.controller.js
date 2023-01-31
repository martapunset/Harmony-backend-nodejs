const tracksmodel = require("../models/track.model");

const getTracks = async (req, res, next) => {
 // let query = req.query.q;

  try {
    const allTracks = await tracksmodel.find({})

    res.status(200).send({ status: true, data: allTracks});
    //next()
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message });
    //next()
  }
  //next()
};


const searchTracks = async (req, res, next) => {
const {title} = req.query;
//const { q } = req.params;
  try {
    const findTracks = await tracksmodel.find({ title: title }).lean().exec();
      //Do your action here..
  // res.status(200).send({ msg: name });
  
   res.status(200).send({ status: true, data: findTracks});
      //next()
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
      //next()
    }
    //next()
  };



const deleteTrack = async ( req, res, next) => {
  const { id } = req.params;
  try {
    const artist = await tracksmodel.findOneAndDelete({ _id: id });

    res.status(200).send({ status: true, data: artist._id });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

const updateTrack = async (req, res, next) => {
  const { id } = req.params;
  const { ...fields } = req.body;

  try {
    const author = await tracksmodel
      .findOneAndUpdate(
        { _id: id },
        {
          $set: {
            ...fields,
          },
        },
        { new: true }
      )
      .lean()
      .exec();

    res.status(200).send({ status: true, data: author });
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { getTracks, updateTrack, deleteTrack, searchTracks };
