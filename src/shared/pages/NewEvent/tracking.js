import { track } from 'shared/utils/reactGa'

const tracking = (id) => {
  switch (id) {
    case 'NEW_EVENT_CTA_CLICKED': {
      track({ category: 'new_event', action: 'cta_clicked' })
      break
    }
    case 'NEW_EVENT_ERROR': {
      track({ category: 'new_event', action: 'failed' })
      break
    }
    case 'NEW_EVENT_CREATED': {
      track({ category: 'new_event', action: 'succeeded' })
      break
    }
  }
}

export default tracking