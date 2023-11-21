import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('users')
	.setDescription('users cmd')
	.addUserOption((option) => {
		return option.setName('user').setDescription('Mention an user').setRequired(true);
	});

export const UserCommand = command.toJSON();
