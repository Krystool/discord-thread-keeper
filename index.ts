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

async function main() {
    let parent = (await client.channels.fetch('904838634950258770')) as GuildChannel;
    if (parent.isText()) {
        let thread = await parent.threads.fetch('907971826926362655') as ThreadChannel
        thread.setArchived(false);
    } else {
        throw `Something went wrong!'`;
    }
}

client.login(BOT.TOKEN)