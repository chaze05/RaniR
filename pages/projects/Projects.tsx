import React, { useState } from 'react';
import Button from '../components/Button';

interface TechTag {
  label: string;
}

interface Project {
  thumb: string;
  name: string;
  description: string;
  url: string;
  techStacks: TechTag[];
  filterkey?: string;
}

const Projects = () => {
  const [filterKey, setFilterKey] = useState<string>('*');

  const projects: Project[] = [
    {
      thumb: '',
      name: 'Modern Portfolio',
      description: 'A clean and responsive developer portfolio built with Next.js and Tailwind CSS.',
      url: '',
      filterkey: 'Front End',
      techStacks: [
        { label: 'Next.js' },
        { label: 'Tailwind' },
        { label: 'React' },
      ],
    },
    {
      thumb: '',
      name: 'E-Commerce Dashboard',
      description: 'Analytics dashboard with interactive charts, product management, and user reports.',
      url: '',
      filterkey: 'Full Stack',
      techStacks: [
        { label: 'React' },
        { label: 'Node.js' },
        { label: 'MongoDB' },
      ],
    },
    {
      thumb: '',
      name: 'Booking System',
      description: 'A booking and scheduling app with secure authentication and admin panel.',
      url: '',
      filterkey: 'Back End',
      techStacks: [
        { label: 'Node.js' },
        { label: 'Express' },
        { label: 'MySQL' },
      ],
    },
    {
      thumb: '',
      name: 'WordPress Plugin',
      description: 'Custom plugin development for e-commerce and SEO enhancements.',
      url: '',
      filterkey: 'Full Stack',
      techStacks: [
        { label: 'PHP' },
        { label: 'WordPress' },
        { label: 'MySQL' },
      ],
    },
  ];

  const uniqueFilterKeys = Array.from(
    new Set(projects.map((project) => project.filterkey || 'Other'))
  );

  const filteredProjects = projects.filter(
    (project) => filterKey === '*' || project.filterkey === filterKey
  );

  return (
    <div className="min-h-screen text-white py-16 px-4">
      <div className="max-w-10xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-500">Featured work</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Developer Projects
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-slate-100 text-base md:text-lg leading-7">
            Showcase of polished applications with modern interfaces, smooth interactions, and 
            professional layout design.
          </p>
        </div>

        <div className="rounded-3xl shadow-2xl p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">Filter Projects</h2>
              <p className="text-sm text-slate-100 mt-1">Choose a category to focus on the strongest work.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setFilterKey('*')}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filterKey === '*'
                    ? 'bg-slate-100 text-slate-950 shadow-lg'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All
              </button>
              {uniqueFilterKeys.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setFilterKey(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    filterKey === filter
                      ? 'bg-slate-100 text-slate-950 shadow-lg'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.name}
                className="group rounded-[32px] border border-slate-800 bg-slate-900/90 p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-slate-700 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">{project.filterkey || 'Other'}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    {project.name.charAt(0)}
                  </div>
                </div>

                <p className="text-slate-400 leading-7 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStacks.map((stack) => (
                    <span
                      key={`${project.name}-${stack.label}`}
                      className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300 transition-colors duration-300 group-hover:bg-slate-800"
                    >
                      {stack.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                  <Button
                    link={project.url || '#'}
                    label="View project"
                    classes="rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 text-sm font-semibold shadow-lg hover:opacity-95 transition-all duration-300"
                  />
                  <span className="text-slate-500 text-sm">Live preview available soon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
