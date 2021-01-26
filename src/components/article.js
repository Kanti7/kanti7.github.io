import React, { useState, useEffect } from 'react'

const TOP_WHITE = 'rgba(100%, 100%, 100%, 70%)'
const BOTTOM_WHITE = 'rgba(100%, 100%, 100%, 90%)'

function Article(props) {
  const {id, summary_short, summary_long, first_article, total_articles} = props
  const image_url = first_article.newsapi_image_url

  const style = {
    background: `linear-gradient(transparent 24%, ${TOP_WHITE} 48%, ${BOTTOM_WHITE}), center/cover no-repeat url(${image_url})`,
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
