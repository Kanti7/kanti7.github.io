import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import {fetchSummaries} from '../util'

import Article from './article'

function Feed() {
  const location = useLocation()
  const query = new URLSearchParams(location.search);

  const [summaries, setSummaries] = useState([])

  useEffect(() => {
    fetchSummaries().then(summaries => setSummaries(summaries))
  }, [])

  const min_articles = parseInt(query.get("min_articles") || 2, 10)
  const selected_summaries = summaries.filter(summary => summary.total_articles >= min_articles)

  const offset = parseInt(query.get("offset") || 0, 10)
  const limit = parseInt(query.get("limit") || 20, 10)
  const displayed_summaries = selected_summaries.slice(offset, offset + limit)

  return (
    <div className="feed">
      <header>
        <h4>
          Displaying {displayed_summaries.length} out of {selected_summaries.length} news events
        </h4>
      </header>
      {displayed_summaries.map((summary, i) =>
        <div key={i}>
          <Article {...summary} />
        </div>
      )}
      <footer>
        <Link to={{search: `?offset=${offset + limit}&limit=${limit}`}}>
          View more
        </Link>
      </footer>
    </div>
  )
}

export default Feed
