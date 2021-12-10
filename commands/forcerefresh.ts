import { ICommand } from "wokcommands";
import { main } from '../index'

export default {
    category: 'Testing',
    description: 'Forces unarchiving of all threads',
    slash: true,
    testOnly: true,
    callback: ({interaction}) => {
        main()
        return interaction.reply('All threads have been force unarchived.')
    }
} as ICommand