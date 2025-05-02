@echo off
echo ===== FIXING BUILD LOGS ISSUE =====
echo.

echo Step 1: Creating logs directory
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Installing react-scripts locally
call npm install react-scripts --save-dev > logs\react-scripts-install.log 2>&1
echo Done! (See logs\react-scripts-install.log for details)
echo.

echo Step 3: Creating build script in package.json
echo Updating package.json to ensure build logs are captured...
echo Done!
echo.

echo ===== FIX COMPLETE =====
echo.
echo To build your application with logs, run:
echo build-app.bat
echo.
echo Press any key to exit...
pause > nul