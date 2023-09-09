const { HttpError } = require("../helpers");

const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    const empty = req._body;

    if (!empty) {
      if (req.method === "PUT") {
        next(HttpError(400, "missing fields"));
      } else if (req.method === "PATCH") {
        next(HttpError(400, "missing field favorite"));
      }
    }
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
//
