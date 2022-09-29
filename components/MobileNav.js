import { Menu } from '@headlessui/react'
import Link from 'next/link'
import { components, examples, APIRefs } from '../utils';

export const MobileNav = () => {
    return (
        <>
            <h5 className="text-gray-400 mt-12 uppercase text-sm">Components</h5>
            {components.map(comp => (
                <Link key={comp.title} href={`/${comp.id}`}>
                    <a className={`block hover:underline cursor-pointer transition-all`}>
                        {comp.title}
                    </a>
                </Link>
            ))}
            <h5 className="text-gray-400 mt-12 uppercase text-sm">Examples</h5>
            {examples.map(ex => (
                <a key={ex.title} href={`${ex.link}`} target="_blank" rel="noreferrer" className={`block hover:underline cursor-pointer transition-all ${ex.disabled && 'opacity-50 pointer-events-none'}`}>
                    {ex.title}
                </a>
            ))}


            <a href={`https://github.com/web3-storage/w3ui/blob/main/docs/`} target="_blank" rel="noreferrer" className={`block hover:underline cursor-pointer transition-all mt-6`}>API Reference</a>

            <a href={`https://github.com/web3-storage/w3ui`} target="_blank" rel="noreferrer" className="hover:text-gray-300 transition-all mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={24} width={24} ><path d="M12,.28A12,12,0,0,0,8.28,23.69l.28,0a1,1,0,0,0,.7-.24,1.05,1.05,0,0,0,.36-.82v-.21c0-.17,0-.4,0-1.09A.49.49,0,0,0,9.43,21a.5.5,0,0,0-.41-.1c-2.69.58-3.26-1.1-3.29-1.21A4.64,4.64,0,0,0,4,17.5l-.15-.11a.73.73,0,0,1,.38-.07,1.48,1.48,0,0,1,1.14.88,3,3,0,0,0,4,1.16A.53.53,0,0,0,9.67,19a2,2,0,0,1,.56-1.22.5.5,0,0,0,.15-.53.49.49,0,0,0-.42-.35c-2.37-.27-4.8-1.1-4.8-5.19A4,4,0,0,1,6.22,8.93a.49.49,0,0,0,.09-.52A3.56,3.56,0,0,1,6.32,6,5.57,5.57,0,0,1,8.84,7.15a.48.48,0,0,0,.42.06A10.66,10.66,0,0,1,12,6.85a10.31,10.31,0,0,1,2.75.36.46.46,0,0,0,.41-.06A5.53,5.53,0,0,1,17.68,6a3.54,3.54,0,0,1,0,2.38.48.48,0,0,0,.1.52,4,4,0,0,1,1.05,2.75c0,4.1-2.43,4.92-4.81,5.18a.49.49,0,0,0-.42.35.49.49,0,0,0,.15.52,2.23,2.23,0,0,1,.61,1.75v3.18a1.06,1.06,0,0,0,.37.82,1.18,1.18,0,0,0,1.06.19A12,12,0,0,0,12,.28Z" fill="currentColor" /></svg>
            </a>
        </>
    )
}