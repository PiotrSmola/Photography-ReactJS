@echo off
setlocal

if "%APP_PORT%"=="" set APP_PORT=8080

echo =================================
echo Photography React - Docker setup
echo =================================

:: Checking if Docker is installed
docker -v >nul 2>&1
IF ERRORLEVEL 1 (
echo Error: Docker is not installed. Get it from https://docs.docker.com/get-docker/
pause
exit /b 1
)

:: Checking if Docker is running
docker info >nul 2>&1
IF ERRORLEVEL 1 (
echo Error: Docker is not running. Start Docker Desktop and try again.
pause
exit /b 1
)

:: Checking for Docker Compose v2
docker compose version >nul 2>&1
IF ERRORLEVEL 1 (
echo Error: Docker Compose v2 is missing. Update Docker Desktop.
pause
exit /b 1
)

cd /d "%~dp0"

IF /I "%1"=="stop" (
echo Stopping the app...
docker compose down
exit /b 0
)

IF /I "%1"=="logs" (
docker compose logs -f
exit /b 0
)

:: Building the image and starting the container
echo Building the image and starting the container...
docker compose up -d --build
IF ERRORLEVEL 1 (
echo Error: Failed to start the container.
pause
exit /b 1
)

echo.
echo The app is running at http://localhost:%APP_PORT%
echo   Logs: docker-start.bat logs
echo   Stop: docker-start.bat stop
pause
