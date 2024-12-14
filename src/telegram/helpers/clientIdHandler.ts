export const clientIdHandler = async (ctx: any, message: string, logger): Promise<void> => {
    // записываем client_id в сессию
    ctx.session.userData.client_id = message;
    ctx.session.__scenes = "Введите client_secret"
    await ctx.reply("Введите client_secret", {
        reply_markup: {
            input_field_placeholder: "client_secret"
        },
    })
};

