@echo off
echo =================================
echo Starting Frontend Setup Script
echo ==================================

:: Checking if Node.js is installed
node -v >nul 2>&1
IF ERRORLEVEL 1 (
echo Error: Node.js is not installed. Please install Node.js and try again.
pause
exit /b
)

:: Installing dependencies (if missing)
IF NOT EXIST node_modules (
echo Installing dependencies...
call npm install
)

:: Starting the application
echo Starting the development server...
call npm run dev
pause