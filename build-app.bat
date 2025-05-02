@echo off
echo ===== BUILDING REACT APPLICATION =====
echo.

echo Step 1: Ensuring logs directory exists
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Checking for react-scripts
call where react-scripts
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: react-scripts not found in PATH
    echo Installing react-scripts locally...
    call npm install react-scripts --save-dev > logs\react-scripts-install.log 2>&1
)
echo Done!
echo.

echo Step 3: Building application with detailed logs
echo Building... (This may take a few minutes)
call npm run build > logs\build.log 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! See logs\build.log for details
    echo Attempting alternative build method...
    call npx react-scripts build > logs\build-alt.log 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo Alternative build also failed! See logs\build-alt.log for details
    ) else (
        echo Alternative build succeeded! See logs\build-alt.log for details
    )
) else (
    echo Build succeeded! See logs\build.log for details
)
echo.

echo ===== BUILD PROCESS COMPLETE =====
echo.
echo All logs are saved in the logs directory
echo.
echo Press any key to exit...
pause > nul