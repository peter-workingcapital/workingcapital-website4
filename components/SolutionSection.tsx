'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, X, Zap, Target, Users, Clock } from 'lucide-react'

const SolutionSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const comparisonData = [
    {
      type: "Traditional Consultants",
      icon: X,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      features: [
        "Give you reports and recommendations",
        "Charge $300-500/hour for advice",
        "No execution, just strategy",
        "Long-term contracts required",
        "Generic templates and processes"
      ],
      result: "You still do the work"
    },
    {
      type: "HR Software",
      icon: X,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Requires HR expertise to use",
        "Setup and training needed",
        "You manage everything yourself",
        "Monthly subscription fees",
        "Generic workflows don't fit your needs"
      ],
      result: "You still need expertise"
    },
    {
      type: "WorkingCapital",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "We execute everything for you",
        "Fractional HR team at fixed cost",
        "Startup-specific processes",
        "No long-term contracts",
        "Results guaranteed or money back"
      ],
      result: "You get results, not work"
    }
  ]

  const transformationScenarios = [
    {
      before: {
        title: "Before WorkingCapital",
        issues: [
          "4-month hiring process",
          "Weekend handbook writing",
          "Compliance anxiety",
          "Equity confusion",
          "15 hours/week on HR"
        ]
      },
      after: {
        title: "After WorkingCapital",
        benefits: [
          "6-week hiring process",
          "Professional handbooks delivered",
          "Compliance confidence",
          "Clear equity structure",
          "0 hours/week on HR"
        ]
      }
    }
  ]

  return (
    <section ref={ref} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your On-Demand HR Machine
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just advise—we execute. While you build your product, 
            we handle all your HR needs with startup-specific expertise.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {comparisonData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`card p-6 border-2 ${item.borderColor} ${
                item.type === "WorkingCapital" ? "ring-2 ring-primary-500 shadow-xl" : ""
              }`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className={`text-xl font-bold ${item.color} mb-2`}>
                  {item.type}
                </h3>
                {item.type === "WorkingCapital" && (
                  <div className="inline-block bg-primary-100 text-primary-800 text-sm font-semibold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-6">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <item.icon className={`w-4 h-4 ${item.color} mt-0.5 flex-shrink-0`} />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className={`text-center p-4 ${item.bgColor} rounded-lg`}>
                <p className={`font-semibold ${item.color}`}>
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why WorkingCapital Works
            </h3>
            <p className="text-lg text-gray-600">
              We're not just consultants—we're your fractional HR team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Startup-Focused</h4>
              <p className="text-gray-600">
                Built specifically for venture-backed startups. We understand your unique challenges and growth patterns.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h4>
              <p className="text-gray-600">
                We don't just give advice—we execute. You get results, not reports. Guaranteed or your money back.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Fractional Team</h4>
              <p className="text-gray-600">
                Get a full HR team's expertise at a fraction of the cost. No need to hire full-time HR staff.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Transformation Scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The WorkingCapital Transformation
          </h3>

          {transformationScenarios.map((scenario, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="bg-red-50 rounded-xl p-6 border-2 border-red-200"
              >
                <h4 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  {scenario.before.title}
                </h4>
                <ul className="space-y-2">
                  {scenario.before.issues.map((issue, issueIndex) => (
                    <li key={issueIndex} className="flex items-center space-x-2 text-red-700">
                      <X className="w-4 h-4" />
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="bg-green-50 rounded-xl p-6 border-2 border-green-200"
              >
                <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  {scenario.after.title}
                </h4>
                <ul className="space-y-2">
                  {scenario.after.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-green-700">
                      <CheckCircle className="w-4 h-4" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your HR from chaos to competitive advantage?
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

export default SolutionSection
