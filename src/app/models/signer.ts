import { FormToSigner } from "./formToSigner";
import { Person } from "./person";
import { User } from "./user"

export interface Signer {
    //[x: string]: 
    Person:Person;
    id: number;
    userId: number;
    personId: number;
    user: User[];
    person: Person[];
    formToSigners: FormToSigner[];
}
