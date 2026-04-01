import React, { FC } from 'react'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogHeroProps {
  italicTitle?: string
  headingTitle?: string
  description?: string
}

const BlogHero: FC<BlogHeroProps> = ({
  italicTitle = 'Insights',
  headingTitle = 'we share',
  description = 'Exploring the intersection of jazz, education, and performance—sharing insights from decades of experience teaching and performing around the world.',
}) => {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 lg:pb-20 lg:pt-[240px]">
      <div className="absolute -z-10 h-full w-full blur-[60px] max-lg:-translate-y-1/2 max-md:top-1/2 md:h-[45%] md:w-[45%] md:translate-x-[20%] lg:top-[23%]">
        <HeroGradientAnimation />
      </div>

      <div className="container">
        <div className="mb-20 flex flex-col justify-center gap-x-10 gap-y-4 md:flex-row lg:justify-between">
          <div className="max-sm:self-start">
            <TextAppearAnimation>
              <h1 className="text-appear text-[46px] font-normal leading-[1.1] max-lg:leading-[1.33] lg:text-7xl xl:text-[80px]">
                <i className="font-instrument italic leading-[1.1]"> {italicTitle} </i>
                <br className="hidden md:block" />
                {headingTitle}
              </h1>
            </TextAppearAnimation>
          </div>

          <div className="self-center md:max-w-[470px] lg:self-end">
            <TextAppearAnimation>
              <p className="text-appear">{description}</p>
            </TextAppearAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero
