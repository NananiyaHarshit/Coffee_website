import axios from 'axios'
const BASE_URL = 'https://api.sampleapis.com/coffee'

export const getHotCoffee = async (limit=20) =>{
    const response = await axios.get(`${BASE_URL}/hot`)
    return response.data.slice(0, limit);
}

export const getOneCoffee = async () =>{
    const response = await axios.get(`${BASE_URL}/hot/13`)
    return response.data;
}