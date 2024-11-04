import { useEffect, useState } from "react";
import { nowPlaying, popular, topRated, upComing } from "../../api";
import Banner from "./components/Banner";
import Loading from "../../components/Loading";
import "swiper/css";
import Movies from "./components/Movies";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [nowData, setNowData] = useState();
  const [popData, setPopData] = useState();
  const [topData, setTopData] = useState();
  const [upData, setUpData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // const [now, pop, top, up] = await Promise.all([
        //   nowPlaying(),
        //   popular(),
        //   topRated(),
        //   upComing(),
        // ]);

        // setNowData(now.results);
        // setPopData(pop.results);
        // setTopData(top.results);
        // setUpData(up.results);
        // setIsLoading(false);

        const { results: now } = await nowPlaying();
        const { results: pop } = await popular();
        const { results: top } = await topRated();
        const { results: up } = await upComing();

        setNowData(now);
        setPopData(pop);
        setTopData(top);
        setUpData(up);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // console.log(nowData);
  // console.log(popData);
  // console.log(topData);
  // console.log(upData);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Home | RAMFLIEX</title>
          </Helmet>
          {nowData && (
            <div>
              <Banner data={nowData} />
              <Movies title="현재 상영중" data={nowData} />
              <Movies title="인기 영화" data={popData} />
              <Movies title="최고 평점 영화" data={topData} />
              <Movies title="개봉 예정 영화" data={upData} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;

// https://image.tmdb.org/t/p/original/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg%22

// *동기화
// =>새로고침 후 데이터를 받아오는 것
// =>어느 메소드가 실행하고 있으면 다른 메소드가 접근하는것을 제한

// *비동기화
// =>async
// -> await(async 와 한쌍으로 비동기화가 들어갈때 같이 들어가야함 (await은 여러개가능))
// =>어느 메소드가 종료 되지 않아도 다른 메소드 실행이 가능하다.
// =>Promise

// useEffect(() => {
//   const movie = async () => {
//     const now = await nowPlaying();
//     console.log(now);
//   };
//   movie();
