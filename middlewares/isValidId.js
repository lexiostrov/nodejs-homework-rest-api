const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../controllers/contacts");

const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    res.status(400).json({ error: `${id} is not valid id` });
  } else {
    next();
  }
};

module.exports = isValidId;
