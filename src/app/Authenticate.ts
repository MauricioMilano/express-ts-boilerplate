import {Entity} from "../repository/interfaceRepository"
import {IdentityProviderModel} from "../models/identityProviderModel"
import { UserRepository } from "../repository/userRepository"
import { identityProviderRepository } from "../repository/identityProviderRepository"
export class Authenticate {
    static login(identity: IdentityProviderModel): String{
        const identityFromDatabase = identityProviderRepository.get(identity.username);
        // Encriptar Senha
        if (identityFromDatabase.password == identity.password){
            // Gerar Token para acesso 
            // Token Fake 
            const Token:String = "123"
            return Token
        }else {
            throw new Error("Autenticação inválida")
        }
    }  
}