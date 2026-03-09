import footerData from '@/data/footer.json'
import homepageData from '@/data/homepage.json'
import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import FooterProvider from './FooterProvider'

const Footer = () => {
  const { socialMedia, contact } = homepageData

  return (
    <FooterProvider>
      <div className="container">
        <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 sm:flex-row sm:justify-between sm:gap-y-16">
          <div className="pr-8 max-lg:basis-full">
            <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
              Get in Touch
            </h5>
            <p className="mb-5 text-sm text-white">
              Let&apos;s discuss how we can create beautiful music together.
              <br />
              Piano lessons, compositions, or live performances.
            </p>
            <div className="group flex max-w-[360px] items-center justify-between gap-4 bg-primary bg-opacity-30 p-4 backdrop-blur-2xl">
              <Image className="h-[55px] w-auto" src={logo} alt="logo" />
              <div>
                <h6 className="font-satoshi text-sm font-bold text-white">Schedule a Session</h6>
                <p className="text-sm text-white">{contact?.location}</p>
              </div>
              <Link href="/contact">
                <figure className="relative h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary">
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <Image
                    src={arrowIcon}
                    alt="Arrow Icon"
                    className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                  />
                </figure>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white">Follow Me</h5>
              <div className="flex gap-4">
                {socialMedia?.instagram && (
                  <a
                    href={socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                )}
                {socialMedia?.youtube && (
                  <a
                    href={socialMedia.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                )}
                {socialMedia?.spotify && (
                  <a
                    href={socialMedia.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                  </a>
                )}
                {socialMedia?.appleMusic && (
                  <a
                    href={socialMedia.appleMusic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.336 14.258c-.105-.122-.336-.18-.576-.145-.24.036-.435.18-.51.36-.09.18-.06.39.09.54.615.615 1.83 1.095 1.545-.03-.285-1.125-1.095-1.545-.03-.015.03-.03.06-.045.075-.135.165-.285.285-.465.375-.855.435-1.83.285-2.595-.195-.795-.51-1.365-1.365-1.575-2.73-.21-2.61-.015-3.855.135-1.23.165-2.115.645-2.64 1.44-.555.855-.645 1.83-.27 2.67.375.84 1.065 1.395 1.905 1.545.855.165 1.83-.06 2.565-.63.735-.57 1.245-1.395 1.305-2.34.03-.405-.03-.855-.195-1.275zM22.431 11.703c-.12-.195-.315-.3-.54-.285-.225.015-.435.135-.54.315-.18.3-.48.495-.84.54-.345.045-.705-.06-1.005-.285-.3-.225-.48-.555-.495-.915-.015-.36.105-.72.345-1.005.24-.285.585-.465.96-.495.375-.03.75.075 1.05.315.3.24.48.57.495.945.015.39-.135.765-.435 1.065-.045.045-.105.075-.15.105-.135.105-.255.165-.405.195zM17.266 9.258c-.18-.06-.405-.03-.585.12-.18.15-.285.375-.255.615.03.24.18.435.39.555.555.315 1.23.285 1.755-.09.525-.375.795-.99.705-1.575-.09-.585-.45-1.065-.96-1.275-.225-.09-.48-.12-.735-.075-.255.045-.48.165-.66.345-.015-.015-.03-.015-.045-.03-.18-.21-.435-.33-.72-.345-.285-.015-.57.075-.81.255zM14.761 6.933c-.225-.135-.54-.165-.795-.075-.255.075-.465.255-.6.495-.135.24-.135.525.03.765.385.54 1.14.795 1.83.615.69-.18 1.23-.69 1.365-1.365.135-.675-.18-1.38-.81-1.755-.27-.165-.585-.225-.885-.18-.285.045-.555.18-.765.405-.03-.045-.075-.075-.12-.105-.21-.15-.48-.225-.765-.21zM12.516 4.743c-.285-.03-.57.045-.81.225-.24.165-.405.42-.465.705-.06.285-.015.585.135.855.33.555.975.81 1.62.615.645-.18 1.095-.69 1.14-1.335.045-.645-.285-1.29-.915-1.635-.27-.15-.585-.225-.915-.195zM9.596 4.653c-.345.03-.66.195-.885.465-.225.285-.315.645-.255 1.005.06.36.27.675.585.885.63.42 1.545.33 2.04-.21.495-.54.495-1.32.045-1.89-.21-.27-.51-.435-.84-.48-.33-.045-.66.015-.945.165-.045-.045-.105-.075-.15-.105-.285-.165-.645-.225-.975-.165z" />
                    </svg>
                  </a>
                )}
                {socialMedia?.patreon && (
                  <a
                    href={socialMedia.patreon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>

          {footerData.footerSections.map((section, index) => (
            <div key={`Id_${index}`}>
              <h5 className="mb-4 font-satoshi text-sm font-bold uppercase tracking-[3px] text-white sm:mb-8">
                {section.title}
              </h5>
              <ul>
                {section.links.map(({ href, label }) => (
                  <li className="mb-4" key={href}>
                    <Link
                      href={href}
                      className="block text-white transition-colors duration-300 hover:font-medium hover:text-primary">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 w-full">
        <h5 className="footer-text xs:text-5xl absolute bottom-0 left-1/2 w-full -translate-x-1/2 translate-y-[30%] text-nowrap text-center font-satoshi text-4xl font-medium tracking-widest sm:text-6xl md:text-[88px] lg:text-[120px] xl:text-[150px] 2xl:text-[170px]">
          METTA LEGITA
        </h5>
      </div>
    </FooterProvider>
  )
}

export default Footer
