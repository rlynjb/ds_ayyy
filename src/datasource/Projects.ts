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
  {
    title: 'UI Component Design System',
    subtitle: 'System Design, DSA, Vue3, TailwindCSS, DaisyUI, Storybook, Netlify',
    link: 'https://ui-styleguide.netlify.app/',
    image_thumb: 'ui_system_design.png',
    images: [
      'storybook_plan.png'
    ]
  },
  {
    title: 'SpaceX Seat Reservation',
    subtitle: 'React, Apollo GraphQL, Netlify Functions, MongoDB',
    link: 'https://spacex-reserve-seat.netlify.app/',
    image_thumb: 'spacex.png',
    images: [
      'spacex_apollo_graphql.png'
    ]
  },
  rein_portfolio,
  {
    title: 'Kobalt Tools - Personalized Ratchet Set',
    subtitle: 'Laravel, JavaScript',
    link: 'https://www.kobalttools.com/mechanics-tools/personalized-ratchet-set',
    image_thumb: 'portfolio_thumbs',
    images: [
      'storybook_plan.png'
    ]
  },
  {
    title: 'Golden Entertainment',
    subtitle: 'Wordpress',
    link: 'https://www.goldenent.com/',
    image_thumb: 'goldenent.png',
  },
  {
    title: "PT's Tavern",
    subtitle: 'Wordpress',
    link: 'https://www.ptstaverns.com/',
    image_thumb: 'ptstavern.png',
  },
  {
    title: 'Persopo - Public Record Search',
    subtitle: 'Ember.js, Golang',
    link: 'https://persopo.com/',
    image_thumb: 'persopo.png',
  }
]