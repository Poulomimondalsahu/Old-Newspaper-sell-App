@echo off
echo ===== FIXING DEPENDENCIES =====
echo.

echo Step 1: Creating logs directory...
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Installing missing dependencies...
echo Installing react-dev-utils...
call npm install react-dev-utils --save-dev > logs\react-dev-utils-install.log 2>&1
echo Done!
echo.

echo Step 3: Verifying node_modules structure...
if exist node_modules\react-dev-utils (
    echo react-dev-utils found
) else (
    echo react-dev-utils NOT found - installation may have failed
    type logs\react-dev-utils-install.log
)
echo.

echo ===== FIX COMPLETE =====
echo.
echo Now try building with:
echo direct-build.bat
echo.
echo Press any key to exit...
pause > nul