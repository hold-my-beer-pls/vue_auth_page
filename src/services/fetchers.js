import axios from "axios"

export const fetchUserInfo = async function() {
    const response = await axios.get('/api/user')
    return response.data
}

export const fetchLogin = async function(email, password) {
    const response = await axios.post('/api/login',{email, password})
    return response.data
}