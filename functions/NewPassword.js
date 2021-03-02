const { supabass } = require('../supabass');

exports.handler = async function(event, context) {
    const { access_token, password } = JSON.parse(event.body);

    const { data, error } = await supabass.auth.api.updateUser(access_token, { password });

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