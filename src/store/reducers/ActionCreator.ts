import axios from 'axios';
import { AppDispatch } from '../store';
import IUser from '../../models/IUser';
import { userSlice } from './UserSlice';


export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching())
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
        const array = response.data.map(item => ({
            name: item.name,
            username: item.username,
            email: item.email,
            id: item.id
        }))
        dispatch(userSlice.actions.usersFetchingSuccess(array))
    } catch (error: any) {
        dispatch(userSlice.actions.usersFetchingError(error.message))
    }
}
export const deleteUser = (id: number) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.deleteUser(id))
}

export const addUser = (item: IUser) => (dispatch: AppDispatch) => {
    dispatch(userSlice.actions.addUser(item))
}