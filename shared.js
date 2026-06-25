/* ════════════════════════════════════════════════════
   MANSULA NEXUS — Shared Nav + Footer Injector
   Runs on every page. Includes all SVG icon sprites.
   ════════════════════════════════════════════════════ */

(function () {
  const ICONS = `
<svg style="display:none" xmlns="http://www.w3.org/2000/svg">
  <symbol id="ic-logo" viewBox="0 0 32 32">
    <rect width="32" height="32" rx="9" fill="url(#slg)"/>
    <path d="M16 6L27 12V20L16 26L5 20V12L16 6Z" fill="rgba(255,255,255,.2)"/>
    <path d="M16 10L22 14V18L16 22L10 18V14L16 10Z" fill="rgba(255,255,255,.2)"/>
    <circle cx="16" cy="16" r="3.5" fill="white"/>
    <defs><linearGradient id="slg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse"><stop stop-color="#6366F1"/><stop offset="1" stop-color="#A855F7"/></linearGradient></defs>
  </symbol>
  <symbol id="ic-menu" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-close" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-arrow-r" viewBox="0 0 20 20" fill="none"><path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-play" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M8 7l6 3-6 3V7Z" fill="currentColor"/></symbol>
  <symbol id="ic-check" viewBox="0 0 20 20" fill="none"><polyline points="4 10 8 14 16 6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-x" viewBox="0 0 20 20" fill="none"><line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-cart" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6L18 2H6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-box" viewBox="0 0 24 24" fill="none"><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-users" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-book" viewBox="0 0 24 24" fill="none"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2V3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7V3Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-chart" viewBox="0 0 24 24" fill="none"><line x1="18" y1="20" x2="18" y2="4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="20" x2="12" y2="10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="6" y1="20" x2="6" y2="16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-save" viewBox="0 0 24 24" fill="none"><path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 21 17 13 7 13 7 21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 3 7 8 15 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-shield" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-zap" viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-wifi-off" viewBox="0 0 24 24" fill="none"><line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39M10.71 5.05A16 16 0 0122.56 9M1.42 9a15.91 15.91 0 014.7 2.88M12 20h.01" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-smartphone" viewBox="0 0 24 24" fill="none"><rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" stroke-width="1.8"/><line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="ic-download" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="7 10 12 15 17 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-trend" viewBox="0 0 24 24" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="17 6 23 6 23 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-scan" viewBox="0 0 24 24" fill="none"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-star" viewBox="0 0 24 24" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-settings" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="1.8"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" stroke-width="1.8"/></symbol>
  <symbol id="ic-file" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="14 2 14 8 20 8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-tag" viewBox="0 0 24 24" fill="none"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="7" y1="7" x2="7.01" y2="7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="ic-clock" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><polyline points="12 6 12 12 16 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-refresh" viewBox="0 0 24 24" fill="none"><polyline points="23 4 23 10 17 10" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="1 20 1 14 7 14" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-phone" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.6 11.5 19.79 19.79 0 01.5 2.82 2 2 0 012.5.81h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.35a16 16 0 006.06 6.06l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-monitor" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-cpu" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><rect x="9" y="9" width="6" height="6" stroke="currentColor" stroke-width="1.8"/><line x1="9" y1="1" x2="9" y2="4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="15" y1="1" x2="15" y2="4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="9" y1="20" x2="9" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="15" y1="20" x2="15" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="20" y1="9" x2="23" y2="9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="20" y1="15" x2="23" y2="15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="1" y1="9" x2="4" y2="9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="1" y1="15" x2="4" y2="15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-dollar" viewBox="0 0 24 24" fill="none"><line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-printer" viewBox="0 0 24 24" fill="none"><polyline points="6 9 6 2 18 2 18 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><rect x="6" y="14" width="12" height="8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-qr" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="14" width="3" height="3" rx=".5" stroke="currentColor" stroke-width="1.5"/><line x1="18" y1="14" x2="21" y2="14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="18" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="18" y1="20" x2="21" y2="20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><line x1="14" y1="18" x2="14" y2="21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></symbol>
  <symbol id="ic-layers" viewBox="0 0 24 24" fill="none"><polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="2 17 12 22 22 17" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="2 12 12 17 22 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-cloud" viewBox="0 0 24 24" fill="none"><path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-lock" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-globe" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="1.8"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-award" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="6" stroke="currentColor" stroke-width="1.8"/><path d="M8.56 14.44L7 22l5-3 5 3-1.56-7.56" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-map" viewBox="0 0 24 24" fill="none"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="8" y1="2" x2="8" y2="18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="16" y1="6" x2="16" y2="22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-activity" viewBox="0 0 24 24" fill="none"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-home" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-package" viewBox="0 0 24 24" fill="none"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M21 16V8l-9-5-9 5v8l9 5 9-5Z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-chevron-r" viewBox="0 0 20 20" fill="none"><path d="M7 4l6 6-6 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
  <symbol id="ic-external" viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="15 3 21 3 21 9" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></symbol>
  <symbol id="ic-info" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.8"/><line x1="12" y1="16" x2="12" y2="12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="12" y1="8" x2="12.01" y2="8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></symbol>
  <symbol id="ic-mail" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><polyline points="22 6 12 13 2 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></symbol>
</svg>`;

  const NAV_HTML = `
<nav class="navbar" id="navbar">
  <div class="nav-container">
    <a href="index.html" class="nav-logo">
      <img src="msbos-square-logo.png" alt="ManSula BOS Logo" width="32" height="32" style="border-radius:6px; object-fit:cover;" />
      <span class="logo-text">ManSula <span class="logo-accent">BOS</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="index.html"    data-page="index.html">Home</a></li>
      <li><a href="features.html" data-page="features.html">Features</a></li>
      <li><a href="roadmap.html"  data-page="roadmap.html">Roadmap</a></li>
      <li><a href="about.html"    data-page="about.html">About</a></li>
    </ul>
    <div class="nav-actions">
      <a href="about.html" class="btn-nav-ghost">Our Story</a>
      <a href="index.html#cta" class="btn-nav-primary">Get Started Free</a>
    </div>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle navigation menu">
      <svg width="22" height="22" id="mMenuOpen"><use href="#ic-menu"/></svg>
      <svg width="22" height="22" id="mMenuClose" style="display:none"><use href="#ic-close"/></svg>
    </button>
  </div>
  <div class="mobile-menu" id="mobileMenu">
    <a href="index.html">Home</a>
    <a href="features.html">Features &amp; Modules</a>
    <a href="roadmap.html">Roadmap</a>
    <a href="about.html">About Us</a>
    <div class="mmenu-divider"></div>
    <a href="privacy.html" class="mmenu-legal">Privacy Policy</a>
    <a href="terms.html" class="mmenu-legal">Terms &amp; Conditions</a>
    <a href="index.html#cta" class="btn-nav-primary mmenu-cta">Get Started Free</a>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo footer-logo-link">
          <img src="msbos-square-logo.png" alt="ManSula BOS Logo" width="30" height="30" style="border-radius:6px; object-fit:cover;" />
          <span class="logo-text" style="color:rgba(255,255,255,.82)">ManSula <span style="color:#818CF8">BOS</span></span><br><span style="font-size:0.75rem;color:rgba(255,255,255,.45);margin-left:38px;display:block;margin-top:-4px">(Formerly ManSula Nexus)</span>
        </a>
        <p class="footer-tagline">The all-in-one <strong>Business Operating System</strong> for cafes, retail shops &amp; SMEs.<br/>Your Business. Your Device. Your Data.</p>
        <div class="footer-pills">
          <span>Offline POS Software</span>
          <span>Privacy First</span>
          <span>Zero Monthly Fees</span>
        </div>
      </div>
      <div class="footer-links-grid">
        <div class="footer-col">
          <h4>Features</h4>
          <a href="features.html#pos">POS Software</a>
          <a href="features.html#analytics">Business Analytics</a>
          <a href="features.html#udhaar">Udhaar / Khata</a>
          <a href="features.html#inventory">Inventory Tracking</a>
          <a href="features.html#crm">Customer Management</a>
          <a href="features.html#backup">Backup System</a>
        </div>
        <div class="footer-col">
          <h4>Company</h4>
          <a href="about.html">About ManSula</a>
          <a href="about.html#story">Origin Story</a>
          <a href="about.html#mission">Our Mission</a>
          <a href="roadmap.html">Product Roadmap</a>
          <a href="index.html#cta">Get Started</a>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <a href="privacy.html">Privacy Policy</a>
          <a href="terms.html">Terms &amp; Conditions</a>
          <a href="terms.html#disclaimer">Disclaimer</a>
          <a href="terms.html#refund">Refund Policy</a>
          <a href="privacy.html#cookies">Cookie Policy</a>
          <a href="terms.html#ip">Intellectual Property</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span style="display:block;margin-bottom:6px"><strong>Help &amp; Support:</strong> <a href="mailto:mansula.rwt@gmail.com" style="color:var(--primary);text-decoration:none">mansula.rwt@gmail.com</a> <span class="fdot">&middot;</span> <a href="tel:+919818013446" style="color:var(--t2);text-decoration:none">+91 9818013446</a> <span class="fdot">&middot;</span> <a href="tel:+918851947954" style="color:var(--t2);text-decoration:none">+91 8851947954</a></span>
      <span style="display:block;margin-bottom:12px;color:rgba(255,255,255,.45);font-size:.7rem">Ownership of this application is of ManSula DivLabs, ManSula Technologies &amp; ManSula</span>
      <span>&copy; 2024–${new Date().getFullYear()} ManSula DivLabs. All rights reserved.</span>
      <span class="footer-legal-links">
        <a href="privacy.html">Privacy</a><span class="fdot">&middot;</span>
        <a href="terms.html">Terms</a><span class="fdot">&middot;</span>
        <a href="terms.html#disclaimer">Disclaimer</a>
      </span>
      <span>ManSula BOS — Business Operating System v1.0</span>
    </div>
  </div>
</footer>`;

  document.addEventListener('DOMContentLoaded', function () {
    // Inject icons
    const iconDiv = document.createElement('div');
    iconDiv.innerHTML = ICONS;
    document.body.insertBefore(iconDiv.firstElementChild, document.body.firstChild);

    // Inject nav
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    }

    // Inject footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    }

    // Set active nav link
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
      if (link.dataset.page === path) link.classList.add('nav-active');
    });

    // Navbar scroll behavior
    const navbar = document.getElementById('navbar');
    if (navbar) {
      // Inner pages always show scrolled navbar
      if (path !== 'index.html' && path !== '') {
        navbar.classList.add('scrolled');
      }
      window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
      }, { passive: true });
    }

    // Mobile menu toggle
    const btn  = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    const iconOpen  = document.getElementById('mMenuOpen');
    const iconClose = document.getElementById('mMenuClose');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const open = menu.classList.toggle('open');
        if (iconOpen)  iconOpen.style.display  = open ? 'none'  : 'block';
        if (iconClose) iconClose.style.display = open ? 'block' : 'none';
      });
      menu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          menu.classList.remove('open');
          if (iconOpen)  iconOpen.style.display  = 'block';
          if (iconClose) iconClose.style.display = 'none';
        });
      });
    }

    // Fade-up animation observer (shared across all pages)
    const fadeEls = document.querySelectorAll('[data-fade]');
    if (fadeEls.length) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            const d = +e.target.dataset.fadeDelay || 0;
            setTimeout(() => e.target.classList.add('in'), d);
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.08, rootMargin: '0px 0px -28px 0px' });
      fadeEls.forEach(el => {
        el.classList.add('fade-up');
        obs.observe(el);
      });
    }
  });
})();
