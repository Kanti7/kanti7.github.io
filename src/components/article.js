import React, { useState, useEffect } from 'react'

function Article(props) {
  const {summary_short, summary_long, n_articles} = props

  return (
    <article>
      <p>{summary_short}</p>
    </article>
  )
}

export default Article
