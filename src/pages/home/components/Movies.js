import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { W500_URL } from "../../../constant/imgUrl";
import styled from "styled-components";
import { mainStyle } from "../../../GlobalStyled";

const Container = styled.section`
  padding: 0 ${mainStyle.moPadding};
  @media screen and (min-width: 450px) {
    padding: 0 ${mainStyle.pcPadding};
  }
`;
const Title = styled.div`
  margin: 50px 0;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
`;
const Con = styled.div`
  width: 100%;
  aspect-ratio: 2 / 3;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Movies = ({ title, data }) => {
  const params = {
    spaceBetween: 10,
    slidesPerView: 3.3,
    breakpoints: {
      1024: {
        spaceBetween: 20,
        slidesPerView: 5.5,
      },
      640: {
        spaceBetween: 15,
        slidesPerView: 4.5,
      },
      320: {
        spaceBetween: 10,
        slidesPerView: 3.3,
      },
    },
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Swiper {...params}>
        {data.map(({ id, poster_path, title }) => (
          <SwiperSlide key={id}>
            <Con>
              <Link to={`/detail/${id}`}>
                <img src={W500_URL + poster_path} alt={title} />
              </Link>
            </Con>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
