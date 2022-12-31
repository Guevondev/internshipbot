import { keys } from '../types'
import botKeys from '../../config.json'

const Keys: keys  = {
    clientToken: botKeys.token ?? 'nil',
    testGuild:  botKeys.testGuild ?? 'nil'
}

if (Object.values(Keys).includes('nil'))
    throw new Error ('Not all config.json variables are defined')

export default Keys