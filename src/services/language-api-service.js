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
    },

    getHead() {
        let error = null;
        return fetch(`${URL}/language/head`, {
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
    },

    guess(guess) {
        let error = null;
        console.log(guess)
        return fetch(`${URL}/language/guess`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                guess: guess
            })
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
                error.message = data.error;
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