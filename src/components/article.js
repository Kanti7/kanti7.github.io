import React, { useState, useEffect } from 'react'

function Article(props) {
  const {summary_short, summary_long, total_articles} = props

  return (
    <article>
      <p>{summary_short}</p>
      <details>
        <summary>Long version</summary>
        <p>{summary_long}</p>
      </details>
      <small>
        ({total_articles} articles)
      </small>
    </article>
  )
}

export default Article
