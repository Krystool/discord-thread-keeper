import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'

export default {
    category: 'Testing',
    description: 'Removes a thread being checked',
    slash: true,
    testOnly: true,
    options: [
        {
            name: 'thread',
            description: 'The thread to remove',
            required: true,
            type: DiscordJS.Constants.ApplicationCommandOptionTypes.CHANNEL,
        }
    ],
    callback: ({interaction, args}) => {
        var array = BOT.THREADS as any
        array.splice(array.indexOf(args[0]), 1) //remove the element at this index
        BOT.THREADS = array
        return interaction.reply({
            content: `${args[0]} is no longer being maintained`,
        });
    }
} as ICommand