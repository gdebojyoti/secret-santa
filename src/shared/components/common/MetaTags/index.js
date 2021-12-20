import React from 'react'
import { Helmet } from 'react-helmet'

const MetaTags = props => {
  const {
    title = 'Secret Santa Dx 🤫🎅 | The real app with 100% secrecy!',
    description = 'Secret Santa Dx 🤫🎅 | The real app with 100% secrecy'
  } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      <meta name='description' content={description} />
    </Helmet>
  )
}

export default MetaTags
