import { IUser } from '../../models/IUser';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
    nextid: number;
    users: IUser[];
    isLoading: boolean;
    error: string;
}


const initialState: UserState = {
    nextid: 106,
    users: [
        {
            name: "Ivan",
            username: "Ivan228",
            email: "ivan@mail.com",
            id: 101
        },
        {
            name: "Petr",
            username: "Petr336",
            email: "petr@mail.com",
            id: 102
        },
        {
            name: "Oleg",
            username: "Oleg777",
            email: "oleg@mail.com",
            id: 103
        },
        {
            name: "Sergey",
            username: "Sergey555",
            email: "sargey@mail.com",
            id: 104
        },
        {
            name: "Alex",
            username: "AlexAlex",
            email: "alex@mail.com",
            id: 105
        }
    ],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser(state = initialState, action: PayloadAction<IUser>) {
            const newArr = [...state.users, action.payload];
            state.users = newArr;
            state.nextid = state.nextid + 1 
        },
        deleteUser(state = initialState, action: PayloadAction<number>) {
            const user = state.users.findIndex((item) => item.id === action.payload);
            const newArr = [
                ...state.users.slice(0, user),
                ...state.users.slice(user + 1)
            ];
            state.users = newArr;            
        },
        usersFetching(state = initialState) {
            state.isLoading = true;
        },
        usersFetchingSuccess(state = initialState, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            const newUsers = state.users.concat(action.payload);
            state.users = newUsers;

        },
        usersFetchingError(state = initialState, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }

    }
    
})

export default userSlice.reducer;