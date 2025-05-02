@echo off 
echo ===== DIRECT BUILD SCRIPT ===== 
echo. 
echo Creating logs directory... 
if not exist logs mkdir logs 
echo. 
echo Building with direct path to build.js... 
node node_modules\react-scripts\scripts\build.js > logs\direct-build.log 2>&1 
if %ERRORLEVEL% NEQ 0 ( 
    echo Build failed! See logs\direct-build.log for details 
    type logs\direct-build.log 
) else ( 
    echo Build succeeded! See logs\direct-build.log for details 
) 
echo. 
echo ===== BUILD COMPLETE ===== 
echo. 
pause 
