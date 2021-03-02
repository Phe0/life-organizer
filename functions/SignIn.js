const { supabass } = require('../supabass');

exports.handler = async function(event, context) {
    const { email, password } = JSON.parse(event.body);

    const { user, session, error } = await supabass.auth.signIn({
        email,
        password
    });

    if (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ status: 'error', error })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ status: 'OK', user, session })
    }
}