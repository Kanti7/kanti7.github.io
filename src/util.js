export const API_HOST = "news-backend.ttrend.in"

export function fetchSummaries() {
  const url = `https://${API_HOST}/summaries`
  return fetch(url).then(response => response.json())
}

export function fetchSummary(stem, index) {
  const url = `https://${API_HOST}/summaries/${stem}/${index}`
  return fetch(url).then(response => response.json())
}
