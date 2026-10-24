/**
 * Harsh Raj — Graphic Design Portfolio
 * Projects Database
 * 
 * 12 Original, Distinct Concept Design Projects across:
 * - Brand Identity
 * - Restaurant Branding
 * - Social Media Campaign
 * - Product Advertising
 * - YouTube Thumbnail Design
 * - E-commerce Campaign
 * - Food Photography Art Direction
 * - Event Poster Design
 * - Packaging Design
 * - Festival Campaign
 * - Furniture Brand Campaign
 * - Digital Product Visual Design
 * 
 * All projects are clearly labeled as self-initiated concept work.
 */

const PORTFOLIO_PROJECTS = [
  {
    id: "aura-botanica",
    number: "01",
    title: "Aura Botanica",
    clientType: "Botanical Skincare & Apothecary",
    category: "branding",
    categoryLabel: "Brand Identity",
    tags: ["branding", "print"],
    featured: true,
    gridSpan: "wide",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A complete visual identity system for a sustainable organic skincare studio, combining high-contrast editorial typography, earthy botanical tones, and minimalist cosmetic packaging.",
    
    // Case Study In-Depth
    brief: "To build a tranquil, high-end visual identity for a fictional botanical apothecary dedicated to slow beauty rituals and pure plant extracts. The challenge was communicating biological efficacy without feeling cold or clinical.",
    problemStatement: "Most modern skincare brands lean either too clinical (resembling sterile pharmaceuticals) or too rustic (looking like amateur homemade crafts). Aura Botanica needed a balanced aesthetic of quiet luxury, scientific intention, and grounding nature.",
    targetAudience: "Conscious wellness enthusiasts, dermatological skincare seekers, and design-minded individuals (ages 24–45) who value sustainable ingredients and mindful daily rituals.",
    creativeDirection: "Soft architectural serif typography paired with restrained botanical silhouettes, warm linen paper textures, and matte amber packaging create an atmosphere of restorative calm.",
    
    // Color Palette
    palette: [
      { name: "Forest Pine", hex: "#1c3829", role: "Primary brand mark & deep text" },
      { name: "Oat Milk Ivory", hex: "#f4efe6", role: "Warm background & label paper" },
      { name: "Sage Mist", hex: "#9eb29a", role: "Secondary botanical accent" },
      { name: "Terracotta Clay", hex: "#cb7951", role: "Vibrant earthy detail" }
    ],
    
    // Typography System
    typography: [
      { role: "Display & Wordmark", font: "Playfair Display", style: "Italic Serif 700", notes: "Expresses artisanal luxury and botanical rhythm" },
      { role: "Body & Applications", font: "Manrope", style: "Geometric Sans 400/500", notes: "Ensures clean readability across physical packaging labels" },
      { role: "Technical & Specs", font: "DM Mono", style: "Monospace 500", notes: "Used for ingredient ratios, batch numbers, and net volumes" }
    ],

    // Design Gallery Deliverables
    deliverables: [
      "Primary & Secondary Wordmark System",
      "Cosmetic Dropper Bottle & Amber Jar Mockups",
      "Debossed Linen Box Packaging Architecture",
      "Stationery & Botanical Business Card Suite",
      "Social Launch Editorial Creative Suite"
    ],
    
    // Design Decisions & Rationale
    designDecisions: [
      "Opted for an organic high-contrast serif with flared terminals to echo natural plant curves while maintaining premium shelf presence.",
      "Selected an earthy muted sage and terracotta palette to differentiate the brand from typical bright pastel wellness competitors.",
      "Introduced monospaced technical labels to provide a grounded, apothecary-tested credibility to the product line."
    ]
  },

  {
    id: "miso-stone",
    number: "02",
    title: "Miso & Stone Izakaya",
    clientType: "Japanese-Nordic Fermentation Bar",
    category: "branding",
    categoryLabel: "Restaurant Branding",
    tags: ["branding", "print"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A contemporary restaurant identity blending Tokyo nightlife energy with Scandinavian minimalism across menus, packaging, and promotional art.",
    
    brief: "Create a memorable culinary identity for a fictional izakaya and fermentation bar. The system needed to feel warm and energetic at night, yet crisp and artisanal on printed daytime materials.",
    problemStatement: "Izakaya branding frequently defaults to predictable lanterns and brush calligraphy. The goal was to invent a fresh visual vocabulary bridging Japanese fermentation craft with Nordic simplicity.",
    targetAudience: "Urban culinary adventurers, natural wine lovers, and cocktail enthusiasts looking for an immersive, design-forward dining experience.",
    creativeDirection: "Sumi-ink black foundation paired with electric persimmon red accents, raw washi paper textures, bilingual Latin-Katakana typography, and bold geometric food containers.",
    
    palette: [
      { name: "Sumi Charcoal", hex: "#121316", role: "Primary background & heavy headers" },
      { name: "Persimmon Red", hex: "#ea432a", role: "Dynamic energy & focal punch" },
      { name: "Raw Washi", hex: "#f3eee4", role: "Menu paper ground & packaging kraft" },
      { name: "Deep Nori", hex: "#2b382f", role: "Rich organic tone for bar collateral" }
    ],
    
    typography: [
      { role: "Logotype & Display", font: "Syne", style: "Extra Bold 800", notes: "Heavy architectural presence inspired by stone architecture" },
      { role: "Menu & Narrative", font: "Space Grotesk", style: "Medium 500", notes: "Clean modern grid alignment for multi-course dining menus" },
      { role: "Utility & Seating", font: "DM Mono", style: "Monospace 400", notes: "Reservation codes, table numbers, and pricing coordinates" }
    ],

    deliverables: [
      "Bilingual Katakana & Latin Identity Lockup",
      "Tri-fold Printed Dinner & Sake Menu",
      "Custom Chopstick Sleeve & Takeout Kraft Bag",
      "Embossed Ceramic Drink Coasters",
      "Nighttime Opening Promotional Poster"
    ],
    
    designDecisions: [
      "Used asymmetric typographic column layouts that mirror the curated balance of an omakase plating presentation.",
      "Infused the persimmon red accent as a singular punch color, ensuring instant brand recognition in dimly lit restaurant interiors.",
      "Engineered tactile negative space on printed paper goods to convey the Japanese philosophy of 'Ma' (the space between)."
    ]
  },

  {
    id: "elan-atelier",
    number: "03",
    title: "Élan Atelier — SS26 Capsule",
    clientType: "Contemporary Slow Fashion",
    category: "social-media",
    categoryLabel: "Social Media Campaign",
    tags: ["social-media"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A cohesive six-post campaign grid for an architectural clothing label, balancing typographic quotes, macro textile details, and editorial lookbooks.",
    
    brief: "Design a unified six-post social media campaign for a fictional sustainable fashion house launching their Spring/Summer 2026 capsule collection, titled 'Everyday Sculptures'.",
    problemStatement: "Social media feeds often look either disjointed with mismatched photo treatments or overly repetitive with identical card templates. The campaign required dynamic visual rhythm while maintaining brand unity.",
    targetAudience: "Aesthetic-conscious consumers (ages 22–38) interested in capsule wardrobes, ethical craftsmanship, and architectural silhouettes.",
    creativeDirection: "Warm linen backdrops, cinematic contrast, editorial typography overlays, and a strict 9-grid harmonic progression moving from silhouette to texture to philosophy.",
    
    palette: [
      { name: "Champagne Silk", hex: "#ede7dc", role: "Clean neutral base for photography frames" },
      { name: "Espresso Bark", hex: "#29211c", role: "High-contrast editorial typography" },
      { name: "Pistachio Dust", hex: "#b8c5a2", role: "Seasonal accent representing renewal" },
      { name: "Ochre Thread", hex: "#d5a452", role: "Detail highlight & callout badges" }
    ],
    
    typography: [
      { role: "Editorial Display", font: "Playfair Display", style: "SemiBold Italic 600", notes: "Lends a high-fashion literary tone to campaign quotes" },
      { role: "Captions & Specs", font: "Manrope", style: "Medium 500", notes: "Optimal legibility for mobile screen carousels" }
    ],

    deliverables: [
      "Cohesive 6-Post Instagram Grid Concept",
      "Typographic Quote Template: 'Form Follows Feeling'",
      "Macro Fabric Weave Texture Showcase",
      "Seasonal Color Palette Story Slide",
      "Launch Date Announcement & RSVP Creative"
    ],
    
    designDecisions: [
      "Engineered an alternating cadence between full-bleed editorial photography and minimalist typographic quote cards to prevent visual fatigue.",
      "Positioned typographic micro-labels at the corners of each slide to mimic museum exhibit placards.",
      "Tested all post compositions at thumbnail scale (100px square) to guarantee visual clarity on mobile Instagram grids."
    ]
  },

  {
    id: "lumen-acoustics",
    number: "04",
    title: "Lumen Acoustics — Studio Zero",
    clientType: "Audiophile Hardware",
    category: "advertising",
    categoryLabel: "Product Advertising",
    tags: ["advertising", "digital"],
    featured: true,
    gridSpan: "wide",
    statusBadge: "Self-Initiated Concept Work",
    summary: "Polished consumer product advertising creatives for precision noise-canceling headphones, featuring dramatic rim lighting and technical callouts.",
    
    brief: "Develop a premium advertising campaign for a fictional high-end audio engineering lab launching their flagship wireless studio headphones, the 'Studio Zero'.",
    problemStatement: "Consumer electronics ads often rely on clichéd neon explosions or generic smiling models. Lumen needed an advertising language that respected audio purism and industrial design excellence.",
    targetAudience: "Sound designers, music producers, creative directors, and remote knowledge workers who demand studio-grade acoustics and distraction-free focus.",
    creativeDirection: "Chiaroscuro studio lighting, hyper-minimalist dark slate surfaces, glowing cyan audio waveforms, and precision typographic data callouts.",
    
    palette: [
      { name: "Matte Obsidian", hex: "#0c0d10", role: "Infinite depth & studio background" },
      { name: "Cyber Cyan", hex: "#00e5ff", role: "Active noise-canceling frequency indicator" },
      { name: "Platinum Mist", hex: "#e4e7ec", role: "Headline typography & product reflections" },
      { name: "Stealth Slate", hex: "#222631", role: "Component framing & secondary card panels" }
    ],
    
    typography: [
      { role: "Campaign Headline", font: "Manrope", style: "Extra Bold 800", notes: "Authoritative, modern industrial tone for billboards" },
      { role: "Acoustic Specs", font: "DM Mono", style: "Regular 400", notes: "Precision frequency data and driver specifications" }
    ],

    deliverables: [
      "Landscape Digital Billboard & Web Hero Banner",
      "Vertical 9:16 Social Video/Static Feature Ad",
      "Magazine Two-Page Print Spread",
      "Product Feature Spotlight Diagram",
      "Sound Frequency Waveform Asset Suite"
    ],
    
    designDecisions: [
      "Framed the headphones against deep charcoal with a razor-thin cyan rim light to highlight the aluminum chassis contours.",
      "Used monospaced technical callouts with hair-line leader lines to communicate precision acoustic engineering.",
      "Kept the copy concise and confident: 'Silence The Chaos. Hear The Purest Frequency.'"
    ]
  },

  {
    id: "the-creative-engine",
    number: "05",
    title: "The Creative Engine — YouTube Series",
    clientType: "Design Education Channel",
    category: "digital",
    categoryLabel: "YouTube Thumbnail Design",
    tags: ["digital", "social-media"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "Three visually distinct thumbnail concepts engineered for maximum contrast, instant cognitive recognition, and high click-through rates.",
    
    brief: "Design three distinct YouTube thumbnail concepts for a digital design channel exploring portfolio reviews, typography rules, and color theory masterclasses.",
    problemStatement: "Most YouTube thumbnails suffer from illegible small text, chaotic overlays, and exaggerated facial expressions that damage professional credibility. The goal was high CTR while maintaining design integrity.",
    targetAudience: "Early-career designers, creative freelancers, students, and self-taught digital creators searching for practical visual design guidance.",
    creativeDirection: "Maximum contrast palettes, 3-to-4 word bold headlines, focal-point visual anchors, and deliberate negative space for timestamp legibility.",
    
    palette: [
      { name: "Signal Crimson", hex: "#ff2d55", role: "High-priority focal point & rule-break accent" },
      { name: "Electric Yellow", hex: "#ffe600", role: "Eye-catching banner & highlight badge" },
      { name: "Dark Graphite", hex: "#101114", role: "Deep background for maximum contrast" },
      { name: "Stark White", hex: "#ffffff", role: "High-legibility headline typography" }
    ],
    
    typography: [
      { role: "Thumbnail Headlines", font: "Syne", style: "Extra Bold 800", notes: "Ultra-condensed weight engineered for small mobile cards" },
      { role: "Episode Tags", font: "Space Grotesk", style: "Bold 700", notes: "Secondary context badge in high-contrast pill container" }
    ],

    deliverables: [
      "Concept 1: '10 Design Rules You Must Break' (Split-screen tension)",
      "Concept 2: 'Canva to Portfolio: Zero to Hired' (Workflow progression)",
      "Concept 3: 'Color Theory Explained in 7 Mins' (Spectral color wheel)",
      "Mobile 120px Thumbnail Legibility & Contrast Test",
      "Timestamp & Safe-Zone Overlay Compliance Guide"
    ],
    
    designDecisions: [
      "Restricted verbal content to a maximum of 4 high-impact words per thumbnail to ensure reading comprehension within 200 milliseconds.",
      "Avoided bottom-right clutter where YouTube's video duration badge appears on mobile interfaces.",
      "Utilized stark yellow and crimson contrast against obsidian to stand out against YouTube's dark and light UI modes."
    ]
  },

  {
    id: "solaris-running",
    number: "06",
    title: "Solaris Running Club — Summer Drop",
    clientType: "Athletic Performance Apparel",
    category: "advertising",
    categoryLabel: "E-commerce Campaign",
    tags: ["advertising", "digital"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "High-velocity e-commerce promotional banners, sale graphics, and a landing-page visual concept driven by kinetic typography and speed angles.",
    
    brief: "Create an energetic multi-asset promotional campaign for a fictional running club apparel drop, promoting early access and seasonal flash discounts.",
    problemStatement: "E-commerce sales banners often look cheap and spammy, degrading the perception of premium athletic apparel. Solaris required an urgent, high-energy sales language that felt aspirational.",
    targetAudience: "Urban marathon runners, 5K enthusiasts, track athletes, and lifestyle runners who value technical fabric performance and bold colorways.",
    creativeDirection: "Diagonal speed vectors, italicized kinetic typography, vibrant solar orange and volt green accents, and gritty asphalt textures.",
    
    palette: [
      { name: "Hyper Solar", hex: "#ff5500", role: "Primary promotional punch & CTA button" },
      { name: "Volt Speed Lime", hex: "#ccff00", role: "High-visibility accent & price badge" },
      { name: "Asphalt Dark", hex: "#141619", role: "Rugged urban running ground" },
      { name: "Vapor Mist", hex: "#f7f9fb", role: "Clean contrast typography" }
    ],
    
    typography: [
      { role: "Campaign Action Headlines", font: "Space Grotesk", style: "Bold 700 / Italic", notes: "Communicates physical momentum and athletic drive" },
      { role: "Pricing & Discount Badges", font: "Syne", style: "Heavy 800", notes: "Bold numeric clarity for '40% OFF' discount badges" }
    ],

    deliverables: [
      "E-commerce Homepage Hero Drop Banner",
      "Seasonal Flash Sale Grid Header (FLASH40)",
      "Category Collection Banners (Trail / Road / Sprint)",
      "Dynamic Mobile Story Shopping Ads",
      "Promotional Coupon & Free Shipping Badges"
    ],
    
    designDecisions: [
      "Employed a dynamic 12-degree forward tilt across typography and layout containers to visually mimic a runner's acceleration angle.",
      "Combined hyper solar orange and volt lime to command immediate visual attention on cluttered retail screens.",
      "Organized clear visual hierarchy: Urgency Hook → Product Hero → Benefit Specs → High-contrast CTA."
    ]
  },

  {
    id: "terra-bistro",
    number: "07",
    title: "Terra Bistro — Fire & Soil",
    clientType: "Farm-to-Table Dining",
    category: "social-media",
    categoryLabel: "Food Photography Art Direction",
    tags: ["social-media", "advertising", "print"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "Art-directed food campaign featuring rustic chiaroscuro styling, seasonal menu design, and social media storytelling highlighting local farm provenance.",
    
    brief: "Develop an art direction concept for a seasonal farm-to-table culinary campaign titled 'Fire & Soil', celebrating open-hearth cooking and organic growers.",
    problemStatement: "Food marketing frequently leans on hyper-saturated, sterile stock photography. Terra needed a soulful, tactile visual narrative that honored the grit, soil, and craft behind the dishes.",
    targetAudience: "Culinary enthusiasts, organic food supporters, slow-food advocates, and weekend brunchers seeking authentic dining roots.",
    creativeDirection: "Low-key chiaroscuro lighting, textured ceramic vessels, charred embers, handwritten provenance stamps, and warm earth tones.",
    
    palette: [
      { name: "Roasted Sienna", hex: "#9c4328", role: "Warm hearth fire & roasted clay tone" },
      { name: "Olive Leaf", hex: "#4b5e3e", role: "Fresh harvest & botanical dressing" },
      { name: "Warm Parchment", hex: "#f6f1e6", role: "Menu background & tactile paper feel" },
      { name: "Charcoal Truffle", hex: "#1c1917", role: "Deep cast-iron skillet ground" }
    ],
    
    typography: [
      { role: "Editorial Dish Names", font: "Playfair Display", style: "Italic Serif 700", notes: "Evokes heritage European bistro culture and craft" },
      { role: "Ingredients & Provenance", font: "Manrope", style: "Regular 400", notes: "Crisp readability for farm names and dietary specifics" }
    ],

    deliverables: [
      "Editorial Food Magazine Spread Mockup",
      "Seasonal Prix-Fixe Menu with Kraft Binding",
      "Open-Hearth Promotional Dining Poster",
      "Social Story Slides featuring Grower Profiles",
      "Provenance Stamp & Organic Certification Badges"
    ],
    
    designDecisions: [
      "Used moody directional lighting to accentuate dish textures: crispy charred edges, glistening olive oil, and rustic ceramic glazes.",
      "Integrated small provenance stamps ('Harvested at Valley Farms · Oct 2026') to reinforce transparency and trust.",
      "Paired classic editorial serifs with clean sans-serif descriptions to balance historical warmth with modern dining elegance."
    ]
  },

  {
    id: "resonance-festival",
    number: "08",
    title: "Resonance 2026 Sound Festival",
    clientType: "Experimental Music & Typography",
    category: "print",
    categoryLabel: "Event Poster Design",
    tags: ["print"],
    featured: true,
    gridSpan: "wide",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A striking 3-poster editorial series for an avant-garde electronic music festival, showcasing kinetic typographic distortion and Swiss grid rigor.",
    
    brief: "Create an editorial poster series and identity suite for 'Resonance', a fictional 3-day experimental music and digital visual arts festival in Berlin.",
    problemStatement: "Electronic festival posters often become unreadable chaos with chaotic neon swirls and illegible text. Resonance required bold graphic expression without sacrificing lineup legibility.",
    targetAudience: "Creative professionals, sound designers, electronic music aficionados, and visual culture students seeking cutting-edge audio-visual art.",
    creativeDirection: "Swiss grid precision disrupted by soundwave frequency distortions, vivid ultraviolet and fluorescent coral accents, screen-print halftone textures, and fold-crease mockups.",
    
    palette: [
      { name: "Deep Cosmic", hex: "#110f27", role: "Nighttime auditorium ground" },
      { name: "Ultraviolet", hex: "#7928ca", role: "Synthwave energy & ambient glow" },
      { name: "Fluorescent Coral", hex: "#ff5c5c", role: "Focal headliner emphasis" },
      { name: "Chalk Cream", hex: "#f1eee6", role: "Screen-printed ink typography" }
    ],
    
    typography: [
      { role: "Headline Event Name", font: "Syne", style: "Extra Bold 800", notes: "Kinetic warped letterforms evoking audio frequency modulation" },
      { role: "Lineup & Timetable Grid", font: "DM Mono", style: "Medium 500", notes: "Strict monospaced tabular system for artists, dates, and stages" }
    ],

    deliverables: [
      "3-Piece Cohesive Poster Series (Frequency, Lineup, Workshop)",
      "Screen-Printed Poster Mockup with Paper Fold Creases",
      "Laminated Festival VIP Pass & Fabric Lanyard",
      "Digital Program Guide Grid",
      "Typographic Frequency Waveform Graphic Assets"
    ],
    
    designDecisions: [
      "Employed an asymmetric modular 12-column grid that cleanly separates headline headliners from intimate workshop listings.",
      "Treated the central wordmark with subtle horizontal displacement to simulate acoustic wave interference.",
      "Specified a two-color spot fluorescent screen print process to ensure high-impact visibility on street kiosks."
    ]
  },

  {
    id: "kura-teas",
    number: "09",
    title: "Kura Artisan Teas — Kyoto Reserve",
    clientType: "Single-Origin Japanese Tea",
    category: "branding",
    categoryLabel: "Packaging Design",
    tags: ["branding", "print"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A complete luxury packaging concept with realistic tin canisters, die-cut botanical labels, and gold-foiled origami gift boxes.",
    
    brief: "Develop an authentic luxury packaging identity for single-origin ceremonial matcha and reserve sencha harvested in Uji, Kyoto.",
    problemStatement: "Western tea packaging often misinterprets Japanese tea culture through generic calligraphy or cheap cartoonish illustrations. Kura needed a respectful, elevated design reflecting centuries of heritage.",
    targetAudience: "Matcha lovers, tea ceremony practitioners, luxury gift shoppers, and mindful consumers who appreciate exquisite unboxing experiences.",
    creativeDirection: "Matte celadon metal canisters, debossed crest stamps, gold foil accents, woodcut botanical tea plant illustrations, and tactile washi wrap-around labels.",
    
    palette: [
      { name: "Matcha Celadon", hex: "#7a997d", role: "Ceremonial tea leaf tone for primary tin" },
      { name: "Imperial Gold Foil", hex: "#c59e56", role: "Metallic stamp & seal detail" },
      { name: "Sumi Charcoal", hex: "#1e2221", role: "Crisp ink typography" },
      { name: "Rice Paper Washi", hex: "#faf7f0", role: "Textured paper label ground" }
    ],
    
    typography: [
      { role: "Brand Title & Heritage", font: "Playfair Display", style: "Medium 500", notes: "Understated luxury with delicate serifs" },
      { role: "Brewing Specs & Terroir", font: "DM Mono", style: "Regular 400", notes: "Water temp, steep time, and harvest elevation specs" }
    ],

    deliverables: [
      "Cylindrical Matte Tea Canister with Embossed Lid",
      "Wrap-Around Label Layout with Die-Cut Window",
      "Rigid Origami-Inspired Outer Gift Box",
      "Gold Foil Tamper-Evident Paper Seal",
      "Packaging Dieline & Production Specification Sheet"
    ],
    
    designDecisions: [
      "Formulated a clean rectangular label layout with dedicated brewing coordinates (80°C / 45s / 2g) in monospaced type for ritual clarity.",
      "Added a metallic gold seal over the canister lid to guarantee single-origin freshness and create an intentional unboxing moment.",
      "Harmonized the matcha celadon tin color with raw ivory washi paper to create quiet organic contrast on luxury retail counters."
    ]
  },

  {
    id: "utsav-festive",
    number: "10",
    title: "Utsav by Tara — Festive Retail",
    clientType: "Luxury Home & Lifestyle",
    category: "social-media",
    categoryLabel: "Festival Campaign",
    tags: ["social-media", "advertising"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "A contemporary Indian festive retail campaign celebrating Diwali and new beginnings through geometric motifs, jewel tones, and luxury gift hamper sleeves.",
    
    brief: "Design an elevated festive campaign for an Indian home and lifestyle brand launching their Diwali gift collection, celebrating light, heritage, and modern living.",
    problemStatement: "Indian festive campaigns frequently default to outdated clipart, excessive sparkles, and garish color combinations. Utsav required a contemporary, design-led visual identity that felt regal yet minimal.",
    targetAudience: "Modern Indian families, corporate gifting executives, and design-conscious shoppers looking for thoughtful, tasteful festive gifts.",
    creativeDirection: "Geometric abstraction of classic oil lamps (diyas) and lotus petals, deep emerald and royal marigold color blocking, gold foil lattice patterns, and festive social greeting cards.",
    
    palette: [
      { name: "Royal Marigold", hex: "#ff9e1f", role: "Joyful celebratory warmth & hero banner" },
      { name: "Jewel Emerald", hex: "#0e4a38", role: "Opulent regal backdrop & packaging base" },
      { name: "Rani Rose", hex: "#d8266e", role: "Vibrant accent for greeting creatives" },
      { name: "Warm Brass Foil", hex: "#dfae5e", role: "Lustrous gold foil pattern stamping" }
    ],
    
    typography: [
      { role: "Festive Headlines", font: "Playfair Display", style: "Bold 700 / Italic", notes: "Celebrates heritage grace and joyous warmth" },
      { role: "Product Details & Social", font: "Space Grotesk", style: "Medium 500", notes: "Modern geometric contrast for catalog listings" }
    ],

    deliverables: [
      "Festive Launch Hero Banner ('Illuminate Every Corner')",
      "Geometric Diya & Rangoli Pattern System",
      "Luxury Gift Hamper Box Sleeve Mockup",
      "Cohesive 4-Slide Instagram Greeting Story Suite",
      "Storefront Promotional Window Display Graphic"
    ],
    
    designDecisions: [
      "Deconstructed the traditional diya silhouette into clean architectural arcs, creating a modern motif that scales seamlessly from stickers to billboards.",
      "Paired deep jewel emerald with vibrant marigold to deliver high festive energy while maintaining refined luxury restraint.",
      "Engineered social creatives with ample negative space to let product imagery shine alongside festive typography."
    ]
  },

  {
    id: "koto-living",
    number: "11",
    title: "Koto Living — Mindful Spaces",
    clientType: "Scandinavian-Japandi Furniture",
    category: "advertising",
    categoryLabel: "Furniture Brand Campaign",
    tags: ["advertising", "branding"],
    featured: false,
    gridSpan: "standard",
    statusBadge: "Self-Initiated Concept Work",
    summary: "Architectural catalog layouts, outdoor billboard mockups, and social creatives for a sustainable furniture brand inspired by Japandi interior principles.",
    
    brief: "Create a seasonal brand campaign and catalog design for a sustainable furniture maker focusing on organic curves, FSC-certified timber, and serene living spaces.",
    problemStatement: "Furniture marketing often looks like sterile retail warehouse catalogs with price tags everywhere. Koto needed an editorial approach treating furniture as thoughtful sculpture.",
    targetAudience: "Interior architects, homeowners, spatial designers, and individuals cultivating mindful, clutter-free domestic spaces.",
    creativeDirection: "Architectural arch framing, generous whitespace, tactile natural timber and boucle textures, warm sunlight shadows, and quiet editorial typesetting.",
    
    palette: [
      { name: "Warm Sand", hex: "#ded8c8", role: "Neutral background evoking limestone walls" },
      { name: "Smoked Walnut", hex: "#58473a", role: "Rich timber tone for product accents" },
      { name: "Nordic Moss", hex: "#69715a", role: "Organic plant element & architectural framing" },
      { name: "Basalt Charcoal", hex: "#20211f", role: "Steel hardware & grounding headline type" }
    ],
    
    typography: [
      { role: "Campaign Title & Statements", font: "Playfair Display", style: "Italic 600", notes: "Evokes quiet contemplation and sculptural form" },
      { role: "Product Names & Dimensions", font: "Manrope", style: "Light 300 / Medium 500", notes: "Architectural clarity for material specs and dimensions" }
    ],

    deliverables: [
      "Architectural Catalog Cover & Interior Spread",
      "Contemporary City Billboard Campaign Mockup",
      "Product Feature Social Carousel: 'The Nara Lounge Chair'",
      "Material Storyboard (Solid Oak, Linen, Blackened Steel)",
      "Digital Lookbook Editorial Layout"
    ],
    
    designDecisions: [
      "Used expansive margins and quiet grid structures to give each furniture piece the visual breathing room of an art gallery.",
      "Selected an understated earth and limestone palette to reflect the brand's commitment to natural, unvarnished materials.",
      "Highlighted craft details like exposed dovetail joints and tactile upholstery textures through micro-framing."
    ]
  },

  {
    id: "kronos-ai",
    number: "12",
    title: "Kronos AI — The Creative Canvas",
    clientType: "Generative Design Software",
    category: "digital",
    categoryLabel: "Digital Product Visual Design",
    tags: ["digital"],
    featured: true,
    gridSpan: "wide",
    statusBadge: "Self-Initiated Concept Work",
    summary: "Visual identity and responsive marketing landing page for a next-generation creative workflow app, featuring dark glassmorphic UI and neural canvas nodes.",
    
    brief: "Develop a brand identity and high-impact landing page concept for a generative design tool built to assist art directors with spatial asset generation.",
    problemStatement: "Most AI software landing pages look identical: generic purple nebulas, floating 3D spheres, and vague marketing claims. Kronos needed a sharp, interface-led identity rooted in creative workflows.",
    targetAudience: "Senior visual designers, creative technologists, 3D artists, and agency leads building brand design systems.",
    creativeDirection: "Deep space obsidian canvas, radiant electric indigo and luminescent teal gradients, crisp glassmorphic UI cards, and vector node diagrams.",
    
    palette: [
      { name: "Deep Space Obsidian", hex: "#08090d", role: "Ultra-dark canvas ground" },
      { name: "Electric Indigo", hex: "#6366f1", role: "Neural connection line & active state" },
      { name: "Luminescent Teal", hex: "#06b6d4", role: "Secondary generative glow & badges" },
      { name: "Pure Cloud", hex: "#f1f5f9", role: "Sharp high-contrast typography" }
    ],
    
    typography: [
      { role: "Wordmark & Hero Headline", font: "Space Grotesk", style: "Bold 700", notes: "Technical precision with humanistic geometric geometry" },
      { role: "Interface Controls & Labels", font: "Manrope", style: "SemiBold 600", notes: "Engineered for UI micro-copy and feature toggles" },
      { role: "Code Nodes & Parameters", font: "DM Mono", style: "Regular 400", notes: "Coordinate inputs, latency metrics, and API tokens" }
    ],

    deliverables: [
      "Dark-Mode Marketing Landing Page Hero Mockup",
      "Interactive Node Canvas & UI Component System",
      "Dynamic Vector Monogram & App Icon",
      "Feature Spotlight Cards (Realtime Neural Engine, Vector Export)",
      "Responsive Mobile App Screen Interface Preview"
    ],
    
    designDecisions: [
      "Layered delicate 1px glassmorphic borders with 12px blur over subtle radial gradients to achieve dimensional depth without clutter.",
      "Showcased actual product interface elements directly in the hero section to build immediate trust and demonstrate product utility.",
      "Unified the electric indigo and cyan gradient as the visual signature for generative actions across the application."
    ]
  }
];

// Helper to look up a project by ID
function getProjectById(id) {
  return PORTFOLIO_PROJECTS.find(project => project.id === id);
}

// Make accessible globally for vanilla script environments
if (typeof window !== "undefined") {
  window.PORTFOLIO_PROJECTS = PORTFOLIO_PROJECTS;
  window.getProjectById = getProjectById;
}
