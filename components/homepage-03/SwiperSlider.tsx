'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'
import SwiperSlideContent from './SwiperSlideContent'

interface TestimonialItem {
  id: number
  tags: string
  title: string
  userImg: string
  userName: string
  position: string
}

interface SwiperSliderProps {
  testimonials?: TestimonialItem[]
}

const defaultTestimonials: TestimonialItem[] = [
  {
    id: 1,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title:
      'Exceptional materials. The most durable glass ever in a The Member Reviews section has additional guidelines from the Community',
    userImg: '/images/avatar/review-8.png',
    userName: 'Kathryn Murphy',
    position: 'CEO at Vercel',
  },
  {
    id: 2,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title:
      'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level.',
    userImg: '/images/avatar/review-6.png',
    userName: 'Zaks Addision',
    position: 'CEO at W3',
  },
  {
    id: 3,
    tags: 'The skeleton plan of a website can be broken down into three components',
    title:
      'Exceptional materials. The most durable glass ever in a smartphone. A beautiful new gold finish, achieved with an atomic-level.',
    userImg: '/images/avatar/review-9.png',
    userName: 'John Dewey',
    position: 'W3 Dev',
  },
]

const SwiperSlider = ({ testimonials = defaultTestimonials }: SwiperSliderProps) => {
  return (
    <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        speed={1500}
        allowTouchMove
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}>
        {testimonials.map(({ id, title, tags, userName, position, userImg }) => (
          <SwiperSlide key={id}>
            <SwiperSlideContent tags={tags} title={title} userName={userName} position={position} userImg={userImg} />
          </SwiperSlide>
        ))}
        <div className="swiper-custom-pagination mt-6 flex justify-center"></div>
      </Swiper>
    </RevealWrapper>
  )
}

export default SwiperSlider
