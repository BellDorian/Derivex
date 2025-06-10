/*
	Updated:	2025 June 09

	Content Summary:
	All items related to the crude grouping of symbols as pre-processing
	before input is passed on for full tokenization. These functions work toward the
	goal of providing helpful metadata hints for the lexer to use, in order to make
	tokenization smoother.  
*/

// I haven't decided yet if it will be appropriate to include the apostrophe here or just let it get sent to unk
export const operator_symbols: string[] = [
  "=",
  "+",
  "-",
  "/",
  "*",
  "%",
  "^",
  "!",
  ">",
  "<",
  "√",
];

export type CrudeTypeGuess = "Num" | "Txt" | "Op" | "Unk";

export type CrudelyGroupedSymbol = {
  value: string;
  fromIndex: number;
  typeGuess?: CrudeTypeGuess;
  toIndex?: number;
};

function IsLetter(char: string, isSingleChar: boolean) {
  const ascii = char.charCodeAt(0);
  return (ascii > 64 && ascii < 91) || (ascii > 96 && ascii < 173);
}

function IsNumericChar(char: string, isSingleChar: boolean) {
  // Digits range from 48-47 inclusive. A decimal point is 46.
  // This function may be extended in the future to support commas as numeric.

  const ascii = char.charCodeAt(0);
  return ascii > 47 && ascii < 58 ? true : ascii === 46;
}

function GuessCrudeType(
  char: string,
  isSingleChar: boolean = false
): CrudeTypeGuess {
  /*  Return early if the given "char" is not a single char.
       It's the client's responsibility to tell the truth if they assert that char is a single char
       An untrue assertion will result in bugs. Thus, this method is NOT exported as it is intended for
       controlled use within this particular module
	*/
  if (!isSingleChar) {
    if (char.length === 1) {
      return "Unk";
    }
  }

  // Now we actually classify the input
  if (IsNumericChar(char, true)) {
    return "Num";
  } else if (IsLetter(char, true)) {
    return "Txt";
  } else if (operator_symbols.includes(char)) {
    return "Op";
  } else {
    return "Unk";
  }
}

/*
    Our goal here is to take the entire raw user input string and break it into
    crudely grouped symbols. It's crude because it's not going to result in
    perfect tokenization. Instead, we are gonna break the input into instances
    of 4 major crude types: Num (digits and decimal point), Txt (letters),
    Op (symbols found in the Op symbol table), and Unk (unknown symbols).
*/
function MakeCrudeGroups(raw: String): CrudelyGroupedSymbol[] {
  let allGroups: CrudelyGroupedSymbol[] = [];
  let group: CrudelyGroupedSymbol = {
    value: "",
    fromIndex: 0,
    typeGuess: undefined,
    toIndex: undefined,
  };

  for (let i = 0; i < raw.length; i++) {
    const char = raw[i];
    const guess = GuessCrudeType(char, true);

    // No group has been started yet. This block will only occur once (i = 0).
    if (group.typeGuess === undefined) {
      group = {
        value: char,
        fromIndex: i,
        typeGuess: guess,
        toIndex: undefined,
      };
    }

    // There is an ongoing group which the current symbol fits into
    else if (group.typeGuess === guess) {
      group.value += char;
    }

    // The old group was of different guess-type than this symbol
    // So now we end that group and begin a new one for this symbol.
    else {
      // The previous symbol was the last thing to fit into that group.
      // Also, I'll need to push a DEEP COPY to allGroups!
      group.toIndex = i - 1;
      allGroups.push(structuredClone(group));

      // Now don't forget to update group with the new data
      group = {
        value: char,
        fromIndex: i,
        typeGuess: guess,
        toIndex: undefined,
      };
    }
  }
  // Make sure to update the final group's toIndex value!
  group.toIndex = raw.length - 1;
  allGroups.push(structuredClone(group));
  return allGroups;
}
