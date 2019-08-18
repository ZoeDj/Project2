module.exports = function(sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    event_topic: DataTypes.STRING,
    place_name: DataTypes.STRING,
    event_time: DataTypes.TIME,
    member1: DataTypes.STRING,
    member2: DataTypes.STRING,
    member3: DataTypes.STRING,
    member4: DataTypes.STRING,
    member5: DataTypes.STRING,
    member6: DataTypes.STRING,
    member7: DataTypes.STRING,
    member8: DataTypes.STRING,
    member9: DataTypes.STRING,
    member10: DataTypes.STRING,
  },
  {
      classMethods: {
          associate(models){
              Events.hasOne(models.Places, {foreignKey: 'place_name'})
          }
      }
  }
  );
  return Events;
};
