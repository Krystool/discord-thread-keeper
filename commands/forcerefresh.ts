import DiscordJS from 'discord.js'
import { ICommand } from "wokcommands";
import { BOT } from '../config'
import { main } from '../index'

export default {
    category: 'Testing',
    description: 'Forces unarchiving of all threads',
    slash: true,
    testOnly: true,
    callback: ({interaction, args}) => {
       main()
       return interaction.reply('All threads have been force unarchived.')
    }
} as ICommand