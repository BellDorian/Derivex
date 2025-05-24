# Derivex

This is a digital scientific calculator. I grow tired of wishing fo my physical one when it's nowhere to be found.

The anticipated stack for this project is TS + React + Vite.

# State of Development

I will eventually put together a nice UI for this. For now, I am focused on the low level stuff. For this one, I'm handwriting a shift-reduce parser, lexer, and grammar to govern the calculator. I might do this in a couple phases by starting with with a console app (for ease of debugging) and then altering it to be a little client-side app like I'm imagining. -- DBJ

# Structure

project-root/
├── core/ # Backend/logic code (parser, tokenizer, etc.)
│ ├── src/
│ │ ├── tokenizer.ts
│ │ ├── parser.ts
│ │ ├── evaluator.ts
│ │ └── index.ts # Entry point for logic testing
│ └── tsconfig.json # TS config for logic only
│
├── ui/ # Frontend UI (React + Vite)
│ ├── src/
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── components/
│ ├── index.html
│ ├── tsconfig.json
│ └── vite.config.ts
│
├── package.json # Shared here for a monorepo setup
└── .gitignore
