import React, { useState, useEffect } from 'react'

import {fetchSummaries} from '../util'

import Article from './article'

function Feed() {
  const [summaries, setSummaries] = useState([])

  useEffect(() => {
    fetchSummaries().then(summaries => setSummaries(summaries))
  }, [])

  const displayed_summaries = summaries.slice(0, 10)

  return (
    <div className="feed">
      <header>
        <h4>
          Displaying {displayed_summaries.length} out of {summaries.length} news events
        </h4>
      </header>
      {displayed_summaries.map((summary, i) =>
        <div key={i}>
          <Article {...summary} />
        </div>
      )}
    </div>
  )
}

export default Feed
