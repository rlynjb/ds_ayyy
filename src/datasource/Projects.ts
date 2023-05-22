import type { Project } from "@/models/IProject"

/*
  public id: string = nanoid()
  public timestamp: number = Date.now()
  public title: string = ''
  public subtitle: string = ''
  public link: string = ''
  public image_thumb: string = ''
  public notes: string = ''
  public images: string[] = []
*/

export const Projects = [
  {
    title: 'rein portfolio',
    subtitle: 'Vue3, TailwindCSS, DaisyUI, Netlify, Static Site',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'Badbeesh - Habit Tracker',
    subtitle: 'Vue3, TailwindCSS, DaisyUI, Netlify, Static Site, Localstorage',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'SpaceX seat Reservation',
    subtitle: 'React, Apollo GraphQL, Netlify Functions, MongoDB',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'UI Component Style Guide',
    subtitle: 'Vue3, TailwindCSS, DaisyUI, Storybook, Netlify',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  },
  {
    title: 'Security Operations Audit Tool',
    subtitle: 'Vue3, TailwindCSS, DaisyUI, Custom UI Component Design System',
    link: '/',
    image_thumb: 'https://placehold.co/600x400',
  }
]