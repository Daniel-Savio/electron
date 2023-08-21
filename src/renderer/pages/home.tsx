import React from 'react';
import { Background } from '../components/backgorund';
import { Switch } from '@headlessui/react';
export function Home() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div
      className={`${
        darkMode ? 'dark' : ''
      } flex flex-col items-center justify-center h-screen `}
    >
      <Background />

      <div className=" dark:text-slate-200 mb-10 text-center">
        <h1 className="dark:text-slate-200 text-4xl font-bold mb-2">
          {' '}
          Aplicação padrão
        </h1>
        <h2 className="dark:text-slate-200 text-2xl">
          {' '}
          Electron - ReactJs - Typescript - Tailwind{' '}
        </h2>
        <h3 className="dark:text-slate-200 text-lg font-bold">
          {' '}
          Heroicons + Headless UI{' '}
        </h3>
      </div>

      <div className="flex gap-3 align-middle">
        <h1 className="dark:text-slate-200 text-3xl">lights on</h1>

        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className={`${darkMode ? 'bg-sky-900' : 'bg-sky-700'}
          relative inline-flex h-[24px] w-[58px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${darkMode ? 'translate-x-8' : 'translate-x-0'}
            pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>

        <h1 className="dark:text-slate-200 text-3xl">lights off</h1>
      </div>

      <svg 
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="w-8 h-8 text-treetech"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
        />
      </svg>

      
    </div>
  );
}
