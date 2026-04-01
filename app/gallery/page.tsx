import GallerySlider from '@/components/shared/GallerySlider'
import LayoutOne from '@/components/shared/LayoutOne'
import galleryData from '@/data/gallery.json'

export const metadata = {
  title: 'Gallery - Metta Legita',
}

const GalleryPage = () => {
  return (
    <LayoutOne>
      <section className="pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-[140px]">
        <div className="container">
          <div className="mb-8 text-center md:mb-14">
            <span className="rv-badge mb-3 inline-block">
              <span className="rv-badge-text">{galleryData.sectionTitle}</span>
            </span>
            <h2 className="text-3xl font-semibold text-secondary dark:text-backgroundBody md:text-5xl">
              {galleryData.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-secondary/70 dark:text-backgroundBody/70">
              {galleryData.description}
            </p>
          </div>
          <GallerySlider images={galleryData.images} />
        </div>
      </section>
    </LayoutOne>
  )
}

export default GalleryPage
