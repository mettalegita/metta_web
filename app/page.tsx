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
import clientsData from '@/data/clients.json'
import homepageData from '@/data/homepage.json'
import testimonialsData from '@/data/testimonials.json'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Metta - Digital Agency',
}

const Home = () => {
  const { hero, about, services, cta } = homepageData
  const blogs = getMarkDownData('data/marketing/blog')
  
  // Load services from CMS collection
  const servicesData = getMarkDownData('data/servicesV2')
  const serviceItems = servicesData.slice(0, 4).map((service: any, index: number) => ({
    id: index + 1,
    title: service.title,
    subtitle: service.description,
    features: service.content?.split('\n').filter((line: string) => line.trim().startsWith('-')).map((line: string) => line.replace(/^-\s*/, '').trim()) || ['Service feature'],
  }))

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
        items={serviceItems.length > 0 ? serviceItems : services.items}
      />
      <BlogPost blogs={blogs} />
      <Clients
        italicTitle={clientsData.italicTitle}
        headingTitle={clientsData.headingTitle}
        description={clientsData.description}
        logos={clientsData.logos}
        testimonials={testimonialsData.testimonials}
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

export default Home
