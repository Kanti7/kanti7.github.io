import React, { useState, useEffect } from 'react'

const TOP_WHITE = 'rgba(100%, 100%, 100%, 60%)'
const BOTTOM_WHITE = 'rgba(100%, 100%, 100%, 80%)'

function Article(props) {
  const {id, summary_short, summary_long, first_article, total_articles} = props
  const image_url = first_article.newsapi_image_url

  const style = {
    background: `linear-gradient(${TOP_WHITE}, ${BOTTOM_WHITE}), center/cover no-repeat url(${image_url})`,
  }

  return (
    <article style={style}>
      <div className="summary">
        {summary_short}
      </div>
      <a>
        {total_articles > 1 ?
          `See all ${total_articles} articles` :
          `See article details`} ➡︎
      </a>
    </article>
  )
}

export default Article
