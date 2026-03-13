<script setup lang="ts">
import { ref } from 'vue';
import {
	Dialog,
	DialogPanel,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue';

import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

import AppSidebar from './AppSidebar.vue';
import AppTopNav from './AppTopNav.vue';

const sidebarOpen = ref(false);
</script>

<template>
	<div>
		<!-- Mobile sidebar. -->
		<TransitionRoot as="template" :show="sidebarOpen">
			<Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
				<TransitionChild
					as="template"
					enter="transition-opacity ease-linear duration-300"
					enter-from="opacity-0"
					enter-to=""
					leave="transition-opacity ease-linear duration-300"
					leave-from=""
					leave-to="opacity-0"
				>
					<div class="fixed inset-0 bg-gray-900/80"></div>
				</TransitionChild>

				<div class="fixed inset-0 flex">
					<TransitionChild
						as="template"
						enter="transition ease-in-out duration-300 transform"
						enter-from="-translate-x-full"
						enter-to="translate-x-0"
						leave="transition ease-in-out duration-300 transform"
						leave-from="translate-x-0"
						leave-to="-translate-x-full"
					>
						<DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
							<TransitionChild
								as="template"
								enter="ease-in-out duration-300"
								enter-from="opacity-0"
								enter-to=""
								leave="ease-in-out duration-300"
								leave-from=""
								leave-to="opacity-0"
							>
								<div
									class="absolute top-0 left-full flex w-16 justify-center pt-5"
								>
									<button
										type="button"
										class="-m-2.5 p-2.5"
										@click="sidebarOpen = false"
									>
										<span class="sr-only">Close sidebar</span>
										<XMarkIcon class="size-6 text-white" aria-hidden="true" />
									</button>
								</div>
							</TransitionChild>

							<AppSidebar />
						</DialogPanel>
					</TransitionChild>
				</div>
			</Dialog>
		</TransitionRoot>

		<!-- Static sidebar for desktop. -->
		<div
			class="hidden bg-gray-900 lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
		>
			<AppSidebar />
		</div>

		<!-- Header. -->
		<div class="lg:pl-72">
			<div
				class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-xs sm:gap-x-6 sm:px-6 lg:px-8 dark:border-white/10 dark:bg-gray-900 dark:shadow-none"
			>
				<!-- Sidebar trigger on mobile. -->
				<button
					type="button"
					class="-m-2.5 p-2.5 text-gray-700 hover:text-gray-900 lg:hidden dark:text-gray-400 dark:hover:text-white"
					@click="sidebarOpen = true"
				>
					<span class="sr-only">Open sidebar</span>
					<Bars3Icon class="size-6" aria-hidden="true" />
				</button>

				<!-- Separator on mobile. -->
				<div
					class="h-6 w-px bg-gray-200 lg:hidden dark:bg-white/10"
					aria-hidden="true"
				></div>

				<!-- Top navigation (user profile etc.). -->
				<AppTopNav />
			</div>

			<!-- Main content. -->
			<main class="py-10">
				<div class="px-4 sm:px-6 lg:px-8">
					<RouterView />
				</div>
			</main>
		</div>
	</div>
</template>
