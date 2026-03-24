'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, Linkedin, Download, ArrowRight, CheckCircle } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [playbookEmail, setPlaybookEmail] = useState('')
  const [playbookSubmitted, setPlaybookSubmitted] = useState(false)
  const [showPlaybookForm, setShowPlaybookForm] = useState(false)

  const handlePlaybookSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!playbookEmail) return
    try {
      await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: playbookEmail }),
      })
    } catch {
      // Fail silently — still let the user download
    }
    setPlaybookSubmitted(true)
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const footerLinks = {
    company: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Results', href: '#results' },
      { name: 'Team', href: '#team' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Getting Started', href: '#services' },
      { name: 'Scaling Fast', href: '#services' },
      { name: 'Going Global', href: '#services' },
      { name: 'Free Assessment', href: '#contact' }
    ],
    resources: [
      { name: 'HR Scaling Playbook', href: '#', download: true },
      { name: 'Case Studies', href: '#results' },
    ]
  }

  return (
    <footer ref={ref} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <img src="/logo-white.svg" alt="WorkingCapital" className="h-10 w-auto mb-4" />
            <p className="text-gray-300 mb-6 leading-relaxed">
              The premier HR consulting firm for venture-backed startups. 
              We help you scale your team and focus on building your product.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-400" />
                <a href="tel:+34627717137" className="text-gray-300 hover:text-white transition-colors">
                  +34 627 71 7137
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-400" />
                <a href="mailto:peter@workingcapitalou.com" className="text-gray-300 hover:text-white transition-colors">
                  peter@workingcapitalou.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  {link.download ? (
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center"
                    >
                      <Download className="w-3 h-3 mr-1" />
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Lead Magnet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Download Our HR Scaling Playbook
              </h3>
              <p className="text-primary-100 mb-4">
                Get our comprehensive guide to scaling your startup's HR from 10 to 100+ employees. 
                Includes templates, checklists, and proven strategies.
              </p>
              <ul className="text-primary-100 text-sm space-y-1">
                <li>• Employee handbook templates</li>
                <li>• Hiring process checklists</li>
                <li>• Compliance roadmaps</li>
                <li>• Culture building frameworks</li>
              </ul>
            </div>
            <div className="text-center">
              {playbookSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  <CheckCircle className="w-10 h-10 text-white mx-auto" />
                  <p className="text-white font-semibold">You're all set!</p>
                  <a
                    href="/hr-scaling-playbook.pdf"
                    download
                    className="bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center mx-auto w-fit"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Your Playbook
                  </a>
                </motion.div>
              ) : showPlaybookForm ? (
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handlePlaybookSubmit}
                  className="space-y-3"
                >
                  <p className="text-white font-semibold text-sm">Enter your email to get instant access:</p>
                  <input
                    type="email"
                    required
                    value={playbookEmail}
                    onChange={(e) => setPlaybookEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                  <button
                    type="submit"
                    className="w-full bg-white text-primary-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Send Me the Playbook
                  </button>
                  <p className="text-primary-100 text-xs">No spam. Unsubscribe anytime.</p>
                </motion.form>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowPlaybookForm(true)}
                    className="bg-white text-primary-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors flex items-center mx-auto"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Free Playbook
                  </motion.button>
                  <p className="text-primary-100 text-sm mt-2">
                    Free • Instant access
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2026 WorkingCapital. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/workingcapital"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:peter@workingcapitalou.com"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
