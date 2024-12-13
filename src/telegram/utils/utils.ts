import { Context } from 'telegraf'; 

// Утилитарная функция для отправки сообщения с кнопками 
export const sendReplyWithButtons = async (ctx: Context, text: string, buttons: any) => { 
    await ctx.reply(text, { 
        reply_markup: { 
            inline_keyboard: buttons 
        } 
    }); 
};


// Утилитарная функция для отправки новых кнопок и удаления старых 
export const updateButtons = async (ctx: Context, buttons: any) => { 
    await ctx.editMessageReplyMarkup({ 
        inline_keyboard: buttons 
    }); 
};