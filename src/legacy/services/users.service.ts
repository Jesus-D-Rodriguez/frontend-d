import axios from 'axios';

const API_URL = 'http://localhost:3000/users'

export const getUsers = () => {
    try {
        axios.get(API_URL)
    } catch (error: unknown) {
        console.log("papa la cagaste")
    }
}