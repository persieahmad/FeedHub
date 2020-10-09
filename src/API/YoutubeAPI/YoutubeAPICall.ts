import axios from 'axios';
import { key } from '../../YoutubeAPIKey';

export default function YoutubeAPICall(query: string) {
  return axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=${key}&maxResults=40`,
    )
    .then((res) => res.data.items)
    .catch((err) => err);
}
