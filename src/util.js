export const API_HOST = "ec2-52-14-57-65.us-east-2.compute.amazonaws.com"

export function fetchSummaries() {
  const url = `http://${API_HOST}/summaries`
  return fetch(url).then(response => response.json())
}
