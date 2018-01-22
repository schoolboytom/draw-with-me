import {Model} from "../model";

export class UserModel extends Model{

    private _id: number;
    private _hash: string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;
    private _password: string;
    private _createdAt: number;
    private _updatedAt: number;
    private _createdBy: string;
    private _updatedBy: string;

    get hash(): string {
        return this._hash;
    }

    set hash(value: string) {
        this._hash = value;
    }

    get updatedBy(): string {
        return this._updatedBy;
    }

    set updatedBy(value: string) {
        this._updatedBy = value;
    }

    get createdBy(): string {
        return this._createdBy;
    }

    set createdBy(value: string) {
        this._createdBy = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt(value: number) {
        this._updatedAt = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get id(): number {
        return this._id;
    }

    // public getUserByHash(){
    //     this.connection.createQuery()
    // }
}