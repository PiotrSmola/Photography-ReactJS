#!/bin/bash

echo "🚀 Starting Vite React App..."

if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

echo "🔥 Running the app..."
npm run dev
