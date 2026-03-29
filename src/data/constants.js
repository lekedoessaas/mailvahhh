export const COMPETITORS = {
  apollo: { 
    id: 'apollo', 
    name: 'Apollo.io', 
    logo: 'A', 
    color: 'bg-slate-900', 
    tagline: 'The bloated CRM giant.', 
    overview: 'Apollo.io is a massive sales platform with severe data decay.', 
    pricing: { 
      competitor: '$49/mo (Credits Expire)', 
      mailvah: '$39/mo (Infinite Rollover)' 
    }, 
    features: [
      {name: 'Live SMTP Handshake', us: true, them: false}, 
      {name: 'Catch-All Detection', us: true, them: false}, 
      {name: 'Massive B2B Database', us: false, them: true}, 
      {name: 'Unused Credits Roll Over', us: true, them: false}
    ],
    testimonial: { 
      quote: "We were burning through Apollo credits on emails that bounced immediately.", 
      author: "Sarah Jenkins, VP Sales" 
    },
    guide: [
      "1. Export your saved lists from Apollo as a CSV.", 
      "2. Upload the raw CSV directly into the Mailvah Bulk Verifier.", 
      "3. Download the cleaned, 100% verified list."
    ]
  },
  hunter: { 
    id: 'hunter', 
    name: 'Hunter.io', 
    logo: 'H', 
    color: 'bg-orange-500', 
    tagline: 'The pattern guesser.', 
    overview: 'Hunter guesses emails by finding patterns.', 
    pricing: { 
      competitor: '$34/mo (Strict Limits)', 
      mailvah: '$39/mo (Massive Bulk Volume)' 
    }, 
    features: [
      {name: 'Guaranteed 99% Deliverability', us: true, them: false}, 
      {name: 'Pattern-Based Guessing', us: false, them: true}, 
      {name: 'Spam-Proof Composer', us: true, them: false}, 
      {name: 'DNSBL Domain Monitoring', us: true, them: false}
    ],
    testimonial: { 
      quote: "Hunter was great for finding generic info@ emails, but it ruined our sender reputation.", 
      author: "David Chen, Growth Lead" 
    },
    guide: [
      "1. Cancel your Hunter.io auto-renew.", 
      "2. Connect Mailvah to your CRM.", 
      "3. Start verifying domains."
    ]
  },
  skrapp: { 
    id: 'skrapp', 
    name: 'Skrapp.io', 
    logo: 'S', 
    color: 'bg-blue-400', 
    tagline: 'The LinkedIn scraper.', 
    overview: 'Skrapp relies on scraped lists.', 
    pricing: { 
      competitor: '$49/mo (High Cost-Per-Lead)', 
      mailvah: '$39/mo (Fractions of a Cent)' 
    }, 
    features: [
      {name: 'Real-Time Port 25 Verification', us: true, them: false}, 
      {name: 'LinkedIn Static Scraping', us: false, them: true}, 
      {name: 'Bulk CSV Processing up to 100k', us: true, them: false}, 
      {name: 'Enterprise API Access', us: true, them: false}
    ],
    testimonial: { 
      quote: "Skrapp's lists went stale in weeks.", 
      author: "Elena Rodriguez, Agency Founder" 
    },
    guide: [
      "1. Take any legacy list from Skrapp.", 
      "2. Run it through Mailvah.", 
      "3. Enjoy a pristine campaign."
    ]
  },
  snov: { 
    id: 'snov', 
    name: 'Snov.io', 
    logo: 'S', 
    color: 'bg-purple-500', 
    tagline: 'The complex sequencer.', 
    overview: 'Snov is built for complex drip campaigns.', 
    pricing: { 
      competitor: '$39/mo (Split Credits)', 
      mailvah: '$39/mo (Pure Verification)' 
    }, 
    features: [
      {name: 'Dedicated Verification Infrastructure', us: true, them: false}, 
      {name: 'Built-in Drip Campaigns', us: false, them: true}, 
      {name: 'Bounce Auto-Refunds', us: true, them: false}, 
      {name: 'Sub-200ms API Latency', us: true, them: false}
    ],
    testimonial: { 
      quote: "We already use Smartlead for sending. Snov was overkill.", 
      author: "Marcus T., Head of Outbound" 
    },
    guide: [
      "1. Keep your sending platform.", 
      "2. Route lists through Mailvah API.", 
      "3. Push to your sequencing tool."
    ]
  }
};

export const LEGAL_DATA = {
  privacy: { 
    title: "Privacy Policy", 
    date: "March 27, 2026",
    intro: "At Donmican Technology Ltd., we protect your privacy.", 
    sections: [
      { 
        heading: "1. Data Categories", 
        body: ["Account data", "Verification data", "Telemetry data"] 
      },
      { 
        heading: "2. Sub-Processors", 
        body: ["Hetzner", "Supabase", "Cloudflare", "Stripe"] 
      }
    ]
  },
  terms: { 
    title: "Terms of Service", 
    date: "March 27, 2026",
    intro: "By using Mailvah, you agree to these terms.", 
    sections: [
      { heading: "1. Acceptable Use", body: ["No spam", "No phishing"] },
      { heading: "2. Subscriptions", body: ["Rollover credits", "99.9% SLA"] }
    ]
  },
  security: {
    title: "Security Overview", 
    date: "March 27, 2026",
    intro: "Enterprise security standards.",
    sections: [
      { heading: "1. Encryption", body: ["TLS 1.3", "AES-256"] }
    ]
  },
  gdpr: {
    title: "GDPR Compliance", 
    date: "March 27, 2026",
    intro: "GDPR compliance commitment.",
    sections: [
      { heading: "1. Lawful Basis", body: ["Legitimate interest"] }
    ]
  }
};

export const spamWords = [
  'free', 'guarantee', 'urgent', 'act now', 'buy', 'discount', '100%', 
  'click here', 'winner', 'risk-free', 'opportunity', 'cash', 'crypto'
];
