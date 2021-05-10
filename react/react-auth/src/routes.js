import { lazy } from 'react';

const HeadMaster = lazy(() => import('./pages/management/HeadMaster'));
const Teachers = lazy(() => import('./pages/management/Teachers'));
const Students = lazy(() => import('./pages/management/Students'));
const Math = lazy(() => import('./pages/task/Math'));
const English = lazy(() => import('./pages/task/English'));
const Chinese = lazy(() => import('./pages/task/Chinese'));
const NotFound = lazy(() => import('./404'));
const NoAuth = lazy(() => import('./403'));

/**
 * @authority 菜单权限 code - 可配置多个，只有配置的所有 code 都匹配时，才认为当前页面可访问
 * eg. 
 *  路由配置：
 *  {
 *      path: '/management/headmasters',
 *      name: '校长信息',
 *      exact: true, 
 *      component: Teachers,
 *      authority: ['management.headmasters', 'management.headmasters.add'],
 *  }
 *  用户拥有权限：permission: ['management.headmasters', 'management.teachers']
 *  用户权限'management.headmasters'只能匹配到 authority 配置中的一项，因此该用户不具有校长信息页面的访问权限
 * @optionsAuthority 操作权限 code
 * 
 */

export const routes = [
  {
    path: '/management',
    name: '信息管理',
    redirect: '/management/headmasters',
    exact: true,
    authority: ['management.headmasters', 'management.teachers', 'management.students'],
    children: [
      {
        path: '/management/headmasters',
        name: '校长信息',
        exact: true, 
        component: HeadMaster,
        authority: 'management.headmasters',
        optionsAuthority: ['management.headmasters.add', 'management.headmasters.delete']
      },
      {
        path: '/management/teachers',
        name: '教师信息',
        exact: true, 
        component: Teachers,
        authority: 'management.teachers',
        optionsAuthority: ['management.teachers.add', 'management.teachers.delete']
      },
      {
        path: '/management/students',
        name: '学生信息',
        exact: true, 
        component: Students,
        authority: 'management.students',
        optionsAuthority: ['management.students.add', 'management.students.delete']
      }
    ]
  },
  {
    path: '/task',
    name: '作业管理',
    redirect: '/task/chinese',
    exact: true,
    authority: ['task.chinese', 'task.math', 'task.english'],
    children: [
      {
        path: '/task/chinese',
        name: '语文',
        exact: true, 
        component: Chinese,
        authority: 'task.chinese',
      },
      {
        path: '/task/math',
        name: '数学',
        exact: true, 
        component: Math,
        authority: 'task.math',
      },
      {
        path: '/task/english',
        name: '英语',
        exact: true, 
        component: English,
        authority: 'task.english',
      }
    ] 
  },
  {
    path: '/403',
    component: NoAuth,
  },
  {
    path: '/404',
    component: NotFound,
  },
];