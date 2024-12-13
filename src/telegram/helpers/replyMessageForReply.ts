import { handleMessage } from "./handleMessage";

export const replyMessageForReply = (ctx: any, message: string, logger): Promise<void> => {
    const question = ctx.session.__scenes;
    console.log({ question, message });
    return handleMessage[question](ctx, message, logger);
}