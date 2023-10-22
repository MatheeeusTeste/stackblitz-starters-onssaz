const endpoint = 'https://api.themoviedb.org/3';
const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjBkODI4MjZiOGUyMjY2MTU4MWYxNzUwNTIyNjUzMiIsInN1YiI6IjYwOTlhYjVjOTY1MjIwMDAzYzNlZmJiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.L8uDmB8VFk57vri4cRfm3_fOZ-OOsodfmcYCDdmc9Y0';

const config = {
  headers: {
    Authorization: 'Bearer ' + token,
  },
};

export async function getDiscoverMovies() {
  const response = await fetch(endpoint + '/discover/movie', config);
  const data = await response.json();
  return data;
}