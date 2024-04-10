import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

// Define the type for the user data
interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    location: string;
    userName: string;
    password: string;
}

// Define the initial state type
interface AuthState {
    user: UserData | null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user') || 'null');

const initialState: AuthState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

export const register = createAsyncThunk<UserData, UserData, { rejectValue: { message: string, data: any } }>(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const response = await authService.register(userData);
            return response.data;
        } catch (error: any) {
            const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            return thunkAPI.rejectWithValue({ message: 'Signup failed', data: errorMessage });
        }
    }
);


// Define the auth slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload?.message || 'Signup failed';
            })
    },
});

// Export the actions
export const { reset } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
