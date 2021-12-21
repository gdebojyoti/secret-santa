import { track } from 'shared/utils/reactGa'

const tracking = (id) => {
  switch (id) {
    case 'WELCOME_OPEN_MODAL': {
      track({ category: 'welcome', action: 'open_modal' })
      break
    }
    case 'SIGNUP_CTA_CLICKED': {
      track({ category: 'signup', action: 'cta_clicked' })
      break
    }
    case 'SIGNUP_ERROR': {
      track({ category: 'signup', action: 'failed' })
      break
    }
    case 'SIGNUP_SUCCESS': {
      track({ category: 'signup', action: 'succeeded' })
      break
    }
    case 'LOGIN_CTA_CLICKED': {
      track({ category: 'login', action: 'cta_clicked' })
      break
    }
    case 'LOGIN_ERROR': {
      track({ category: 'login', action: 'failed' })
      break
    }
    case 'LOGIN_SUCCESS': {
      track({ category: 'login', action: 'succeeded' })
      break
    }
  }
}

export default tracking