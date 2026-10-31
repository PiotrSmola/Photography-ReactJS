#!/bin/bash
set -e

PORT="${APP_PORT:-8080}"

echo "🐳 Photography React - Docker setup"

if ! command -v docker >/dev/null 2>&1; then
  echo "❌ Docker is not installed. Get it from https://docs.docker.com/get-docker/"
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "❌ Docker is not running. Start Docker Desktop (or the Docker daemon) and try again."
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "❌ Docker Compose v2 is missing. Update Docker to a recent version."
  exit 1
fi

cd "$(dirname "$0")"

case "$1" in
  stop)
    echo "🛑 Stopping the app..."
    docker compose down
    exit 0
    ;;
  logs)
    docker compose logs -f
    exit 0
    ;;
esac

echo "📦 Building the image and starting the container..."
APP_PORT="$PORT" docker compose up -d --build

echo "✅ The app is running at http://localhost:$PORT"
echo "   Logs: ./docker-start.sh logs"
echo "   Stop: ./docker-start.sh stop"
