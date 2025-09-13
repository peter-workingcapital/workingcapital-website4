'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Clock, FileText, AlertTriangle, Users, DollarSign, TrendingDown } from 'lucide-react'

const ProblemSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [selectedPainPoint, setSelectedPainPoint] = useState(0)

  const painPoints = [
    {
      icon: Clock,
      title: "Your last hire took 4 months instead of 6 weeks",
      description: "Every day of delay costs you $1,000+ in lost productivity and opportunity cost.",
      cost: "$60,000+ lost revenue",
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      icon: FileText,
      title: "Weekend spent writing employee handbooks",
      description: "You're a founder, not an HR lawyer. Your time is worth $500/hour building your product.",
      cost: "16 hours × $500 = $8,000",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: AlertTriangle,
      title: "Compliance deadlines keeping you awake",
      description: "One missed deadline can cost $50,000+ in fines and legal fees.",
      cost: "$50,000+ in potential fines",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100"
    },
    {
      icon: Users,
      title: "Best engineer asking about equity structure",
      description: "Losing your top talent because you can't explain your equity plan properly.",
      cost: "$200,000+ to replace senior engineer",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    }
  ]

  const totalCost = 318000 // Sum of all costs

  return (
    <section ref={ref} id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Hidden Cost of DIY HR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every hour you spend on HR tasks is an hour not spent building your product. 
            Here's what it's really costing you:
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`card p-6 cursor-pointer transition-all duration-300 ${
                selectedPainPoint === index ? 'ring-2 ring-primary-500 shadow-xl' : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedPainPoint(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${point.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <point.icon className={`w-6 h-6 ${point.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mb-3">
                    {point.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-4 h-4 text-red-500" />
                    <span className="font-semibold text-red-600">{point.cost}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cost Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Your Annual HR Cost Calculator
            </h3>
            <p className="text-gray-600">
              Based on typical startup founder time allocation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Time Cost */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Time Lost</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">780 hours</div>
              <p className="text-sm text-gray-600">15 hours/week × 52 weeks</p>
            </div>

            {/* Money Cost */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-red-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Revenue Lost</h4>
              <div className="text-3xl font-bold text-red-600 mb-2">$390K</div>
              <p className="text-sm text-gray-600">780 hours × $500/hour</p>
            </div>

            {/* Opportunity Cost */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Opportunity Cost</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">$2M+</div>
              <p className="text-sm text-gray-600">Product development delays</p>
            </div>
          </div>

          {/* Total Cost Highlight */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : { scale: 0.9 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-2 border-red-200"
          >
            <div className="text-center">
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                Total Annual Cost of DIY HR
              </h4>
              <div className="text-4xl font-bold text-red-600 mb-2">
                $2.4M+
              </div>
              <p className="text-gray-600">
                That's enough to hire 4 senior engineers or fund your next product launch
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to stop bleeding money on HR tasks?
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
            Get Your Free HR Assessment
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemSection
