import { Context as TelegrafContext } from "telegraf";

export interface Context extends TelegrafContext {
    type?: 'getName' | 'getSecondName' | 'getSurname' | 'getRole' | 'getDay' | 'getMonth' | 'getYear' | 'getGrope' | 'getTel' | 'goEnd' | 'default',
    name?: string,
    lastName?: string,
    surname?: string,
    role?: 'teacher' | 'student' | 'enrollee',
    tel?: string,
    group?: string,
    shortName?: string,
    day?: string,
    month?: string,
    year?: string,
    DOB?: string,
    userId?: string
}