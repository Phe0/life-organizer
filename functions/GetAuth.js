exports.handler = async function (event, context) {
    const data = context.clientContext.user;

    return {
        statusCode: 200,
        body: JSON.stringify({ status: 'OK', data })
    }

}