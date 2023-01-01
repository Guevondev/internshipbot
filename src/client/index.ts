import { Client, ClientEvents, GatewayIntentBits, Message} from 'discord.js'
import keys from '../keys'
import { registerEvents } from '../utils'
import events from '../events'





const client = new Client({intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.Guilds
]})

registerEvents(client, events)


client.on('messageCreate', (message: Message) => {
    console.log(message.content)
})


client.login(keys.clientToken).catch((err) => {
    console.error('[Login error]', err)
    process.exit(1)
})

