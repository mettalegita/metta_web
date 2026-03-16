import BlogPostV5 from '@/components/blogpage/BlogPostV5'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'AI Blog',
}

export interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: BlogType[] = getMarkDownData('data/blogsV2')

const BlogPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Blog"
        title="What we got to say"
        italicTitle=""
        description="These alternatives can add a different tone or emphasis depending on how you want  to introduce your creative team. Let me know if you'd like any specific adjustments!"
      />
      <BlogPostV5 Blogs={loadedBlogs} />
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

export default BlogPage
