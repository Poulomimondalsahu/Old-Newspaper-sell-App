@echo off
echo ===== DEPLOYMENT SCRIPT WITH DETAILED LOGS =====
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
    call npm install react-scripts --save-dev > logs\react-scripts-install.log 2>&1
    if %ERRORLEVEL% NEQ 0 (
        echo Failed to install react-scripts! See logs\react-scripts-install.log for details
        type logs\react-scripts-install.log
        goto :error
    )
)
echo Done!
echo.

echo Step 3: Checking npm and node versions...
call node --version > logs\node-version.log 2>&1
call npm --version >> logs\node-version.log 2>&1
echo Versions logged to logs\node-version.log
echo.

echo Step 4: Verifying package.json...
if exist package.json (
    echo package.json found
    type package.json > logs\package-json.log
) else (
    echo ERROR: package.json not found!
    goto :error
)
echo Done!
echo.

echo Step 5: Building application with verbose logs...
echo Building... (This may take a few minutes)
echo y | npx --verbose react-scripts build > logs\build-verbose.log 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Build failed! See logs\build-verbose.log for details
    echo Trying direct node_modules path...
    
    if exist node_modules\react-scripts\bin\react-scripts.js (
        echo Found react-scripts.js, attempting to run directly...
        call node node_modules\react-scripts\bin\react-scripts.js build > logs\build-direct.log 2>&1
    ) else if exist node_modules\.bin\react-scripts.cmd (
        echo Found react-scripts.cmd, attempting to run directly...
        call node_modules\.bin\react-scripts.cmd build > logs\build-direct.log 2>&1
    ) else (
        echo Trying alternative build method...
        call node node_modules\react-scripts\scripts\build.js > logs\build-alt.log 2>&1
    )
    
    if %ERRORLEVEL% NEQ 0 (
        echo All build methods failed!
        echo.
        echo === BUILD VERBOSE LOG ===
        type logs\build-verbose.log
        echo.
        if exist logs\build-direct.log (
            echo === DIRECT BUILD LOG ===
            type logs\build-direct.log
        )
        if exist logs\build-alt.log (
            echo === ALTERNATIVE BUILD LOG ===
            type logs\build-alt.log
        )
        goto :error
    ) else (
        echo Alternative build succeeded!
    )
) else (
    echo Build succeeded! See logs\build-verbose.log for details
)
echo.

echo Step 6: Checking build output...
if exist build (
    echo Build directory exists - build was successful
    dir build > logs\build-dir.log
    type logs\build-dir.log
) else (
    echo Build directory does not exist - build has failed
    goto :error
)
echo Done!
echo.

echo ===== DEPLOYMENT PROCESS COMPLETE =====
echo.
echo All logs are saved in the logs directory
echo.
goto :end

:error
echo ===== DEPLOYMENT FAILED =====
echo Please check the logs directory for details on the error
echo.

:end
echo Press any key to exit...
pause > nul