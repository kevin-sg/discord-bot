declare global {
	namespace NodeJS {
		interface ProcessEnv {
			BOT_SECRET_TOKEN: string;
			CLIENT_ID: string;
			NODE_ENV: 'development' | 'production';
			PORT?: string;
		}
	}
}

export {};
