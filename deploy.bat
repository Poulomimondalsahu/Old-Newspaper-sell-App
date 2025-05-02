@echo off
echo ===== DEPLOYMENT SCRIPT WITH LOGS =====
echo.

echo Step 1: Creating logs directory...
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Checking for react-scripts in node_modules...
if exist node_modules\react-scripts (
    echo react-scripts found in node_modules
) else (
    echo react-scripts NOT found in node_modules
    echo Installing react-scripts locally...
    call npm install react-scripts --save-dev
)
echo.

echo Step 3: Building application with logs...
echo Building... (This may take a few minutes)
echo y | npx react-scripts build > logs\build.log 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! See logs\build.log for details
    echo Trying alternative build method...
    call node node_modules\react-scripts\scripts\build.js > logs\build-alt.log 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo Alternative build also failed! See logs\build-alt.log for details
        type logs\build.log
        echo.
        type logs\build-alt.log
    ) else (
        echo Alternative build succeeded! See logs\build-alt.log for details
    )
) else (
    echo Build succeeded! See logs\build.log for details
)
echo.

echo Step 4: Checking build output...
if exist build (
    echo Build directory exists - build was likely successful
    dir build
) else (
    echo Build directory does not exist - build may have failed
)
echo.

echo ===== DEPLOYMENT PROCESS COMPLETE =====
echo.
echo All logs are saved in the logs directory
echo.
echo Press any key to exit...
pause > nul