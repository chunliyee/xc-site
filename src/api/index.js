import server from './server'

class Api {
    constructor() {
        Object.assign(this, ...Array.from(arguments))
    }
}

export default new Api(server)
