import axios from "axios";
import { API_STRING } from "../Constant";

export const getRequest = (index) => {
    return axios.get(`${API_STRING}&q=&&diet=balanced&from=${index}`);
};
