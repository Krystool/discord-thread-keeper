import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'
import { getChannelName } from '../index';

export default {
    category: 'Testing',
    description: 'Adds a thread to keep active',
    slash: true,
    testOnly: true,
    options: [
        {
            name: 'thread',
            description: 'The thread to keep',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
        }
    ],
    callback: async ({interaction, args}) => {
        let array = BOT.THREADS as any
        if (array.includes(args[0])) {
            return interaction.reply({
                content: `This thread is already being kept!`,
            });
        } else {
            array.push(args[0])
            BOT.THREADS = array
            let name = await getChannelName(args[0])
            return interaction.reply({
                content: `Now added this thread to the keeper: ${name}`,
            });
        }
        
    }
} as ICommand