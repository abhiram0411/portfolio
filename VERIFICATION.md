# Portfolio polish — verification and security notes

Changes are confined to this isolated copy. The original brain scene is byte-for-byte preserved. Existing dependencies are reused through a local node_modules junction; for a standalone copy run npm ci.

## Threat model
This public portfolio has static profile content and outbound contact links. It has no authentication, database, upload endpoint, or privileged API. Primary risks are compromised dependencies, unsafe outbound URLs, script injection introduced by future dynamic content, and resource exhaustion from WebGL. Never add credentials to client code. Server authorization and input validation become mandatory if private data or APIs are added.

## Controls
Security response headers disable framing and unnecessary device permissions, prevent content sniffing, and constrain referrer disclosure. No telemetry, paid service, or new backend was added. System fonts avoid an external font request. Keep the deployment behind HTTPS.

## Validation and limits
TypeScript check passed after the primary changes. Brain source hashes match. Browser preview was blocked by local connection restrictions; desktop/mobile appearance and keyboard behavior still require visual verification. The existing brain motion is intentionally preserved, so reduced-motion behavior applies to the new DOM effects, not the 3D scene. The installation audit previously reported 16 vulnerabilities; dependency remediation and a full secret scan remain outstanding. No claim of a completed security audit is made. GSAP/Lenis/React Bits license terms need review before redistribution beyond this private local project.

## Preview
Run npm run dev -- --webpack --port 3001 from this folder. Open http://localhost:3001. Production validation uses npm run build -- --webpack.

Final production build: PASS with webpack, including TypeScript and all six static pages.
