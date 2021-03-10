import { User } from "./user";

const user: User = new User();
export class Connection {
    id: number = 0;
    user1: number = user.id;
    user2: number = user.id;
    accepted: boolean = false;
}
