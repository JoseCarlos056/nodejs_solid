import { User } from "../modules/User";

export interface IUsersRepository{
    findByEmail(emal: string): Promise<User>;
    save(user: User): Promise<void>;
}