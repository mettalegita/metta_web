import CareerHeroV2 from '@/components/careerpage-02/CareerHeroV2'
import Counter from '@/components/careerpage-02/Counter'
import Jobs from '@/components/careerpage/Jobs'
import Community from '@/components/shared/Community'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'CareerPage-02',
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <CareerHeroV2 />
      <Video />
      <Counter />
      <Jobs sectionHeader />
      <Community />
      <FAQ />
      <CTA>
        Let's create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/11.png' },
            { id: '3', img: '/images/agent/12.png' },
          ]}
        />
        together.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Music that moves you</i>
      </CTA>
    </LayoutOne>
  )
}

export default CareerPage
