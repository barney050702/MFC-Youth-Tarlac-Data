@echo off
echo Deploying MFC Youth Tarlac Data Portal to Firebase...
echo.
call npx.cmd firebase-tools deploy --only hosting
echo.
echo Deployment finished!
pause
