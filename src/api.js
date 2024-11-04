const fetch = require("node-fetch");
// =>import와 같음

const baseUrl = "https://api.themoviedb.org/3/";
// =>기본url

const options = {
  method: "GET",
  headers: {
    // =>요청했을때 필요한정보
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTM2MTFmYzE2M2NmZWFjMjdlZjExODA0YmMzMGM4YyIsIm5iZiI6MTczMDI3MDU2My44MjQwODQzLCJzdWIiOiI2NzIxYjQ3YmZlMmE4YTAxMWVkNzEwODciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n3PlAC41wjWl565TMMrNS9ZEOG0aYV94eGre8gPjd0U",
  },
};

const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());
// 요청할때 매개변수가 두개(url,options) 들어감 요청후 then 메서드를 통해 제이슨형식으로 가공

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());
