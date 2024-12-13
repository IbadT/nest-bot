// import { Session, SessionFlavor } from 'telegraf';
// import * as LocalSession from 'telegraf-session-local';
import LocalSession from 'telegraf-session-local';

const localSession = new LocalSession({ database: 'sessions.json' });

export const sessionMiddleware = localSession.middleware();

export const getAllSessions = () => {
//   return localSession.DB.value();
  return localSession.DB;
};


// import { session } from "telegraf";
// export const sessionMiddleware = session();