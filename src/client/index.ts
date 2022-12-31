import { Client, ClientEvents, GatewayIntentBits} from 'discord.js'
import keys from '../keys'
import { registerEvents } from '../utils'
import events from '../events'





const client = new Client({intents: [
    8
]})

registerEvents(client, events)

client.login(keys.clientToken).catch((err) => {
    console.error('[Login error]', err)
    process.exit(1)
})
