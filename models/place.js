module.exports = function(sequelize, DataTypes) {
  var Place = sequelize.define("Place", {
    name: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    address: DataTypes.STRING,
    photo: DataTypes.STRING,
    wifi: DataTypes.BOOLEAN,
    bigtables: DataTypes.BOOLEAN,
    waiters: DataTypes.BOOLEAN,
    dogfriendly: DataTypes.BOOLEAN,
    kidfriendly: DataTypes.BOOLEAN,
    website: DataTypes.STRING
  });

  Place.associate = function(models) {
    // assoiates a place with its reviews
    Place.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };
  return Place;
};
