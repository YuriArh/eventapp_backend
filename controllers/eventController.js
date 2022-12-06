const ApiError = require("../error/ApiError");

class EventController {
  async create(req, res) {}

  async getAll(req, res) {}

  async getOne(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан ID"));
    }
    res.json(id);
  }
}

module.exports = new EventController();
