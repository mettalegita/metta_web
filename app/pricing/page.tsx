import PricingCard from '@/components/homepage-07/PricingCard'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Pricing',
}

const PricingPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Pricing"
        italicTitle="Plan"
        badgeTitle="Pricing"
        description=" There are many variations of available have suffered alteration in some form by
injected words which don't look even slightly believable."
        scale
      />
      <PricingCard />
      <CTA>
        Let's create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/01.jpg' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        together.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Music that moves you</i>
      </CTA>
    </LayoutOne>
  )
}

export default PricingPage
