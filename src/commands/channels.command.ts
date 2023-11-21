import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('channels')
	.setDescription('channels cmd')
	.addChannelOption((option) => {
		return option.setName('channels').setDescription('Selected a channels').setRequired(true);
	})
	.addBooleanOption((option) => {
		return option.setName('delete').setDescription('Delete the messages').setRequired(true);
	});

export const ChannelsCommand = command.toJSON();
