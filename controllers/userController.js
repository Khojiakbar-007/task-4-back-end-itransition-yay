import {
    blockUserById,
    getAllUsersData,
  getUserFromId,
  unblockUserById
} from '../services/userService.js';
  
const getUserInfo = async (req, res, next) => {
    const userId = req.authData.userId
    try {
        const user = await getUserFromId(userId)
        const responseUser = {
            id : user._id,
            email : user.email,
        } 
        res.json({user : responseUser});
    } catch (error) {
        next(error);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await getAllUsersData()
        console.log('users: ', users)
        const usersInfo = users.map(({_id, name, email, blocked}) => ({ _id, name, email, blocked: !!blocked}))
        console.log('usersInfo: ', usersInfo)
        res.json({users: usersInfo})
    } catch (error) {
        next(error)
    }
}

const blockUser = async (req, res, next) => {
    const userId = req.authData.userId
    try {
        const userBlocked = await blockUserById(userId)
        res.json({message: 'Successfully blocked', res: userBlocked})
    } catch (error) {
        next(error)
    }
}

const unblockUser = async (req, res, next) => {
    const userId = req.authData.userId
    try {
        const userUnblocked = await unblockUserById(userId)
        res.json({message: 'Successfully unblocked', res: userUnblocked})
    } catch (error) {
        next(error)
    }
}

 
export default { 
    getUserInfo,
    getAllUsers,
    blockUser,
    unblockUser
}