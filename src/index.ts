import { Client, GatewayIntentBits, Partials, REST, Routes } from 'discord.js';
import { configEnv } from './config';
import { BanCommand, ChannelsCommand, OrderCommand, RoleCommand, UserCommand } from './commands';

(async () => {
	// const order_commands = [
	// 	{
	// 		name: 'order',
	// 		description: 'Order something...',
	// 		options: [
	// 			{
	// 				name: 'food',
	// 				description: 'the type of food',
	// 				type: ApplicationCommandType.Message,
	// 				require: true,
	// 				choices: [
	// 					{
	// 						name: 'Cake',
	// 						value: 'cake',
	// 					},
	// 					{
	// 						name: 'Hamburger',
	// 						value: 'hamburger',
	// 					},
	// 				],
	// 			},
	// 			{
	// 				name: 'drink',
	// 				description: 'the type of drink',
	// 				type: ApplicationCommandType.Message,
	// 				require: true,
	// 				choices: [
	// 					{
	// 						name: 'Water',
	// 						value: 'water',
	// 					},
	// 					{
	// 						name: 'Coca-Cola',
	// 						value: 'coca_cola',
	// 					},
	// 					{
	// 						name: 'Sprite',
	// 						value: 'sprite',
	// 					},
	// 				],
	// 			},
	// 		],
	// 	},
	// ];

	const commands = [OrderCommand, RoleCommand, UserCommand, ChannelsCommand, BanCommand];

	const rest = new REST({ version: '10' }).setToken(configEnv.BOT_SECRET_TOKEN);

	try {
		console.log('Started refreshing application (/) commands.');
		await rest.put(Routes.applicationCommands(configEnv.CLIENT_ID), { body: commands });
		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}

	const client = new Client({
		intents: [
			GatewayIntentBits.Guilds,
			GatewayIntentBits.GuildMessages,
			GatewayIntentBits.MessageContent,
			GatewayIntentBits.DirectMessages,
		],
		partials: [Partials.Message, Partials.Channel],
	});

	// console.log(Object.keys(GatewayIntentBits));

	// events
	// client.setMaxListeners(0);

	client.on('ready', (e) => {
		console.log(e.user.tag.concat(' has logged in!'));
	});

	// client.on('messageCreate', (e) => {
	// 	console.log(
	// 		'messageCreate: ',
	// 		e.content.concat(' - author: ', e.author.tag, ' - date: ', e.createdAt.toLocaleString()),
	// 	);
	// });

	client.on('interactionCreate', async (interaction) => {
		const order = { food: '', drink: '', created: '' };

		if (!interaction.isChatInputCommand()) return;

		if (interaction.commandName === 'order') {
			if (interaction.options.getString('food')?.length) {
				order.food = interaction.options.getString('food') || 'N/A';
			}
			if (interaction.options.getString('drink')?.length) {
				order.drink = interaction.options.getString('drink') || 'N/A';
			}

			order.created = interaction.createdAt.toLocaleString();

			console.log(interaction.options.data);

			await interaction.reply({
				content:
					'**Order** \n' +
					'- **Food:** ' +
					order.food +
					'\n' +
					'- **Drink:** ' +
					order.drink +
					'\n' +
					'- **Created:** ' +
					order.created,
			});
		}
	});

	client.login(configEnv.BOT_SECRET_TOKEN);
})();
