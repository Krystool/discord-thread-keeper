import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'
import { getChannelName } from '../index';

export default {
    category: 'Testing',
    description: 'Views all threads this bot is keeping',
    slash: true,
    testOnly: true,
    callback: async ({interaction}) => {
        let array = [] as any;
        for (let i = 0; i < BOT.THREADS.length; i++) {
            array.push(await getChannelName(BOT.THREADS[i]))
        }
        return interaction.reply({
            content: `${array}`,
        });
    }
} as ICommand