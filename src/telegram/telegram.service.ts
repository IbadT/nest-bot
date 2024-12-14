// import { Injectable, Logger } from "@nestjs/common";
import { Injectable, Inject } from "@nestjs/common";
import { InjectBot } from "nestjs-telegraf";
import { Context, Telegraf } from "telegraf";
import { Logger } from "winston";
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { getAllSessions } from "src/middleware/session.middleware";
import { PrismaService } from "src/prisma.service";
import { ENUM_KEYBOARDS, adminButton, adminButtons, mainMenuButtons, searchJobsButtons, selectAnOptionSearchJobsButtons, viewStatsButtons } from "./keyboards/hh_keyboards";
import { sendReplyWithButtons, updateButtons } from "./utils/utils";
import { TUser } from "./types/user.type";
import { ConfigService } from "@nestjs/config";
import { replyMessageForReply } from "./helpers/replyMessageForReply";
import { writeDownForJob } from "src/common/writeDownForJob";
import { getVacancyFromHH, makeStringFromVacancies } from "src/api/get-vacancy-from-hh";
import { inputKeywordForJob } from "src/common/inputKeywordForJob";
import { Cron, CronExpression } from "@nestjs/schedule";

// {
//     id: 504081934,
//     is_bot: false,
//     first_name: 'Eduard',
//     last_name: 'Kononovich中国👨‍💻',
//     username: 'Drm_it_bad',
//     language_code: 'ru'
// }






