import ReactGA from 'react-ga'

const TRACKING_ID = 'UA-215786344-1'

export const initGa = () => {
  ReactGA.initialize(TRACKING_ID)
}

export const trackingPageGa = (page) => {
  ReactGA.pageview(page)
}

export const eventGa = ({category, action, label = '', value, nonInteraction = false}) => {
  ReactGA.event({
    category, // Required
    action, // Required
    label: 'labelName',
    value: 10,
    nonInteraction,
  })
}