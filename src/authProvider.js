import { AUTH_LOGIN } from 'react-admin';
import axios from 'axios';

export default async function(type, params){
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const data = await axios.post('http://localhost:8081/rest/login',  { memberAccount: username, memberPassword: password } )
        .then(res=> {
            if (res.status < 200 || res.status >= 300) {
                throw new Error(res.statusText);
            }
            return res.data;
        })
        console.log(data)
        if (data.indexOf('token') !== -1) {
            localStorage.setItem('token', data);
            return Promise.resolve();
        }else{
            return Promise.reject();
        }
    }
}