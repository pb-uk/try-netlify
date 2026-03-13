import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

const handler: Handler = async (
	event: HandlerEvent,
	context: HandlerContext,
) => {
	const env = process.env;
	const headers = event.headers;
	// const query = event.multiValueQueryStringParameters;
	const query = event.queryStringParameters;
	return {
		statusCode: 200,
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			headers,
			query,
			message: 'Request params',
			env,
			event,
			context,
		}),
	};
};

export { handler };