@Injectable()
export class TelegramService {

    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
        private readonly prisma: PrismaService,
        private readonly configService: ConfigService,
        @InjectBot() private readonly bot: Telegraf<Context>,
    ) {
        this.bot = new Telegraf(configService.get<string>("TELEGRAM_TOKEN"));
    }

    // /**
    //  * Функция для сложения двух чисел.
    //  * @param a Первое число.
    //  * @param b Второе число.
    //  * @returns Сумма двух чисел.
    //  */ 

    /**
     * 
     * @param ctx 
     * @returns 
     */
    async showMainMenu(
        ctx: any
    ) {
        ctx.session.__scenes = "";
        this.logger.info("Вызван showMainMenu");
        if(!ctx.session.is_auth) {
            await this.register({ telegram_id: ctx.from.id, username: ctx.from.username });
            // нужно ли записывать user_id, или лучше записать is_auth: true
            ctx.session.tg_id = ctx.from.id;
            ctx.session.is_auth = true;
        };
        if(ctx.from.id === 504081934 && !mainMenuButtons.some(button => button[0].callback_data === ENUM_KEYBOARDS.ADMIN_PANEL)) {
            mainMenuButtons.unshift(...adminButton)
            await ctx.reply(`Эдуард Владимирович, добрый день!`);
        } else {
            await ctx.reply(`${ctx.from.first_name}, добрый день!`);
        };
        // return await this.sendQuiz(ctx);
        await sendReplyWithButtons(ctx, 'Что будем делать?', mainMenuButtons)
    };



    async adminPanel(ctx: any) {
        // await sendReplyWithButtons(ctx, "Панель администратора:", adminButtons);
        await updateButtons(ctx, adminButtons);
    };


    async userCount(ctx: any) {
        const users = await this.prisma.user.findMany({
            where: {
                NOT: {
                    telegram_id: ctx.from.id
                }
            }
        });
        const userCount = users.length; 
        let userList = `Количество пользователей: ${userCount}\n\n`; 
        users.forEach(user => { 
            userList += `ID: ${user.id}\nИмя пользователя: @${user.username}\n\n`; 
        }); 
        // await ctx.reply(userList);
        await sendReplyWithButtons(ctx, userList, [viewStatsButtons[3]])
    };


    async viewStats(ctx: any) {
        // await sendReplyWithButtons(ctx, "Получение статистики:", viewStatsButtons)
        await updateButtons(ctx, viewStatsButtons);
    };


    async backToAdmin(ctx: any) {
        await updateButtons(ctx, adminButtons);
    };

    async backToMain(ctx: any) {
        await updateButtons(ctx, mainMenuButtons);
    };



    async selectOptions(ctx: any) {
        await updateButtons(ctx, selectAnOptionSearchJobsButtons);
    };





    async writeDownForJob(ctx: any) {
        await inputKeywordForJob(ctx);
    }

    async inputKeywordForJob(ctx: any) {
        await writeDownForJob(ctx);
    };

    async getKeywordForJob(ctx: any) {
        const word = await this.prisma.user.findFirst({
            where: {
                telegram_id: ctx.from.id
            },
            select: {
                vacancy_name: true
            }
        });
        await ctx.reply(word.vacancy_name);
        // await updateButtons(ctx)
    }



    // не используется
    async searchJobs(ctx: any) {
        // await updateButtons(ctx, searchJobsButtons);
        const apiUrl = 'https://api.hh.ru/vacancies';
        // const keyword = 'Javascript'
        // const keyword = 'Backend'
        const keyword = 'Node.js'
        // const vacancies = await getVacancyFromHH(this.configService.get<string>("GET_VACANCIES"), keyword)
        const vacancies = await getVacancyFromHH(keyword)
        // const url = `${apiUrl}?text=${encodeURIComponent(keyword)}`
        // const response = await fetch(url);
        // if(!response.ok) {
        //     throw new Error('Failed to fetch vacancies from hh.ru');
        // };
        // const data = await response.json();

        let message = 'Вакансии:\n\n'; 
        vacancies.items.forEach(vacancy => { 
            message += `Название: ${vacancy.name}\n`; 
            message += `Зарплата: ${vacancy.salary ? `${vacancy.salary.from} - ${vacancy.salary.to} ${vacancy.salary.currency}` : 'не указана'}\n`; 
            message += `URL: ${vacancy.alternate_url}\n\n`;

        });
        return await ctx.reply(message);
    }

    async hhRegister(ctx: any) {
        // ввести данные
    }





    async backToWork(ctx: any) {
        await updateButtons(ctx, selectAnOptionSearchJobsButtons)
        // await ctx.deleteMessage();
    }












    async onTextHandleAction(ctx: any, message: string): Promise<void> {
        // ctx.session.__scenes = "Введите client_id";
        this.logger.info("Вызвана функция onTextHandleAction");
        await replyMessageForReply(ctx, message, this.logger);
    }






    async agree(ctx: any) {
        const vacancy_name = ctx.session.vacancy_name
        const respone = await this.prisma.user.update({
            where: {
                telegram_id: ctx.from.id
            },
            data: {
                vacancy_name
            }
        });
        if(!respone) {
            await ctx.reply("❌ Добавление вакансии произошло с ошибкой ❌")
            return await updateButtons(ctx, selectAnOptionSearchJobsButtons);
        };
        await ctx.reply("✅ Название вакансии добавлено ✅");
        return await updateButtons(ctx, selectAnOptionSearchJobsButtons);
    }























    /**
     * Функция, которая проверяет, есть ли пользователь в базе данных
     * @param telegram_id 
     * @returns true or false
     */
    async checkAuthUser(telegram_id: number) {
        this.logger.info("Вызвана функция checkAuthUser");
        try {
            const checkUser = await this.prisma.user.findUnique({
                where: { telegram_id }
            });
            return Boolean(checkUser);
        } catch (error) {
            console.error("Ошибка :", error);
            this.logger.error("Ошибка при выполнении запроса к базе данных");
        }
    };

    async handlePollAnswer(ctx: Context) {
        console.log({ poll: ctx.pollAnswer });
        
        const pollAnswer = ctx.pollAnswer;
        const userId = pollAnswer.user.id;
        const selectedOption = pollAnswer.option_ids[0];
    
        // Обрабатываем результат опроса
        if (selectedOption === 0) {
          await ctx.telegram.sendMessage(userId, 'Поздравляю, вы выбрали правильный ответ!');
        } else {
          await ctx.telegram.sendMessage(userId, 'К сожалению, ваш ответ неверный.');
        }
    };
    

    async sendQuiz(ctx: Context) {
        const question = 'Какой цвет небо?';
        const options = ['Синий', 'Красный', 'Зелёный', 'Жёлтый'];
        
        await ctx.replyWithQuiz(question, options, {
          correct_option_id: 0, // Индекс правильного ответа
          is_anonymous: true,   // Делает квиз анонимным
        //   type: 'quiz',

        reply_markup: {
            inline_keyboard: [
              [{ text: '💡 Пояснение', callback_data: 'explanation' }],
            ],
          },
        });
    }


    async register(user: TUser) {
        // Проверка, существует ли пользователь в базе данных
        const existingUser = await this.prisma.user.findUnique({
            where: { telegram_id: user.telegram_id }
        });
    
        // Если пользователь уже существует, ничего не делаем
        if (existingUser) {
            console.log(existingUser);
            return existingUser;
        }
    
        // Если пользователя нет, создаем нового
        return await this.prisma.user.create({
            data: user
        });
    };



    // @Cron('0 0 9 * * *')
    // @Cron('* * * * * *')
    // @Cron(CronExpression.EVERY_10_SECONDS)
    // @Cron(CronExpression.EVERY_MINUTE)
    async getCronVacancy() {
        const users = await this.prisma.user.findMany({
            where: {
                has_access: true, 
                vacancy_name: {
                    not: ""
                },
            },
            select: {
                telegram_id: true,
                vacancy_name: true,
            }
        });
        
        const responses = await Promise.all(users.map(async ({ telegram_id, vacancy_name}) => {
            const data = await getVacancyFromHH(vacancy_name);
            return {
                telegram_id,
                data
            }
        }));

        const messageHeader = "🌞 Доброе утро, Эдуард! 🌟 Вот свежие утренние вакансии по Вашему запросу 🔍:";
        for(const response of responses) {
            const vacancies = await makeStringFromVacancies(response.data.items);
            const fullMessage = `${messageHeader}\n\n${vacancies}`;
            await this.bot.telegram.sendMessage(Number(response.telegram_id), fullMessage);
        }
    };
    
};







