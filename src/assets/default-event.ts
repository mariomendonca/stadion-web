// A gradient background with a subtle pattern
export const DefaultEventImage = `data:image/svg+xml,${encodeURIComponent(`
<svg width="800" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7C3AED;stop-opacity:1" />
    </linearGradient>
    <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#pattern)" />
  <text x="50%" y="50%" font-family="system-ui" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">
    Stadion Event
  </text>
</svg>
`)}` 