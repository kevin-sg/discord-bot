import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('order')
	.setDescription('Order your favorite meal!')
	.addStringOption((option) => {
		return option
			.setName('food')
			.setDescription('the type of food')
			.addChoices(
				{
					name: 'Cake',
					value: 'cake',
				},
				{
					name: 'Hamburger',
					value: 'hamburger',
				},
				{
					name: 'Pizza',
					value: 'pizza',
				},
			)
			.setRequired(true);
	})
	.addStringOption((option) => {
		return option
			.setName('drink')
			.setDescription('the type of drink')
			.addChoices(
				{
					name: 'Water',
					value: 'water',
				},
				{
					name: 'Coca-Cola',
					value: 'coca_cola',
				},
				{
					name: 'Sprite',
					value: 'sprite',
				},
			)
			.setRequired(true);
	});

export const OrderCommand = command.toJSON();
