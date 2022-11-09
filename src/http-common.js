import axios from "axios";
import Cookies from "js-cookie";


export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": Cookies.get('token') ? `Token ${Cookies.get('token')}` : null,
    },
});