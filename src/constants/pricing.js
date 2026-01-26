export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    category: 'SME',
    price: '₦150,000',
    description: 'Perfect for small businesses starting their online journey',
    features: [
      '5 Pages Website',
      'Mobile Responsive',
      'Contact Form',
      'Basic SEO',
      'WhatsApp Integration',
      '3 Months Free Maintenance'
    ],
    whatsappMessage: 'Hello, I am interested in the Starter package for SME.'
  },
  {
    id: 2,
    name: 'Professional',
    category: 'SME',
    price: '₦250,000',
    description: 'For growing businesses needing advanced features',
    features: [
      '10 Pages Website',
      'Advanced SEO',
      'Blog Integration',
      'Social Media Integration',
      'Analytics Dashboard',
      '6 Months Free Maintenance'
    ],
    popular: true,
    whatsappMessage: 'Hello, I am interested in the Professional package for SME.'
  },
  {
    id: 3,
    name: 'Premium',
    category: 'Church',
    price: '₦300,000',
    description: 'Complete solution for churches and ministries',
    features: [
      'Unlimited Pages',
      'Event Calendar',
      'Online Giving System',
      'Sermon Library',
      'Member Directory',
      '1 Year Maintenance'
    ],
    whatsappMessage: 'Hello, I am interested in the Premium package for Church.'
  },
  {
    id: 4,
    name: 'Enterprise',
    category: 'Real Estate',
    price: '₦450,000',
    description: 'Advanced platform for real estate companies',
    features: [
      'Property Management System',
      'Virtual Tours',
      'CRM Integration',
      'Advanced Analytics',
      'Mobile App Ready',
      'Priority Support'
    ],
    whatsappMessage: 'Hello, I am interested in the Enterprise package for Real Estate.'
  }
];

export const maintenancePlans = [
  {
    id: 1,
    name: 'Basic Maintenance',
    price: '₦20,000/month',
    features: [
      'Regular Updates',
      'Security Monitoring',
      'Backup Services',
      'Email Support',
      'Uptime Monitoring'
    ]
  },
  {
    id: 2,
    name: 'Premium Support',
    price: '₦50,000/month',
    features: [
      'Everything in Basic',
      '24/7 Support',
      'Priority Updates',
      'Performance Optimization',
      'Monthly Reports',
      'Unlimited Edits'
    ]
  }
];