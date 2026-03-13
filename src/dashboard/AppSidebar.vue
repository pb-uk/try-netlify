<script setup lang="ts">
import { useRoute } from 'vue-router';

import SidebarTeams from './SidebarTeams.vue';

import {
	// ArrowDownTrayIcon,
	CalendarIcon,
	ChartPieIcon,
	Cog6ToothIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UserIcon,
	UsersIcon,
} from '@heroicons/vue/24/outline';

import { StripeIcon, ZettleIcon } from '../ui/icons';

const route = useRoute();

const navigation = [
	{ name: 'Dashboard', href: '/', icon: HomeIcon },
	{ name: 'Stripe', href: '/stripe', icon: StripeIcon },
	{ name: 'Zettle', href: '/zettle', icon: ZettleIcon },
	{ name: 'Team', href: '#', icon: UsersIcon },
	{ name: 'Projects', href: '#', icon: FolderIcon },
	{ name: 'Calendar', href: '#', icon: CalendarIcon },
	{ name: 'Documents', href: '#', icon: DocumentDuplicateIcon },
	{ name: 'Reports', href: '#', icon: ChartPieIcon },
	{ name: 'Login', label: 'Sign in', href: '/sign-in', icon: UserIcon },
	{ name: 'Profile', href: '/profile', icon: UserIcon },
	{ name: 'Settings', href: '/settings', icon: Cog6ToothIcon },
];
</script>

<template>
	<div
		class="relative flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4 dark:bg-gray-900 dark:ring dark:ring-white/10 dark:before:pointer-events-none dark:before:absolute dark:before:inset-0 dark:before:bg-black/10"
	>
		<div class="relative flex h-16 shrink-0 items-center">
			<img
				class="h-8 w-auto dark:hidden"
				src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
				alt="Your Company"
			/>
			<img
				class="h-8 w-auto not-dark:hidden"
				src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
				alt="Your Company"
			/>
		</div>
		<nav class="relative flex flex-1 flex-col">
			<ul role="list" class="flex flex-1 flex-col gap-y-7">
				<li>
					<ul role="list" class="-mx-2 space-y-1">
						<li v-for="item in navigation" :key="item.name">
							<a
								:href="item.href"
								:class="[
									route.name === item.name ?
										'bg-gray-50 text-indigo-600 dark:bg-white/5 dark:text-white'
									:	'text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-white',
									'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
								]"
							>
								<component
									:is="item.icon"
									:class="[
										route.name === item.name ?
											'text-indigo-600 dark:text-white'
										:	'text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white',
										'size-6 shrink-0',
									]"
									aria-hidden="true"
								/>
								{{ item.name }}
							</a>
						</li>
					</ul>
				</li>

				<li>
					<SidebarTeams />
				</li>

				<!-- Unused sticky bottom item from template
				<li class="mt-auto">
					<a
						href="#"
						class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
					>
						<Cog6ToothIcon
							class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-white"
							aria-hidden="true"
						/>
						Settings
					</a>
				</li>
				-->
			</ul>
		</nav>
	</div>
</template>
