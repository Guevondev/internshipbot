import { keys } from '../types'
import { token } from '../../config.json'

const Keys: keys  = {
    clientToken: token ?? 'nil'
}

if (Object.values(Keys).includes('nil'))
    throw new Error ('Not all config.json variables are defined')

export default Keys