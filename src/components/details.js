import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {fetchSummary} from '../util'

function SourceArticle(props) {
  const {
    url,
    newsapi_source_id,
    newsapi_source_name,
    newsapi_author,
    newsapi_title,
    newsapi_description,
    newsapi_image_url,
    newsapi_date,
    newsapi_content,
    extracted_title,
    extracted_authors,
    extracted_date,
    extracted_text,
  } = props

  const title = newsapi_title
  const body = newsapi_content.replace(/\[\+\d+ chars\]$/, '')

  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  )
}

function Details(props) {
  const {stem, index} = props.match.params
  const [summary, setSummary] = useState({})

  useEffect(() => {
    fetchSummary(stem, index).then(summaries => setSummary(summaries))
  }, [stem, index])

  const {summary_short, summary_long, articles = []} = summary

  return (
    <div className="details">
      <header>
        <h4>
          <Link to="/">⬅︎ back</Link>
        </h4>
      </header>
      <section>
        <h4>Brief summary</h4>
        <p>
          {summary_short}
        </p>
      </section>
      <section>
        <h4>Extended summary</h4>
        <p>
          {summary_long}
        </p>
      </section>
      <section>
        <h4>
          {articles.length > 1 ? `${articles.length} articles` : `1 article`}
        </h4>
        {articles.map((article, i) =>
          <div key={i}>
            <SourceArticle {...article} />
          </div>
        )}
      </section>
    </div>
  )
}

export default Details
