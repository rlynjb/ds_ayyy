import type { Project } from "@/models/IProject"

import { rein_portfolio } from "./rein_portfolio"
import { badbeesh } from "./badbeesh"

/*
  {
    title: '',
    subtitle: '',
    link: '',
    image_thumb: '',
    notes: '',
    images: ['']
  }
*/

export const Projects = [
  rein_portfolio,
  badbeesh,
  {
    title: 'SpaceX Seat Reservation',
    subtitle: 'React, Apollo GraphQL, Netlify Functions, MongoDB',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'UI Component Design System',
    subtitle: 'Vue3, TailwindCSS, DaisyUI, Storybook, Netlify',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'Security Operations Audit Tool',
    subtitle: 'Vue3, Custom UI Component Design System',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  }
]