const { supabass } = require('../supabass');

exports.handler = async function(event, context) {
    const { email } = JSON.parse(event.body);

    const { data, error } = await supabass.auth.api.resetPasswordForEmail(email);

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