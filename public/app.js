let global = this;
// src/app.ts
function main() {
}
"use strict";
(() => {
  // src/functions.ts
  var main = () => {
    console.info("Hello, world!");
  };

  // src/app.ts
  global.main = main;
})();
