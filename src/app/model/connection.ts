import { User } from "./user";

export class Connection {
    id: number = 0;
    user1: User = new User();
    user2: User = new User();
    accepted: boolean = false;
}
