import { ICommand } from "wokcommands";
import { BOT } from '../config'

export default {
    category: 'Testing',
    description: 'Views all threads this bot is keeping',
    slash: true,
    testOnly: true,
    callback: async ({interaction}) => {
        let array = [] as any;
        if (BOT.THREADS.length > 0) {
            for (let i = 0; i < BOT.THREADS.length; i++) {
                array.push(`<#${BOT.THREADS[i]}>`)
            }
            return interaction.reply({
                content: `${array}`,
            });
        } else {
            return interaction.reply({
                content: `No threads are currently being tracked.`,
            });
        }
        
    }
} as ICommand