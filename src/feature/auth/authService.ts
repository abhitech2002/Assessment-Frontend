import axios, { AxiosResponse } from 'axios';

interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

interface LoginData {
    email: string;
    password: string;
}

const API_URL = 'http://localhost:3000/signup/';
const SIGN_IN = 'http://localhost:3000/signin/';

// Register User
const register = async (userData: UserData): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.post(API_URL, userData);
        return response.data; // Return response data if successful
    } catch (error) {
        throw error; // Throw error if registration fails
    }
};

// Login User
const login = async (loginData: LoginData): Promise<any> => {
    try {
        const response: AxiosResponse<any> = await axios.post(SIGN_IN, loginData);
        return response.data; // Return response data if successful
    } catch (error) {
        throw error; // Throw error if login fails
    }
};

// Logout User
const logout = (): void => {
    localStorage.removeItem('user');
};

const authService = {
    register, login, logout
}

export default authService