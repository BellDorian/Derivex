# Derivex

This is a digital scientific calculator. I grow tired of wishing fo my physical one when it's nowhere to be found.

## Major Stack Update -- 2025 June 10

I've been going back and forth with myself about the stack for this project since its inception.
I want the polish of TS on the frontend and the performance of C++ on the backend. Therefore, I have
officially made the decision to adjust the stack of the project to be just that:
C++ core + WebAssembly bridge + TS frontend + Vue.

I recognize that this stack update just multiplied the workload I have in front of me for my MVP, but I'm a big proponent of at least making an attempt to use well-suited tools for a job.

Like I don't use my power drill when I assemble furniture despite its use for other things, I think TypeScript can be saved for another backend on different type of project. My C++ Phillips screwdriver should work well here, even though it'll take some extra elbow grease.

## State of Development

I will eventually put together a nice UI for this. For now, I am focused on the low level stuff. For this one, I'm handwriting a shift-reduce parser, lexer, and grammar to govern the calculator. I might do this in a couple phases by starting with with a console app (for ease of debugging) and then altering it to be a little client-side app like I'm imagining. -- DBJ

## Dev's Inspiration & Musings

This project is a real challenge for me. I’ve long been fascinated by programming languages and compilers, but I’ve never built a parser from scratch — nor have I directly applied automata theory to anything outside of coursework … until now 😅.

Lexing and parsing loosely structured user input is turning out to be rough, and I’ll admit: I’m nervous about keeping this repository public while I work. It’s not easy to push past the fear of being judged while still figuring things out. But that’s part of why I’m doing this — to grow, take risks, and learn deeply.

At its core, this project is driven by love. I love my physical scientific calculator, and the idea of building my own extensible, digital version for the PC really excites me. Even if the final product doesn’t match my vision, I’m confident that the process itself will be valuable.
Thanks for stopping by. -- DBJ
