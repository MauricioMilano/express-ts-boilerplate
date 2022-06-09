import {Entity, Repository} from "./interfaceRepository"
import {UserModel} from "../models/userModel"
 export class UserRepository implements  Repository<Entity<UserModel>> {
     // IMPLEMENTAR CLASSES de Banco 
     create(object: UserModel): Entity<UserModel> {
         throw new Error("Method not implemented.")
     }
     get(id: String): Entity<UserModel> {
         throw new Error("Method not implemented.")
     }
     update(object: Partial<UserModel>): Entity<UserModel> {
         throw new Error("Method not implemented.")
     }
     delete(id: String): Entity<UserModel> {
         throw new Error("Method not implemented.")
     }
     
}