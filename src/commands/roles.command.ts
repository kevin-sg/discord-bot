import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('addrole')
	.setDescription('Add a role')
	.addRoleOption((option) => {
		return option.setName('role').setDescription('Adds the New Role').setRequired(true);
	});

export const RoleCommand = command.toJSON();
