const tracksmodel = require("../models/track.model");

const getTracks = async (req, res, next) => {
<<<<<<< HEAD
  // let query = req.query.q;

=======
>>>>>>> 5ff02aa9636b32650a86af8339a90715e3e73c72
  try {
    const allTracks = await tracksmodel.find({});

<<<<<<< HEAD
    res.status(200).send({ status: true, data: allTracks });
    //next()
=======
    res.status(200).send({ status: true, data: allTracks});
>>>>>>> 5ff02aa9636b32650a86af8339a90715e3e73c72
  } catch (error) {
    req.status(500).send({ status: false, msg: error.message });
  }
};

const searchTracks = async (req, res, next) => {
<<<<<<< HEAD
  const { title } = req.query;
  //const { q } = req.params;
  try {
    //  db.inventory.find( { tags: "red" } )
    //   EmployeeDetails:{$elemMatch:{EmployeePerformanceArea

    const findTracks = await tracksmodel
      .find({ searchTags: title })
      .lean()
      .exec();
    //Do your action here..
    // res.status(200).send({ msg: name });

    res.status(200).send({ status: true, data: findTracks });
    //next()
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
    //next()
  }

  //next()
};

const deleteTrack = async (req, res, next) => {
=======
const {title} = req.query;
  try { 
    const findTracks = await tracksmodel.find({searchTags:title}).lean().exec(); 
   res.status(200).send({ status: true, data: findTracks});
   
    } catch (error) {
      res.status(500).send({ status: false, msg: error.message });
    }
  };

const deleteTrack = async ( req, res, next) => {
>>>>>>> 5ff02aa9636b32650a86af8339a90715e3e73c72
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
