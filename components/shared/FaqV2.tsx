'use client'
import { FC, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeader from './SectionHeader'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQData {
  italicTitle: string
  headingTitle: string
  description: string
  faqs: FAQItem[]
}

interface PropsType {
  titleChange?: boolean
  data?: FAQData
}

const defaultFAQData: FAQData = {
  italicTitle: 'People',
  headingTitle: 'Asked Us',
  description: "When detailing testimonials it is important to include key elements that provide context and authenticity",
  faqs: [
    {
      id: 1,
      question: 'What is your design process like?',
      answer: 'Our design process is collaborative and iterative. We start with research and discovery, move into ideation and prototyping, and then refine through feedback cycles until we achieve the perfect solution.',
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A simple website might take 4-6 weeks, while larger projects can take 3-6 months. We always provide detailed timelines during our initial consultation.',
    },
    {
      id: 3,
      question: 'What makes your agency different?',
      answer: 'We combine strategic thinking with creative excellence. Our team brings diverse expertise across design, technology, and marketing, allowing us to deliver holistic solutions that drive real business results.',
    },
    {
      id: 4,
      question: 'Do you work with international clients?',
      answer: 'Absolutely! We work with clients globally and have experience collaborating across different time zones. Our digital workflow makes remote collaboration seamless and efficient.',
    },
    {
      id: 5,
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on project requirements. We can work with fixed project fees, monthly retainers, or hourly rates depending on what works best for your needs and budget.',
    },
    {
      id: 6,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer various support and maintenance packages. We believe in building long-term relationships with our clients and ensuring their digital presence continues to evolve and perform.',
    },
  ],
}

const FaqV2: FC<PropsType> = ({ titleChange = false, data = defaultFAQData }) => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  const toggleAccordion = (id: number) => {
    setActiveAccordion((prevActive) => (prevActive === id ? null : id))
  }

  const { italicTitle, headingTitle, description, faqs } = data

  // Split FAQs into 3 columns
  const column1 = faqs.filter((_, i) => i % 3 === 0)
  const column2 = faqs.filter((_, i) => i % 3 === 1)
  const column3 = faqs.filter((_, i) => i % 3 === 2)
  const columns = [column1, column2, column3].filter(col => col.length > 0)

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <SectionHeader
            headingTitle={headingTitle}
            titleChange={titleChange}
            italicTitle={italicTitle}
            description={description}
          />
        </div>

        <div className="mx-auto grid w-full grid-cols-1 items-start gap-7 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((faqArray, index) => (
            <RevealWrapper key={index} className="space-y-[30px]">
              {faqArray.map((faq) => (
                <div className="reveal-me" key={faq.id}>
                  <div
                    className={`accordion-itemV4 faq-body-transition relative w-full space-y-6 border bg-backgroundBody px-6 pb-8 pt-6 duration-300 ${
                      activeAccordion === faq.id
                        ? 'open active border-black dark:border-white/10'
                        : 'border-black/10 dark:border-white/10'
                    } dark:bg-dark md:px-10 md:pb-[60px] md:pt-10 lg:max-w-[370px]`}
                    data-active={activeAccordion === faq.id ? true : false}>
                    <div
                      className="accordion-headerV4 flex cursor-pointer items-center justify-between"
                      onClick={() => toggleAccordion(faq.id)}>
                      <h3 className="text-[23px] font-normal tracking-normal md:text-[25px] md:leading-[34.2px]">
                        {faq.question}
                      </h3>
                      <div
                        className={`accordion-header-iconV4 transition-transform duration-[400ms] dark:border-dark ${activeAccordion === faq.id ? 'open active rotate-180' : ''}`}
                      />
                    </div>
                    <div
                      className={`grid transition-all duration-[400ms] ease-in-out ${activeAccordion === faq.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <div className={`accordion-bodyV4 transition-transform duration-[400] ease-in-out`}>
                          <p className="font-[375]">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FaqV2
