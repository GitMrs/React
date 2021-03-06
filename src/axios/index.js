import JsonP from 'jsonp';
export default class Axios{
    static jsonp(option){
        return new Promise((resolve,reject)=>{
            JsonP(option.url,{
                param:"callback"
            },(err,response)=>{
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }
}