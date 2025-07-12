<script lang="ts">
	import '../app.css';
</script>

<nav class="bg-blue-600 text-white p-4 shadow-lg">
	<div class="container mx-auto flex items-center justify-between">
		<h1 class="text-xl font-bold">
			<a href="/" class="hover:text-blue-200">Math Dictionary</a>
		</h1>
		<div class="space-x-4">
			<a href="/" class="hover:text-blue-200 px-3 py-2 rounded transition-colors">Home</a>
			<a href="/math" class="hover:text-blue-200 px-3 py-2 rounded transition-colors">Browse Terms</a>
		</div>
	</div>
</nav>

<main class="container mx-auto px-4 py-8">
	<slot />
</main>
