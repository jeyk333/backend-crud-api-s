const Community = require("../modal/community");

//Defining and exporting controllers
module.exports = {
  //Controller to get communities
  getCommunitites: async (req, res) => {
    // destructure page and limit and set default values
    const { page = 1, limit = 10 } = req.query;
    try {
      // execute query with page and limit values
      const communities = await Community.find()
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .exec();

      // get total documents in the Posts collection
      const count = await Community.countDocuments();

      // return response with posts, total pages, and current page
      res.status(200).json({
        communities,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
      });
    } catch (err) {
      console.error(err.message);
    }
  },

  //Controller to create a community
  postCommunity: async (req, res) => {
    const { title, publication } = req.body;
    try {
      const community = new Community({
        title,
        publication,
      });
      // Storing the created community in database
      const resp = await community.save();

      // return response with created community
      res.status(201).json(resp);
    } catch (err) {
      console.error(err.message);
    }
  },

  //Controller to delete a community
  deleteACommunity: async (req, res) => {
    const { id } = req.params;
    try {
      //Deleteing community from database
      const community = await Community.deleteOne({ _id: id });

      // return response with deleted community
      res.status(200).json({ id, message: "Community deleted successfully" });
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  //Controller to get a community
  getACommunity: async (req, res) => {
    const { id } = req.params;
    try {
      //getting specific community from database
      const community = await Community.findById(id);

      // return response with only requested community
      res.status(200).json(community);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },

  //Controller to update a community
  updateACommunity: async (req, res) => {
    const { id } = req.params;
    try {
      //updating specific community in database
      const community = await Community.findByIdAndUpdate(
        { _id: id },
        { $set: req.body },
        { new: true }
      );

      // return response with updated community
      res.status(200).json(community);
    } catch (err) {
      res.status(400).json(err.message);
    }
  },
};
