import axios from "axios";
import { API_STRING } from "../Constant";

export const getRequest = () => {
    axios
        .get(`${API_STRING}&q=&&diet=high-protein`)
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};
