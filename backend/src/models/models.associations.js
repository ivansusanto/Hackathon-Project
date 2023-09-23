const Appointment = require('./Appointment');
const Bundle = require('./Bundle');
const Event = require('./Event');
const HTrans = require('./HTrans');
const Bundle_Item = require('./Bundle_Item');
const User = require('./User');
const Wisata = require('./Wisata');

module.exports = () => {
    User.hasMany(Wisata, { foreignKey: 'user_id' });
    Wisata.belongsTo(User, { foreignKey: 'user_id' });

    User.hasMany(Appointment, { foreignKey: 'user_id' });
    Appointment.belongsTo(User, { foreignKey: 'user_id' });

    Wisata.hasMany(Event, { foreignKey: 'wisata_id' });
    Event.belongsTo(Wisata, { foreignKey: 'wisata_id' });

    Wisata.hasMany(Bundle_Item, { foreignKey: 'wisata_id' });
    Bundle_Item.belongsTo(Wisata, { foreignKey: 'wisata_id' });

    Bundle.hasMany(Bundle_Item, { foreignKey: 'bundle_id' });
    Bundle_Item.belongsTo(Bundle, { foreignKey: 'bundle_id' });

    User.hasMany(HTrans, { foreignKey: 'user_id' });
    HTrans.belongsTo(User, { foreignKey: 'user_id' });

    Bundle.hasMany(HTrans, { foreignKey: 'bundles_id' });
    HTrans.belongsTo(Bundle, { foreignKey: 'bundles_id' });
}