import {Entity, Repository} from "./interfaceRepository"
import {IdentityProviderModel} from "../models/identityProviderModel"
 export class identityProviderRepository implements Repository<Entity<IdentityProviderModel>> {
     // IMPLEMENTAR CLASSES de Banco 
    static create(object: IdentityProviderModel): Entity<IdentityProviderModel> {
        throw new Error("Method not implemented.")
    }
    static get(username: String): Entity<IdentityProviderModel> {
        throw new Error("Method not implemented.")
    }
    static update(object: Partial<IdentityProviderModel>): Entity<IdentityProviderModel> {
        throw new Error("Method not implemented.")
    }
    static delete(id: String): Entity<IdentityProviderModel> {
        throw new Error("Method not implemented.")
    }
}