import { INots } from './notes.interface';
import { IPassports } from './passports.interface';
import { IBanks } from './banks.interface';
import { IEmails } from './emails.interface';
import { IPasswords } from './passwords.interface';
import { ILogin } from './login.interface';

export class Passwords{

    logins: ILogin[];
    passwords: IPasswords[];
    emails: IEmails[];
    banks: IBanks[];
    passports: IPassports[];
    notes: INots[];

    constructor(){
        this.logins = [];
        this.passwords = [];
        this.emails = [];
        this.banks = [];
        this.passports = [];
        this.notes = [];
    }
}