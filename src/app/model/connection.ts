import { User } from "./user";

const user: User = new User();
export class Connection {
    id: string = '';
    user1: string = user.id;
    user2: string = user.id;
    accepted: boolean = false;
}
