<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

import { BellIcon } from '@heroicons/vue/24/outline';

import {
	ChevronDownIcon,
	MagnifyingGlassIcon,
	UserIcon,
} from '@heroicons/vue/20/solid';

const userNavigation = [
	{ name: 'Your profile', href: '#' },
	{ name: 'Sign out', href: '#' },
];
</script>

<template>
	<div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
		<form class="grid flex-1 grid-cols-1" action="#" method="GET">
			<input
				name="search"
				aria-label="Search"
				class="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-hidden placeholder:text-gray-400 sm:text-sm/6 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
				placeholder="Search"
			/>
			<MagnifyingGlassIcon
				class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400"
				aria-hidden="true"
			/>
		</form>

		<!-- User nav. -->
		<div class="flex items-center gap-x-4 lg:gap-x-6">
			<!-- Messages icon. -->
			<button
				type="button"
				class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 dark:hover:text-white"
			>
				<span class="sr-only">View notifications</span>
				<BellIcon class="size-6" aria-hidden="true" />
			</button>

			<!-- Separator on desktop. -->
			<div
				class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200 dark:lg:bg-white/10"
				aria-hidden="true"
			></div>

			<!-- Profile dropdown. -->
			<Menu as="div" class="relative">
				<MenuButton class="relative flex items-center">
					<span class="absolute -inset-1.5"></span>
					<span class="sr-only">Open user menu</span>
					<!-- Unused profile pic from template, replaced with icon
					<img
						class="size-8 rounded-full bg-gray-50 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
						src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
						alt=""
					/>
					-->

					<UserIcon
						class="size-8 rounded-full bg-gray-50 text-gray-500 outline -outline-offset-1 outline-black/5 dark:bg-gray-800 dark:outline-white/10"
					/>

					<span class="hidden lg:flex lg:items-center">
						<span
							class="ml-4 text-sm/6 font-semibold text-gray-900 dark:text-white"
							aria-hidden="true"
							>Tom Cook</span
						>
						<ChevronDownIcon
							class="ml-2 size-5 text-gray-400 dark:text-gray-500"
							aria-hidden="true"
						/>
					</span>
				</MenuButton>
				<transition
					enter-active-class="transition ease-out duration-100"
					enter-from-class="transform opacity-0 scale-95"
					enter-to-class="transform scale-100"
					leave-active-class="transition ease-in duration-75"
					leave-from-class="transform scale-100"
					leave-to-class="transform opacity-0 scale-95"
				>
					<MenuItems
						class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg outline-1 outline-gray-900/5 dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
					>
						<MenuItem
							v-for="item in userNavigation"
							:key="item.name"
							v-slot="{ active }"
						>
							<a
								:href="item.href"
								:class="[
									active ? 'bg-gray-50 outline-hidden dark:bg-white/5' : '',
									'block px-3 py-1 text-sm/6 text-gray-900 dark:text-white',
								]"
								>{{ item.name }}</a
							>
						</MenuItem>
					</MenuItems>
				</transition>
			</Menu>
		</div>
	</div>
</template>
