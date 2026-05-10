# Changelog

All notable changes to this portfolio site. Follows [Keep a Changelog](https://keepachangelog.com/) format.

## [Unreleased] — 2026-05-10

### Added
- **Hero image**: Replaced abstract 3D render with professional headshot (`ProfilePicture-web.jpg`, 600×898, ~50 KB) for personal brand alignment.
- **Active Directory skill**: Added to About section skill tags (`fa-building` icon). Distinct from Entra ID (cloud) — covers on-prem identity.
- **POC navigation**: Added sticky nav bar (home icon + hamburger dropdown) to all 4 proof-of-concept HTML files:
  - `m365-license-audit.html`
  - `autopilot-provisioning.html`
  - `onboarding-automation.html`
  - `backup-audit-dr.html`
- **CHANGELOG.md**: Created for change control and scalability tracking.

### Changed
- **Navigation consistency**: Rewrote `index.html` nav in vanilla JS — removed jQuery dependency entirely. All 5 pages now share the same overlay menu pattern.
- **POC nav**: Replaced simple dropdowns with full-screen overlay menus matching portfolio style. Home icon + hamburger with LinkedIn/GitHub/Email socials.
- **POC traversal**: Home and overlay links now traverse back to `index.html` (same tab) instead of opening new tabs.
- **M365 License Audit POC**: Fixed missing colored bar fills in License Utilization section (Assigned sky-500, Unused emerald-400, Stale amber-400).
- **Project cards**: Removed "Completed" status badges from all 4 project cards for cleaner layout.
- **Hero frame styling**: Added `box-shadow` with cyan glow, increased border opacity, adjusted `object-position` to 50% 15% for better face framing.
- **LinkedIn hero link**: Added `target="_blank"` to open in new tab.
- **About image**: Switched from 14 MB `ProfilePicture.png` to 50 KB `ProfilePicture-web.jpg`.
- **POC links**: All cross-page navigation links now open in new tabs (`target="_blank"`).

### Removed
- `Image/Hero Image.jpg` — replaced by profile photo.
- `Image/ProfilePicture-dark.jpg` — failed background-darkening experiment.
- `Image/ProfilePicture.png` — superseded by web-optimized JPEG.
- `Image/A+.png` — unused asset.
- `Image/n+.png` — unused asset.
- `Icons/` directory — empty.
- `blog.html` — orphaned page, not linked from portfolio.
- `CSS/blogstyles.css` — orphaned stylesheet.
- Duplicate inline `<footer>` block at bottom of `index.html` (content already in main footer).

---

## Previous Changes (pre-CHANGELOG)

### Portfolio Restructure
- Combined Expertise + Certifications into single section with integrated cert badges.
- Reordered sections: Hero → Projects → Services → Expertise & Certs → About → Footer.
- Added 4 project cards with screenshots + scroll-reveal animations.
- Screenshots link directly to POC HTML files (no lightbox).
- Uniform screenshot sizing (`max-height: 220px`, `object-fit: cover`).
- Scroll-reveal via IntersectionObserver (no external libs).

### POC Files Created
- `m365-license-audit.html` — demo dashboard with metrics, stale users table, utilization bars.
- `autopilot-provisioning.html` — 5-step animated provisioning flow.
- `onboarding-automation.html` — 5-step pipeline with before/after + code preview.
- `backup-audit-dr.html` — 4-step audit flow with risk ratings.

### UI Polish
- Nav overlay: restored `fadeToggle(200)` animation.
- Hero: removed skills tags, "Hire Me" → "Contact Me", added About Me button.
- Hero: removed "Open to Work" badge.
- Code cleanup: removed AOS, GSAP, dead CSS, duplicate normalize.css.
