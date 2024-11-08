/** @jsx jsx */
import { jsx, Container, Heading, Text, Box } from 'theme-ui';
import Image from 'components/image';
import SectionHeader from 'components/section-header';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Avatar1 from 'assets/companies/discovery.svg';
import Avatar2 from 'assets/companies/fancentro.svg';
import Avatar3 from 'assets/companies/fanvue.svg';
import Avatar4 from 'assets/companies/onlyfans.svg';
import Avatar5 from 'assets/companies/playboy.svg';
import Avatar6 from 'assets/companies/talpa.svg';

const data = [
  {
    id: 1,
    avatar: Avatar1,
  },
  {
    id: 2,
    avatar: Avatar2,
  },
  {
    id: 3,
    avatar: Avatar3,
  },
  {
    id: 4,
    avatar: Avatar4,
  },
  {
    id: 5,
    avatar: Avatar5,
  },
  {
    id: 6,
    avatar: Avatar6,
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1310 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1310, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 992, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

export default function Partnership() {
  return (
    <section id="testimonial" sx={{ variant: 'section.testimonial' }}>
      <Container>
        <SectionHeader title="Partnerships & Collaborations" />
      </Container>
      <Box sx={styles.carouselWrapper}>
        <Carousel
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite={true}
          keyBoardControl
          minimumTouchDrag={80}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          slidesToSlide={1}
        >
          {data.map((item) => (
            <div className="image">
              <Image src={item.avatar} alt="Client Image" sx={styles.image} />
            </div>
          ))}
        </Carousel>
      </Box>
    </section>
  );
}

const styles = {
  carouselWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'flex-end',
    mt: '-35px',
    pb: [0, null, null, 2],
    '.carousel-container': {
      width: '100%',
      '@media screen and (min-width: 1310px)': {
        // width: 'calc(50% + 865px)',
        // mr: '-220px',
      },
      '.react-multi-carousel-item': {
        transition: 'all 0.25s',
      },
      '.react-multi-carousel-item--active:nth-of-type(4n)': {
        opacity: '0.5',
        '@media screen and (max-width: 1310px)': {
          opacity: 1,
        },
      },
    },
  },
  image : {
    pl: ['5%', null, null, '10%'],
    pr: ['5%', null, null, '10%'],
    width: '100%'
  }

};
