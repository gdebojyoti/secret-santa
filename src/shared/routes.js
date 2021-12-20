import Welcome from 'shared/pages/Welcome'
import EventDetail from 'shared/pages/EventDetail'

const routes = [
  {
    path: '/',
    component: Welcome,
    isExact: true
  },
  // {
  //   path: '/verify-user',
  //   component: Character,
  //   isExact: true
  // },
  // {
  //   path: '/create-event',
  //   component: Characters,
  //   isExact: true
  // },
  {
    path: '/event/:id',
    component: EventDetail,
    isExact: true
  },
  // {
  //   path: '/events',
  //   component: AdventureRank,
  //   isExact: true
  // }
]

export default routes
