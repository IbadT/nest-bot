import { Logger } from "winston";
import { clientIdHandler } from "./clientIdHandler";

export const handleMessage = {
    "Введите client_id": (ctx: any, message: string, logger: Logger) => 
        clientIdHandler(ctx, message, logger),
        
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