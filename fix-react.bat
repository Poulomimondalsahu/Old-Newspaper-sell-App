@echo off
echo ===== FIXING REACT APPLICATION =====
echo.

echo Step 1: Creating logs directory
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Removing node_modules folder and package-lock.json
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Done!
echo.

echo Step 3: Clearing npm cache
call npm cache clean --force
echo Done!
echo.

echo Step 4: Installing React Scripts globally
call npm install -g react-scripts
echo Done!
echo.

echo Step 5: Reinstalling dependencies with detailed logs
call npm install --verbose --force > logs\npm-install.log 2>&1
echo Done! (See logs\npm-install.log for details)
echo.

echo Step 6: Updating Browserslist database
call npx browserslist@latest --update-db > logs\browserslist-update.log 2>&1
echo Done! (See logs\browserslist-update.log for details)
echo.

echo Step 7: Verifying react-scripts installation
call where react-scripts
if %ERRORLEVEL% NEQ 0 (
    echo WARNING: react-scripts not found in PATH
    echo Installing react-scripts locally...
    call npm install react-scripts --save-dev > logs\react-scripts-install.log 2>&1
)
echo Done!
echo.

echo ===== FIX COMPLETE =====
echo.
echo Now try building the application with:
echo npm run build > logs\build.log 2>&1
echo.
echo Or running the application with:
echo npm start
echo.
echo If that doesn't work, try:
echo npx react-scripts start
echo.
echo All logs are saved in the logs directory
echo.
echo Press any key to exit...
pause > nul