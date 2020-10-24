export interface Value {
    id: number;
    name: string;
}
//
export interface LoginUser {
    username: string;
    password: string;
}
//
export interface UserToken {
    token: string;
}
//
export interface User {
    id: number;
    username: string;
    gender: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActivity: Date;
    city: string;
    country: string;
    introduction: string;
    lookingFor?: string;
    interests?: string;
    photoUrl?: string;
    photos?: Photos[];

}
//
export interface Photos {
    id: number;
    description: string;
    url: string;
    dateAdded: Date;
    isMain: boolean;

}