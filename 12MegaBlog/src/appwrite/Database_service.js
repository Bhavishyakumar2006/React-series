import conf from "../conf/Conf";
import { Client, ID, TablesDB, Query } from "appwrite";

class DatabaseService {
  client = new Client();
  database;
  constructor() {
    this.client.setEndpoint(conf.appwrite_url).setProject(conf.project_id);
    this.database = new TablesDB(this.client);
  }

  async createRow({
    title,
    slug,
    content,
    featuredimage,
    status,
    userid,
  }) {
    try {
      return await this.database.createRow({
        rowId: ID.unique(),
        databaseId: conf.database_id,
        tableId: conf.table_id,
        slug,
        data: {
          title,
          content,
          featuredimage,
          status,
          userid,
        },
      });
    } catch (error) {
      console.log(
        "Appwrite Database Error::DatabaseService::createDocument",
        error,
      );
    }
  }

  async updateDocument(slug, { title, content, featuredimage, status }) {
    try {
      return await this.database.updateDocument(
        conf.database_id,
        conf.table_id,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        },
      );
    } catch (error) {
      console.log(
        "Appwrite Database Error::DatabaseService::updateDocument",
        error,
      );
    }
  }

  async deleteDocument(slug) {
    try {
      await this.database.deleteDocument(conf.database_id, conf.table_id, slug);
    } catch (error) {
      console.log(
        "Appwrite Database Error::DatabaseService::deleteDocument",
        error,
      );
    }
  }

  async getDocument(slug) {
    try {
      return await this.database.getDocument(
        conf.database_id,
        conf.table_id,
        slug,
      );
    } catch (error) {
      console.log(
        "Appwrite Database Error::DatabaseService::getDocument",
        error,
      );
    }
  }

  async getAllDocuments(Queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listRows({
        databaseId: conf.database_id,
        tableId: conf.table_id,
        Queries,
    });
    } catch (error) {
      throw(error);
      
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
