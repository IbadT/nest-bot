import { Ctx, Help, Start, Update, Command, Hears, On, Message, Action } from "nestjs-telegraf";
import { Context } from "telegraf";
import { TelegramService } from "./telegram.service";
import { ENUM_KEYBOARDS } from "./keyboards/hh_keyboards";

@Update()
export class TelegramUpdate {
    constructor(
        private readonly telegramService: TelegramService
    ) {}
    
    @Start()
    async startCommand(
        @Ctx() ctx: Context
    ) {
        await this.telegramService.showMainMenu(ctx);
    };


    @Help()
    async help(@Ctx() ctx: Context) {
        const helpText = `
            🤖 *Команды бота*:

            - */start*: Начать новую сессию и получить приветствие.
            - */help*: Получить список команд и их описание.

            *Поиск вакансий*:
            - *🔍 Найти вакансии*: Поиск вакансий на hh.
            - *📄 Мои заявки*: Просмотр вакансий, на которые вы подали заявку.

            *Создание тестов*:
            - *📝 Создать тест*: Создание нового теста с несколькими типами вопросов.
            - *📊 Мои тесты*: Просмотр и управление вашими тестами.

            *Техническая поддержка*:
            - *🛠️ Техническая поддержка*: Получить помощь по любым вопросам.
            - *📞 Связаться с поддержкой*: Прямо связаться с нашей службой поддержки.
            - *💬 Чат с поддержкой*: Начать живой чат с агентом поддержки.
            - *❓ FAQ*: Найти ответы на часто задаваемые вопросы.

            *Функции для администратора*:
            - *👤 Панель администратора*: Доступ к административным инструментам и настройкам.
            - *📊 Просмотр статистики*: Проверка статистики использования бота.
            - *✏️ Редактировать контент*: Изменение контента, управляемого ботом.
            - *👥 Управление пользователями*: Просмотр и управление пользователями.
            - *🔄 Резервное копирование данных*: Резервное копирование важных данных.
            - *⚙️ Настройки*: Настройка параметров бота.

            *Интернет магазин*:
            - *🛒 Магазин*: Просмотр и покупка товаров.
            - *🛍️ Просмотр товаров*: Просмотр всех доступных товаров.
            - *🔍 Поиск товара*: Найти конкретный товар.
            - *🛒 Моя корзина*: Просмотр товаров в вашей корзине.
            - *💳 Оформить заказ*: Перейти к оплате.

            Если вам нужна дополнительная помощь, не стесняйтесь спрашивать! 😊
        `;
        await ctx.reply(helpText, { parse_mode: 'Markdown' });
    };


    @Action(ENUM_KEYBOARDS.ADMIN_PANEL)
    async adminPanel(@Ctx() ctx: Context) {
        await this.telegramService.adminPanel(ctx);
    };

    @Action(ENUM_KEYBOARDS.SEARCH_JOBS)
    async searchJobs(@Ctx() ctx: Context) {
        // выбрать кнопки
        await this.telegramService.selectOptions(ctx)
        // await this.telegramService.searchJobs(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.HH_REGISTER)
    async hhRegister(@Ctx() ctx: Context) {
        await this.telegramService.hhRegister(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.CREATE_TEST)
    async createTest(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.SHOP)
    async shop(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.MY_APPLICATIONS)
    async myApplications(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.TECH_SUPPORT)
    async teachSupport(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.JOB_CATEGORY)
    async jubCategory(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.LOCATION)
    async location(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.SALARY_RANGE)
    async salaryRange(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.HOME)
    async home(@Ctx() ctx: Context) {
        await this.telegramService.backToMain(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.SEARCH)
    async search(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.ADD_QUESTION)
    async addQuestion(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.SUBMIT_TEST)
    async submitTest(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.CANCEL)
    async cancel(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.CONTACT_SUPPORT)
    async contactSupport(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.CHAT_SUPPORT)
    async chatSupport(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.FAQ)
    async faq(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };
    
    @Action(ENUM_KEYBOARDS.BACK_TO_MAIN)
    async backToMain(@Ctx() ctx: Context) {
        await this.telegramService.backToMain(ctx);
    };

    @Action(ENUM_KEYBOARDS.VIEW_STATS)
    async viewStats(@Ctx() ctx: Context) {
        await this.telegramService.viewStats(ctx);
    };

    @Action(ENUM_KEYBOARDS.EDIT_CONTENT)
    async editContent(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.MANAGE_USERS)
    async manageUsers(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.BACKUP_DATA)
    async backupData(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.SETTINGS)
    async settings(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.VIEW_PRODUCTS)
    async viewProducts(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.SEARCH_PRODUCT)
    async searchProduct(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.MY_CART)
    async myCart(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.CHECKOUT)
    async checkout(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.VIEW_IMAGE)
    async viewImage(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.PRICE)
    async price(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.DESCRIPTION)
    async description(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.ADD_TO_CART)
    async addToCart(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.BACK_TO_PRODUCTS)
    async backToProducts(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };



    @Action(ENUM_KEYBOARDS.USER_COUNT)
    async userCount(@Ctx() ctx: Context) {
        await this.telegramService.userCount(ctx);
    };

    @Action(ENUM_KEYBOARDS.ACTIVE_SESSIONS)
    async activeSessions(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.COMMAND_USAGE)
    async commandUsage(@Ctx() ctx: Context) {
        // await this.telegramService.createAdmin(ctx);
    };

    @Action(ENUM_KEYBOARDS.BACK_TO_ADMIN)
    async backToAdmin(@Ctx() ctx: Context) {
        await this.telegramService.backToAdmin(ctx);
    };


    @Action(ENUM_KEYBOARDS.WRITE_DOWN_FOR_JOB)
    async writeDownForJob(@Ctx() ctx: Context) {
        await this.telegramService.writeDownForJob(ctx);
    };

    @Action(ENUM_KEYBOARDS.INPUT_KEYWORD_FOR_JOB)
    async inputKeywordForJob(@Ctx() ctx: Context) {
        await this.telegramService.inputKeywordForJob(ctx);
    };

    @Action(ENUM_KEYBOARDS.GET_KEYWORD_FOR_JOB)
    async getKeywordForJob(@Ctx() ctx: Context) {
        await this.telegramService.getKeywordForJob(ctx);
    };



    @Action(ENUM_KEYBOARDS.BACK_TO_WORK)
    async backToWork(@Ctx() ctx: Context) {
        await this.telegramService.backToWork(ctx);
    };



    
    @Action("AGREE")
    async agree(@Ctx() ctx: Context) {
        await this.telegramService.agree(ctx);
    };








    // @Action(ENUM_KEYBOARDS.BACK_TO_ADMIN_AND_DELETE_LAST)
    // async backToAdminAndDeleteLast(@Ctx() ctx: Context) {
    //     await this.telegramService.backToAdminAndDeleteLast(ctx);
    // };



















    @On("poll_answer")
    async poll(
        @Ctx() ctx: Context
    ) {
        return await this.telegramService.handlePollAnswer(ctx);
    }


    @On("text")
    async handleOnText(
        @Ctx() ctx: Context, @Message("text") message: string
    ): Promise<void> {
        await this.telegramService.onTextHandleAction(ctx, message);
    };

    







    // @Command('scene')
    // async onSceneCommand(@Ctx() ctx: Context): Promise<void> {
    //     await ctx.enter(HELLO_SCENE_ID);
    // };

    @Hears(['hi', 'hello', 'hey', 'qq'])
    async check(
        @Ctx() ctx: Context
    ) {
        await ctx.reply("123");
    };
};


