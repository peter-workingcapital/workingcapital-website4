'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Phone, Mail, Calendar, CheckCircle, Send, User, Building, Target } from 'lucide-react'

interface FormData {
  name: string
  email: string
  company: string
  stage: string
  challenge: string
  message?: string
}

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()

  const companyStages = [
    "Pre-Seed (0-10 employees)",
    "Seed (10-25 employees)",
    "Series A (25-50 employees)",
    "Series B+ (50+ employees)"
  ]

  const primaryChallenges = [
    "Hiring is taking too long",
    "Need help with compliance",
    "Scaling team culture",
    "International expansion",
    "Equity and compensation planning",
    "Performance management",
    "Other"
  ]

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section ref={ref} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Your Free HR Assessment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to stop losing time to HR chaos? Let's discuss how WorkingCapital 
            can help you scale your team and focus on building your product.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Free Assessment
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600 mb-4">
                  We've received your request and will contact you within 24 hours.
                </p>
                <p className="text-sm text-gray-500">
                  Check your email for next steps.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      {...register('company', { required: 'Company name is required' })}
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  {errors.company && (
                    <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                  )}
                </div>

                {/* Company Stage */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Stage *
                  </label>
                  <select
                    {...register('stage', { required: 'Please select your company stage' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select your stage</option>
                    {companyStages.map((stage, index) => (
                      <option key={index} value={stage}>{stage}</option>
                    ))}
                  </select>
                  {errors.stage && (
                    <p className="text-red-500 text-sm mt-1">{errors.stage.message}</p>
                  )}
                </div>

                {/* Primary Challenge */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Primary HR Challenge *
                  </label>
                  <div className="relative">
                    <Target className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <select
                      {...register('challenge', { required: 'Please select your primary challenge' })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select your main challenge</option>
                      {primaryChallenges.map((challenge, index) => (
                        <option key={index} value={challenge}>{challenge}</option>
                      ))}
                    </select>
                  </div>
                  {errors.challenge && (
                    <p className="text-red-500 text-sm mt-1">{errors.challenge.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Details (Optional)
                  </label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Tell us more about your specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Book My Free Assessment
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  No obligation. Free assessment. Results guaranteed.
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Peter's Profile */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-700">PvK</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Peter van Kersen
                </h3>
                <p className="text-primary-600 font-semibold">
                  Director & HR Strategist
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+34627717137" className="text-primary-600 hover:text-primary-700">
                      +34 627 71 7137
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:peter@workingcapitalou.com" className="text-primary-600 hover:text-primary-700">
                      peter@workingcapitalou.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Schedule</p>
                    <p className="text-gray-600">Available for calls Mon-Fri 9AM-6PM CET</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                What to Expect
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Free 30-minute consultation</h4>
                    <p className="text-sm text-gray-600">No obligation, just honest advice</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom HR assessment</h4>
                    <p className="text-sm text-gray-600">Tailored recommendations for your startup</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">ROI analysis</h4>
                    <p className="text-sm text-gray-600">See exactly how much you could save</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Next steps roadmap</h4>
                    <p className="text-sm text-gray-600">Clear path forward if we're a good fit</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">
                Why Choose WorkingCapital?
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">No long-term contracts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Results guaranteed or money back</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Startup-focused expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">50+ successful implementations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
