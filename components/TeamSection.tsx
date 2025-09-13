'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Mail, Phone, Award, Users, Globe, Briefcase } from 'lucide-react'

const TeamSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const teamMembers = [
    {
      name: "Peter van Kersen",
      role: "Director & HR Strategist",
      bio: "15+ years of HR experience with venture-backed startups. Former VP People at two successful exits. Expert in scaling teams from 10 to 500+ employees.",
      credentials: [
        "Former VP People at 2 successful exits",
        "15+ years startup HR experience",
        "Scaling expert (10-500+ employees)",
        "International expansion specialist"
      ],
      avatar: "PvK",
      isPrimary: true,
      contact: {
        phone: "+34 627 71 7137",
        email: "peter@workingcapitalou.com"
      }
    },
    {
      name: "Sarah Martinez",
      role: "Senior HR Consultant",
      bio: "Specialist in technical team recruitment and culture building. Former engineering manager turned HR expert.",
      credentials: [
        "Former engineering manager",
        "Technical recruitment specialist",
        "Culture & engagement expert",
        "5+ years startup experience"
      ],
      avatar: "SM",
      isPrimary: false
    },
    {
      name: "David Chen",
      role: "Compliance & Legal Specialist",
      bio: "International HR compliance expert with deep knowledge of European and US employment law.",
      credentials: [
        "International compliance expert",
        "EU & US employment law",
        "M&A integration specialist",
        "8+ years legal experience"
      ],
      avatar: "DC",
      isPrimary: false
    }
  ]

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Employees Hired",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Globe,
      value: "12",
      label: "Countries Served",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Award,
      value: "15+",
      label: "Years Experience",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: Briefcase,
      value: "50+",
      label: "Startups Helped",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ]

  return (
    <section ref={ref} id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Your HR Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team combines deep startup experience with proven HR expertise. 
            We're not just consultants—we're your partners in growth.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className={`card p-8 text-center ${
                member.isPrimary ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-lg'
              }`}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary-700">
                    {member.avatar}
                  </span>
                </div>
                {member.isPrimary && (
                  <div className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Founder
                  </div>
                )}
              </div>

              {/* Name & Role */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <div className="text-primary-600 font-semibold mb-4">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-2 mb-6">
                {member.credentials.map((credential, credIndex) => (
                  <div key={credIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                    {credential}
                  </div>
                ))}
              </div>

              {/* Contact Info (Primary member only) */}
              {member.isPrimary && member.contact && (
                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.contact.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>{member.contact.email}</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Why Choose Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Why Choose WorkingCapital?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Startup Experience</h4>
              <p className="text-sm text-gray-600">
                We've been in your shoes. Our team has built and scaled startups from the ground up.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">
                Track record of helping 50+ startups scale successfully with measurable results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Global Expertise</h4>
              <p className="text-sm text-gray-600">
                International experience across 12 countries with deep local knowledge.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work with Our Team?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Schedule a free consultation with Peter to discuss your HR needs
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-8 py-4"
          >
            Schedule Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
