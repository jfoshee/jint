// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Cham`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00AA00, 0x00AA36],
    [0x00AA40, 0x00AA4D],
    [0x00AA50, 0x00AA59],
    [0x00AA5C, 0x00AA5F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Cham}+$/u,
  matchSymbols,
  "\\p{Script=Cham}"
);
testPropertyEscapes(
  /^\p{Script=Cham}+$/u,
  matchSymbols,
  "\\p{Script=Cham}"
);
testPropertyEscapes(
  /^\p{sc=Cham}+$/u,
  matchSymbols,
  "\\p{sc=Cham}"
);
testPropertyEscapes(
  /^\p{sc=Cham}+$/u,
  matchSymbols,
  "\\p{sc=Cham}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00A9FF],
    [0x00AA37, 0x00AA3F],
    [0x00AA4E, 0x00AA4F],
    [0x00AA5A, 0x00AA5B],
    [0x00AA60, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Cham}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cham}"
);
testPropertyEscapes(
  /^\P{Script=Cham}+$/u,
  nonMatchSymbols,
  "\\P{Script=Cham}"
);
testPropertyEscapes(
  /^\P{sc=Cham}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cham}"
);
testPropertyEscapes(
  /^\P{sc=Cham}+$/u,
  nonMatchSymbols,
  "\\P{sc=Cham}"
);