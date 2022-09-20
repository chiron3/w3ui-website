import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Tab } from '@headlessui/react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { default as oneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark';
import { BoltIcon, GlobeAltIcon, ScaleIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
const cardClass = `card relative rounded-xl shadow-xl p-6 xl:p-8 max-w-sm bg-opacity-75 hover:bg-opacity-100 transition flex`;
const cardTitleClass = `text-xl font-bold my-2`;

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Uploader() {
  const frameworks = ['react'];
  const code = {
    'react': `
    import React, { useEffect, useState } from 'react'
    import { useAuth, AuthStatus } from '@w3ui/react-wallet'
    
    export default function ContentPage () {
      const { authStatus, identity, loadDefaultIdentity, registerAndStoreIdentity, unloadIdentity } = useAuth()
      const [email, setEmail] = useState('')
    
      // eslint-disable-next-line
      useEffect(() => { loadDefaultIdentity() }, []) // try load default identity - once.
    
      if (authStatus === AuthStatus.SignedIn) {
        return (
          <div>
            <h1>Welcome {identity.email}!</h1>
            <p className=''>You are logged in!!</p>
            <form onSubmit={e => { e.preventDefault(); unloadIdentity() }}>
              <button type='submit' className='ph3 pv2'>Sign Out</button>
            </form>
          </div>
        )
      }
    
      if (authStatus === AuthStatus.EmailVerification) {
        return (
          <div>
            <h1>Verify your email address!</h1>
            <p>Click the link in the email we sent to {email} to sign in.</p>
          </div>
        )
      }
    
      const handleRegisterSubmit = async e => {
        e.preventDefault()
        try {
          await registerAndStoreIdentity(email)
        } catch (err) {
          throw new Error('failed to register', { cause: err })
        }
      }
    
      return (
        <form onSubmit={handleRegisterSubmit}>
          <div className='db mb3'>
            <label htmlFor='email' className='db mb2'>Email address:</label>
            <input id='email' className='db pa2 w-100' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button type='submit' className='ph3 pv2'>Register</button>
        </form>
      )
    }`
  };

  const features = [
    {
      name: 'Competitive exchange rates',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
      icon: CheckCircleIcon,
    },
    {
      name: 'No hidden fees',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Transfers are instant',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
      icon: CheckCircleIcon,
    },
    {
      name: 'Some other feature',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis.',
      icon: CheckCircleIcon,
    },
  ]

  const { ref, inView } = useInView({
    rootMargin: '-100px 0px',
    threshold: .7
  });
  const [framework, setFramework] = useState('react');

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <main className={`main container mx-auto max-w-4xl flex flex-wrap items-center min-h-screen overflow-auto transition-opacity ${inView ? '' : 'scrolled'}`} ref={ref}>
        <div className="text-lg xl:mt-8">
          <div className="flex items-center gap-2 mb-12">
            <svg className="site-logo-image text-white" width="40" viewBox="0 0 27.2 27.18" xmlns="http://www.w3.org/2000/svg"><path d="M13.6 27.18A13.59 13.59 0 1127.2 13.6a13.61 13.61 0 01-13.6 13.58zM13.6 2a11.59 11.59 0 1011.6 11.6A11.62 11.62 0 0013.6 2z" fill="currentColor"></path><path d="M12.82 9.9v2.53h1.6V9.9l2.09 1.21.77-1.21-2.16-1.32 2.16-1.32-.77-1.21-2.09 1.21V4.73h-1.6v2.53l-2-1.21L10 7.26l2.2 1.32L10 9.9l.78 1.21zM18 17.79v2.52h1.56v-2.52L21.63 19l.78-1.2-2.16-1.33 2.16-1.28-.78-1.19-2.08 1.2v-2.58H18v2.56L15.9 14l-.77 1.2 2.16 1.32-2.16 1.33.77 1.15zM8.13 17.79v2.52h1.56v-2.52L11.82 19l.77-1.2-2.16-1.33 2.12-1.28-.73-1.24-2.13 1.23v-2.56H8.13v2.56L6.05 14l-.78 1.2 2.16 1.3-2.16 1.33.78 1.17z" fill="currentColor"></path></svg>
            <h1 className="text-white text-2xl tracking-wider">W3:UI</h1>
          </div>
          <div className="flex justify-between items-center gap-12">
            <div className="ui-uploader card relative rounded-xl shadow-xl p-6 xl:p-8 max-w-sm transition">
              <Image src="/ui-uploader.svg" alt="ui-wallet" width="400" height="200" />
            </div>
            <p className="text-xl lg:text-2xl xl:text-3xl xl:max-w-4xl font-400 leading-loose my-4">
              An uploader component to simplify the next generation of Web3.Storage.
            </p>
          </div>

          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-10 md:space-y-0 mt-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-8 w-8 items-center justify-center rounded-md icon-bg text-white">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <p className="ml-12 text-lg font-medium leading-6 text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-12 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </main>

      <section className="primary max-w-4xl mx-auto">

        <h4 className="mt-36 text-white text-2xl">Easy to use!</h4>
        <Tab.Group>
          <Tab.List className="">
            {frameworks.map((fm) => (
              <Tab key={fm}></Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {frameworks.map((fm, idx) => (
              <Tab.Panel key={idx}>
                <SyntaxHighlighter language="jsx" style={oneDark} className="rounded-lg shadow">
                  {code[fm]}
                </SyntaxHighlighter>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>

      <footer className="flex justify-center py-8">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-6"
        >
          Powered by Web3.Storage
        </a>
      </footer>

      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
        <linearGradient id="iconGradient" x2="1" y2="1">
          <stop offset="0%" stopColor="#d726d7" />
          <stop offset="50%" stopColor="#3064e0" />
          <stop offset="100%" stopColor="#31e7ea" />
        </linearGradient>
      </svg>
    </div>
  )
}
