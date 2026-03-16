import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FollowMe from '@/components/shared/FollowMe'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/portfolio-agency/case-studies')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const CaseStudyDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project = getMarkDownContent('data/portfolio-agency/case-studies/', slug)
  const postprojects = project.data

  return (
    <LayoutOne>
      <ProjectDetailsHero
        badgeTitle={postprojects?.badge}
        title={postprojects?.title}
        description={postprojects?.description}
        scale
      />
      <ProjectContent project={project} />
      <FollowMe />
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

export default CaseStudyDetails
