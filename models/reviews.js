module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    user_name: DataTypes.STRING,
    place_name: DataTypes.STRING,
    content: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
  },
  {
    classMethods: {
        associate(models){
            Reviews.hasOne(models.users, {foreignKey: 'user_name'})
        }
    }
}
  
  );
  return Reviews;
};
