import { BadRequestException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export const getVacancyFromHH = async (keyword: string) => {
    try {
        const apiURL = new ConfigService().get('GET_VACANCIES');
        const url = `${apiURL}?text=${encodeURIComponent(keyword)}`
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Failed to fetch vacancies from hh.ru');
        };
        return response.json();      
    } catch ({ message }) {
        throw new BadRequestException(`Получение вакансий завершилось с ошибкой: ${message}`);
    }
};


export const makeStringFromVacancies = async (vacancies) => {
    try {
        let replyMessage = 'Вакансии:\n\n'; 
        vacancies.forEach(vacancy => { 
            replyMessage += `Название: ${vacancy.name}\n`; 
            replyMessage += `Зарплата: ${vacancy.salary ? `${vacancy.salary.from} - ${vacancy.salary.to} ${vacancy.salary.currency}` : 'не указана'}\n`; 
            replyMessage += `URL: ${vacancy.alternate_url}\n\n`;
        });
        return replyMessage;
    } catch ({ message }) {
        throw new BadRequestException(`Конвертация завершилось с ошибкой: ${message}`);
    }
}