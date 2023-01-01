import { event } from "../utils"
import { ChannelType, PermissionFlagsBits } from "discord.js"

export default event('guildCreate', ({ log, client }, guild) => {
    log('Joined ' + guild.name)
    const user = guild.members.me
    if (guild.systemChannel) {
        guild.systemChannel.send('Hola! Soy tu asistente Mistral Ice para encontrar pega. \nPor favor, antes de continuar, ejecuta el comando /setup para crear un canal dedicado a las ofertas de trabajo.')
        return
    }

    if (user) {
        const channel = guild.channels.cache.find(channel => channel.type == ChannelType.GuildText && channel.permissionsFor(user).has(PermissionFlagsBits.SendMessages))
        
        if (channel && channel.type == ChannelType.GuildText) {
            channel.send('Hola! Soy tu asistente Mistral Ice para encontrar pega. \nPor favor, antes de continuar, ejecuta el comando /setup para crear un canal dedicado a las ofertas de trabajo.')
        }
    }
    
    
})