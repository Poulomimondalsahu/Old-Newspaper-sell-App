@echo off
echo ===== FIXING REACT APPLICATION =====
echo.
echo Step 1: Removing node_modules folder and package-lock.json
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json
echo Done!
echo.

echo Step 2: Installing React Scripts globally
call npm install -g react-scripts
echo Done!
echo.

echo Step 3: Reinstalling dependencies
call npm install --force
echo Done!
echo.

echo Step 4: Updating Browserslist database
call npx browserslist@latest --update-db
echo Done!
echo.

echo ===== FIX COMPLETE =====
echo.
echo Now try running the application with:
echo npm start
echo.
echo If that doesn't work, try:
echo npx react-scripts start
echo.
echo Press any key to exit...
pause > nul