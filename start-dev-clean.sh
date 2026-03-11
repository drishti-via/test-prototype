#!/bin/bash
# Clean startup script for dev server

echo "Checking for existing Vite processes on port 5173..."

# Wait a moment for any supervisor checks to complete
sleep 2

# If port 5173 is already responding, don't start new instance
if curl -s -f http://127.0.0.1:5173/ > /dev/null 2>&1; then
  echo "Server already running on port 5173"
  echo "Current processes:"
  ps aux | grep "[n]ode.*vite" | head -5
  exit 0
fi

echo "No server responding, starting fresh..."
npx vite --host 0.0.0.0 --port 5173