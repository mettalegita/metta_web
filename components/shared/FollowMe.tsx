import Link from 'next/link'

interface FollowMeProps {
  title?: string
}

const FollowMe = ({ title = 'Follow and listen to my songs' }: FollowMeProps) => {
  return (
    <section className="bg-backgroundBody py-14 dark:bg-dark md:py-20">
      <div className="container">
        <div className="flex flex-col items-center justify-center text-center">
          <h3 className="mb-8 text-2xl font-medium text-secondary dark:text-white md:text-3xl">{title}</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {/* Spotify */}
            <Link
              href="https://open.spotify.com/artist/mettalegita"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-secondary/70 transition-colors duration-300 hover:text-primary dark:text-white/70 dark:hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current">
                <path
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M8 15C10.5 14 13.5 14 16 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M7 12C10.5 10.5 13.5 10.5 17 12"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M6 9C10 7 14 7 18 9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-medium md:text-base">Spotify</span>
            </Link>

            {/* Apple Music */}
            <Link
              href="https://music.apple.com/us/artist/metta-legita/1250526729"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-secondary/70 transition-colors duration-300 hover:text-primary dark:text-white/70 dark:hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current">
                <path d="M9 18V6L21 3V15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="6" cy="18" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="18" cy="15" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-medium md:text-base">Apple Music</span>
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@mettalegita3543"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-secondary/70 transition-colors duration-300 hover:text-primary dark:text-white/70 dark:hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current">
                <path d="M10 15L15 12L10 9V15Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M2.5 12C2.5 14.79 2.79 16.43 3.01 17.27C3.07 17.5 3.18 17.71 3.34 17.89C3.5 18.07 3.7 18.2 3.92 18.29C7.04 19.49 12 19.46 12 19.46C12 19.46 16.96 19.49 20.08 18.29C20.3 18.2 20.5 18.07 20.66 17.89C20.82 17.71 20.93 17.5 20.99 17.27C21.21 16.43 21.5 14.79 21.5 12C21.5 9.21 21.21 7.57 20.99 6.73C20.93 6.5 20.82 6.29 20.66 6.11C20.5 5.93 20.3 5.8 20.08 5.71C16.96 4.51 12 4.54 12 4.54C12 4.54 7.04 4.51 3.92 5.71C3.7 5.8 3.5 5.93 3.34 6.11C3.18 6.29 3.07 6.5 3.01 6.73C2.79 7.57 2.5 9.21 2.5 12Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-sm font-medium md:text-base">YouTube</span>
            </Link>

            {/* Instagram */}
            <Link
              href="https://instagram.com/mettalegita"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-secondary/70 transition-colors duration-300 hover:text-primary dark:text-white/70 dark:hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={28}
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current">
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M16.5 3.5H7.5C5.29086 3.5 3.5 5.29086 3.5 7.5V16.5C3.5 18.7091 5.29086 20.5 7.5 20.5H16.5C18.7091 20.5 20.5 18.7091 20.5 16.5V7.5C20.5 5.29086 18.7091 3.5 16.5 3.5Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 8C18.0523 8 18.5 7.55228 18.5 7C18.5 6.44772 18.0523 6 17.5 6C16.9477 6 16.5 6.44772 16.5 7C16.5 7.55228 16.9477 8 17.5 8Z"
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm font-medium md:text-base">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FollowMe
