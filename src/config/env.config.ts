import 'dotenv/config';

export const configEnv = {
	BOT_SECRET_TOKEN: process.env.BOT_SECRET_TOKEN || 'token',
	CLIENT_ID: process.env.CLIENT_ID || 'client_id',
};
