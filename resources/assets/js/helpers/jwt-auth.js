import jwtToken from './jwt-token';
import axios from 'axios';
import router from './../routes';

export default {
    init() {
        axios.interceptors.request.use(config => {
            console.log(config);
            config.headers['X-CSRF-TOKEN'] = window.Laravel.csrfToken;
            config.headers['X-Requested-With'] = 'XMLHttpRequest';

            if(jwtToken.getToken()) {
                config.headers['Authorization'] = 'Bearer '+ jwtToken.getToken();
            }

            return config;
        }, error => {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(response => {
            return response;
        }, error => {
            let errorResponseData = error.response.data;

            if(errorResponseData.error && (errorResponseData.error === "token_invalid" || errorResponseData.error === "token_expired" || errorResponseData.error === 'token_not_provided')) {
                store.dispatch('logoutRequest')
                    .then(()=> {
                        router.push({name: 'login'});
                    });
            }

            return Promise.reject(error);
        });
    }
};

