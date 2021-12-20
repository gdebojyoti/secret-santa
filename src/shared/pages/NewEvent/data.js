import UserDetails from 'shared/components/NewEvent/UserDetails'

export const fields = [
  {
    type: 'text',
    key: 'title',
    label: 'Event title',
    placeholder: 'Wong\'s Secret Santa',
    isRequired: true
  },
  {
    type: 'text',
    key: 'amount',
    label: 'Budget (per person)',
    placeholder: '$25 or ₹1000',
    isRequired: true
  },
  {
    type: 'custom',
    key: 'users',
    component: UserDetails,
    label: 'User details',
    isRequired: true
  }
]