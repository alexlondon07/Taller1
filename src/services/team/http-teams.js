import { BASE_API, HTTP_TEAMS } from '../config';
import httpBase from '../http-base';

class HttpTeam {

    async getTeams(){
        try {
            const url  = `${ BASE_API }${ HTTP_TEAMS.getTeamsSpain }`
            const data = await httpBase.baseGet(url, {});

            console.log('url: ' + url);
            return data;
        } catch (error) {
            console.log(error);
        }
    }
}

export default new HttpTeam;