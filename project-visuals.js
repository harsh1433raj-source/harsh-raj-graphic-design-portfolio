/**
 * Harsh Raj — Graphic Design Portfolio
 * High-Fidelity Project Visuals Generator
 * 
 * Generates bespoke, art-directed SVG & CSS mockups for all 12 projects:
 * - Card thumbnails in the portfolio grid
 * - Deep case-study gallery views (Hero mockups, systems, applications)
 * 
 * 100% vector-based, crisp on Retina/4K displays, zero broken images.
 */

const PROJECT_VISUALS = {
  // 01. Aura Botanica (Brand Identity)
  "aura-botanica": {
    renderCard() {
      return `
        <div class="pv-card pv-aura">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>AURA BOTANICA / APOTHECARY</span>
            <span class="pv-tag">01 · BRAND IDENTITY</span>
          </div>
          
          <div class="pv-aura-center">
            <div class="pv-aura-leaf-bg">
              <svg viewBox="0 0 120 120" class="pv-svg-leaf">
                <path d="M60 10 C30 35 25 75 60 110 C95 75 90 35 60 10 Z" fill="#9eb29a" opacity="0.35"/>
                <path d="M60 10 L60 110" stroke="#1c3829" stroke-width="1.5" stroke-dasharray="3 3"/>
              </svg>
            </div>
            
            <div class="pv-aura-wordmark">
              <span class="pv-serif-title">Aura</span>
              <span class="pv-sub">BOTANICA</span>
            </div>
            
            <!-- Amber Dropper Bottle Mockup -->
            <div class="pv-dropper-bottle">
              <div class="pv-dropper-cap"></div>
              <div class="pv-dropper-collar"></div>
              <div class="pv-bottle-shoulder"></div>
              <div class="pv-bottle-body">
                <div class="pv-bottle-label">
                  <span class="pv-label-brand">AURA</span>
                  <span class="pv-label-product">BOTANICAL SERUM</span>
                  <span class="pv-label-specs">NO. 04 · 50ML / 1.7 FL OZ</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>SLOW RITUALS · PURE BOTANICALS</span>
            <span class="pv-palette-pill" style="background:#cb7951;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <!-- View 1: Hero Amber Dropper Bottles Mockup -->
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Amber Dropper Bottles & Apothecary Jars</h4>
            </div>
            <div class="pv-hero-box pv-aura-hero">
              <div class="pv-grain-overlay"></div>
              <div class="pv-scene-aura">
                <div class="pv-aura-bg-shape"></div>
                <div class="pv-bottle-group">
                  <!-- Bottle 1: 50ml Serum -->
                  <div class="pv-mock-bottle tall">
                    <div class="pv-cap"></div>
                    <div class="pv-collar"></div>
                    <div class="pv-glass">
                      <div class="pv-reflection"></div>
                      <div class="pv-label-wrap">
                        <div class="pv-label-head">AURA BOTANICA</div>
                        <div class="pv-label-main">Facial Nectar</div>
                        <div class="pv-label-bot">SQUALANE + ROSEHIP · 50ML</div>
                      </div>
                    </div>
                  </div>
                  <!-- Bottle 2: 30ml Oil -->
                  <div class="pv-mock-bottle short">
                    <div class="pv-cap"></div>
                    <div class="pv-collar gold"></div>
                    <div class="pv-glass amber-dark">
                      <div class="pv-reflection"></div>
                      <div class="pv-label-wrap">
                        <div class="pv-label-head">AURA</div>
                        <div class="pv-label-main">Night Repair</div>
                        <div class="pv-label-bot">BAKUCHIOL · 30ML</div>
                      </div>
                    </div>
                  </div>
                  <!-- Ceramic Jar -->
                  <div class="pv-mock-jar">
                    <div class="pv-jar-lid"></div>
                    <div class="pv-jar-body">
                      <span>AURA · CRÈME</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- View 2: Brand Identity Guidelines & Stationery -->
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 02</span>
              <h4>Stationery Suite & Blind-Debossed Linen Packaging</h4>
            </div>
            <div class="pv-stationery-grid">
              <div class="pv-stat-card card-biz">
                <div class="pv-card-front">
                  <span class="pv-debossed-mark">AB</span>
                  <small>AURA BOTANICA</small>
                </div>
              </div>
              <div class="pv-stat-card card-box">
                <div class="pv-box-top">
                  <span class="pv-gold-seal">✦ ORGANIC CERTIFIED</span>
                </div>
                <div class="pv-box-center">
                  <h3>Aura</h3>
                  <p>BOTANICA APOTHECARY</p>
                </div>
                <div class="pv-box-bot">100% RECYCLED UNBLEACHED LINEN FIBER</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 02. Miso & Stone (Restaurant Branding)
  "miso-stone": {
    renderCard() {
      return `
        <div class="pv-card pv-miso">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>MISO & STONE / IZAKAYA</span>
            <span class="pv-tag">02 · RESTAURANT</span>
          </div>
          
          <div class="pv-miso-center">
            <div class="pv-kanji-stamp">味噌と石</div>
            <div class="pv-miso-title">
              <h2>MISO<span>&</span><br>STONE</h2>
            </div>
            <div class="pv-miso-circle"></div>
            <div class="pv-chopstick-preview">
              <div class="pv-sleeve">
                <span>MISO & STONE · TOKYO / NORDIC</span>
              </div>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>FERMENTATION · SAKE · HEARTH</span>
            <span class="pv-palette-pill" style="background:#ea432a;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Printed Dinner & Natural Sake Menu</h4>
            </div>
            <div class="pv-hero-box pv-miso-menu-mockup">
              <div class="pv-washi-menu">
                <div class="pv-menu-topline">
                  <span>MISO & STONE · AUTUMN MENU</span>
                  <span>TABLE 04 / 2026</span>
                </div>
                <div class="pv-menu-header">
                  <h3>MISO & STONE</h3>
                  <p>FERMENTATION · SMALL PLATES · ROBATA</p>
                </div>
                <div class="pv-menu-columns">
                  <div class="pv-menu-col">
                    <span class="pv-col-title">RAW & FERMENT</span>
                    <div class="pv-menu-item">
                      <b>Hokkaido Scallop <span>18</span></b>
                      <small>Charred koji, sea buckthorn, dill</small>
                    </div>
                    <div class="pv-menu-item">
                      <b>Aged Kingfish <span>19</span></b>
                      <small>Smoked dashi, pickled plum, shiso</small>
                    </div>
                  </div>
                  <div class="pv-menu-col">
                    <span class="pv-col-title">ROBATA HEARTH</span>
                    <div class="pv-menu-item">
                      <b>Miso Glazed Black Cod <span>28</span></b>
                      <small>Fermented cherry blossom, wild leek</small>
                    </div>
                    <div class="pv-menu-item">
                      <b>Maitake Skewer <span>14</span></b>
                      <small>Brown butter shoyu, toasted sesame</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 02</span>
              <h4>Kraft Takeout Bag, Chopstick Sleeves & Ceramic Coasters</h4>
            </div>
            <div class="pv-miso-takeout-grid">
              <div class="pv-kraft-bag">
                <div class="pv-bag-handles"></div>
                <div class="pv-bag-body">
                  <div class="pv-bag-stamp">
                    <span class="pv-stamp-kanji">味噌と石</span>
                    <h4>MISO & STONE</h4>
                    <p>TOKYO NIGHTS · NORDIC SPIRIT</p>
                  </div>
                </div>
              </div>
              <div class="pv-coaster-pair">
                <div class="pv-coaster-card red">
                  <span>M&S</span>
                  <small>EST. 2026</small>
                </div>
                <div class="pv-coaster-card dark">
                  <span>味噌</span>
                  <small>NATURAL SAKE</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 03. Élan Atelier (Social Media Campaign)
  "elan-atelier": {
    renderCard() {
      return `
        <div class="pv-card pv-elan">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>ÉLAN ATELIER / SS26</span>
            <span class="pv-tag">03 · SOCIAL CAMPAIGN</span>
          </div>
          
          <div class="pv-elan-grid-preview">
            <div class="pv-feed-card pv-post-lookbook">
              <div class="pv-model-silhouette"></div>
              <span>01 / LOOKBOOK</span>
            </div>
            <div class="pv-feed-card pv-post-quote">
              <p>"Form follows<br><em>feeling.</em>"</p>
              <small>ÉLAN · CAPITALE</small>
            </div>
            <div class="pv-feed-card pv-post-macro">
              <div class="pv-linen-weave"></div>
              <span>RAW TEXTURE</span>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>6-POST COHESIVE INSTAGRAM SYSTEM</span>
            <span class="pv-palette-pill" style="background:#d5a452;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Full 6-Post Cohesive Instagram Grid System</h4>
            </div>
            <div class="pv-feed-full-mockup">
              <div class="pv-feed-header-bar">
                <div class="pv-feed-avatar"></div>
                <div><b>elan.atelier</b><br><small>Everyday Sculptures SS26</small></div>
              </div>
              <div class="pv-feed-6grid">
                <!-- Post 1 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p1">
                    <div class="pv-arch-silhouette"></div>
                    <span class="pv-post-tag">SS26 · 01</span>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Silhouette in repose.</div>
                </div>
                <!-- Post 2 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p2">
                    <p class="pv-quote-text">"Form follows<br><em>feeling.</em>"</p>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Architecture in motion.</div>
                </div>
                <!-- Post 3 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p3">
                    <div class="pv-weave-pattern"></div>
                    <span class="pv-post-tag">DETAIL 100%</span>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Belgian unbleached linen.</div>
                </div>
                <!-- Post 4 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p4">
                    <div class="pv-palette-stripes">
                      <span style="background:#ede7dc;"></span>
                      <span style="background:#b8c5a2;"></span>
                      <span style="background:#d5a452;"></span>
                      <span style="background:#29211c;"></span>
                    </div>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Earth pigments.</div>
                </div>
                <!-- Post 5 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p5">
                    <div class="pv-tailor-stitch"></div>
                    <span class="pv-post-tag">HAND CRAFT</span>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Cut by hand in our studio.</div>
                </div>
                <!-- Post 6 -->
                <div class="pv-ig-post">
                  <div class="pv-post-media p6">
                    <div class="pv-countdown-box">
                      <small>WORLDWIDE DROP</small>
                      <b>MAY 18</b>
                    </div>
                  </div>
                  <div class="pv-post-caption"><b>elan.atelier</b> Capsule launch online.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 04. Lumen Acoustics (Product Advertising)
  "lumen-acoustics": {
    renderCard() {
      return `
        <div class="pv-card pv-lumen">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>LUMEN ACOUSTICS / STUDIO ZERO</span>
            <span class="pv-tag">04 · PRODUCT AD</span>
          </div>
          
          <div class="pv-lumen-center">
            <div class="pv-soundwave-bg">
              <svg viewBox="0 0 400 120" class="pv-svg-wave">
                <path d="M 0 60 Q 50 10, 100 60 T 200 60 T 300 60 T 400 60" fill="none" stroke="#00e5ff" stroke-width="2" opacity="0.4"/>
                <path d="M 0 60 Q 50 100, 100 60 T 200 60 T 300 60 T 400 60" fill="none" stroke="#00e5ff" stroke-width="1" opacity="0.2"/>
              </svg>
            </div>
            
            <div class="pv-headphone-mock">
              <div class="pv-band"></div>
              <div class="pv-cup left"></div>
              <div class="pv-cup right"></div>
              <div class="pv-cyan-glow"></div>
            </div>
            
            <div class="pv-lumen-copy">
              <h2>Silence The Chaos.<br><em>Hear Everything.</em></h2>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>ACTIVE NOISE CANCELLATION · 40MM BERYLLIUM</span>
            <span class="pv-palette-pill" style="background:#00e5ff;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Digital Billboard & High-Contrast Product Creative</h4>
            </div>
            <div class="pv-hero-box pv-lumen-billboard">
              <div class="pv-billboard-inner">
                <div class="pv-lumen-brand-mark">LUMEN ACOUSTICS</div>
                <div class="pv-lumen-hero-content">
                  <div class="pv-tech-left">
                    <span class="pv-spec-badge">STUDIO ZERO</span>
                    <h1>PURE<br>ACOUSTIC<br>SILENCE.</h1>
                    <p>Engineered with custom 40mm beryllium drivers and zero-distortion acoustic shielding.</p>
                    <div class="pv-feature-chips">
                      <span>48H PLAYTIME</span>
                      <span>HYBRID ANC</span>
                      <span>LOSSLESS BLUETOOTH 5.4</span>
                    </div>
                  </div>
                  <div class="pv-tech-right">
                    <div class="pv-headphone-large">
                      <div class="pv-sculpture-chassis"></div>
                      <div class="pv-frequency-ring"></div>
                      <div class="pv-leader-line l1"><span>40mm Beryllium Drivers</span></div>
                      <div class="pv-leader-line l2"><span>Memory Foam Cushions</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 05. The Creative Engine (YouTube Thumbnail Design)
  "the-creative-engine": {
    renderCard() {
      return `
        <div class="pv-card pv-yt">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>THE CREATIVE ENGINE / TUTORIALS</span>
            <span class="pv-tag">05 · YOUTUBE THUMBNAILS</span>
          </div>
          
          <div class="pv-yt-stack-preview">
            <!-- Thumbnail 1 -->
            <div class="pv-yt-thumb t1">
              <div class="pv-yt-split">
                <div class="pv-yt-left">10 RULES</div>
                <div class="pv-yt-right">BREAK EM</div>
              </div>
              <span class="pv-yt-duration">14:20</span>
            </div>
            <!-- Thumbnail 2 (Overlap) -->
            <div class="pv-yt-thumb t2">
              <span class="pv-yt-badge">CANVA → PORTFOLIO</span>
              <h4>ZERO TO HIRED</h4>
              <span class="pv-yt-duration">18:05</span>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>3 HIGH-CTR CONCEPTS · RETINA OPTIMIZED</span>
            <span class="pv-palette-pill" style="background:#ff2d55;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>3 Distinct High-CTR YouTube Thumbnail Concepts</h4>
            </div>
            <div class="pv-yt-gallery-grid">
              <!-- Concept 1 -->
              <div class="pv-thumb-case">
                <div class="pv-thumb-screen thumb-c1">
                  <div class="pv-thumb-badge-top">GRAPHIC DESIGN MASTERCLASS</div>
                  <div class="pv-c1-split-art">
                    <div class="pv-c1-bad">BORING<br>LAYOUT</div>
                    <div class="pv-c1-divider">VS</div>
                    <div class="pv-c1-good">HIGH<br>IMPACT!</div>
                  </div>
                  <div class="pv-thumb-time">14:28</div>
                </div>
                <div class="pv-thumb-meta">
                  <b>Concept 1: "10 Design Rules You Must Break"</b>
                  <p>Visual split-screen tension with high-contrast yellow & crimson focal anchors.</p>
                </div>
              </div>

              <!-- Concept 2 -->
              <div class="pv-thumb-case">
                <div class="pv-thumb-screen thumb-c2">
                  <div class="pv-c2-banner">PORTFOLIO SECRETS</div>
                  <h3 class="pv-c2-head">ZERO TO<br><mark>HIRED</mark> FAST</h3>
                  <div class="pv-c2-icons">
                    <span>CANVA</span> ➔ <span>RECRUITER READY</span>
                  </div>
                  <div class="pv-thumb-time">18:12</div>
                </div>
                <div class="pv-thumb-meta">
                  <b>Concept 2: "Canva to Portfolio: Zero to Hired"</b>
                  <p>Actionable before/after narrative with clear credential callout pill.</p>
                </div>
              </div>

              <!-- Concept 3 -->
              <div class="pv-thumb-case">
                <div class="pv-thumb-screen thumb-c3">
                  <div class="pv-c3-wheel">
                    <div class="pv-spectrum-ring"></div>
                  </div>
                  <div class="pv-c3-text">
                    <small>COLOR SECRETS</small>
                    <h2>COLOR THEORY<br><span>IN 7 MINS</span></h2>
                  </div>
                  <div class="pv-thumb-time">07:45</div>
                </div>
                <div class="pv-thumb-meta">
                  <b>Concept 3: "Color Theory Explained in 7 Minutes"</b>
                  <p>Spectral color wheel composition with high readability down to 120px phone screen width.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 06. Solaris Running (E-commerce Campaign)
  "solaris-running": {
    renderCard() {
      return `
        <div class="pv-card pv-solaris">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>SOLARIS RUNNING CLUB / DROP 04</span>
            <span class="pv-tag">06 · E-COMMERCE</span>
          </div>
          
          <div class="pv-solaris-center">
            <div class="pv-speed-lines"></div>
            <div class="pv-solaris-badge">FLASH SALE · 40% OFF</div>
            <div class="pv-solaris-headline">
              <h2>CHASING<br><em>DAYLIGHT.</em></h2>
            </div>
            <div class="pv-shoe-silhouette"></div>
          </div>
          
          <div class="pv-card-bottom">
            <span>VELOCITY TYPOGRAPHY · PROMO BANNERS</span>
            <span class="pv-palette-pill" style="background:#ff5500;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Homepage Hero Promotional Banner & Sale Badges</h4>
            </div>
            <div class="pv-hero-box pv-solaris-banner">
              <div class="pv-banner-inner">
                <div class="pv-banner-nav">
                  <b>SOLARIS RUNNING CLUB</b>
                  <span>END OF SEASON DROP</span>
                </div>
                <div class="pv-banner-body">
                  <div class="pv-discount-stamp">
                    <span>UP TO</span>
                    <b>40% OFF</b>
                    <small>CODE: FLASH40</small>
                  </div>
                  <h1 class="pv-kinetic-h1">SPEED IS A<br>STATE OF MIND.</h1>
                  <p>Ultralight carbon-plated marathon footwear and breathable athletic apparel.</p>
                  <a href="#work" class="pv-fake-cta">SHOP SUMMER DROP ↗</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 07. Terra Bistro (Food Photography Art Direction)
  "terra-bistro": {
    renderCard() {
      return `
        <div class="pv-card pv-terra">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>TERRA BISTRO / HEARTH</span>
            <span class="pv-tag">07 · ART DIRECTION</span>
          </div>
          
          <div class="pv-terra-center">
            <div class="pv-ember-glow"></div>
            <div class="pv-plate-silhouette">
              <div class="pv-herbs"></div>
            </div>
            <div class="pv-terra-copy">
              <small>FARM TO HEARTH</small>
              <h2>Rooted in Soil.<br><em>Finished on Fire.</em></h2>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>CHIAROSCURO ART DIRECTION & MENUS</span>
            <span class="pv-palette-pill" style="background:#9c4328;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Chiaroscuro Food Art Poster & Seasonal Menu</h4>
            </div>
            <div class="pv-hero-box pv-terra-spread">
              <div class="pv-poster-frame">
                <div class="pv-poster-dark">
                  <span class="pv-harvest-tag">HARVEST 2026 · VALLEY GROWERS</span>
                  <div class="pv-dish-visual">
                    <div class="pv-cast-iron">
                      <div class="pv-charred-vegetables"></div>
                    </div>
                  </div>
                  <div class="pv-poster-text">
                    <h3>TERRA</h3>
                    <p>"No shortcuts. Just honest embers, wild herbs, and food cooked with care."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 08. Resonance Festival (Event Poster Design)
  "resonance-festival": {
    renderCard() {
      return `
        <div class="pv-card pv-res">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>RESONANCE 2026 / BERLIN</span>
            <span class="pv-tag">08 · EVENT POSTER</span>
          </div>
          
          <div class="pv-res-center">
            <div class="pv-wave-distortion">
              <div class="pv-freq-bar" style="height:40%"></div>
              <div class="pv-freq-bar" style="height:85%"></div>
              <div class="pv-freq-bar" style="height:60%"></div>
              <div class="pv-freq-bar" style="height:100%"></div>
              <div class="pv-freq-bar" style="height:70%"></div>
              <div class="pv-freq-bar" style="height:35%"></div>
            </div>
            <div class="pv-res-title">
              <h2>RESO<br>NANCE</h2>
            </div>
            <div class="pv-res-meta-line">
              <span>OCT 16—18 · BERLIN KRAFTWERK</span>
              <span>AVANT-GARDE AUDIO</span>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>SWISS GRID RIGOR · 3-POSTER SERIES</span>
            <span class="pv-palette-pill" style="background:#7928ca;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>3-Poster Editorial Series (Screen-Printed Halftone Mockup)</h4>
            </div>
            <div class="pv-posters-triplet">
              <!-- Poster A: Kinetic Frequency -->
              <div class="pv-poster-card pa">
                <div class="pv-poster-top">01 / FREQUENCY</div>
                <div class="pv-poster-kinetic">
                  <span>AUDIO</span>
                  <span class="distort">WAVE</span>
                </div>
                <div class="pv-poster-footer">BERLIN 2026</div>
              </div>
              <!-- Poster B: Lineup Grid -->
              <div class="pv-poster-card pb">
                <div class="pv-poster-top">02 / LINEUP</div>
                <div class="pv-lineup-col">
                  <b>HEADLINERS</b>
                  <span>RIVAL CONSOLES</span>
                  <span>TIM HECKER</span>
                  <span>CATERINA BARBIERI</span>
                </div>
                <div class="pv-poster-footer">3 DAYS · 4 STAGES</div>
              </div>
              <!-- Poster C: Synthesizer Lab -->
              <div class="pv-poster-card pc">
                <div class="pv-poster-top">03 / LABS</div>
                <div class="pv-patch-nodes"></div>
                <div class="pv-poster-footer">MODULAR SYNTHESIS</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 09. Kura Artisan Teas (Packaging Design)
  "kura-teas": {
    renderCard() {
      return `
        <div class="pv-card pv-kura">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>KURA TEAS / KYOTO RESERVE</span>
            <span class="pv-tag">09 · PACKAGING</span>
          </div>
          
          <div class="pv-kura-center">
            <div class="pv-tin-mockup">
              <div class="pv-tin-cap">
                <span class="pv-gold-crest">蔵</span>
              </div>
              <div class="pv-tin-label">
                <div class="pv-label-crest">✦</div>
                <span class="pv-tea-name">KURA</span>
                <small>CEREMONIAL MATCHA</small>
                <span class="pv-harvest">UJI, KYOTO · FIRST HARVEST</span>
              </div>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>MATTE CELADON CANISTERS · GOLD FOIL</span>
            <span class="pv-palette-pill" style="background:#c59e56;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Luxury Tea Canister & Wrap-Around Dieline</h4>
            </div>
            <div class="pv-hero-box pv-kura-packaging">
              <div class="pv-kura-tin-large">
                <div class="pv-tin-body-matte">
                  <div class="pv-tamper-seal">
                    <span>SEALED AT ORIGIN · 2026</span>
                  </div>
                  <div class="pv-washi-wrap">
                    <div class="pv-washi-crest">蔵</div>
                    <h3>KURA</h3>
                    <p>SINGLE-ORIGIN CEREMONIAL MATCHA</p>
                    <div class="pv-brewing-icons">
                      <span>80°C</span> · <span>45 SEC</span> · <span>2.0G</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 10. Utsav by Tara (Festival Campaign)
  "utsav-festive": {
    renderCard() {
      return `
        <div class="pv-card pv-utsav">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>UTSAV BY TARA / FESTIVE</span>
            <span class="pv-tag">10 · FESTIVAL</span>
          </div>
          
          <div class="pv-utsav-center">
            <div class="pv-diya-geometric">
              <div class="pv-flame-cone"></div>
              <div class="pv-diya-base"></div>
            </div>
            <div class="pv-utsav-copy">
              <h2>Illuminate<br><em>Every Corner.</em></h2>
            </div>
            <div class="pv-rangoli-arcs"></div>
          </div>
          
          <div class="pv-card-bottom">
            <span>MODERN INDIAN FESTIVE SYSTEM</span>
            <span class="pv-palette-pill" style="background:#ff9e1f;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Festive Retail Launch Banner & Hamper Sleeve</h4>
            </div>
            <div class="pv-hero-box pv-utsav-banner">
              <div class="pv-utsav-frame">
                <div class="pv-utsav-gold-border">
                  <div class="pv-utsav-logo">UTSAV <span>BY TARA</span></div>
                  <h1>CELEBRATE<br>NEW LIGHT.</h1>
                  <p>Hand-poured brass diyas, cold-pressed artisanal incense, and festive sweet hampers.</p>
                  <div class="pv-utsav-gold-seal">✦ THE DIWALI COLLECTION 2026</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 11. Koto Living (Furniture Brand Campaign)
  "koto-living": {
    renderCard() {
      return `
        <div class="pv-card pv-koto">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>KOTO LIVING / SPACES</span>
            <span class="pv-tag">11 · FURNITURE</span>
          </div>
          
          <div class="pv-koto-center">
            <div class="pv-arch-frame"></div>
            <div class="pv-chair-minimal">
              <div class="pv-backrest"></div>
              <div class="pv-seat"></div>
              <div class="pv-legs"></div>
            </div>
            <div class="pv-koto-copy">
              <h2>Silence in<br><em>Space.</em></h2>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>ARCHITECTURAL CATALOG & BILLBOARDS</span>
            <span class="pv-palette-pill" style="background:#58473a;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>Architectural Catalog Cover & Interior Spread</h4>
            </div>
            <div class="pv-hero-box pv-koto-catalog">
              <div class="pv-catalog-spread">
                <!-- Page 1: Cover / Left Page -->
                <div class="pv-spread-page left">
                  <span class="pv-cat-tag">COLLECTION N° 03</span>
                  <div class="pv-arch-silhouette-large"></div>
                  <div class="pv-cat-title">
                    <h2>KOTO<br>LIVING</h2>
                    <p>Crafted for calm domestic sanctuaries.</p>
                  </div>
                </div>
                <!-- Page 2: Product Highlight / Right Page -->
                <div class="pv-spread-page right">
                  <span class="pv-cat-tag">THE NARA CHAIR</span>
                  <div class="pv-chair-diagram"></div>
                  <div class="pv-material-specs">
                    <b>Solid FSC White Oak & Bouclé</b>
                    <small>Hand-finished in Denmark · Design by Koto Studio</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // 12. Kronos AI (Digital Product Visual Design)
  "kronos-ai": {
    renderCard() {
      return `
        <div class="pv-card pv-kronos">
          <div class="pv-grain-overlay"></div>
          <div class="pv-meta-bar">
            <span>KRONOS AI / STUDIO CANVAS</span>
            <span class="pv-tag">12 · DIGITAL UI</span>
          </div>
          
          <div class="pv-kronos-center">
            <div class="pv-neural-glow"></div>
            <div class="pv-glass-browser">
              <div class="pv-browser-bar">
                <span class="dot"></span><span class="dot"></span><span class="dot"></span>
                <span class="pv-url">kronos.studio/canvas</span>
              </div>
              <div class="pv-canvas-nodes">
                <div class="pv-node n1">Prompt Engine</div>
                <div class="pv-node-line"></div>
                <div class="pv-node n2">Vector Flow</div>
              </div>
            </div>
            <div class="pv-kronos-title">
              <h2>The Intelligent<br><em>Creative Canvas.</em></h2>
            </div>
          </div>
          
          <div class="pv-card-bottom">
            <span>DARK GLASSMORPHIC UI & NODE SYSTEM</span>
            <span class="pv-palette-pill" style="background:#6366f1;"></span>
          </div>
        </div>
      `;
    },

    renderGallery() {
      return `
        <div class="pv-gallery-stack">
          <div class="pv-gallery-item">
            <div class="pv-gallery-header">
              <span class="pv-pill">VIEW 01</span>
              <h4>SaaS Marketing Landing Page & Interactive Node Canvas</h4>
            </div>
            <div class="pv-hero-box pv-kronos-mockup">
              <div class="pv-desktop-bezel">
                <div class="pv-bezel-header">
                  <div class="pv-bezel-dots"><i></i><i></i><i></i></div>
                  <div class="pv-bezel-search">kronos.design/explore</div>
                  <div class="pv-bezel-avatar"></div>
                </div>
                <div class="pv-bezel-screen">
                  <div class="pv-kronos-ui-nav">
                    <b>KRONOS <span>AI</span></b>
                    <div class="pv-nav-links-fake">
                      <span>Canvas</span><span>Nodes</span><span>Models</span><span>Pricing</span>
                    </div>
                    <button class="pv-btn-sm">Launch Studio</button>
                  </div>
                  <div class="pv-kronos-hero-content">
                    <span class="pv-beta-badge">✦ NEURAL ENGINE 3.0 LIVE</span>
                    <h1>GENERATE.<br>REFINE. SHIP.</h1>
                    <p>The generative design workspace engineered specifically for art directors.</p>
                    <div class="pv-ui-glass-card">
                      <div class="pv-card-prompt">
                        <span class="pv-sparkle">✦</span>
                        <input type="text" value="Extract 3D mesh from Swiss typographic poster" readonly>
                        <span class="pv-chip">READY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  }
};

// Make accessible globally
if (typeof window !== "undefined") {
  window.PROJECT_VISUALS = PROJECT_VISUALS;
}
