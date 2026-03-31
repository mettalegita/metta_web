import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'About - Metta Legita',
  description:
    'Metta Legita is an Indonesian pianist, composer, and educator whose work traverses the boundaries of jazz, classical, and traditional Indonesian music.',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero badgeTitle="About" title="Metta" italicTitle="Legita" description="Pianist, Composer, and Educator" />
      <section className="bg-backgroundBody pb-14 pt-14 dark:bg-dark md:pb-20 md:pt-20 lg:pb-28 lg:pt-28">
        <div className="container max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-secondary/80 dark:text-white/80 md:text-xl md:leading-relaxed">
              Metta Legita is an Indonesian pianist, composer, and educator whose work traverses the boundaries of jazz,
              classical, and traditional Indonesian music. Currently based in Phnom Penh, Cambodia, Metta has
              established herself as a versatile collaborator and solo artist with a discography spanning several
              acclaimed albums. Her performance credits include a wide array of international festivals and events,
              where she has shared the stage with diverse musicians from around the globe.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-secondary/80 dark:text-white/80 md:text-xl md:leading-relaxed">
              Driven by a relentless creative spirit, Metta continues to actively produce and compose new music,
              constantly seeking fresh inspiration through ongoing collaborations. Her original compositions are
              celebrated for their &ldquo;color and originality,&rdquo; a direct result of her ability to weave heritage
              with modern technical mastery.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-secondary/80 dark:text-white/80 md:text-xl md:leading-relaxed">
              Metta&apos;s academic background began with a Law degree from Universitas Katolik Parahyangan in Bandung,
              followed by a Bachelor&apos;s and Master&apos;s degree in Music Performance and Arranging/Orchestration
              from the Daya Indonesia Performing Arts Academy. A dedicated educator, she has taught at prestigious music
              schools and academies across Indonesia and has extensive experience teaching within the international
              school circuit. Whether working with beginners or advanced students, Metta is dedicated to fostering the
              next generation of musical talent and sharing the joy of artistic expression.
            </p>
          </div>
        </div>
      </section>
      <CTA>{''}</CTA>
    </LayoutOne>
  )
}

export default AboutPage
