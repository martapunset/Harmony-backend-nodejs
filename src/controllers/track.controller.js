const tracksmodel = require("../models/track.model");

const getTracks = async (req, res, next) => {
  try {
    const allArtists = await tracksmodel.find({}).lean().exec();

    res.status(200).send({ status: true, data: allArtists });
    //next()
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message });
    //next()
  }
  //next()
};

const deleteTrack = async (req, res, next) => {
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

module.exports = { getTracks, updateTrack, deleteTrack };
