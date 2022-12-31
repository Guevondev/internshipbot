import {
    InteractionReplyOptions,
    WebhookEditMessageOptions
} from 'discord.js'

export const color = {
    error: 0xf54242
}

export const reply = {
    error(msg: string): InteractionReplyOptions {
        return {
            ephemeral: true,
            embeds: [{
                color: color.error,
                description: msg
            }]
        }
    }
}

export const editReply = {
    error(msg: string): WebhookEditMessageOptions {
        return {
            embeds: [{
                color: color.error,
                description: msg
            }]
        }
    }
}