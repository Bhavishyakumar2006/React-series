import { use } from "react";
import conf from "../conf/Conf";
import {Client, Account, ID} from 'appwrite'

class AuthService {
    client = new Client()
    account;

    constructor () {
        this.client
        .setEndpoint(conf.appwrite_url)
        .setProject(conf.project_id);
        this.account = new Account(this.client);
    }

    async createAccount ({email, password, name}) { //sign up
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //login the user
                this.login({email, password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login ({email, password}) { //sign in
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser () { // checking user logged in or not 
        try {
            return await this.account.get()
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout () { // sign out
        try {
            await this.account.deleteSessions()            
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService()

export default authService;