/**
 * Harsh Raj — Graphic Design Portfolio
 * Central Configuration File
 * 
 * Edit this file to update your personal details, social links,
 * contact information, and resume availability.
 */

const SITE_CONFIG = {
  // Personal & Professional Details
  name: "Harsh Raj",
  role: "Graphic Designer & Visual Creative",
  headline: "Turning Ideas Into Visual Experiences.",
  subheadline: "I create thoughtful visual identities, digital campaigns, social media creatives, and brand experiences that help ideas stand out.",
  
  // Biography & Profile (Honest, editable)
  about: {
    lead: "I am a creative learner interested in graphic design, digital experiences, and building useful products.",
    bio: "I enjoy exploring visual communication, brand identity, and the intersection of design and technology. My work is driven by curiosity: breaking down a brand's core essence and transforming it into intentional, memorable visual systems that connect with real people.",
    education: {
      degree: "B.Tech in Computer Science",
      institution: "Medhavi Skills University",
      status: "Undergraduate"
    },
    location: "India",
    availability: "Available for creative opportunities & collaborations"
  },

  // Social & Professional Profiles
  socials: {
    linkedin: "https://www.linkedin.com/in/kumar-harsh-b58294386",
    github: "https://github.com/harsh1433raj-source",
    emailid:"harshrajharsh623@gmail.com",

    // To receive email messages directly, replace this placeholder with your real email.
    // Example: "harshraj.design@gmail.com"
    email: "", // Currently unprovided; configure here when ready
    phone: "", // Optional: leave blank if not publishing
    location: "India"
  },

  // Resume / CV Settings
  // When you have a PDF resume ready, place it in assets/cv.pdf and set cvAvailable: true
  resume: {
    cvAvailable: false,
    cvPath: "assets/cv.pdf",
    cvFilename: "Harsh_Raj_Resume.pdf",
    requestNote: "My CV is currently being refreshed with recent 2026 brand identity and campaign case studies. You can request an updated copy directly via the contact form or connect on LinkedIn."
  },

  // Skills Data (Honest representation of capabilities & technical foundation)
  skills: {
    design: [
      { name: "Canva", description: "Rapid asset production, layout templating, and brand kits" },
      { name: "Social Media Design", description: "Multi-post campaigns, carousels, stories, and feed art direction" },
      { name: "Poster and Banner Design", description: "High-contrast editorial typography and promotional print graphics" },
      { name: "Visual Composition", description: "Hierarchy, scale, whitespace, grid systems, and focal flow" },
      { name: "Typography and Color Theory", description: "Type pairings, editorial rhythm, color harmony, and accessibility" },
      { name: "Brand Identity Concepts", description: "Logomarks, stationery suites, color palettes, and brand guidelines" }
    ],
    technical: [
      { name: "HTML5", description: "Semantic, accessible markup and modern document structures" },
      { name: "CSS3 / Modern Styling", description: "Responsive layouts, Flexbox, CSS Grid, custom properties, and animations" },
      { name: "JavaScript (ES6+)", description: "Interactive components, DOM manipulation, form validation, and event handling" },
      { name: "Responsive Web Design", description: "Mobile-first viewports, fluid typography, and cross-device adaptation" }
    ]
  }
};

// Make config globally accessible for vanilla script environments
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
