import axios from "axios";
import { API_STRING } from "../Constant";

export const getRequest = (preferences, index) => {
    return axios.get(`${API_STRING}&q=&&${preferences}&from=${index}`);
};
