export const API_HOST = "https://news-backend.ttrend.in/"

export function fetchSummaries() {
  const url = `https://${API_HOST}/v1/summaries`
  return fetch(url).then(response => response.json())
}

export function fetchSummary(stem, index) {
  const url = `https://${API_HOST}/v1/summaries/${stem}/${index}`
  return fetch(url).then(response => response.json())
}
