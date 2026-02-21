import AboutV2 from '@/components/homepage-03/AboutV2'
import BlogPost from '@/components/homepage-03/BlogPost'
import Clients from '@/components/homepage-03/Clients'
import HeroV3 from '@/components/homepage-03/HeroV3'
import PortfolioV3 from '@/components/homepage-03/PortfolioV3'
import ServicesV3 from '@/components/homepage-03/ServicesV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import homepageData from '@/data/homepage.json'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Portfolio Agency - Rivor',
}

const homepage3 = () => {
  const { hero, about, services, clients, cta } = homepageData
  const blogs = getMarkDownData('data/marketing/blog')

  return (
    <LayoutOne>
      <HeroV3 image={hero.image} title={hero.title} subtitle={hero.subtitle} />
      <AboutV2
        description={about.description}
        emailPlaceholder={about.emailPlaceholder}
        buttonText={about.buttonText}
      />
      <PortfolioV3 />
      <ServicesV3
        sectionTitle={services.sectionTitle}
        sectionDescription={services.sectionDescription}
        buttonText={services.buttonText}
        buttonLink={services.buttonLink}
        items={services.items}
      />
      <BlogPost blogs={blogs} />
      <Clients
        italicTitle={clients.italicTitle}
        headingTitle={clients.headingTitle}
        description={clients.description}
        logos={clients.logos}
      />
      <FaqV2 />
      <CTA>
        {cta.textBefore}
        <CtaImageSlider slides={cta.images.map((img) => ({ id: img.id, img: img.image }))} />
        {cta.textAfter}
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">{cta.italicText}</i>
      </CTA>
    </LayoutOne>
  )
}

export default homepage3
