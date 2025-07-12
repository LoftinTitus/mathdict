<script lang="ts">
	import { terms } from '../../data/terms.js';
	import TermCard from '../../lib/components/TermCard.svelte';
	import type { Term } from '../../lib/types.js';

	let searchTerm = '';
	let selectedSubject = '';

	$: filteredTerms = terms.filter((term: Term) => {
		const matchesSearch = term.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
							 term.definition.toLowerCase().includes(searchTerm.toLowerCase());
		const matchesSubject = selectedSubject === '' || term.subject === selectedSubject;
		return matchesSearch && matchesSubject;
	});

	$: subjects = [...new Set(terms.map((term: Term) => term.subject))];
</script>

<svelte:head>
	<title>Math Terms - Math Dictionary</title>
</svelte:head>

<div class="space-y-6">
	<div>
		<h1 class="text-3xl font-bold text-gray-900 mb-4">Mathematics Dictionary</h1>
		<p class="text-gray-600">Explore mathematical terms and concepts</p>
	</div>

	<!-- Search and Filter Controls -->
	<div class="bg-white p-6 rounded-lg shadow-md space-y-4">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div>
				<label for="search" class="block text-sm font-medium text-gray-700 mb-2">
					Search Terms
				</label>
				<input
					id="search"
					type="text"
					bind:value={searchTerm}
					placeholder="Search for math terms..."
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div>
				<label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
					Filter by Subject
				</label>
				<select
					id="subject"
					bind:value={selectedSubject}
					class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="">All Subjects</option>
					{#each subjects as subject}
						<option value={subject}>{subject}</option>
					{/each}
				</select>
			</div>
		</div>
	</div>

	<!-- Terms Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{#each filteredTerms as term (term.id)}
			<TermCard {term} />
		{/each}
	</div>

	{#if filteredTerms.length === 0}
		<div class="text-center py-12">
			<p class="text-gray-500 text-lg">No terms found matching your criteria.</p>
		</div>
	{/if}
</div>
