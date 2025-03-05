#!/usr/bin/env node
// CommonJS wrapper for ES module
import('file:///Users/giuraandrei/devrel/mx-mcps/dist/index.js')
  .catch(err => {
    console.error('Error loading module:', err);
    process.exit(1);
  });
