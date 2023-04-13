import type { Handle } from '@sveltejs/kit';
import clerk from '$lib/server/clerk.server';
import type { SignedInAuthObject, SignedOutAuthObject } from '@clerk/clerk-sdk-node';

export const handle: Handle = async ({ event, resolve }) => {
	const __session = (await event.cookies.get('__session')) as string;
	const __client_uat = (await event.cookies.get('__client_uat')) as string;

	const authReq = await clerk.authenticateRequest({
		apiKey: clerk.__unstable_options.apiKey || '',
		publishableKey: clerk.__unstable_options.publishableKey || '',
		secretKey: clerk.__unstable_options.secretKey || '',
		clientUat: __client_uat,
		frontendApi: '',
		headerToken: __session,
		host: ''
	});

	if (authReq.isSignedIn) {
		// make _session serializable by removing all functions - there might be a better way to do this
		const { getToken, debug, organization, ...session } = authReq.toAuth();

        event.locals.session = session;
	} else {
		event.locals.session = null;
	}

	return await resolve(event);
};
