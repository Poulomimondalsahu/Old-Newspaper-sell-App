@echo off
echo ===== SIMPLE BUILD SCRIPT =====
echo.

echo Creating logs directory...
if not exist logs mkdir logs
echo.

echo Checking for react-scripts in node_modules...
if exist node_modules\react-scripts (
    echo react-scripts found in node_modules
) else (
    echo react-scripts NOT found in node_modules
)
echo.

echo Checking for react-scripts in PATH...
where react-scripts
if %ERRORLEVEL% EQU 0 (
    echo react-scripts found in PATH
) else (
    echo react-scripts NOT found in PATH
)
echo.

echo Attempting to build using npx...
npx react-scripts build
echo.

echo ===== BUILD ATTEMPT COMPLETE =====
echo.
echo Press any key to exit...
pause > nul