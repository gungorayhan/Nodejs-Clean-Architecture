import { inject, injectable } from "inversify";
import { User } from "../entities/User";
import { IUserInteractor } from "../interfaces/user/IUserInteractor";
import { IUserRepository } from "../interfaces/user/IUserRepository";
import { INTERFACE_TYPE } from "../utils";
import { IToken } from "../interfaces/IToken";
import { IHash } from "src/interfaces/IHash";

@injectable()
export class UserInteractor implements IUserInteractor {
    private repository: IUserRepository
    private token: IToken
    private hash: IHash
    constructor(@inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository,
        @inject(INTERFACE_TYPE.Token) token: IToken,
        @inject(INTERFACE_TYPE.Hash) hash: IHash) {
        this.repository = repository
        this.token = token
        this.hash = hash
    }
    async login(email: string, password: string): Promise<string> {
        const user = await this.repository.login(email)
        if (user) {

            const isCorrect = await this.hash.comparePassword(password, user.password ?? '')

            if (isCorrect) {
                const token = await this.token.generateToken(user)
                return token
            } else {
                throw new Error("Email or password incorrect")
            }

        } else {
            throw new Error("Email or password incorrect")
        }
    }
    async register(name: string, email: string, password: string, phone: string): Promise<string> {
        const hashedPassword = await this.hash.hashPassword(password)
        const user = await this.repository.register(name, email, hashedPassword, phone)
        if (user) {
            return "User Created"
        }
        else {
            throw new Error("User already exists or created failed")
        }
    }
    async getAllUser(): Promise<User[]> {
        const users = await this.repository.getAllUser()
        return users
    }
    async deleteUser(id: string): Promise<string> {
        const result = await this.repository.deleteUser(id)
        if (result) {
            return "User deleted"
        }
        else {
            throw new Error("User not found")
        }
    }
    async updateUser(id: string, user: User): Promise<string> {
        const result = await this.repository.updateUser(id, user)
        if (result) {
            return "User updated"
        } else {
            throw new Error("User not found or update failed")
        }
    }
}