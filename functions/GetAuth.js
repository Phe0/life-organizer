const { supabass } = require('../supabass');


exports.handler = async function (event, context) {
    const token = event.headers.authorization.split(' ')[1];

    const { error, data } = await supabass.auth.api.getUser(token)

    if (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ status: 'error', error })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ status: 'OK', data })
    }

}