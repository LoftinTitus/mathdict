<script lang="ts">
	import type { Term } from '../types.js';

	export let term: Term;
</script>

<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-200">
	<div class="space-y-4">
		<!-- Header -->
		<div class="flex justify-between items-start">
			<h3 class="text-xl font-semibold text-gray-900">{term.name}</h3>
			<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
				{term.subject}
			</span>
		</div>

		<!-- Definition -->
		<div class="text-gray-700">
			{@html term.definition}
		</div>

		<!-- Formula (if exists) -->
		{#if term.formula}
			<div class="bg-gray-50 p-3 rounded border">
				<div class="text-sm font-medium text-gray-600 mb-1">Formula:</div>
				<div class="font-mono text-sm">
					{@html term.formula}
				</div>
			</div>
		{/if}

		<!-- Example (if exists) -->
		{#if term.example}
			<div class="bg-green-50 p-3 rounded border border-green-200">
				<div class="text-sm font-medium text-green-800 mb-1">Example:</div>
				<div class="text-sm text-green-700">
					{@html term.example}
				</div>
			</div>
		{/if}

		<!-- Tags (if exists) -->
		{#if term.tags && term.tags.length > 0}
			<div class="flex flex-wrap gap-1">
				{#each term.tags as tag}
					<span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</div>
