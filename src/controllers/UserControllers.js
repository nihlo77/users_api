
const User = require(`../Models/User`)

// show users DB
const getUsers = async (req, res) => {
    const users = await User.find()
    //console.log(req.params, req.query)
    res.status(200).json(users)
}

// Create usernDB
const createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json({ status: `Successfully user created` })
        //throw
    } catch (error) {
        console.log(error)
        res.status(203).json({ status: `Unuccessfully user created`, error })
    }
}

// Update user DB
const updateUser = async (req, res) => {
    try {
      const id = req.params.userId
      const updated = await User.findByIdAndUpdate(id, { $set: req.body })
      res.status(201).json(updated)
    } catch (error) {
      res.status(201).json({ msj: `Failed updated`, error })
    }
  }
  
  // Update user DB
  const deleteUser = async (req, res) => {
    const id = req.params.userId
    await User.findByIdAndDelete(id)
    res.status(200).json({ msj: `User deleted` })
  }
  


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
  }