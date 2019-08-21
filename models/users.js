module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("users", {
    user_name: DataTypes.STRING,
    user_location: DataTypes.STRING
  }
  );
  return Users;
};
