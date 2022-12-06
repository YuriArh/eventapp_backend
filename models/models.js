const sequelize = require("../db");

const { DataTypes } = require("sequelize");

// const User = sequelize.define("user", {
//   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncreent: true },
//   email: { type: DataTypes.STRING, unique: true },
//   password: { type: DataTypes.STRING },
//   name: { type: DataTypes.STRING, unique: true },
// });

const Event = sequelize.define("event", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncreent: true },
  name: { type: DataTypes.STRING },

  long: { type: DataTypes.INTEGER, allowNull: false },
  lat: { type: DataTypes.INTEGER, allowNull: false },
});

const EventInfo = sequelize.define("event_info", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncreent: true },
  desc: { type: DataTypes.STRING },
  time: { type: DataTypes.INTEGER },
});

Event.hasMany(EventInfo);
EventInfo.belongsTo(Event);

module.exports = {
  Event,
  EventInfo,
};
