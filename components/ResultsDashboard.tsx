'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { TrendingUp, DollarSign, Shield, Clock, Users, Target, Award, Zap } from 'lucide-react'

const ResultsDashboard = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  
  const [counts, setCounts] = useState({
    hiring: 0,
    value: 0,
    compliance: 0,
    hours: 0
  })

  const metrics = [
    {
      icon: TrendingUp,
      title: "40% Faster Hiring",
      value: "40",
      suffix: "%",
      description: "Average time reduction from 4 months to 6 weeks",
      color: "text-green-600",
      bgColor: "bg-green-100",
      details: [
        "Streamlined interview process",
        "Better candidate sourcing",
        "Faster decision making",
        "Reduced time-to-offer"
      ]
    },
    {
      icon: DollarSign,
      title: "$250K Annual Value",
      value: "250",
      suffix: "K",
      description: "Average annual savings per client",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      details: [
        "Reduced hiring costs",
        "Lower turnover rates",
        "Compliance risk mitigation",
        "Productivity improvements"
      ]
    },
    {
      icon: Shield,
      title: "90% Compliance Risk Reduction",
      value: "90",
      suffix: "%",
      description: "Fewer compliance issues and legal risks",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      details: [
        "Proactive compliance monitoring",
        "Regular policy updates",
        "Legal requirement tracking",
        "Risk assessment protocols"
      ]
    },
    {
      icon: Clock,
      title: "15 Hours/Week Returned",
      value: "15",
      suffix: " hrs",
      description: "Time saved per week for founders",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
      details: [
        "No more handbook writing",
        "Automated HR processes",
        "Delegated recruitment tasks",
        "Streamlined onboarding"
      ]
    }
  ]

  // Animate counters when in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const stepDuration = duration / steps

      const animateCount = (target: number, key: keyof typeof counts) => {
        let current = 0
        const increment = target / steps
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
        }, stepDuration)
      }

      animateCount(40, 'hiring')
      animateCount(250, 'value')
      animateCount(90, 'compliance')
      animateCount(15, 'hours')
    }
  }, [isInView])

  return (
    <section ref={ref} id="results" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Proven Results That Matter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our clients don't just save time—they accelerate growth, reduce risk, 
            and focus on what they do best: building amazing products.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card p-6 text-center hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {metric.title}
              </h3>
              
              <div className="text-3xl font-bold mb-2">
                <span className={metric.color}>
                  {metric.value === "40" && counts.hiring}
                  {metric.value === "250" && counts.value}
                  {metric.value === "90" && counts.compliance}
                  {metric.value === "15" && counts.hours}
                </span>
                <span className={metric.color}>{metric.suffix}</span>
              </div>
              
              <p className="text-sm text-gray-600">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            How We Deliver These Results
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 ${metric.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <metric.icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{metric.title}</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {metric.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center justify-center">
                      <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">25 to 80 People</h4>
            <p className="text-sm text-gray-600">in 10 months with zero HR headaches</p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Spain Expansion</h4>
            <p className="text-sm text-gray-600">Seamless international hiring and compliance</p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Technical Founders</h4>
            <p className="text-sm text-gray-600">Perfect integration with engineering teams</p>
          </div>
        </motion.div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            Calculate Your ROI
          </h3>
          <p className="text-primary-100 mb-6">
            See how much WorkingCapital could save your startup
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">$250K</div>
              <p className="text-primary-100 text-sm">Average annual savings</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">780 hrs</div>
              <p className="text-primary-100 text-sm">Time returned per year</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">90%</div>
              <p className="text-primary-100 text-sm">Risk reduction</p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Your Custom ROI Analysis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default ResultsDashboard
