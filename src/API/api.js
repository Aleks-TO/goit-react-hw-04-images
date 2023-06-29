import axios from 'axios';

const perPage = 16;
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '35038712-71b872b7d8e0f549a800956a0';
const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: perPage,
});
async function fetchPictures(query, page) {
  const response = await axios.get(
    `${BASE_URL}?${searchParams}&q='${query}'&page=${page}`
  );
  return response.data;
}

export { fetchPictures, perPage };
