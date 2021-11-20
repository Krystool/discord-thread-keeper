import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'

export default {
    category: 'Testing',
    description: 'Views all threads this bot is keeping',
    slash: true,
    testOnly: true,
    callback: ({interaction}) => {
        let array = [] as any;
        for (let i = 0; i < BOT.THREADS.length; i++) {
            array.push(BOT.THREADS[i])
        }
        return interaction.reply({
            content: `${array}`,
        });
    }
} as ICommand