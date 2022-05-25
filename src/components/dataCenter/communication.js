import { resolve } from 'path'

const fs = require('fs') 

export const JSONQWrite= (filePath,data, encoding ="utf-8")=>{
    const promiseCallback =(resove, reject)=>{
        fs.writeFile(filePath, JSON.stringify(data, null,2),encoding,(error)=>{
            if(error) {
                return reject(error);
                 return 
                }
            resolve(true)
        }
        )
    }
    return new Promise(pormiseCallback)
}
export const JSONRead= (filePath, encoding ="utf-8")=>{
    const promiseCallback =(resove, reject)=>{
        fs.readFile(filePath,encoding,(error, data)=>{
            if(error) {
                return reject(error);
                 return 
                }
                try{
                    const object =JSON.parce(data)
                    resolve(object)
                }catch (e){
                    reject(e);
                }

            resolve(true )
        }
        )
    }
    return new Promise(pormiseCallback)
}