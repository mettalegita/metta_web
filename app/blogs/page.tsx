import BlogHero from '@/components/blogpage/BlogHero'
import BlogItems from '@/components/blogpage/BlogItems'
import CTA from '@/components/shared/CTA'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownData from '@/utils/GetMarkDownData'

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'SEO Blog - Digital Marketing Insights',
  description:
    'Expert insights on SEO, digital marketing strategies, and industry trends to grow your online presence.',
}

export interface Blog2Type {
  slug: string
  content: string
  [key: string]: any
}

const BlogPage02 = async () => {
  const loadedBlogs: Blog2Type[] = getMarkDownData('data/marketing/blog')
  return (
    <LayoutOne>
      <BlogHero />
      <BlogItems loadedBlogs={loadedBlogs} />
      <CTA>{''}</CTA>
    </LayoutOne>
  )
}

export default BlogPage02
