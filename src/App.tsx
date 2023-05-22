import classNames from 'classnames'
import React from 'react'
import { withTranslation } from 'react-i18next'
const DarkToggleButton = React.lazy(() => import('./dark.button'))
const RoadmapComponent = React.lazy(() => import('./roadmap.component'))
const SocialComponent = React.lazy(() => import('./social.component'))
import { useDarkMode } from './dark.context'
import { useScrollDown } from './useScrollDown'
function App() {
  const [isScroll] = useScrollDown()
  const [isDark] = useDarkMode()
  return (
    <>
      <nav
        className={classNames(
          'p-2 min-[10vh] w-full dark:bg-slate-600  bg-slate-50/70 px-16 flex z-20 shadow-neutral-300 shadow-md dark:shadow-neutral-800/80',
          {
            'fixed top-0 border-b-2 dark:border-slate-800': isScroll,
          }
        )}
      >
        <div className="container inset-y-[50%] m-auto flex flex-row justify-between">
          <div className="flex flex-row">
            <img
              width={65}
              className="rounded-full"
              height={65}
              src={isDark ? 'avatar-dark.png' : 'avatar.png'}
            ></img>
            <p className="my-auto pl-4 font-medium md:text-xl">Kudou Sterain</p>
          </div>

          <DarkToggleButton />
        </div>
      </nav>
      <nav
        className={classNames('h-[10vh]', {
          hidden: !isScroll,
        })}
      ></nav>
      <main className="container m-auto mt-8 flex w-full flex-col gap-8 ">
        {/* introduction */}
        {/* eslint-disable-next-line tailwindcss/no-custom-classname */}
        <section className="m-auto flex flex-col gap-8">
          <h1 className="animate-pulse text-center font-poiret-one text-5xl font-light sm:text-6xl md:text-7xl">
            <a className="inline-block animate-bounce">Hi&nbsp;</a>there, My
            name is&nbsp;
            <i className="font-medium">Sterain </i>
            <a className="inline-block animate-wiggle">!</a>
          </h1>
          <p className="text-center font-poiret-one text-xl sm:text-2xl md:text-4xl">
            I am a Backend Developer living in &nbsp;
            <a className="whitespace-nowrap">Ho Chi Minh City</a>
            <a className="whitespace-nowrap">, Viet Nam</a>
          </p>
        </section>
        {/* experience */}
        <section className="my-4 flex flex-col gap-8">
          <h1 className="font-poiret-one text-xl font-thin italic sm:text-2xl md:text-4xl">
            Take A look at My Project
          </h1>
          <RoadmapComponent />
        </section>
        {/* contact */}
        <section className="flex flex-col gap-4">
          <a className="font-poiret-one font-bold md:text-2xl">
            Contact me at :
          </a>
          <SocialComponent />
        </section>
      </main>
    </>
  )
}

export default withTranslation()(App)
