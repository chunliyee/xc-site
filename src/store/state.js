let development = true
let production = false

if (process.env.NODE_ENV === 'production') {
    development = false
    production = true
}

let state = {
    development: development,
    production: production,
    userInfo: null
}

export default state
