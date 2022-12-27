module.exports = (sequelize, DataTypes, Model) => {
    class User extends Model { }

    User.init({
        // Model attributes are defined here
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                const rawValue = this.getDataValue('firstName')
                return rawValue ? "Mr. " + rawValue.toUpperCase() : null
            }
        },
        lastName: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'users', // We need to choose the model name
    });
    console.log(User === sequelize.models.User); // true

    return User
}