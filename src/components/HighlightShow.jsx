// src/pages/Highlights.jsx
import React from 'react';
import clsx from 'clsx';

const works = [
  {
    title: 'Horizon',
    description: '2023',
    company: 'Deta',
    img: '/image.png',
    h: 'h-64',
    authors: ['Cristian Crețu', 'Max Eusterbrock', 'Aavash Shrestha'],
  },
  {
    title: 'Stacks',
    description: '2023',
    img: '/stacks.jpg',
    h: 'h-48',
    authors: ['Cristian Crețu'],
  },
  {
    title: 'Builder',
    description: '2022',
    img: '/builder.jpg',
    h: 'h-52',
    authors: ['Cristian Crețu'],
  },
  {
    title: 'Kepala',
    description: '2023',
    img: '/kepala.jpg',
    h: 'h-56',
    authors: ['Cristian Crețu'],
  },
  {
    title: 'OG Image',
    description: '2023',
    img: '/og.jpg',
    h: 'h-60',
    authors: ['Cristian Crețu'],
  },
  {
    title: 'NeuroSketch',
    description: '2023',
    company: 'AI Lab',
    img: '/dummy1.jpg',
    h: 'h-56',
    authors: ['Manjil Budhathoki'],
  },
  {
    title: 'InsightBoard',
    description: '2022',
    company: 'DashboardX',
    img: '/dummy2.webp',
    h: 'h-48',
    authors: ['Manjil Budhathoki'],
  },
  {
    title: 'Dreamify',
    description: '2024',
    img: '/dummy3.jpg',
    h: 'h-64',
    authors: ['Manjil Budhathoki', 'Aarav Kunwar'],
  },
  {
    title: 'GraphMate',
    description: '2023',
    img: '/dummy4.jpg',
    h: 'h-52',
    authors: ['Cristian Crețu'],
  },
  {
    title: 'PixelPaper',
    description: '2023',
    company: 'Printico',
    img: '/dummy5.jpg',
    h: 'h-56',
    authors: ['Manjil Budhathoki'],
  },
  {
    title: 'MoodMuse',
    description: '2022',
    img: '/dummy6.jpg',
    h: 'h-60',
    authors: ['Cristian Crețu'],
  },
];

export default function Highlights() {
  return (
    <div className="px-6 pt-14 pb-20">
      <h2 className="text-lg font-semibold mb-14 text-white tracking-tight">Highlights</h2>
      <p className="text-sm text-gray-400 mb-14 max-w-2xl leading-relaxed">
        Here's a list of some of the things I've worked on, including personal projects,
        open source contributions, and professional work.
      </p>

      <div className="columns-1 gap-3 sm:columns-2 md:columns-3 [&>div:not(:first-child)]:mt-3">
        {works.map((work) => (
          <Card {...work} key={work.title} />
        ))}
      </div>
    </div>
  );
}

function Card({ description, title, img, authors, h = 'h-48', company }) {
  return (
    <div
      className={clsx(
        'group relative flex break-inside-avoid flex-col space-y-4 rounded-xl border border-neutral-800 bg-black/90 px-2 py-2.5 text-white dark:bg-neutral-900',
      )}
    >
      <div className={clsx('relative rounded-xl', h, 'overflow-hidden')}>
        <img
          alt={title}
          className="absolute h-full w-full rounded-xl object-cover transition-all duration-200 group-hover:blur-sm"
          src={img}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/80 opacity-70 transition-opacity duration-200 group-hover:opacity-90" />
      </div>

      <div className="absolute flex w-full flex-row justify-between px-4 top-3 transition-all duration-200 group-hover:opacity-0">
        <span className="font-semibold text-base">{title}</span>
        <span className="text-xs font-mono text-gray-300">{description}</span>
      </div>

      <div className="absolute inset-0 z-20 flex select-none flex-col items-center justify-center space-y-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="flex select-none flex-col text-center">
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-sm text-gray-300">{description}</span>
          {company && <span className="text-sm text-gray-400">{company}</span>}
          <div className="mt-3 text-xs text-green-400">
            {authors?.map((author) => (
              <span className="block" key={author}>
                {author}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
