'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, Users, TrendingUp, Globe } from 'lucide-react'

const SocialProof = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      quote: "WorkingCapital helped us scale from 25 to 80 people in just 10 months with zero HR headaches. Peter and his team seamlessly integrated with our technical founders and understood our unique challenges.",
      author: "Sarah Chen",
      role: "CEO",
      company: "Stealth Series A Startup",
      avatar: "SC",
      results: "25 → 80 people in 10 months"
    },
    {
      quote: "The Spain expansion was seamless thanks to WorkingCapital. They handled all the complex international hiring and compliance requirements while we focused on product development.",
      author: "Marco Rodriguez",
      role: "VP People",
      company: "Infinity Global",
      avatar: "MR",
      results: "Successful Spain expansion"
    },
    {
      quote: "WorkingCapital became an extension of our team. They understand the startup mindset and deliver results, not just reports. Our hiring process is now 40% faster and our team is happier.",
      author: "Alex Kim",
      role: "CPO",
      company: "X-HR",
      avatar: "AK",
      results: "40% faster hiring process"
    },
    {
      quote: "From employee handbooks to equity planning, WorkingCapital handles everything. We went from spending 15 hours a week on HR to zero. That's time back in building our product.",
      author: "Jessica Park",
      role: "Founder & CTO",
      company: "TechFlow",
      avatar: "JP",
      results: "15 hours/week saved"
    }
  ]

  const clientLogos = [
    { name: "Stealth Series A", industry: "Fintech" },
    { name: "Infinity Global", industry: "SaaS" },
    { name: "X-HR", industry: "HR Tech" },
    { name: "TechFlow", industry: "AI/ML" },
    { name: "DataVault", industry: "Cybersecurity" },
    { name: "CloudScale", industry: "Infrastructure" }
  ]

  const caseStudies = [
    {
      title: "25 to 80 People in 10 Months",
      company: "Stealth Series A Startup",
      challenge: "Rapid scaling without HR infrastructure",
      solution: "Complete HR foundation and scaling support",
      results: ["40% faster hiring", "Zero compliance issues", "Happy team culture"],
      metric: "80 people"
    },
    {
      title: "Spain Expansion Success",
      company: "Infinity Global",
      challenge: "International hiring and compliance",
      solution: "Multi-country HR setup and support",
      results: ["Seamless expansion", "Local compliance", "Cultural integration"],
      metric: "100% success"
    },
    {
      title: "Technical Team Integration",
      company: "X-HR",
      challenge: "HR processes for engineering teams",
      solution: "Tech-focused HR strategies",
      results: ["40% faster hiring", "Better candidate quality", "Reduced turnover"],
      metric: "40% improvement"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by 50+ Venture-Backed Startups
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped fast-growing companies scale their teams 
            and build amazing cultures.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative mb-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 font-semibold">
                  {testimonials[currentTestimonial].avatar}
                </span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">
                  {testimonials[currentTestimonial].author}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                {testimonials[currentTestimonial].results}
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center space-x-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Trusted by Leading Startups
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <span className="text-gray-600 font-semibold text-sm">
                    {client.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <div className="text-sm font-semibold text-gray-900">{client.name}</div>
                <div className="text-xs text-gray-600">{client.industry}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Success Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {study.metric}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{study.title}</h4>
                  <p className="text-sm text-gray-600">{study.company}</p>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">Challenge:</h5>
                    <p className="text-sm text-gray-600">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">Solution:</h5>
                    <p className="text-sm text-gray-600">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm mb-1">Results:</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center">
                          <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Startups Served</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">$2.4M</div>
              <div className="text-sm text-gray-600">Average Savings</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Client Rating</div>
            </div>
            
            <div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-600">Countries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
