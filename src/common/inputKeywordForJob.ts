export const inputKeywordForJob = async (ctx: any) => {
    ctx.session.__scenes = 'input_keyword_for_job';
    await ctx.reply("🔍 Введите название вакансии", {
        reply_markup: {
          input_field_placeholder: "🔍 Введите название вакансии"
        },
    });
};