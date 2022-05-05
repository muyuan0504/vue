const IndexPage = () => import(/* webpackChunkName: "page_index" */ '../pages/index/index.vue');
const IndexPoster = () => import(/* webpackChunkName: "page_index" */ '../pages/poster/index.vue');
const Error = () => import(/* webpackChunkName: "page_error" */ '../pages/error/index.vue');
const UserInfo = () => import(/* webpackChunkName: "page_user" */ '../pages/index/user-info/index.vue');
const OtherInfo = () => import(/* webpackChunkName: "page_other" */ '../pages/index/other-info/index.vue');

export const routes = [
    {
        path: '/',
        redirect: '/index',
    },
    {
        path: '/index',
        name: 'index',
        component: IndexPage,
        children: [
            { path: 'jimous', name: 'jimous', component: UserInfo },
            { path: 'other', name: 'other', component: OtherInfo },
        ],
    },
    {
        path: '/poster',
        name: 'poster',
        component: IndexPoster,
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/404',
        name: 'error',
        component: Error,
    },
];
