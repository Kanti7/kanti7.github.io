import React, { useState, useEffect } from 'react'

import {fetchSummaries} from '../util'

import Article from './article'

function Feed() {
  const [summaries, setSummaries] = useState([])

  React.useEffect(() => {
    fetchSummaries().then(summaries => setSummaries(summaries))
  })

  const displayed_summaries = summaries.slice(0, 50)

  return (
    <div>
      <h2>Displaying {displayed_summaries.length} out of {summaries.length} news events</h2>
      {displayed_summaries.map((summary, i) =>
        <div key={i}>
          <Article {...summary} />
        </div>
      )}
    </div>
  )
}

export default Feed
