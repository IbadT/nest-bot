export enum ENUM_KEYBOARDS {
    TECH_SUPPORT = 'TECH_SUPPORT',
    CREATE_TEST = 'CREATE_TEST',
    SHOP = 'SHOP',
    SEARCH_JOBS = 'SEARCH_JOBS',
    ADMIN_PANEL = 'ADMIN_PANEL',
    
    MY_APPLICATIONS = 'MY_APPLICATIONS',
    JOB_CATEGORY = 'JOB_CATEGORY',
    LOCATION = 'LOCATION',
    SALARY_RANGE = 'SALARY_RANGE',
    
    HOME = 'HOME',
    SEARCH = 'SEARCH',
    HH_REGISTER = 'HH_REGISTER',
    ADD_QUESTION = 'ADD_QUESTION',
    SUBMIT_TEST = 'SUBMIT_TEST',
    CANCEL = 'CANCEL',

    CONTACT_SUPPORT = 'CONTACT_SUPPORT',
    CHAT_SUPPORT = 'CHAT_SUPPORT',
    FAQ = 'FAQ',
    BACK_TO_MAIN = 'BACK_TO_MAIN',

    VIEW_STATS = 'VIEW_STATS',
    EDIT_CONTENT = 'EDIT_CONTENT',
    MANAGE_USERS = 'MANAGE_USERS',
    BACKUP_DATA = 'BACKUP_DATA',
    SETTINGS = 'SETTINGS',
    // BACK_TO_MAIN = 'BACK_TO_MAIN',
    
    VIEW_PRODUCTS = 'VIEW_PRODUCTS',
    SEARCH_PRODUCT = 'SEARCH_PRODUCT',
    MY_CART = 'MY_CART',
    CHECKOUT = 'CHECKOUT',
    // BACK_TO_MAIN = 'BACK_TO_MAIN',
    
    VIEW_IMAGE = 'VIEW_IMAGE',
    PRICE = 'PRICE',
    DESCRIPTION = 'DESCRIPTION',
    ADD_TO_CART = 'ADD_TO_CART',
    BACK_TO_PRODUCTS = 'BACK_TO_PRODUCTS',

    USER_COUNT = 'USER_COUNT',
    ACTIVE_SESSIONS = 'ACTIVE_SESSIONS',
    COMMAND_USAGE = 'COMMAND_USAGE',
    BACK_TO_ADMIN = 'BACK_TO_ADMIN',

    // BACK_TO_ADMIN_AND_DELETE_LAST = 'BACK_TO_ADMIN_AND_DELETE_LAST',
    WRITE_DOWN_FOR_JOB = 'WRITE_DOWN_FOR_JOB',
    INPUT_KEYWORD_FOR_JOB = 'INPUT_KEYWORD_FOR_JOB',
    GET_KEYWORD_FOR_JOB = 'GET_KEYWORD_FOR_JOB',

    BACK_TO_WORK = 'BACK_TO_WORK'
};






export const mainMenuButtons = [
    [{ text: '🔍 Поиск вакансий', callback_data: ENUM_KEYBOARDS.SEARCH_JOBS }],
    [{ text: '📝 Создание тестов', callback_data: ENUM_KEYBOARDS.CREATE_TEST }],
    
    // ???????
    [{ text: '🛒 Работа с товарами', callback_data: ENUM_KEYBOARDS.SHOP }], 
    // ???????

    [{ text: '📄 Мои заявки', callback_data: ENUM_KEYBOARDS.MY_APPLICATIONS }],
    [{ text: '🛠️ Техническая поддержка', callback_data: ENUM_KEYBOARDS.TECH_SUPPORT }],
    [{ text: '🛒 Магазин', callback_data: ENUM_KEYBOARDS.SHOP }],
];


// кнопки для админки

export const adminButton = [
    [{ text: '👤 Панель администратора', callback_data: ENUM_KEYBOARDS.ADMIN_PANEL }]
];

// Кнопки для главного меню администраторской панели.
export const adminButtons = [
  [{ text: '📊 Просмотр статистики', callback_data: 'VIEW_STATS' }],
  [{ text: '✏️ Редактирование контента', callback_data: 'EDIT_CONTENT' }],
  [{ text: '👥 Управление пользователями', callback_data: 'MANAGE_USERS' }],
  [{ text: '🔄 Резервное копирование данных', callback_data: 'BACKUP_DATA' }],
  [{ text: '⚙️ Настройки', callback_data: 'SETTINGS' }],
  [{ text: '🔙 Назад в главное меню', callback_data: 'BACK_TO_MAIN' }]
];