// GET_ACCESS_TOKEN_URL
// {
//   "access_token": "exampleAccessTokenRandomSymbols012345678900000000000000000000000",
//   "token_type": "bearer",
//   "expires_in": 1209600,
//   "refresh_token": "exampleRefreshTokenRandomSymbols01234567890000000000000000000000"
// }


// GET_VACANCIES
// {
//     "arguments": [
//       {
//         "argument": "page",
//         "cluster_group": null,
//         "disable_url": "https://...",
//         "value": "0",
//         "value_description": null
//       },
//       {
//         "argument": "professional_role",
//         "cluster_group": {
//           "id": "professional_role",
//           "name": "Профессиональная роль"
//         },
//         "disable_url": "https://...",
//         "value": "90",
//         "value_description": "Охранник"
//       }
//     ],
//     "clusters": null,
//     "fixes": null,
//     "found": 13,
//     "items": [
//       {
//         "accept_incomplete_resumes": false,
//         "address": {
//           "building": "9с10",
//           "city": "Москва",
//           "description": "На проходной потребуется паспорт",
//           "lat": 55.807794,
//           "lng": 37.638699,
//           "metro_stations": [
//             {
//               "lat": 55.807794,
//               "line_id": "6",
//               "line_name": "Калужско-Рижская",
//               "lng": 37.638699,
//               "station_id": "6.8",
//               "station_name": "Алексеевская"
//             }
//           ],
//           "street": "улица Годовикова"
//         },
//         "alternate_url": "https://hh.ru/vacancy/8331228",
//         "apply_alternate_url": "https://hh.ru/applicant/vacancy_response?vacancyId=8331228",
//         "area": {
//           "id": "1",
//           "name": "Москва",
//           "url": "https://api.hh.ru/areas/1"
//         },
//         "brand_snippet": {
//           "background": {
//             "color": null,
//             "gradient": {
//               "angle": 45,
//               "color_list": [
//                 {
//                   "color": "#FF0000",
//                   "position": 10
//                 },
//                 {
//                   "color": "#FA0000",
//                   "position": 9
//                 }
//               ]
//             }
//           },
//           "logo": "https://hhcdn.ru/00001.png",
//           "logo_scalable": {
//             "default": {
//               "height": 300,
//               "url": "https://hhcdn.ru/00021.png",
//               "width": 500
//             },
//             "xs": {
//               "height": 100,
//               "url": "https://hhcdn.ru/00022.png",
//               "width": 200
//             }
//           },
//           "logo_xs": "https://hhcdn.ru/00002.png",
//           "picture": "https://hhcdn.ru/00003.png",
//           "picture_scalable": {
//             "default": {
//               "height": 350,
//               "url": "https://hhcdn.ru/00023.png",
//               "width": 550
//             },
//             "xs": {
//               "height": 150,
//               "url": "https://hhcdn.ru/00024.png",
//               "width": 250
//             }
//           },
//           "picture_xs": "https://hhcdn.ru/00004.png"
//         },
//         "branding": {
//           "tariff": "BASIC",
//           "type": "CONSTRUCTOR"
//         },
//         "contacts": {
//           "email": "user@example.com",
//           "name": "Имя",
//           "phones": [
//             {
//               "city": "985",
//               "comment": null,
//               "country": "7",
//               "number": "000-00-00"
//             }
//           ]
//         },
//         "counters": {
//           "responses": 0
//         },
//         "department": {
//           "id": "HH-1455-TECH",
//           "name": "HeadHunter::Технический департамент"
//         },
//         "employer": {
//           "accredited_it_employer": false,
//           "alternate_url": "https://hh.ru/employer/1455",
//           "id": "1455",
//           "logo_urls": {
//             "90": "https://hh.ru/employer-logo/289027.png",
//             "240": "https://hh.ru/employer-logo/289169.png",
//             "original": "https://hh.ru/file/2352807.png"
//           },
//           "name": "HeadHunter",
//           "trusted": true,
//           "url": "https://api.hh.ru/employers/1455"
//         },
//         "has_test": true,
//         "id": "8331228",
//         "insider_interview": {
//           "id": "12345",
//           "url": "https://hh.ru/interview/12345?employerId=777"
//         },
//         "name": "Секретарь",
//         "personal_data_resale": false,
//         "professional_roles": [
//           {
//             "id": "90",
//             "name": "Охранник"
//           }
//         ],
//         "published_at": "2013-07-08T16:17:21+0400",
//         "relations": [],
//         "response_letter_required": true,
//         "response_url": null,
//         "salary": {
//           "currency": "RUR",
//           "from": 30000,
//           "gross": true,
//           "to": null
//         },
//         "schedule": {
//           "id": "fullDay",
//           "name": "Полный день"
//         },
//         "show_logo_in_search": true,
//         "snippet": {
//           "requirement": "Высшее образование. Опыт работы в качестве <highlighttext>секретаря</highlighttext>, офис-менеджера. Знание делопроизводства, документооборота. Коммуникативные навыки.",
//           "responsibility": "Документооборот (регистрация, отправка, контроль исполнения писем, ведение протоколов, отчетность). Распределение корреспонденции. Прием и распределение телефонных звонков."
//         },
//         "sort_point_distance": 226.001293,
//         "type": {
//           "id": "open",
//           "name": "Открытая"
//         },
//         "url": "https://api.hh.ru/vacancies/8331228"
//       }
//     ],
//     "page": 0,
//     "pages": 13,
//     "per_page": 1,
//     "suggests": null
// }