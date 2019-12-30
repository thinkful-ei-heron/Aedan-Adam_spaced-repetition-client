import config from '../config';
import TokenService from './token-service';
let URL = config.API_ENDPOINT;

const languageApi = {
    getAllLanguage() {
        let error = null;
        return fetch(`${URL}/language`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(jsonResp => {
            if(jsonResp.ok) {
                return jsonResp.json();
            } else {
                error = {};
                return jsonResp.json();
            }
        })
        .then(data => {
            if(error) {
                error.message = data.message;
                throw error;
            } else {
                return data;
            }
        })
        .catch(error => {
            console.log(error);
        });
    }





};




export default languageApi;