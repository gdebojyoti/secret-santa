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
  //   component: VerifyUser,
  //   isExact: true
  // },
  // {
  //   path: '/events/new',
  //   component: NewEvent,
  //   isExact: true
  // },
  {
    path: '/event/:id',
    component: EventDetail,
    isExact: true
  },
  // {
  //   path: '/events',
  //   component: AllEvents,
  //   isExact: true
  // }
]

export default routes
