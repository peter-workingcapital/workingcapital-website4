export interface ContactFormData {
  name: string
  email: string
  company: string
  stage: string
  challenge: string
  message?: string
}

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  results: string
}

export interface ServiceTier {
  name: string
  stage: string
  icon: any
  color: string
  bgColor: string
  borderColor: string
  description: string
  deliverables: string[]
  clientProfile: string
  roi: string
  price: string
  popular: boolean
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  credentials: string[]
  avatar: string
  isPrimary: boolean
  contact?: {
    phone: string
    email: string
  }
}

export interface Metric {
  icon: any
  title: string
  value: string
  suffix: string
  description: string
  color: string
  bgColor: string
  details: string[]
}

export interface CaseStudy {
  title: string
  company: string
  challenge: string
  solution: string
  results: string[]
  metric: string
}

export interface PainPoint {
  icon: any
  title: string
  description: string
  cost: string
  color: string
  bgColor: string
}
