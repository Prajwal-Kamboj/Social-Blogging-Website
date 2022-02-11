const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            /* development only config options here */
        }
    }

    return {
        /* config options for all phases except development here */
    }
}

module.exports = {
    env: {
        HOST: process.env.HOST,
        ENVIRONMENT: process.env.NODE_ENV,
    },
}