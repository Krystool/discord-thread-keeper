import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'

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
    callback: ({interaction, args}) => {
        var array = BOT.THREADS as any
        array.push(args[0])
        BOT.THREADS = array
        return interaction.reply({
            content: `Now added this thread to the keeper: ${args[0]}`,
        });
    }
} as ICommand