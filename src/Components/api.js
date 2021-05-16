import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'eb2033d85eb37dfc5bba1f02fc4e0099',
    language: 'en-US'
  }
})

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing"),
    upcoming: () => api.get("movie/upcoming"),
    popular: () => api.get("movie/popular"),
    movieDetail: id => api.get(`movie/${id}`),
    search: keyword => api.get("search/movie", {
        params: {
            query: encodeURIComponent(keyword)
        }
    })
};

export const tvApi = {
    topRated: () => api.get("tv/top_rated"),
    popular: () => api.get("tv/popular"),
    airingToday: () => api.get("tv/airing_today"),
    tvDetail: id => api.get(`movie/${id}`),
    search: keyword => api.get("search/tv", {
        params: {
            query: encodeURIComponent(keyword)
        }
    })
};

