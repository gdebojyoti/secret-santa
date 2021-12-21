import { track } from 'shared/utils/reactGa'

const tracking = (id) => {
  switch (id) {
    case 'EVENT_DETAIL_CTA_CLICKED': {
      track({ category: 'event_detail', action: 'cta_clicked' })
      break
    }
    case 'EVENT_DETAIL_ERROR': {
      track({ category: 'event_detail', action: 'failed' })
      break
    }
    case 'EVENT_DETAIL_SUCCESS': {
      track({ category: 'event_detail', action: 'succeeded' })
      break
    }
  }
}

export default tracking