<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
<template>
	<h1>Not Found</h1>
	<p>
		The route
		<code class="bg-gray-100 px-1">{{ route.params.pathMatch }}</code> cannot be
		found.
	</p>
</template>
