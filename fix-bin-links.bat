@echo off
echo ===== FIXING BIN LINKS =====
echo.

echo Step 1: Creating logs directory...
if not exist logs mkdir logs
echo Done!
echo.

echo Step 2: Creating react-scripts link in .bin directory...
if not exist node_modules\.bin mkdir node_modules\.bin
echo @echo off > node_modules\.bin\react-scripts.cmd
echo node "%~dp0\..\react-scripts\bin\react-scripts.js" %* >> node_modules\.bin\react-scripts.cmd
echo Done!
echo.

echo Step 3: Verifying react-scripts.js exists...
if exist node_modules\react-scripts\bin\react-scripts.js (
    echo react-scripts.js found
) else (
    echo react-scripts.js NOT found
    echo Checking for alternative locations...
    dir /s /b node_modules\react-scripts\*.js
)
echo.

echo Step 4: Creating direct build script...
echo @echo off > direct-build.bat
echo echo ===== DIRECT BUILD SCRIPT ===== >> direct-build.bat
echo echo. >> direct-build.bat
echo echo Creating logs directory... >> direct-build.bat
echo if not exist logs mkdir logs >> direct-build.bat
echo echo. >> direct-build.bat
echo echo Building with direct path to build.js... >> direct-build.bat
echo node node_modules\react-scripts\scripts\build.js ^> logs\direct-build.log 2^>^&1 >> direct-build.bat
echo if %%ERRORLEVEL%% NEQ 0 ( >> direct-build.bat
echo     echo Build failed! See logs\direct-build.log for details >> direct-build.bat
echo     type logs\direct-build.log >> direct-build.bat
echo ) else ( >> direct-build.bat
echo     echo Build succeeded! See logs\direct-build.log for details >> direct-build.bat
echo ) >> direct-build.bat
echo echo. >> direct-build.bat
echo echo ===== BUILD COMPLETE ===== >> direct-build.bat
echo echo. >> direct-build.bat
echo pause >> direct-build.bat
echo Done!
echo.

echo ===== FIX COMPLETE =====
echo.
echo Now try building with:
echo direct-build.bat
echo.
echo Press any key to exit...
pause > nul