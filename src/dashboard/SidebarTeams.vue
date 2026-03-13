<script setup lang="ts">
const teams = [
	{ id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
	{ id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
	{ id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
</script>

<template>
	<div class="text-xs/6 font-semibold text-gray-400">Your teams</div>
	<ul role="list" class="-mx-2 mt-2 space-y-1">
		<li v-for="team in teams" :key="team.name">
			<a
				:href="team.href"
				:class="[
					team.current ?
						'bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white'
					:	'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
					'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
				]"
			>
				<span
					:class="[
						team.current ?
							'border-indigo-600 text-indigo-600 dark:border-white/20 dark:text-white'
						:	'border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600 dark:border-white/10 dark:group-hover:border-white/20 dark:group-hover:text-white',
						'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium dark:bg-white/5',
					]"
					>{{ team.initial }}</span
				>
				<span class="truncate">{{ team.name }}</span>
			</a>
		</li>
	</ul>
</template>
