import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TelegramModule } from './telegram/telegram.module';
import { TelegramUpdate } from './telegram/telegram.update';
import { TelegramService } from './telegram/telegram.service';
import { sessionMiddleware } from './middleware/session.middleware';
import { WinstonModule } from 'nest-winston';
import winston from 'winston';
import { PrismaService } from './prisma.service';
import { ScheduleModule } from '@nestjs/schedule';
import { EnvConfigModule } from './env-config/env-config.module';

@Module({
  imports: [
    TelegramModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ScheduleModule.forRoot(),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename: 'logs/app.log',
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json(),
            winston.format.printf(info => {
              // Добавляем новую строку после каждого лога
              return `${info.timestamp} ${info.level}: ${info.message}\n`;
            })
          )
        }),
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.prettyPrint(),
            winston.format.json(),
            winston.format.printf(info => {
              // Добавляем новую строку после каждого лога
              return `${info.timestamp} ${info.level}: ${info.message}\n`;
            })
          ),
        }),
      ],
    }),
    TelegrafModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configServcie: ConfigService) => ({
        token: configServcie.get<string>("TELEGRAM_TOKEN"),
        middlewares: [sessionMiddleware]
      }),
      inject: [ConfigService]
    }),
    EnvConfigModule
  ],
  providers: [TelegramUpdate, TelegramService, PrismaService],
})
export class AppModule {}
