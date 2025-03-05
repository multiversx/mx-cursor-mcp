#!/usr/bin/env node
// CommonJS wrapper for ES module
const { spawn } = require('child_process');
const path = require('path');

// Get the path to the index.js file
const indexPath = path.join(__dirname, 'index.js');

// Spawn a new Node.js process with the --experimental-modules flag
const child = spawn(process.execPath, ['--input-type=module', indexPath], {
  stdio: 'inherit',
  env: process.env
});

// Handle process events
child.on('error', (err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

child.on('exit', (code, signal) => {
  if (code !== 0) {
    console.error(`Server exited with code ${code} and signal ${signal}`);
    process.exit(code || 1);
  }
});

// Forward signals to the child process
['SIGINT', 'SIGTERM', 'SIGQUIT'].forEach(signal => {
  process.on(signal, () => {
    child.kill(signal);
  });
});
