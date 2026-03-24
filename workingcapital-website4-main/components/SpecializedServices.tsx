'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, MonitorSmartphone, Search, BarChart3, Building2, Scale, Layers } from 'lucide-react'

const services = [
  {
    icon: MonitorSmartphone,
    title: 'HR System Implementations',
    tagline: 'The right tech stack, perfectly set up',
    description:
      'We manage the full lifecycle of your HRIS implementation — from vendor selection and requirements scoping to data migration, integrations, and team training. Whether you\'re implementing HiBob, Personio, BambooHR, or Workday, we\'ve done it before and we\'ll do it right.',
    bullets: [
      'Vendor evaluation & selection (HiBob, Personio, BambooHR, Workday)',
      'Full data migration from legacy systems',
      'API integrations with payroll, ATS, and finance tools',
      'Process design & configuration to match your workflows',
      'Manager and employee training & adoption support',
    ],
    accent: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Search,
    title: 'Executive Search',
    tagline: 'Find the people leaders who actually get startups',
    description:
      'Hiring your first VP People, Head of Talent, or Chief People Officer is one of the most consequential decisions you\'ll make. We combine deep network access with a rigorous assessment process to find leaders who are commercially sharp, culturally aligned, and built for the pace of a VC-backed company.',
    bullets: [
      'VP People, CPO, Head of Talent, HR Director searches',
      'Candidate profiling & competency framework design',
      'Structured interview processes & assessment tools',
      'Reference checking & cultural fit evaluation',
      'Onboarding support for the first 90 days',
    ],
    accent: 'bg-purple-50 border-purple-200',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: BarChart3,
    title: 'Compensation & Benefits',
    tagline: 'Pay structures that attract talent and scale with you',
    description:
      'Inconsistent pay leads to retention problems, pay equity risks, and budget overruns. We design compensation frameworks that are competitive, fair, and built to scale — from your first 10 hires to your 200th. We benchmark against real market data, not guesswork.',
    bullets: [
      'Job architecture & leveling frameworks',
      'Market benchmarking (Radford, Mercer, Levels.fyi)',
      'Equity plan design & employee education',
      'Pay equity analysis & remediation',
      'Benefits strategy: health, pension, flexible perks',
    ],
    accent: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Building2,
    title: 'Org Design & Restructuring',
    tagline: 'Built for speed, not bureaucracy',
    description:
      'As your company scales, org structure becomes a strategic lever. We redesign organisations for clarity and velocity — moving from functional silos to stream-aligned teams, clarifying reporting lines, and defining roles that reduce overlap and accelerate delivery.',
    bullets: [
      'Stream-aligned team design (Team Topologies approach)',
      'Span of control & management layer analysis',
      'Role clarity & RACI design',
      'Redundancy & restructuring planning',
      'Change management & communication support',
    ],
    accent: 'bg-orange-50 border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: Scale,
    title: 'Employment Law & Compliance',
    tagline: 'Stay compliant across every market you operate in',
    description:
      'International hiring and multi-country payroll come with serious compliance risk if you don\'t know the local rules. We keep your employment practices legally sound — from contracts and handbooks to GDPR, works councils, and cross-border employment structuring.',
    bullets: [
      'Employment contract design for 15+ countries',
      'GDPR / data privacy compliance for HR data',
      'Works council & union relations',
      'Statutory leave, benefits & working time compliance',
      'IR35, contractor vs. employee classification',
    ],
    accent: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-600',
  },
  {
    icon: Layers,
    title: 'Strategic HR Projects',
    tagline: 'One-off projects with lasting impact',
    description:
      'Some HR challenges are too important for a generalist and too specific for a full-time hire. We parachute in on defined, high-impact projects: culture transformations, DEI roadmaps, performance management overhauls, post-acquisition integrations, and more.',
    bullets: [
      'Culture diagnostics & transformation programmes',
      'DEI strategy and action planning',
      'Performance management system design',
      'M&A HR due diligence & integration',
      'Post-Series A/B HR audit & roadmap',
    ],
    accent: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
]

const SpecializedServices = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="specialized-services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Specialist Capabilities
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Deep Expertise Where It Counts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond fractional HR, we bring specialist depth to the projects that define
            your company — from system implementations and executive search to compensation
            design and global compliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`bg-white rounded-2xl border-2 ${service.accent} p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <service.icon className={`w-6 h-6 ${service.iconColor}`} />
              </div>

              {/* Title & Tagline */}
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.title}</h3>
              <p className={`text-sm font-medium ${service.iconColor} mb-4`}>{service.tagline}</p>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{service.description}</p>

              {/* Bullets */}
              <ul className="space-y-2">
                {service.bullets.map((bullet, bi) => (
                  <li key={bi} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${service.iconBg} border ${service.accent.split(' ')[1]}`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-primary-600 rounded-2xl p-10 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-3">Have a specific project in mind?</h3>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto">
            We scope every engagement individually. Tell us what you need and we'll
            design the right solution — no off-the-shelf packages.
          </p>
          <motion.a
            href="https://calendar.app.google/zP5o5YGc4A3wcmc69"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Book a Free Scoping Call
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default SpecializedServices
