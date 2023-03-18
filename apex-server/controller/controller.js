const Item = require("../model/model");

exports.addItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    return res.status(201).json({
      created: "success",
      data: item,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      console.log(req.body);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};
