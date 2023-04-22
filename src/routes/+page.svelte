<script lang="ts">
	import { page } from '$app/stores';
	import clerkStore, { useAuth } from '$lib/client/clerk.client';
	import { fade } from 'svelte/transition';

	let clientSessionOpen = true;
	let serverSessionOpen = false;
</script>

{#if $useAuth.status === 'authenticated'}
	<button on:click={() => $clerkStore.signOut()}>Logged in: <b>Sign out</b></button>
{:else if $useAuth.status === 'unauthenticated'}
	<button on:click={() => $clerkStore.openSignIn()}>Logged out: <b>Sign in</b></button>
{:else if $useAuth.status === 'loading'}
	<button disabled>Loading..</button>
{/if}

<div class="session__box">
	<div class="session__box_header">
		<p>From server:</p>
		<button on:click={() => (serverSessionOpen = !serverSessionOpen)}>
			{serverSessionOpen ? 'Hide' : 'Show'}
		</button>
	</div>
	<pre />
	{#if serverSessionOpen}
		<pre in:fade>
            {JSON.stringify($page.data.session, null, 2)}
        </pre>
	{/if}
</div>
<hr />
<div class="session__box">
	<div class="session__box_header">
		<p>From custom useAuth store:</p>
		<button on:click={() => (clientSessionOpen = !clientSessionOpen)}>
			{clientSessionOpen ? 'Hide' : 'Show'}
		</button>
	</div>
	{#if clientSessionOpen}
		<pre in:fade>
            {JSON.stringify($useAuth, null, 2)}
        </pre>
	{/if}
</div>

<style>
	.session__box {
		background-color: #f5f5f5;
		padding: 1rem;
		border-radius: 0.5rem;
	}
</style>
