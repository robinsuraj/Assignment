/**
 * Created by Suraj on 04/03/2021.
 */
'use strict'
const repoController = require('../../modules/controllers/repoController');
const resHandler = require('../../modules/utils/resHandler');

/**
 * handles ajax calls 
 */

class RepoRoutes {
    constructor() { }

    //Get Repo Data
    async GetRepo(req, res) {
        try {
            let { id } = req.params
            if(id){
                let repoData = await repoController.getRepoData(id);
                if (repoData.success) {
                    resHandler.sendRes(repoData.success, repoData.msg, repoData.data, repoData.statusCode, res);
                } else {
                    resHandler.sendErr(repoData.statusCode, repoData.msg, {}, res);
                }
            }else{
                resHandler.sendErr(302, 'Provide id', {}, res)
            }
        }
        catch (err) {
            resHandler.sendErr({}, 'Connection error', {}, res);
        }
    }

    //Perform Underscore opration 
    async GetUnderScore(req, res) {
        try {
            let repoData = await repoController.getUnderScoreData();
            if (repoData.success) {
                resHandler.sendRes(repoData.success, repoData.msg, repoData.data, repoData.statusCode, res);
            } else {
                resHandler.sendErr(repoData.statusCode, repoData.msg, {}, res);
            }
        }
        catch (err) {
            resHandler.sendErr({}, 'Connection error', {}, res);
        }
    }


}
module.exports = new RepoRoutes()
