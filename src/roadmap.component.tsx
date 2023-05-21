import Step from '@mui/material/Step'
import StepContent from '@mui/material/StepContent'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useState } from 'react'

const PdfComponent = React.lazy(() => import('./pdf.component'))

const steps = [
  {
    label: 'Download My Curriculum Vitae',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    content: () => <a>{<PdfComponent></PdfComponent>}</a>,
    icon: <a></a>,
  },
  {
    label: 'Beep - AF Pay',
    optional: 'Lead Software Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    date: "Jan '21 - May '23",
    content: () => (
      <>
        <a></a>
        <img src="tego.webp" className="rounded"></img>
      </>
    ),
    icon: <a></a>,
  },
  {
    label: 'Heal Asia',
    optional: 'Software Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    date: "Jan '21 - May '23",
    content: () => (
      <>
        <a></a>
        <img src="tego.webp" className="rounded"></img>
      </>
    ),
    icon: <a></a>,
  },
  {
    label: 'Viva Leisure',
    optional: 'Lead Software Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    date: "Jan '21 - May '23",
    content: () => (
      <>
        <a></a>
        <img src="tego.webp" className="rounded"></img>
      </>
    ),
    icon: <a></a>,
  },
  {
    label: 'Tego Global',
    optional: 'Fullstack Software Developer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
    date: "Jan '21 - May '23",
    content: () => (
      <>
        <a></a>
        <img src="tego.webp" className="rounded"></img>
      </>
    ),
    icon: <a></a>,
  },
  {
    label: 'HCM - University of Technology and Information',
    description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    date: "Sep '19 - Jul '23",
    content: () => <img className="rounded" src="uit.png"></img>,
    icon: <a></a>,
  },
]

function RoadmapComponent() {
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
export default RoadmapComponent
