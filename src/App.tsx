import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import classNames from 'classnames'
import { motion, useScroll } from 'framer-motion'
import { useState, useEffect } from 'react'

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
      {/* navigation bar */}
      <nav
        className={classNames(
          'h-[10%] w-full dark:bg-slate-600  bg-slate-50 px-16 flex z-20',
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
            <p className="my-auto pl-4 text-xl font-medium">Kudou Sterain</p>
          </div>

          {DarkModeToggle()}
        </div>
      </nav>
      <nav
        className={classNames('h-[10%]', {
          hidden: !isScroll,
        })}
      ></nav>
      <main className="container m-auto mt-8 flex w-full flex-col gap-8 p-8">
        {/* introduction */}
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <section className="m-auto flex flex-col gap-8">
          <h1 className="font-poiret-one animate-pulse text-center text-8xl font-[300]">
            <a className="inline-block animate-bounce">Hi&nbsp;</a>there, My
            name is&nbsp;
            <i className="font-medium">Sterain </i>!
          </h1>
          <p className="font-poiret-one text-4xl font-[100]">
            I am a Backend Developer base in HCMC, Viet Nam.
          </p>
        </section>
        {/* experience */}
        <section className="my-4 flex flex-col gap-8">
          <h1 className="font-poiret-one text-4xl italic">
            Take A look at My Project
          </h1>
          <motion.div
            initial={{ opacity: 0, transitionDelay: '4000', x: '-50%' }}
            whileInView={{ opacity: 1, x: '0', animationDuration: '2s' }}
          >
            {VerticalLinearStepper()}
          </motion.div>
        </section>
        <section className="my-4 flex flex-col gap-8">
          <h1 className="font-poiret-one text-4xl italic">
            Take A look at My Project
          </h1>
        </section>
        {/* contact */}
        <section className="">
          <a className="font-poiret-one text-center text-xl font-bold">
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
    content: () => <a>CV</a>,
  },
  {
    label: 'HCM - University of Technology and Information',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    content: () => (
      <img src="https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/201803/uit_dsc_0002_1-1.jpg"></img>
    ),
  },
  {
    label: 'Tego Global',
    optional: 'Junior Backend Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    content: () => (
      <a>
        For each ad campaign that you create, you can control how much
        you&apos;re willing to spend on clicks and conversions, which networks
        and geographical locations you want your ads to show on, and more.
      </a>
    ),
  },
]

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="m-auto mx-8 grid grid-cols-5 gap-4">
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        className="col-span-2"
      >
        {steps.map((step, index) => (
          <Step key={step.label} onClick={() => setActiveStep(index)}>
            {index == activeStep ? (
              <StepLabel
                optional={<a className="dark:text-white">{step.optional}</a>}
                StepIconProps={{
                  icon: (
                    <div className="relative h-[24px] w-[24px] animate-bounce items-center">
                      <div className="absolute h-full w-full rounded-full bg-black dark:bg-slate-200"></div>
                      <div className="absolute h-full w-full animate-ping rounded-full bg-black dark:bg-slate-200"></div>
                    </div>
                  ),
                }}
              >
                <a className="dark:text-white">{step.label}</a>
              </StepLabel>
            ) : (
              <StepLabel
                optional={<a className="dark:text-white">{step.optional}</a>}
                StepIconProps={{
                  icon: (
                    <div className="m-auto h-[24px] w-[24px] items-center rounded-full bg-black dark:bg-slate-200"></div>
                  ),
                }}
              >
                <a className="dark:text-white">{step.label}</a>
              </StepLabel>
            )}
            <StepContent TransitionProps={{ unmountOnExit: false }}>
              {step.description ? step.description : null}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {steps[activeStep] && steps[activeStep].content && (
        <div className="col-span-3">{steps[activeStep].content()}</div>
      )}
    </div>
  )
}
const social = [
  {
    icon: '',
    text: 'Facebook',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: '',
    text: 'Linkedin',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: '',
    text: 'Github',
    link: 'https://github.com/hotrungnhan',
  },
  {
    icon: '',
    text: 'Zalo',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: '',
    text: 'Instagram',
    link: 'https://fb.com/kudou.d.sterain',
  },
  {
    icon: '',
    text: 'Github',
    link: 'https://fb.com/kudou.d.sterain',
  },
]
function SocialRender() {
  return (
    <div className="flex flex-col gap-1">
      {social.map((item, idx) => (
        <div key={idx}>
          <a href={item.link}>{item.text}</a>
        </div>
      ))}
    </div>
  )
}
function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])
  return <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle</button>
}
export default App
