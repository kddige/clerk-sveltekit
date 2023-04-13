<script lang="ts">
	import { page } from '$app/stores';
	import clerkStore from '$lib/client/clerk.client';
	import type { PageData } from './$types';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => $clerkStore.openSignIn()}>Sign in</button>

{#if $clerkStore?.session?.user}
	<button on:click={() => $clerkStore.signOut()}>Sign out</button>
{/if}
