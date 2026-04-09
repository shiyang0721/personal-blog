'use client'

import { useEffect } from 'react'

export function useHeaderScroll() {
  useEffect(() => {
    const header = document.querySelector('header')
    if (!header) return

    const onScroll = () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md')
        header.classList.remove('shadow-sm')
      } else {
        header.classList.remove('shadow-md')
        header.classList.add('shadow-sm')
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
