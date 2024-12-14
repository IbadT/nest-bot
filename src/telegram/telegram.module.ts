import { Module } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { PrismaService } from "src/prisma.service";
import { EnvConfigService } from "src/env-config/env-config.service";

@Module({
    providers: [
        TelegramService, 
        PrismaService,
        EnvConfigService
    ],
})
export class TelegramModule {}