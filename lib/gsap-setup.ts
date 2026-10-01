// lib/gsap-setup.ts
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// useGSAP is a hook, not a plugin — no registerPlugin call needed.
// When you add ScrollTrigger later:
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, useGSAP };