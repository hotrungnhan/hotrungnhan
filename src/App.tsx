import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faMoon,
  faSun,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import classNames from 'classnames'
import { AnimatePresence, motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'
import { withTranslation } from 'react-i18next'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

function App() {
  const { scrollY } = useScroll()
  const [isScroll, setIsScroll] = useState(false)
  useEffect(() => {
    scrollY.onChange((value) => {
      value > 0 ? setIsScroll(true) : setIsScroll(false)
    })
  }, [scrollY])
  return (
    <>
      <nav
        className={classNames(
          'h-[10vh] w-full dark:bg-slate-600  bg-slate-50 px-16 flex z-20',
          {
            'fixed top-0 border-b-2 shadow-neutral-300 dark:shadow-neutral-800 dark:border-slate-800 shadow-md':
              isScroll,
          }
        )}
      >
        <div className="container inset-y-[50%] m-auto flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              width={65}
              className="rounded-full"
              height={65}
              src="https://www.w3schools.com/howto/img_avatar.png"
            ></img>
            <p className="my-auto pl-4 font-medium md:text-xl">Kudou Sterain</p>
          </div>

          {DarkModeToggle()}
        </div>
      </nav>
      <nav
        className={classNames('h-[10vh]', {
          hidden: !isScroll,
        })}
      ></nav>
      <main className="container m-auto mt-8 flex w-full flex-col gap-8 p-8">
        {/* introduction */}
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <section className="m-auto flex flex-col gap-8">
          <h1 className="font-poiret-one animate-pulse text-center text-5xl font-[300] sm:text-6xl md:text-7xl">
            <a className="inline-block animate-bounce">Hi&nbsp;</a>there, My
            name is&nbsp;
            <i className="font-medium">Sterain </i>{' '}
            <a className="animate-wiggle inline-block">!</a>
          </h1>
          <p className="font-poiret-one text-xl font-[100] sm:text-2xl md:text-4xl">
            I am a Backend Developer living in Ho Chi Minh City, Viet Nam.
          </p>
        </section>
        {/* experience */}
        <section className="my-4 flex flex-col gap-8">
          <h1 className="font-poiret-one text-xl italic sm:text-2xl md:text-4xl">
            Take A look at My Project
          </h1>

          {VerticalLinearStepper()}
        </section>
        {/* contact */}
        <section className="flex flex-col gap-4">
          <a className="font-poiret-one font-bold md:text-2xl">
            Contact me at :
          </a>
          {SocialRender()}
        </section>
      </main>
    </>
  )
}

const steps = [
  {
    label: 'Download My Curriculum Vitae',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    content: () => <a>{<RenderPdf></RenderPdf>}</a>,
  },
  {
    label: 'Tego Global',
    optional: 'Junior Backend Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    date: "Sep '19 - Present",
    content: () => (
      <>
        <a></a>
        <img src="tego.webp" className="rounded"></img>
      </>
    ),
  },
  {
    label: 'HCM - University of Technology and Information',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    date: "Sep '19 - Present",
    content: () => (
      <img
        className="rounded"
        src="https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/201803/uit_dsc_0002_1-1.jpg"
      ></img>
    ),
  },
]

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <motion.div
      initial={{ opacity: 0, transitionDelay: '4000', x: '-50%' }}
      whileInView={{ opacity: 1, x: '0', animationDuration: '2s' }}
      className="m-auto mx-8 flex flex-col gap-4 md:grid md:flex-none md:grid-cols-5 md:gap-8"
    >
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="col-span-2"
      >
        {steps.map((step, index) => {
          const iconComponent =
            index == activeStep ? (
              <div className="relative h-[24px] w-[24px] animate-bounce items-center">
                <div className="absolute h-full w-full rounded-full bg-black dark:bg-slate-200"></div>
                <div className="absolute h-full w-full animate-ping rounded-full bg-black dark:bg-slate-200"></div>
              </div>
            ) : (
              <div className="m-auto h-[24px] w-[24px] items-center rounded-full bg-black dark:bg-slate-200"></div>
            )
          return (
            <Step key={step.label} onClick={() => setActiveStep(index)}>
              <StepLabel
                optional={<a className="dark:text-white">{step.optional}</a>}
                StepIconProps={{
                  icon: iconComponent,
                }}
              >
                <div className="flex flex-col gap-1">
                  <h1 className="font-poiret-one text-xl font-bold dark:text-white md:text-2xl">
                    {step.label}
                  </h1>
                  {step.date && <a className="dark:text-white">{step.date}</a>}
                </div>
              </StepLabel>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                {step.description ? step.description : null}
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      <AnimatePresence>
        {steps[activeStep] && steps[activeStep].content && (
          <motion.div
            className="m-auto hidden sm:col-span-3 sm:mt-0 sm:block"
            key={activeStep}
            initial={{ opacity: 0, transitionDelay: '4000', x: '50%' }}
            animate={{ opacity: 1, x: '0', animationDuration: '2s' }}
          >
            {steps[activeStep].content()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
const social = [
  {
    icon: (
      <FontAwesomeIcon
        icon={faFacebook}
        className="text-blue-600 dark:text-blue-400"
        size="2x"
      />
    ),
    text: 'Facebook',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faLinkedin}
        className="text-blue-400 dark:text-blue-200"
        size="2x"
      />
    ),
    text: 'Linkedin',
    link: 'https://www.linkedin.com/in/trung-nh%C3%A2n-b8bb271a5',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        className="text-black dark:text-white "
        size="2x"
      />
    ),
    text: 'Github',
    link: 'https://github.com/hotrungnhan',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faInstagram}
        className="text-red-500 dark:text-red-400"
        size="2x"
      />
    ),
    text: 'Instagram',
    link: 'https://instagram.com/kudou.sterain',
  },
  {
    icon: (
      <FontAwesomeIcon
        icon={faYoutube}
        className="text-red-500 dark:text-red-400"
        size="2x"
      />
    ),
    text: 'Youtube',
    link: 'https://fb.com/kudou.d.sterain',
  },
]
function SocialRender() {
  return (
    <div className="flex flex-col gap-1 px-4">
      {social.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{
            opacity: 0,
            x: '-50%',
            animationDuration: `2s`,
          }}
          whileInView={{
            opacity: 1,
            x: '0',
            animationDuration: `2s`,
          }}
        >
          <div className=" flex w-full shrink-0 flex-row gap-4">
            <a className="basis-10 text-center">{item.icon}</a>
            <a
              href={item.link}
              className="self-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.text}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem('isDarkMode') == 'true'
  )
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('isDarkMode', String(isDarkMode))
  }, [isDarkMode])
  const icon = isDarkMode ? (
    <FontAwesomeIcon icon={faSun} className="h-12 w-12" key="sun" />
  ) : (
    <FontAwesomeIcon icon={faMoon} className="h-12 w-12" key="moon" />
  )
  return (
    <button onClick={() => setIsDarkMode(!isDarkMode)}>
      <AnimatePresence>
        <motion.div
          key={icon.key}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: '0' }}
        >
          {icon}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}

