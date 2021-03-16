'use strict'
var rp = require('request-promise');
const fs = require('fs');
const _ = require('underscore');

class repoController {
    constructor() { }

    // Get Repo Data
    async getRepoData(id){
        try{
            let options = {
                uri: 'https://api.github.com/users/mralexgray/repos',
                method: 'GET',
                headers: {'user-agent': 'node.js'}
            }

            // get all json data with request promise
            let repoData = await rp(options)

            if(repoData){

                // write all data in same directory
                fs.writeFile(__base+'/app/assets/allRepo.json', repoData, (err) => {
                    if (err) throw err;
                });

                // get first 10 element 
                repoData = JSON.parse(repoData)
                let firstTenData = _.first(repoData, 10)
                firstTenData = JSON.stringify(firstTenData)
                
                // write first 10 data in same directory
                fs.writeFile(__base+'/app/assets/10Element.json', firstTenData, (err) => {
                    if (err) throw err;
                });

                // repoData = fs.readFileSync(__base+'/app/assets/repo.json');
                // match id and send reponse
                repoData = _.find(repoData, function(data){ return data.id == id });
                if(repoData) return {success: true, msg:'Authantication success', data:repoData, statusCode:200} ;
                return {success: false, msg:'Not Found', data:{}, statusCode:404} ;

            }
            return {success: false, msg:'Failed to get data', data:{}, statusCode:404} ;
        }
        catch(err){
            return {success: false, msg:'Failed', data:{}, statusCode:302} ;
        } 
    }

    // Perform UnderScore Oprations

    async getUnderScoreData(id){
        try{
            let options = {
                uri: 'https://api.github.com/users/mralexgray/repos',
                method: 'GET',
                headers: {'user-agent': 'node.js'}
            }

            // get all json data with request promise
            let repoData = await rp(options)

            if(repoData){

                repoData = _.find(repoData, function(data){ return data.id == id });
                if(repoData) return {success: true, msg:'Authantication success', data:repoData, statusCode:200} ;
                return {success: false, msg:'Not Found', data:{}, statusCode:404} ;

            }
            return {success: false, msg:'Failed to get data', data:{}, statusCode:404} ;
        }
        catch(err){
            return {success: false, msg:'Failed', data:{}, statusCode:302} ;
        } 
    }
}

module.exports = new repoController();