import { Logger } from "winston";
import { clientIdHandler } from "./clientIdHandler";
import { getVacancyFromHH } from "src/api/get-vacancy-from-hh";
import { sendReplyWithButtons, updateButtons } from "../utils/utils";
import { backButton } from "../keyboards/hh_keyboards";


export const handleMessage = {
    "Введите client_id": (ctx: any, message: string, logger: Logger) => 
        clientIdHandler(ctx, message, logger),
        
    "write_down_for_job": async (ctx: any, message: string, logger: Logger) => {
        logger.info("Функция handleMessage - write_down_for_job");
        const vacancies = await getVacancyFromHH(message);
        let replyMessage = 'Вакансии:\n\n'; 
        vacancies.items.forEach(vacancy => { 
            replyMessage += `Название: ${vacancy.name}\n`; 
            replyMessage += `Зарплата: ${vacancy.salary ? `${vacancy.salary.from} - ${vacancy.salary.to} ${vacancy.salary.currency}` : 'не указана'}\n`; 
            replyMessage += `URL: ${vacancy.alternate_url}\n\n`;

        });
        await sendReplyWithButtons(ctx, replyMessage, backButton)
    },


    // в callback_data нет enum
    "input_keyword_for_job": async (ctx: any, message: string, logger: Logger) => {
        logger.info("Функция handleMessage - input_keyword_for_job");
        ctx.session.vacancy_name = message;
        await ctx.reply(`Вакансия - ${message}`,{
            reply_markup: {
                inline_keyboard: [
                    [{ text: "✅ Сохраняем?", callback_data: "AGREE" }]
                ]
            }
        })
    }
    // "Введите client_secret": (ctx: any, message: string, logger: Logger) => 
    //     clientSecretHandler(ctx, message, logger),
        
    // "Выберите товар, который хотите пропустить в автоматический парсинг": (ctx: any, message: string, logger: Logger) => 
    //     inputProductNumber(ctx, message, logger),
        
    // "Выберите товар, который не хотите пропускать в автоматический парсинг": (ctx: any, message: string, logger: Logger) => 
    //     inputProductNumber(ctx, message, logger),
        
    // "Введите номер товара, который запустим в парсинге": (ctx: any, message: string, logger: Logger) => 
    //     startParserWithOne(ctx, message, logger),
        
    // "Введите свою цену _(например 12900)_": (ctx: any, message: string, logger: Logger) => 
    //     inputOwnPrice(ctx, message, logger),
        
    // "Введите ID из телеграм аккаунта пользователя, которого нужно дабовить": (ctx: any, message: string, logger: Logger) => 
    //     createUserByTelegramID(ctx, message, logger),
        
    // "Введите данные *telegram_id*, которого нужно удалить?": (ctx: any, message: string, logger: Logger) => 
    //     remoteUserByTelegramID(ctx, message, logger)
};