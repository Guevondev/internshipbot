import commands from '../commands'
import { command} from '../types'
import { editReply, event, reply } from '../utils'

const allCommands = commands.map(({ commands }) => commands).flat()
const allCommandsMap = new Map<string, command>(
    allCommands.map((c) => [c.meta.name, c])
)

export default event('interactionCreate', async (
    {
        log,
        client
    },
    interaction
) => {
    if (!interaction.isChatInputCommand()) return

    try {
        const commandName = interaction.commandName
        const command = allCommandsMap.get(commandName)

        if (!command) throw new Error('Command not found')

        await command.exec({
            client,
            interaction,
            log(... args) {
                log(`[${command.meta.name}]`, ... args)
            }
        })
    }
    catch (error) {
        log('[Command error]', error)

        if (interaction.deferred)
            return  interaction.editReply(
                editReply.error('Something went wrong')
            )
        
        return  interaction.reply(
            reply.error('Something went wrong')
        )
    }
})