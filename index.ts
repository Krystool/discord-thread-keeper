import DiscordJS, { Intents, TextChannel, ThreadChannel, GuildChannel } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import { BOT } from './config'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("Ohaidere")

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['679777315814637683'],
    })

    main()
})

export async function main() {
    let parent = (await client.channels.fetch(BOT.SERVER_CHANNEL)) as GuildChannel; //for some reason having any random channel on the server as the parent for any thread
                                                                                    //still works for unarchiving any thread on the server. I have no idea how, but here it will
                                                                                    //stay.
    if (parent.isText()) {
        if (BOT.THREADS.length == 0) {
            console.log('Nothing to unarchive')
            return
        }
        for (var i = 0; i < BOT.THREADS.length; i++) {
            let thread = await parent.threads.fetch(BOT.THREADS[i]) as ThreadChannel
            thread.setArchived(false);
        }
    } else {
        throw `Something went wrong! (SERVER_CHANNEL in config is probably a non-text channel)'`;
    }
}

client.login(BOT.TOKEN)