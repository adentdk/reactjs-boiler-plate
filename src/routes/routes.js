import {lazy} from 'react'

import {Lazyload} from './../HOC'

import {Clean as CleanLayout} from './../layouts'

const Login = lazy(() => import('./../pages/Login'))
const Dashboard = lazy(() => import('./../pages/Dashboard'))

export const routes = [
  {
    path: '/',
    exact: false,
    title: 'Root',
    component: CleanLayout,
    child: [
      {
        path: '/login',
        title: 'Login',
        exact: true,
        component: Lazyload(Login)
      },
      {
        path: '/dashboard',
        title: 'Dashboard',
        exact: true,
        component: Lazyload(Dashboard)
      }
    ]
  }
]