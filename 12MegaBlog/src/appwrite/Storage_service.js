import conf from "../conf/Conf";
import {Client, Storage, ID} from 'appwrite'

class Storageservice {
    client = new Client()
    storage;

    constructor () {
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.project_id);
        this.storage = Storage(this.client)
    }

    async uploadFile (file) {
        try {
            return await this.storage.createFile(
                conf.storage_id,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log('Appwrite Storage Error::Storageservice::uploadFile', error);
            
        }
    }

    async deleteFile (fileId) {
        try {
            return await this.storage.deleteFile(
                conf.storage_id,
                fileId
            )
            
        } catch (error) {
            console.log('Appwrite Storage Error::Storageservice::uploadFile', error);
        }
    }
    
    getFilePreview (fileId) {
        return this.storage.getFilePreview(
            conf.storage_id,
            fileId
        )
    }
}

const storageservice = new Storageservice()

export default storageservice;