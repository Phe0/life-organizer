const { supabass } = require('../supabass');

exports.handler = async function (event, context) {
    const { refresh_token } = JSON.parse(event.body);

    const { error, data } = await supabass.auth.api.refreshAccessToken(refresh_token);

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