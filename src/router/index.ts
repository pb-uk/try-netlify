import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '../dashboard/DashboardPage.vue';
import ZettlePage from '../zettle/ZettlePage.vue';

import NotFoundPage from '../dashboard/NotFoundPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: '/', name: 'Dashboard', component: DashboardPage },
		{ path: '/zettle', name: 'Zettle', component: ZettlePage },

		{
			path: '/:pathMatch(.*)',
			name: 'NotFound',
			component: NotFoundPage,
			meta: {
				requiresAuth: false,
			},
		},
	],
});

export default router;
