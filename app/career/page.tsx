import Benefits from '@/components/careerpage/Benefits'
import CareerHero from '@/components/careerpage/CareerHero'
import CompanyGallery from '@/components/careerpage/CompanyGallery'
import Jobs from '@/components/careerpage/Jobs'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'CareerPage',
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <CareerHero />
      <CompanyGallery />
      <Benefits />
      <Jobs />
      <CTA>
        Let's create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/uploads/songs_white_500x200.png' },
            { id: '2', img: '/images/uploads/harmony_white_500x200.png' },
            { id: '3', img: '/images/uploads/melodies_white_500x200.png' },
          ]}
        />
        together.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Music that moves you</i>
      </CTA>
    </LayoutOne>
  )
}

export default CareerPage
