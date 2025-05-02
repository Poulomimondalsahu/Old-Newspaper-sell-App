@echo off
echo ===== BUILD DIAGNOSIS SCRIPT =====
echo.

echo Step 1: Creating logs directory...
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Checking node and npm versions...
node --version
npm --version
echo.

echo Step 3: Checking for react-scripts...
if exist node_modules\react-scripts (
    echo react-scripts directory found
    dir node_modules\react-scripts\bin
    dir node_modules\react-scripts\scripts
) else (
    echo react-scripts directory NOT found
)
echo.

echo Step 4: Checking for .bin directory...
if exist node_modules\.bin (
    echo .bin directory found
    dir node_modules\.bin
) else (
    echo .bin directory NOT found
)
echo.

echo Step 5: Checking for build script in package.json...
findstr "build" package.json
echo.

echo Step 6: Attempting direct build with node...
echo This may take a moment...
node node_modules\react-scripts\scripts\build.js
echo.

echo ===== DIAGNOSIS COMPLETE =====
echo.
echo Press any key to exit...
pause > nul