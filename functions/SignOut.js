const { supabass } = require('../supabass');

exports.handler = async function(event, context) {
    const { access_token } = JSON.parse(event.body);

    const { data, error } = await supabass.auth.api.SignOut(access_token);

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