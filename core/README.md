# Stage 1: LEXER

### Process Flow

1. Receive user input string upon submission.
2. GROUP chars by type into crude tokens. (Num vs Txt vs Operator vs Unk)
3. POSTPROCESS the groups by type.
4. TOKENIZE the groups fully -- eliminating all symbols not found in the program's language.

## Step 1 -- Receive User Input String

Goal: Obtain a raw string of input via either the CLI or GUI (future feature).
Files: - ui/src/userIO

## Step 2 -- Form Crude Groups

Goal: Group adjacent symbols from the raw input by type, creating crude tokens.
Files: - core/lexer/Grouping.ts

## Step 3 -- Postprocess Groups by Type

Goal: Apply domain-specific processing to crude groups to refine the groups better before final tokenization.
Files: - core/lexer/Postprocessing.ts

## Step 4 -- Tokenize Groups into Final Standardized Tokens

Goal: Obtain final standardized tokens for parsing and discard nonsense groups no longer needed.
Files: - core/lexer/Tokenizing.ts

### Proceed to Stage 2: PARSER
