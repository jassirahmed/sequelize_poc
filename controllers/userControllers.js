const db = require('../models')
const User = db.user;
const addUser = async (req, res) => {
    const jane = await User.create({ firstName: "Jassir", lastName: 'Ahmed' });
    console.log(jane instanceof User);
    console.log(jane.name);
    // jane.set({ firstName: 'Jassir', lastName: 'Ahmed' })
    // jane.update({ firstName: 'Jassir', lastName: 'Ahmed' })
    await jane.save();
    await jane.reload();
    console.log("Jane was saved to database");
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON())
}
module.exports = {
    addUser
}