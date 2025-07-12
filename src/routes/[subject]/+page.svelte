<script lang="ts">
	import { page } from '$app/stores';
	import { terms } from '../../data/terms.js';
	import TermCard from '../../lib/components/TermCard.svelte';
	import type { Term } from '../../lib/types.js';

	$: subject = $page.params.subject;
	$: subjectTerms = terms.filter((term: Term) => 
		term.subject.toLowerCase() === subject?.toLowerCase()
	);
	$: subjectDisplayName = subject?.charAt(0).toUpperCase() + subject?.slice(1);
</script>

<svelte:head>
	<title>{subjectDisplayName} - Math Dictionary</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<nav class="text-sm text-gray-500 mb-4">
			<a href="/" class="hover:text-blue-600">Home</a> › 
			<a href="/math" class="hover:text-blue-600">Math Terms</a> › 
			<span class="text-gray-900">{subjectDisplayName}</span>
		</nav>
		<h1 class="text-3xl font-bold text-gray-900 mb-4">{subjectDisplayName}</h1>
		<p class="text-gray-600">
			Mathematical terms and concepts in {subjectDisplayName.toLowerCase()}
		</p>
	</div>

	{#if subjectTerms.length > 0}
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each subjectTerms as term (term.id)}
				<TermCard {term} />
			{/each}
		</div>
	{:else}
		<div class="text-center py-12">
			<h2 class="text-xl font-semibold text-gray-700 mb-4">No Terms Found</h2>
			<p class="text-gray-500 mb-6">
				No mathematical terms found for "{subjectDisplayName}".
			</p>
			<a 
				href="/math" 
				class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
			>
				Browse All Terms
			</a>
		</div>
	{/if}
</div>
