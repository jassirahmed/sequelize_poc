const db = require('../models')
const User = db.user;

const addUser = async (req, res) => {
    const jane = await User.create({ firstName: "Jassir", lastName: 'Ahmed' });
    console.log(jane instanceof User);
    await jane.save();
    console.log("Jane was saved to database");
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON())
}

const getUsers = async (req, res) => {
    const data = await User.findAll({})
    res.status(200).json({ data: data })
}

const getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: data })
}

const postUser = async (req, res) => {
    const postData = req.body
    let data;
    if (postData.length > 1) {
        data = await User.bulkCreate(postData)
    } else {
        data = await User.create(postData)
    }
    res.status(200).json({ data: data })
}

const deleteUser = async (req, res) => {
    const data = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: data })
}

const updateUser = async (req, res) => {
    const updateData = req.body
    const data = await User.update(updateData, {
        where: {
            id: req.params.id,

        }
    })
    res.status(200).json({ data: data })
}

const usersCount = async (req, res) => {
    const count = await User.count();
    res.status(200).json({ data: count + 1 })
}

const queryUser = async (req, res) => {
    const data = await User.findAll({
        attributes: {
            include: ['id']
        }
    })
    res.status(200).json({ data: data })
}

const finders = async (req, res) => {
    const [user, created] = await User.findOrCreate({
        where: { firstName: 'Jassir' },
        defaults: {
            lastName: 'Mohd'
        }
    })
    res.status(200).json({ data: user, created: created })
}

const virtualUser = async (req, res) => {
    const data = await User.findAll({
        where: { lastName: 'Mohd' }
    })
    res.status(200).json({ data: data })
}
module.exports = {
    addUser,
    getUsers,
    getUser,
    postUser,
    deleteUser,
    updateUser,
    queryUser,
    usersCount,
    finders,
    virtualUser
}