<script lang="ts">
	import { page } from '$app/stores';
	import clerkStore from '$lib/client/clerk.client';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={() => $clerkStore.openSignIn()}>Sign in</button>

<pre>
    {#if $page.data}
        {JSON.stringify($page.data.session, null, 2)}
    {/if}
</pre>

<a href="/about">About</a>
