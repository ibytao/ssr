// Components
import Home from '../app/pages/home'
import About from '../app/pages/about'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
];

export default routes
