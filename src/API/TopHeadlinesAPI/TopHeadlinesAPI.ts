import axios from 'axios';

export function TopHeadlinesAPICall() {
  return axios
    .get('https://newsapi.org/v2/top-headlines?country=in&apiKey=60b30c59180e4e45a8ed8d4e81a43d21')
    .then((res) => res.data.articles)
    .catch((err) => err);
}
