import { Module } from "@nestjs/common";
import { TelegramService } from "./telegram.service";
import { PrismaService } from "src/prisma.service";

@Module({
    providers: [TelegramService, PrismaService],
})
export class TelegramModule {}