function RenderPdf() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setCurrentPage] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: pdfjs.PDFDocumentProxy) {
    setNumPages(numPages)
  }
  function nextPage() {
    if (numPages && pageNumber < numPages) {
      setCurrentPage(pageNumber + 1)
    }
  }
  function prevPage() {
    if (pageNumber > 1) {
      setCurrentPage(pageNumber - 1)
    }
  }

  return (
    <Document
      file="CV.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className="relative flex flex-col gap-4"
    >
      <div className="md:flex md:gap-4 md:flex-row">
        <Page pageNumber={1} height={150} />
        <Page pageNumber={2} height={150} className="hidden md:block" />
      </div>
      <a
        className="mx-auto inline-block rounded border-2 border-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-black/5 focus:outline-none focus:ring-0 dark:border-blue-300 dark:bg-gray-50  dark:hover:bg-white/75"
        href="CV.pdf"
        download="CV"
      >
        Download
      </a>
      {
        <div className="absolute inset-x-[calc(50%-100px)] bottom-[5%] flex flex-row justify-center rounded bg-white p-4 opacity-0  transition-opacity hover:opacity-100 md:hidden">
          <FontAwesomeIcon
            onClick={prevPage}
            icon={faAngleLeft}
            className="my-auto w-6"
          />
          <a className="my-auto">
            {pageNumber} of {numPages}
          </a>
          <FontAwesomeIcon
            onClick={nextPage}
            icon={faAngleRight}
            className="my-auto  w-6"
          />
        </div>
      }
    </Document>
  )
}
export default withTranslation()(App)
