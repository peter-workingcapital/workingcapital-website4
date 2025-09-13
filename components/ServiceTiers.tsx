'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, ArrowRight, Users, Rocket, Globe, Star, Zap, Target } from 'lucide-react'

const ServiceTiers = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const serviceTiers = [
    {
      name: "Getting Started",
      stage: "Pre-Seed / Seed",
      icon: Rocket,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Perfect for early-stage startups ready to build their first HR foundation",
      deliverables: [
        "Employee handbook creation",
        "Basic compliance setup",
        "Hiring process design",
        "Onboarding framework",
        "Basic policies & procedures"
      ],
      clientProfile: "5-15 employees, first HR hire needed",
      roi: "Save 10+ hours/week",
      price: "Starting at $3K/month",
      popular: false
    },
    {
      name: "Scaling Fast",
      stage: "Series A",
      icon: Zap,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "For fast-growing companies that need comprehensive HR support",
      deliverables: [
        "Advanced recruitment strategies",
        "Performance management systems",
        "Compensation & equity planning",
        "Culture & engagement programs",
        "Compliance & legal support",
        "Manager training & development"
      ],
      clientProfile: "15-50 employees, rapid growth phase",
      roi: "Save 15+ hours/week",
      price: "Starting at $8K/month",
      popular: true
    },
    {
      name: "Going Global",
      stage: "Series B+",
      icon: Globe,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "For established companies expanding internationally",
      deliverables: [
        "International hiring & compliance",
        "Multi-country payroll setup",
        "Global mobility programs",
        "Advanced analytics & reporting",
        "Executive search & placement",
        "M&A integration support",
        "Board & investor relations"
      ],
      clientProfile: "50+ employees, international expansion",
      roi: "Save 20+ hours/week",
      price: "Starting at $15K/month",
      popular: false
    }
  ]

  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            HR Solutions for Every Growth Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From pre-seed to global expansion, we provide the right level of HR support 
            for your startup's current needs and future growth.
          </p>
        </motion.div>

        {/* Service Tiers Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {serviceTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`card p-8 border-2 ${tier.borderColor} relative ${
                tier.popular ? 'ring-2 ring-primary-500 shadow-xl scale-105' : 'hover:shadow-lg'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <tier.icon className={`w-8 h-8 ${tier.color}`} />
                </div>
                <h3 className={`text-2xl font-bold ${tier.color} mb-2`}>
                  {tier.name}
                </h3>
                <div className="text-sm font-semibold text-gray-600 mb-3">
                  {tier.stage}
                </div>
                <p className="text-gray-600 text-sm">
                  {tier.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {tier.deliverables.map((deliverable, deliverableIndex) => (
                    <li key={deliverableIndex} className="flex items-start space-x-2">
                      <CheckCircle className={`w-4 h-4 ${tier.color} mt-0.5 flex-shrink-0`} />
                      <span className="text-sm text-gray-700">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client Profile */}
              <div className={`${tier.bgColor} rounded-lg p-4 mb-6`}>
                <h4 className="font-semibold text-gray-900 mb-1">Perfect For:</h4>
                <p className="text-sm text-gray-700">{tier.clientProfile}</p>
              </div>

              {/* ROI & Price */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">ROI:</span>
                  <span className="font-semibold text-green-600">{tier.roi}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Investment:</span>
                  <span className="font-semibold text-gray-900">{tier.price}</span>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToContact}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                  tier.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : `border-2 ${tier.borderColor} ${tier.color} hover:bg-gray-50`
                }`}
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Custom Solutions</h4>
              <p className="text-sm text-gray-600">
                Every startup is unique. We tailor our approach to your specific needs and growth stage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Dedicated Team</h4>
              <p className="text-sm text-gray-600">
                You get a dedicated HR team member who understands your business and culture.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Flexible Scaling</h4>
              <p className="text-sm text-gray-600">
                Scale up or down as your needs change. No long-term contracts required.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Not Sure Which Tier Is Right for You?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Get a free assessment to determine the perfect HR solution for your startup
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="btn-primary text-lg px-8 py-4"
          >
            Get Your Free Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceTiers
