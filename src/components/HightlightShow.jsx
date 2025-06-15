import React from "react";
import clsx from "clsx";

// Works data (without static size)
const works = [
  {
    title: "Horizon",
    description: "2023",
    company: "Deta",
    img: "/image.png",
    authors: ["Cristian Crețu", "Max Eusterbrock", "Aavash Shrestha"],
  },
  {
    title: "Stacks",
    description: "2023",
    img: "/stacks.jpg",
    authors: ["Cristian Crețu"],
  },
  {
    title: "Builder",
    description: "2022",
    img: "/builder.jpg",
    authors: ["Cristian Crețu"],
  },
  {
    title: "Kepala",
    description: "2023",
    img: "/kepala.jpg",
    authors: ["Cristian Crețu"],
  },
  {
    title: "OG Image",
    description: "2023",
    img: "/og.jpg",
    authors: ["Cristian Crețu"],
  },
  {
    title: "NeuroSketch",
    description: "2023",
    company: "AI Lab",
    img: "/dummy1.jpg",
    authors: ["Manjil Budhathoki"],
  },
  {
    title: "InsightBoard",
    description: "2022",
    company: "DashboardX",
    img: "/dummy2.webp",
    authors: ["Manjil Budhathoki"],
  },
  {
    title: "Dreamify",
    description: "2024",
    img: "/dummy3.jpg",
    authors: ["Manjil Budhathoki", "Aarav Kunwar"],
  },
  {
    title: "GraphMate",
    description: "2023",
    img: "/dummy4.jpg",
    authors: ["Cristian Crețu"],
  },
  {
    title: "PixelPaper",
    description: "2023",
    company: "Printico",
    img: "/dummy5.jpg",
    authors: ["Manjil Budhathoki"],
  },
  {
    title: "MoodMuse",
    description: "2022",
    img: "/dummy6.jpg",
    authors: ["Cristian Crețu"],
  },
];

// Assign random sizes to each card
const assignRandomSizes = (items) =>
  items.map((item) => ({
    ...item,
    size: Math.random() < 0.3 ? "large" : "small", // 30% chance for large
  }));

export default function HightlightShow() {
  const randomizedWorks = assignRandomSizes(works);

  return (
    <div className="px-6 pt-14 pb-20">
      <h2 className="text-lg font-semibold mb-14 text-white tracking-tight">Highlights</h2>
      <p className="text-sm text-gray-400 mb-14 max-w-2xl leading-relaxed">
        Here's a list of some of the things I've worked on, including personal projects,
        open source contributions, and professional work.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 auto-rows-[1fr]">
        {randomizedWorks.map((work, i) => (
          <Card {...work} key={work.title + i} />
        ))}
      </div>
    </div>
  );
}

function Card({ description, title, img, authors, size, company }) {
  return (
    <div
      className={clsx(
        "group relative rounded-xl border border-neutral-800 bg-black/90 text-white dark:bg-neutral-900 overflow-hidden transition-all",
        size === "large" ? "md:row-span-2" : "md:row-span-1"
      )}
    >
      {/* Image Section */}
      <div className="relative w-full h-full aspect-video">
        <img
          alt={title}
          src={img}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 transition-opacity duration-300" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
          <span className="font-semibold text-lg">{title}</span>
          <span className="text-sm text-gray-300">{description}</span>
          {company && <span className="text-sm text-gray-400">{company}</span>}
          <div className="mt-3 text-xs text-green-400">
            {authors?.map((author) => (
              <span key={author}>{author}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-base">{title}</span>
          <span className="text-xs font-mono text-gray-300">{description}</span>
        </div>
        {company && (
          <div className="mt-1 text-xs text-gray-400">{company}</div>
        )}
      </div>
    </div>
  );
}
