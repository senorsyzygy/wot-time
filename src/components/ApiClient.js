import axios from "axios";

export class ApiClient {
    responseStatusCheck(responseObject) {
        if(responseObject.status >= 200 && responseObject.status < 300){
            return Promise.resolve(responseObject.data);
        }else{
            return Promise.reject(new Error(responseObject.statusText));
        }
    }
    getItems(url){
        return axios
        .get(url)
        .then(this.responseStatusCheck)
        .catch((error) => {
            console.log(error);
        })
    }
    getPlaytime(accSearch){
        return this.getItems(`https://api.worldoftanks.eu/wot/account/list/?application_id=1416ea30d8658278ca7c36e69ad730eb&search=${accSearch}&fields=account_id `);
    }
    getUserPlaytime(accountId){
        return this.getItems(`https://api.worldoftanks.eu/wot/account/info/?application_id=1416ea30d8658278ca7c36e69ad730eb&account_id=${accountId}&fields=statistics.all.battles`)
    }
}

// https://api.worldoftanks.eu/wot/account/list/?application_id=1416ea30d8658278ca7c36e69ad730eb&search=&fields=account_id - first example request
// https://api.worldoftanks.eu/wot/account/info/?application_id=1416ea30d8658278ca7c36e69ad730eb&account_id=&fields=statistics.all.battles - second example request