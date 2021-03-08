import { Location } from './location';
import { Interest } from './interest';

export class User {
    public id: number = 0;
    name: string = '';
    gender: string = '';
    age: number = 0;
    photo: string = '';
    description: string = '';
    location: Location = new Location();
    interests: Interest = new Interest();
}
