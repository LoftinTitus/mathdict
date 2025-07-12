<script lang="ts">
	import { terms } from '../data/terms.js';
	import { getUniqueSubjects, getRandomTerms } from '../lib/utils.js';
	import TermCard from '../lib/components/TermCard.svelte';

	$: subjects = getUniqueSubjects(terms);
	$: featuredTerms = getRandomTerms(terms, 3);
</script>

<svelte:head>
	<title>Math Dictionary - Learn Mathematical Concepts</title>
	<meta name="description" content="Explore and learn mathematical terms, formulas, and concepts across various subjects including calculus, algebra, geometry, and more." />
</svelte:head>

<div class="space-y-12">
	<!-- Hero Section -->
	<div class="text-center space-y-6">
		<h1 class="text-4xl md:text-6xl font-bold text-gray-900">
			Math Dictionary
		</h1>
		<p class="text-xl text-gray-600 max-w-2xl mx-auto">
			Your comprehensive guide to mathematical terms, formulas, and concepts. 
			Explore definitions, see examples, and master mathematics one term at a time.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a 
				href="/math"
				class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
			>
				Browse All Terms
			</a>
			<a 
				href="#subjects"
				class="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
			>
				Explore by Subject
			</a>
		</div>
	</div>

	<!-- Statistics -->
	<div class="bg-blue-50 rounded-xl p-8">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
			<div>
				<div class="text-3xl font-bold text-blue-600">{terms.length}</div>
				<div class="text-gray-600">Mathematical Terms</div>
			</div>
			<div>
				<div class="text-3xl font-bold text-blue-600">{subjects.length}</div>
				<div class="text-gray-600">Subject Areas</div>
			</div>
			<div>
				<div class="text-3xl font-bold text-blue-600">∞</div>
				<div class="text-gray-600">Learning Opportunities</div>
			</div>
		</div>
	</div>

	<!-- Featured Terms -->
	<div class="space-y-6">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Featured Terms</h2>
			<p class="text-gray-600">Discover some essential mathematical concepts</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each featuredTerms as term (term.id)}
				<TermCard {term} />
			{/each}
		</div>
	</div>

	<!-- Subjects Section -->
	<div id="subjects" class="space-y-6">
		<div class="text-center">
			<h2 class="text-3xl font-bold text-gray-900 mb-4">Explore by Subject</h2>
			<p class="text-gray-600">Dive deep into specific areas of mathematics</p>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each subjects as subject}
				{@const subjectTerms = terms.filter(term => term.subject === subject)}
				<a 
					href="/{subject.toLowerCase()}"
					class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 group"
				>
					<h3 class="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
						{subject}
					</h3>
					<p class="text-gray-600 mt-2">
						{subjectTerms.length} term{subjectTerms.length !== 1 ? 's' : ''}
					</p>
					<div class="mt-4 text-blue-600 group-hover:text-blue-700 text-sm font-medium">
						Explore {subject} →
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
