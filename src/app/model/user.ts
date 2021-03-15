import { Location } from './location';
import { Interest } from './interest';

export class User {
    id: string = '';
    name: string = '';
    gender: string = '';
    age: number = 0;
    photo: string = '';
    description: string = '';
    location: string = '';
    interest: string = '';
    liked: boolean = false;
    showed: boolean = true
}
