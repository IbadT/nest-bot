export const writeDownForJob = async (ctx: any) => {
    ctx.session.__scenes = 'write_down_for_job';
    await ctx.reply("Введите название вакансии для автоматического поиска", {
        reply_markup: {
          input_field_placeholder: "Ключевое слово для поиска вакансии"
        },
    });
}