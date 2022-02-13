// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('../pages/myHome/MyHome'),
        },
        {
            path: '/school',
            component: () => import('../pages/mySchool/CampusManagement'),
        },
        {
            path: '/teacher',
            component: () => import('../pages/myTeacher/TeacherManagement'),
        },
        {
            path: '/student',
            component: () => import('../pages/myStudent/StudentManagement'),
        },
        {
            path: '/score',
            component: () => import('../pages/myScoreAnalysis/ScoreAnalysis'),
        },
        {
            path: '/course',
            component: () => import('../pages/myCourse/CourseManagement'),
        },
        {
            path: '/set',
            component: () => import('../pages/mySetting/Setting'),
        },
    ],
});

export default router;