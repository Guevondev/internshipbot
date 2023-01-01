import { SlashCommandBuilder, PermissionFlagsBits, ChannelType } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
    .setName('setup')
    .setDescription('Crea un canal dedicado para enviar las ofertas de trabajo')
    .addStringOption((option) =>
        option.setName('nombre')
        .setDescription('Coloca un nombre personalizado al canal de ofertas')
        .setMinLength(1)
        .setMaxLength(50)
        .setRequired(false)
    )

export default command(meta, ({interaction}) => {
    const interactionGuildUser = interaction.guild?.members.cache.find(member => member.id == interaction.user.id)
    if (interactionGuildUser && interactionGuildUser.permissions.has(PermissionFlagsBits.ManageGuild)) {
        const channelName = interaction.options.getString('nombre')
        interaction.guild?.channels.create({
            name: channelName ?? 'ofertas-practica',
            type: ChannelType.GuildText,
            topic: 'Canal dirigido a enviar las ofertas de práctica encontradas por Internship Bot'
        })

        return interaction.reply({
            ephemeral: true,
            content: 'El canal para ofertas ha sido creado. Puedes modificarlo y moverlo como quieras, mientras no le quites el acceso al bot'
        })
    }
    else {
        interaction.reply({
            ephemeral: true,
            content: 'No tienes los permisos suficientes para hacer esto. Comunícate con un admin o administrador para que haga el setup del bot :)'
        })
    }
    
})