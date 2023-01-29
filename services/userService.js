import {UserModel} from '../models/index.js'
import ApiError from '../utils/APIError.js';

const getUserFromId = async(userId) =>{
    const user = await UserModel.findById(userId);
    if(!user)
        throw new ApiError("Invaid User Id")
    return user;
}

const getAllUsersData = async() =>{
    const users = await UserModel.where();
    if(!users)
    throw new ApiError("Error fetching users' data")
    return users;
}

const blockUserById = async(userId) =>{
    const userData = await UserModel.findById(userId);
    const user = await UserModel.findByIdAndUpdate(userId, {
        $set: {
            ...userData,
            blocked: true
        }
    });
    // if(!user)
    //     throw new ApiError("Invaid User Id")
    return user;
}

const unblockUserById = async(userId) =>{
    const userData = await UserModel.findById(userId);
    const user = await UserModel.findByIdAndUpdate(userId, {
        $set: {
            ...userData,
            blocked: false
        }
    });
    // if(!user)
    //     throw new ApiError("Invaid User Id")
    return user; 
}

export {
    getUserFromId,
    getAllUsersData,
    blockUserById,
    unblockUserById
}