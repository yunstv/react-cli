import BasicsLayout from '../layout/BasicsLayout'

const Home = () => import('../pages/home')
const List = () => import('../pages/home/list')

export default [
  {
    path: '/',
    component: BasicsLayout,
    children: [
      {
        path: 'home',
        name: '首页',
        component: Home,
      },
      {
        path: 'list',
        name: '列表',
        component: List,
      },
    ]
  }
]