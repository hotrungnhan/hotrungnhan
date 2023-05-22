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
    description: '',
    content: () => <a>{<PdfComponent></PdfComponent>}</a>,
    icon: <a></a>,
  },
  // {
  //   label: 'Beep - AF Pay',
  //   optional: 'Lead Software Developer',
  //   description:
  //     "Beep - AF Pay is a payment solution that offers convenient card payment services, particularly for train and flight tickets. Operating in the Philippines, Beep - AF Pay provides a seamless payment experience for various transportation options. Additionally, users can enjoy rewards and benefits as part of the platform's loyalty program.",
  //   date: "Jan '21 - May '23",
  //   content: () => <img src="beep.png" className="rounded"></img>,
  //   icon: <a></a>,
  // },
  {
    label: 'Heal Asia',
    optional: 'Software Developer',
    description:
      'Heals Care is a start-up company specializing in quick picking clinics and fintech solutions. Through a strategic alliance with Galen Health, they aim to create a unified platform for seamless connectivity between healthcare providers and insurers. Fast payment for Heals services is a key feature, enhancing the patient experience.',
    date: "May '23 - Jan '22",
    content: () => <img src="heals.png" className="rounded"></img>,
    icon: <a></a>,
  },
  {
    label: 'Viva Leisure',
    optional: 'Lead Software Developer',
    description:
      'Viva Leisure is a gym brand that operates health clubs, aiming to connect people through health and fitness. They provide affordable and accessible facilities, offering various membership options and different types of fitness centers. With over 120 locations in Australia, their brands like Club Lime focus on creating a supportive and non-intimidating environment for all fitness levels.',
    date: "Jan '22 - April '21",
    content: () => <img src="viva.png" className="rounded"></img>,
    icon: <a></a>,
  },
  {
    label: 'Tego Global',
    optional: 'Fullstack Software Developer',
    description:
      'Tego Global is an outsourcing technology company based in Ho Chi Minh City, Vietnam. Since 2015, they have been assisting global companies and established brands in transforming their businesses through innovative solutions driven by cutting-edge technologies. With a focus on enabling digital technology, Tego Global leverages top engineering talent and industry expertise to cater to the specific business requirements of each client. They are a trusted partner in the UK, Australia, and Vietnam.',
    date: "Jan '21 - May '23",
    content: () => <img src="tego.png" className="rounded"></img>,
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
      className="m-auto mx-8 flex flex-col gap-4 md:gap-8 lg:grid lg:flex-none lg:grid-cols-5"
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
            <Step
              key={step.label}
              onClick={() =>
                index != activeStep ? setActiveStep(index) : setActiveStep(-1)
              }
            >
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
              <div className="block lg:hidden">
                <AnimatePresence>
                  {step == steps[activeStep] && steps[activeStep].content && (
                    <motion.div
                      className="hidden w-full sm:col-span-3 sm:mt-0 sm:block md:my-auto"
                      key={activeStep}
                      initial={{
                        opacity: 0,
                        transitionDelay: '4000',
                        x: '50%',
                      }}
                      animate={{
                        opacity: 1,
                        x: '0',
                        animationDuration: '2s',
                      }}
                    >
                      {steps[activeStep].content()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <StepContent TransitionProps={{ unmountOnExit: false }}>
                {step.description ? step.description : null}
              </StepContent>
            </Step>
          )
        })}
      </Stepper>
      <div className="hidden sm:col-span-3 lg:my-auto lg:block">
        <AnimatePresence>
          {steps[activeStep] && steps[activeStep].content && (
            <motion.div
              className=" w-full sm:mt-0 "
              key={activeStep}
              initial={{ opacity: 0, transitionDelay: '4000', x: '50%' }}
              animate={{ opacity: 1, x: '0', animationDuration: '2s' }}
            >
              {steps[activeStep].content()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
export default RoadmapComponent
