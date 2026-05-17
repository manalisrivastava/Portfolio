"use client";

export default function HeroCharacter() {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", color: "var(--color-accent)" }}
      aria-label="Illustrated character"
      role="img"
    >
      {/* Hair — solid fill, drawn first so face overlaps it */}
      <path
        d="M115,162 C105,118 110,68 148,46 C166,36 186,32 208,34 C244,38 270,64 272,104 C275,128 269,158 265,170 C260,148 252,128 238,112 C222,96 202,90 186,93 C168,96 152,107 140,124 C128,140 120,156 115,162 Z"
        fill="currentColor"
        opacity="0.88"
      />
      <path
        d="M115,162 C108,184 108,208 112,224"
        stroke="currentColor" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.68"
      />
      <path
        d="M265,170 C272,190 272,212 268,228"
        stroke="currentColor" strokeWidth="22" strokeLinecap="round" fill="none" opacity="0.68"
      />

      {/* Head */}
      <path
        d="M115,162 C112,114 128,68 165,50 C180,44 195,42 212,44 C245,50 268,76 270,118 C272,152 260,182 240,200 C226,212 210,220 195,222 C178,224 160,220 146,210 C128,198 118,182 115,162 Z"
        stroke="currentColor" strokeWidth="2.5"
        fill="currentColor" fillOpacity="0.06"
      />

      {/* Ears */}
      <path
        d="M115,162 C104,162 99,172 102,182 C104,188 110,192 115,190"
        stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.06"
      />
      <path
        d="M270,162 C281,162 286,172 283,182 C281,188 275,192 270,190"
        stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.06"
      />

      {/* Face — minimal, editorial */}
      <path d="M153,153 C159,149 170,149 175,152" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <path d="M215,152 C220,149 231,149 237,153" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="194" cy="172" r="2" fill="currentColor"/>
      <path d="M180,194 C188,204 205,205 217,195" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Cheek blush */}
      <circle cx="152" cy="178" r="11" fill="currentColor" opacity="0.07"/>
      <circle cx="238" cy="178" r="11" fill="currentColor" opacity="0.07"/>

      {/* Neck */}
      <rect x="182" y="222" width="26" height="22" rx="4"
        stroke="currentColor" strokeWidth="2"
        fill="currentColor" fillOpacity="0.06"
      />

      {/* Body */}
      <path
        d="M150,244 C136,250 118,270 116,298 C114,320 118,342 122,358 L268,358 C272,342 276,320 274,298 C272,270 254,250 240,244 L215,238 C207,250 183,250 175,238 Z"
        stroke="currentColor" strokeWidth="2.5"
        fill="currentColor" fillOpacity="0.09"
      />
      <path d="M175,238 C183,252 207,252 215,238" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      {/* Subtle horizontal fold lines on body */}
      <path d="M125,298 C160,294 230,294 265,298" stroke="currentColor" strokeWidth="1" opacity="0.18" strokeLinecap="round"/>

      {/* Left arm (holding coffee) */}
      <path
        d="M148,258 C134,274 120,294 108,316 C100,330 97,346 100,358"
        stroke="currentColor" strokeWidth="14" strokeLinecap="round" fill="none"
        opacity="0.12"
      />
      <path
        d="M148,258 C134,274 120,294 108,316 C100,330 97,346 100,358"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />

      {/* Right arm (resting) */}
      <path
        d="M242,258 C256,274 270,296 274,320 C277,336 274,350 270,358"
        stroke="currentColor" strokeWidth="14" strokeLinecap="round" fill="none"
        opacity="0.12"
      />
      <path
        d="M242,258 C256,274 270,296 274,320 C277,336 274,350 270,358"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"
      />

      {/* Coffee cup */}
      <path
        d="M76,356 L76,402 C76,406 79,408 83,408 L124,408 C128,408 131,406 131,402 L131,356 Z"
        stroke="currentColor" strokeWidth="2.5"
        fill="currentColor" fillOpacity="0.1"
      />
      <ellipse cx="103.5" cy="356" rx="27.5" ry="5.5"
        stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15"
      />
      {/* Cup handle */}
      <path d="M131,370 C150,370 150,396 131,396" stroke="currentColor" strokeWidth="2.5" fill="none"/>
      {/* Liquid line inside */}
      <path d="M79,378 L128,378" stroke="currentColor" strokeWidth="1" opacity="0.25"/>
      {/* Steam */}
      <path d="M90,350 C92,339 89,326 91,315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <path d="M103,348 C105,337 102,322 104,310" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>
      <path d="M116,350 C118,339 115,326 117,315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.48"/>

      {/* Cross-legged sitting */}
      <path
        d="M122,358 C116,374 114,398 120,418 C126,434 150,442 178,444 C186,445 194,445 200,445 C206,445 214,445 222,444 C250,442 274,434 280,418 C286,398 284,374 278,358 Z"
        stroke="currentColor" strokeWidth="2.5"
        fill="currentColor" fillOpacity="0.08"
      />
      {/* Center crease */}
      <path d="M200,362 C200,392 200,422 200,444" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
      {/* Cross — left leg over right */}
      <path d="M200,392 C184,383 162,384 148,392" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Left foot */}
      <ellipse cx="138" cy="435" rx="25" ry="9.5"
        stroke="currentColor" strokeWidth="2"
        fill="currentColor" fillOpacity="0.12"
        transform="rotate(-8,138,435)"
      />
      {/* Right foot */}
      <ellipse cx="263" cy="435" rx="25" ry="9.5"
        stroke="currentColor" strokeWidth="2"
        fill="currentColor" fillOpacity="0.12"
        transform="rotate(8,263,435)"
      />

      {/* Decorative elements — Muradov editorial style */}
      {/* Asterisk top-right */}
      <path d="M356,66 L356,54 M350,60 L362,60 M352,56 L360,64 M360,56 L352,64"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.44"
      />
      {/* Dot cluster top-right */}
      <circle cx="372" cy="44" r="2.5" fill="currentColor" opacity="0.28"/>
      <circle cx="380" cy="62" r="1.8" fill="currentColor" opacity="0.2"/>
      <circle cx="366" cy="80" r="2" fill="currentColor" opacity="0.18"/>
      {/* Left side dots */}
      <circle cx="42" cy="198" r="4" fill="currentColor" opacity="0.26"/>
      <circle cx="34" cy="218" r="2.5" fill="currentColor" opacity="0.18"/>
      <circle cx="48" cy="234" r="3" fill="currentColor" opacity="0.22"/>
      {/* Right side marks */}
      <circle cx="364" cy="188" r="3" fill="currentColor" opacity="0.24"/>
      <circle cx="372" cy="208" r="2" fill="currentColor" opacity="0.17"/>
      {/* Squiggle bottom-left */}
      <path d="M38,370 C42,362 46,378 50,370 C54,362 58,378 62,370"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.28"
      />
      {/* Plus bottom-right */}
      <path d="M370,292 L370,280 M364,286 L376,286"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.36"
      />
      {/* Diamond left */}
      <path d="M42,308 L50,299 L58,308 L50,317 Z"
        stroke="currentColor" strokeWidth="1.5" opacity="0.27" fill="none"
      />
      {/* Small circle outline right */}
      <circle cx="368" cy="344" r="9" stroke="currentColor" strokeWidth="1.5" opacity="0.22"/>
    </svg>
  );
}
