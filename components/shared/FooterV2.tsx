import footerData from '@/data/footer.json'
import Link from 'next/link'

const FooterV2 = () => {
  return (
    <footer className="w-full overflow-hidden">
      <div className="bg-backgroundBody dark:bg-secondary">
        <h5 className="footer-text-v2 w-full text-nowrap text-center font-satoshi text-[120px] font-medium uppercase leading-[100%] sm:text-[200px] md:text-[258px] lg:text-[300px] xl:text-[350px] 2xl:text-[386px]">
          Rivor
        </h5>
      </div>
      <div className="-mt-10 bg-backgroundBody py-4 dark:bg-dark sm:-mt-[70px] md:-mt-24 xl:-mt-28">
        <div className="container">
          {/* Footer Content Grid */}
          <div className="relative z-10 flex flex-col flex-wrap justify-center gap-y-10 pt-10 sm:flex-row sm:justify-between sm:gap-y-16 md:pt-20">
            {/* Reach Us Section */}
            <div className="pr-8 max-lg:basis-full">
              <p className="mb-5 max-w-[360px]">
                Metta Legita is a pianist, composer, and educator based in Phnom Penh, Cambodia. Specializing in jazz,
                contemporary, and orchestral music.
              </p>
              <h5 className="mb-3 font-satoshi text-2xl font-medium leading-[1.1]">Address</h5>
              <p>
                Phnom Penh, <br />
                Cambodia
              </p>
              <div className="mt-7 flex gap-6 md:mt-10">
                <span>
                  <Link href="https://www.facebook.com/mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none"
                      className="stroke-[#565656] duration-200 hover:stroke-primary">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.125 6.875H11.875C11.3777 6.875 10.9008 7.07254 10.5492 7.42418C10.1975 7.77581 10 8.25272 10 8.75V17.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M7.5 11.25H12.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.youtube.com/@mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path d="M12.5 10L8.75 7.5V12.5L12.5 10Z" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M1.875 9.99998C1.875 12.3246 2.11517 13.6886 2.29774 14.3896C2.34654 14.581 2.44026 14.7581 2.57114 14.9061C2.70201 15.0541 2.86627 15.1688 3.0503 15.2407C5.66569 16.2457 10 16.2181 10 16.2181C10 16.2181 14.3343 16.2457 16.9497 15.2407C17.1337 15.1688 17.298 15.0541 17.4288 14.9061C17.5597 14.7581 17.6534 14.581 17.7022 14.3896C17.8848 13.6886 18.125 12.3246 18.125 9.99998C18.125 7.67533 17.8848 6.3114 17.7023 5.6104C17.6535 5.41894 17.5597 5.24188 17.4289 5.09386C17.298 4.94585 17.1337 4.83115 16.9497 4.75927C14.3343 3.75422 10 3.78181 10 3.78181C10 3.78181 5.66574 3.75422 3.05033 4.75926C2.86629 4.83114 2.70203 4.94584 2.57116 5.09385C2.44029 5.24186 2.34656 5.41893 2.29776 5.61038C2.11518 6.31138 1.875 7.67533 1.875 9.99998Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://instagram.com/mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M13.4375 2.8125H6.5625C4.49143 2.8125 2.8125 4.49143 2.8125 6.5625V13.4375C2.8125 15.5086 4.49143 17.1875 6.5625 17.1875H13.4375C15.5086 17.1875 17.1875 15.5086 17.1875 13.4375V6.5625C17.1875 4.49143 15.5086 2.8125 13.4375 2.8125Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0625 6.875C14.5803 6.875 15 6.45527 15 5.9375C15 5.41973 14.5803 5 14.0625 5C13.5447 5 13.125 5.41973 13.125 5.9375C13.125 6.45527 13.5447 6.875 14.0625 6.875Z"
                        fill="#565656"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://dribbble.com/mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.55078 16.037C6.66328 14.1939 8.23315 12.6697 10.1082 11.6119C11.9832 10.5542 14.0997 9.99896 16.2524 10C16.6741 10 17.0905 10.0206 17.5017 10.0616"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.6894 4.14795C13.5183 5.58738 12.0409 6.74742 10.3647 7.54356C8.68846 8.3397 6.85577 8.75188 5.00011 8.75007C4.20969 8.75045 3.42101 8.67625 2.64453 8.52846"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.71484 3.25684C8.59445 4.35971 10.1529 5.93502 11.2355 7.82638C12.3181 9.71775 12.8871 11.8594 12.8861 14.0387C12.8869 15.0598 12.7627 16.0771 12.5165 17.0681"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://www.figma.com/@mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M12.6562 12.6562C14.1233 12.6562 15.3125 11.467 15.3125 10C15.3125 8.53299 14.1233 7.34375 12.6562 7.34375C11.1892 7.34375 10 8.53299 10 10C10 11.467 11.1892 12.6562 12.6562 12.6562Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 7.34368V2.03125H7.34375C6.63927 2.03125 5.96364 2.3111 5.4655 2.80925C4.96735 3.30739 4.6875 3.98302 4.6875 4.6875C4.6875 5.39198 4.96735 6.06761 5.4655 6.56575C5.96364 7.0639 6.63927 7.34375 7.34375 7.34375L10 7.34368Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12.6562V7.34375H7.34375C6.63927 7.34375 5.96364 7.6236 5.4655 8.12175C4.96735 8.61989 4.6875 9.29552 4.6875 10C4.6875 10.7045 4.96735 11.3801 5.4655 11.8783C5.96364 12.3764 6.63927 12.6562 7.34375 12.6562L10 12.6562Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 7.34368V2.03125H12.6562C13.3607 2.03125 14.0364 2.3111 14.5345 2.80925C15.0326 3.30739 15.3125 3.98302 15.3125 4.6875C15.3125 5.39198 15.0326 6.06761 14.5345 6.56575C14.0364 7.0639 13.3607 7.34375 12.6562 7.34375L10 7.34368Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 12.6562V15.3125C10 15.8379 9.84423 16.3515 9.55236 16.7883C9.26049 17.2251 8.84564 17.5656 8.36028 17.7666C7.87491 17.9677 7.34083 18.0203 6.82556 17.9178C6.3103 17.8153 5.837 17.5623 5.46551 17.1908C5.09402 16.8194 4.84104 16.3461 4.73854 15.8308C4.63605 15.3155 4.68865 14.7814 4.88969 14.2961C5.09074 13.8107 5.4312 13.3959 5.86801 13.104C6.30483 12.8121 6.81839 12.6563 7.34375 12.6563L10 12.6562Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </span>
                <span>
                  <Link href="https://linkedin.com/in/mettalegita">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#565656] duration-200 hover:stroke-primary"
                      width={23}
                      height={23}
                      viewBox="0 0 20 20"
                      fill="none">
                      <path
                        d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path d="M9.375 8.75V13.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6.875 8.75V13.75" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M9.375 10.9375C9.375 10.3573 9.60547 9.80094 10.0157 9.3907C10.4259 8.98047 10.9823 8.75 11.5625 8.75C12.1427 8.75 12.6991 8.98047 13.1093 9.3907C13.5195 9.80094 13.75 10.3573 13.75 10.9375V13.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.875 7.1875C7.39277 7.1875 7.8125 6.76777 7.8125 6.25C7.8125 5.73223 7.39277 5.3125 6.875 5.3125C6.35723 5.3125 5.9375 5.73223 5.9375 6.25C5.9375 6.76777 6.35723 7.1875 6.875 7.1875Z"
                        fill="#565656"
                      />
                    </svg>
                  </Link>
                </span>
              </div>
            </div>

            {footerData.footerSections.map((section, index) => (
              <div key={`Id_${index}`}>
                <h5 className="mb-4 text-2xl leading-[1.1]">{section.title}</h5>
                <ul>
                  {section.links.map(({ href, label }) => (
                    <li key={href} className="md:mb-1">
                      <Link
                        href={href}
                        className="block font-normal leading-9 tracking-[0.36px] transition-colors duration-300 hover:text-primary md:text-lg">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 border-t pt-5 text-center dark:border-dark">All rights Reserved Rivor.agency</p>
        </div>
      </div>
    </footer>
  )
}

export default FooterV2
