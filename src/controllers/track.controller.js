const tracksmodel = require("../models/track.model");

const getTracks = async (req, res, next) => {
  try {
    const allTracks = await tracksmodel.find({})

    res.status(200).send({ status: true, data: allTracks});
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message });
  }
};


const searchTracks = async (req, res, next) => {
const {title} = req.query;
  try { 
    const findTracks = await tracksmodel.find({searchTags:title}).lean().exec(); 
   res.status(200).send({ status: true, data: findTracks});
   
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
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
