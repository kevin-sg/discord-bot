import { SlashCommandBuilder } from 'discord.js';

const command = new SlashCommandBuilder()
	.setName('ban')
	.setDescription('Bans a user from the guild')

	// Add a manage group
	.addSubcommandGroup((group) =>
		group
			.setName('group_a')
			.setDescription('Temporary bans an user')
			.addSubcommand((subcommand) =>
				subcommand
					.setName('temporary')
					.setDescription('Temporary bans an user')
					.addUserOption((option) => {
						return option.setName('user').setDescription('user to be banned').setRequired(true);
					}),
			)
			.addSubcommand((subcommand) => {
				return subcommand
					.setName('permanent')
					.setDescription('Permanently bans to user')
					.addUserOption((option) => {
						return option.setName('user').setDescription('user to be banned').setRequired(true);
					});
			}),
	);

// Get the final raw data that can be sent to Discord
export const BanCommand = command.toJSON();
