import React from 'react'

import MetaTags from 'shared/components/common/MetaTags'

import {
  pageStyle
} from './style'

const EventDetail = ({ match }) => {
  const {
    params: {
      id
    } = {}
  } = match || {}

  console.log("id", id)

  return (
    <div css={pageStyle}>
      <MetaTags />

      <header>
        <h1>
          EventDetail to the Real Secret Santa app!!.
        </h1>
      </header>

      <footer>
        @copy; 2021 <strong>Debojyoti Ghosh</strong>
      </footer>
    </div>
  )
}

export default EventDetail
