import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import ServiceContent from '@/components/services-page/ServiceContent'
import ServicesHero from '@/components/services-page/ServicesHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/servicesV3')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const ServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/servicesV3/', slug)
  const postServices = service.data

  return (
    <LayoutOne>
      <ServicesHero
        badgeTitle={postServices?.badgeTitle}
        title={postServices?.title}
        description={postServices?.description}
        scale
      />
      <ServiceContent service={service} />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
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

export default ServiceDetails
