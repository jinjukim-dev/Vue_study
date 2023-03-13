import axios from 'axios'

function getData(){
    const url = 'https://random-data-api.com/api/v2/users?size=5';
    return axios.get(url);
}

export { getData };