import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'f8e318a4cb9b42d692dc8904da56b8de'
    }
})