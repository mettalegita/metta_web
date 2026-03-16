import ServiceContent from '@/components/services-page/ServiceContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/photography-studio/services')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const PhotographyStudioServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/photography-studio/services/', slug)
  const singleService = service.data

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Service Details"
        title={singleService?.title}
        description={singleService?.description}
        scale
      />
      <ServiceContent service={service} />
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

export default PhotographyStudioServiceDetails
