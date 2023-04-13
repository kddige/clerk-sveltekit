// import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
// import Clerk from '@clerk/clerk-js';
// import { writable } from 'svelte/store';

// const _clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);

// const clerk = writable<Clerk>(undefined, (set) => {
// 	if (typeof window !== 'undefined') {
// 		_clerk.load();
// 		set(_clerk);
// 		console.log('clerk loaded');
// 	}
// });

// export default clerk;

import { PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
import Clerk from '@clerk/clerk-js';
import { writable, type Writable } from 'svelte/store';

let clerk: Writable<Clerk>;

function clerkStore() {
	if (!clerk) {
		const _clerk = new Clerk(PUBLIC_CLERK_PUBLISHABLE_KEY);

		clerk = writable<Clerk>(undefined, (set) => {
			if (typeof window !== 'undefined') {
				if (!_clerk.loaded) {
					_clerk.load();
					set(_clerk);
                    console.log('clerk loaded');
				}
			}
		});
	}
	return clerk;
}

export default clerkStore();