// Кнопки для просмотра статистики.
export const viewStatsButtons = [
  [{ text: '👤 Количество пользователей', callback_data: 'USER_COUNT' }],
  [{ text: '🟢 Активные сессии', callback_data: 'ACTIVE_SESSIONS' }],
  [{ text: '📈 Использование команд', callback_data: 'COMMAND_USAGE' }],
  [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN' }]
];

// Кнопки для редактирования контента.
export const editContentButtons = [
  [{ text: '📝 Обновление текстов сообщений', callback_data: 'UPDATE_TEXTS' }],
  [{ text: '💼 Управление вакансиями', callback_data: 'MANAGE_JOBS' }],
  [{ text: '🛒 Управление товарами', callback_data: 'MANAGE_PRODUCTS' }],
  [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN' }]
];

// Кнопки для управления пользователями.
export const manageUsersButtons = [
  [{ text: '👥 Список пользователей', callback_data: 'USER_LIST' }],
  [{ text: '🔍 Поиск пользователя', callback_data: 'SEARCH_USER' }],
  [{ text: '🚫 Заблокировать/разблокировать пользователя', callback_data: 'BLOCK_USER' }],
  [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN' }]
];

// Кнопки для резервного копирования данных.
export const backupDataButtons = [
  [{ text: '💾 Создание резервной копии данных', callback_data: 'CREATE_BACKUP' }],
  [{ text: '♻️ Восстановление данных из резервной копии', callback_data: 'RESTORE_BACKUP' }],
  [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN' }]
];

// Кнопки для изменения настроек бота.
export const settingsButtons = [
  [{ text: '🔑 Изменение токена', callback_data: 'CHANGE_TOKEN' }],
  [{ text: '🔧 Изменение API ключей', callback_data: 'CHANGE_API_KEYS' }],
  [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN' }]
];


// export const backToAdminAndDeleteLast = [
//     [{ text: '🔙 Назад', callback_data: 'BACK_TO_ADMIN_AND_DELETE_LAST' }]
// ]


// [{ text: 'Зарегистрироваться на hh', callback_data: ENUM_KEYBOARDS.HH_REGISTER }],
export const searchJobsButtons = [
    [{ text: '🏠 Главная', callback_data: ENUM_KEYBOARDS.HOME }],
    [{ text: '💼 Категория вакансий', callback_data: ENUM_KEYBOARDS.JOB_CATEGORY }],
    [{ text: '📍 Местоположение', callback_data: ENUM_KEYBOARDS.LOCATION }],
    [{ text: '💰 Диапазон зарплаты', callback_data: ENUM_KEYBOARDS.SALARY_RANGE }],
    [{ text: '🔍 Поиск', callback_data: ENUM_KEYBOARDS.SEARCH }],
];

// export const selectAnOptionSearchJubsButtons = [
//   [{ text: "Записать название вакансии для автоматического поиска", callback_data: ENUM_KEYBOARDS.WRITE_DOWN_FOR_JOB }],
//   [{ text: "Введите название вакансии", callback_data: ENUM_KEYBOARDS.INPUT_KEYWOARD_FOR_JOB }],
//   [{ text: "Получить записанное ключевое слово", callback_data: ENUM_KEYBOARDS.GET_KEYWORD_FOR_JOB }],
// ];
export const selectAnOptionSearchJobsButtons = [
  [{ text: "📝 Записать название вакансии для автоматического поиска", callback_data: ENUM_KEYBOARDS.WRITE_DOWN_FOR_JOB }],
  [{ text: "🔍 Введите название вакансии", callback_data: ENUM_KEYBOARDS.INPUT_KEYWORD_FOR_JOB }],
  [{ text: "📋 Получить записанное ключевое слово", callback_data: ENUM_KEYBOARDS.GET_KEYWORD_FOR_JOB }],
];

export const backButton = [
  [{ text: "🔙 Назад", callback_data: ENUM_KEYBOARDS.BACK_TO_WORK }]
];






// // Главное меню
// export const mainMenuButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('🔍 Найти вакансии', 'SEARCH_JOBS')],
//   [Markup.button.callback('📝 Создать тест', 'CREATE_TEST')],
//   [Markup.button.callback('🛠️ Техническая поддержка', 'TECH_SUPPORT')],
//   [Markup.button.callback('👤 Панель администратора', 'ADMIN_PANEL')],
//   [Markup.button.callback('🛒 Магазин', 'SHOP')],
// ]);

// // Кнопки для выбора логики  
// const selectLogicButtons = Markup.inlineKeyboard([ 
//     [Markup.button.callback('🛠️ Техническая поддержка', 'TECH_SUPPORT')], 
//     [Markup.button.callback('📝 Создание тестов', 'CREATE_TEST')], 
//     [Markup.button.callback('🛒 Работа с товарами', 'SHOP')], 
//     [Markup.button.callback('🔍 Поиск вакансий', 'SEARCH_JOBS')], 
//     [Markup.button.callback('📄 Мои заявки', 'MY_APPLICATIONS')], 
// ]);


// // Кнопки для поиска вакансий
// export const searchJobsButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('🏠 Главная', 'HOME')],
//   [Markup.button.callback('💼 Категория вакансий', 'JOB_CATEGORY')],
//   [Markup.button.callback('📍 Местоположение', 'LOCATION')],
//   [Markup.button.callback('💰 Диапазон зарплаты', 'SALARY_RANGE')],
//   [Markup.button.callback('🔍 Поиск', 'SEARCH')],
// ]);

// // Кнопки для создания тестов
// export const createTestButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('✏️ Добавить вопрос', 'ADD_QUESTION')],
//   [Markup.button.callback('✅ Отправить тест', 'SUBMIT_TEST')],
//   [Markup.button.callback('❌ Отмена', 'CANCEL')],
// ]);

// // Кнопки для технической поддержки
// export const techSupportButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('📞 Связаться с поддержкой', 'CONTACT_SUPPORT')],
//   [Markup.button.callback('💬 Чат с поддержкой', 'CHAT_SUPPORT')],
//   [Markup.button.callback('❓ FAQ', 'FAQ')],
//   [Markup.button.callback('🔙 Назад в главное меню', 'BACK_TO_MAIN')],
// ]);

// // Кнопки для администратора
// export const adminPanelButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('📊 Просмотр статистики', 'VIEW_STATS')],
//   [Markup.button.callback('✏️ Редактировать контент', 'EDIT_CONTENT')],
//   [Markup.button.callback('👥 Управление пользователями', 'MANAGE_USERS')],
//   [Markup.button.callback('🔄 Резервное копирование данных', 'BACKUP_DATA')],
//   [Markup.button.callback('⚙️ Настройки', 'SETTINGS')],
//   [Markup.button.callback('🔙 Назад в главное меню', 'BACK_TO_MAIN')],
// ]);

// // Кнопки для интернет магазина
// export const shopButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('🛍️ Просмотр товаров', 'VIEW_PRODUCTS')],
//   [Markup.button.callback('🔍 Поиск товара', 'SEARCH_PRODUCT')],
//   [Markup.button.callback('🛒 Моя корзина', 'MY_CART')],
//   [Markup.button.callback('💳 Оформить заказ', 'CHECKOUT')],
//   [Markup.button.callback('🔙 Назад в главное меню', 'BACK_TO_MAIN')],
// ]);

// // Кнопки для товаров
// export const productButtons = Markup.inlineKeyboard([
//   [Markup.button.callback('🖼️ Просмотр изображения', 'VIEW_IMAGE')],
//   [Markup.button.callback('💲 Цена', 'PRICE')],
//   [Markup.button.callback('📝 Описание', 'DESCRIPTION')],
//   [Markup.button.callback('➕ Добавить в корзину', 'ADD_TO_CART')],
//   [Markup.button.callback('🔙 Назад к товарам', 'BACK_TO_PRODUCTS')],
// ]);















// 1. Поиск вакансий на hh и отправка заявок
// Главное меню:

// 🔍 Найти вакансии

// 📄 Мои заявки

// Поиск вакансий:

// 🏠 Главная

// 💼 Категория вакансий

// 📍 Местоположение

// 💰 Диапазон зарплаты

// 🔍 Поиск

// Заявка:

// ✍️ Подать заявку

// ❌ Отмена

// 2. Создание тестов
// Главное меню:

// 📝 Создать тест

// 📊 Мои тесты

// Создание теста:

// ✏️ Добавить вопрос

// ✅ Отправить тест

// ❌ Отмена

// Вопрос с выбором ответа:

// 🔘 Вариант 1

// 🔘 Вариант 2

// 🔘 Вариант 3

// 🔘 Вариант 4

// ➕ Добавить вариант

// ❌ Удалить вариант

// Написание ответа:

// 🖊️ Написать ответ

// ❌ Отмена

// Выбор нескольких вариантов:

// ☑️ Вариант 1

// ☑️ Вариант 2

// ☑️ Вариант 3

// ☑️ Вариант 4

// ➕ Добавить вариант

// ❌ Удалить вариант

// 3. Техническая поддержка
// Главное меню:

// 🛠️ Техническая поддержка

// Техническая поддержка:

// 📞 Связаться с поддержкой

// 💬 Чат с поддержкой

// ❓ FAQ

// 🔙 Назад в главное меню

// 4. Функции для администратора
// Главное меню:

// 👤 Панель администратора

// Админ панель:

// 📊 Просмотр статистики

// ✏️ Редактировать контент

// 👥 Управление пользователями

// 🔄 Резервное копирование данных

// ⚙️ Настройки

// 🔙 Назад в главное меню

// 5. Интернет магазин
// Главное меню:

// 🛒 Магазин

// Магазин:

// 🛍️ Просмотр товаров

// 🔍 Поиск товара

// 🛒 Моя корзина

// 💳 Оформить заказ

// 🔙 Назад в главное меню

// Товар:

// 🖼️ Просмотр изображения

// 💲 Цена

// 📝 Описание

// ➕ Добавить в корзину

// 🔙 Назад к товарам