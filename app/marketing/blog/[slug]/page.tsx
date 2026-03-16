import { BlogType } from '@/app/ai-blog/page'
import BlogContent from '@/components/blogpage/BlogContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import PageHero from '@/components/shared/PageHero'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const blogs: BlogType[] = getMarkDownData('data/marketing/blog')

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/marketing/blog/', slug)
  const postBlog = blog.data

  return (
    <LayoutTwo>
      <PageHero
        badgeTitle={postBlog.category}
        title={postBlog.title}
        description={postBlog.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={blog} />
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
    </LayoutTwo>
  )
}

export default BlogDetails
