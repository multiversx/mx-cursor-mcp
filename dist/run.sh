#!/bin/sh
NODE_OPTIONS="--experimental-modules" exec node "$(dirname "$0")/index.js" "$@"
