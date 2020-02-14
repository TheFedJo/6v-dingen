cls
@echo off
color 0a
H:
cd ../../../..
cd desktop
set /P user_input=Do you want to hack the mainframe?[Y/N]
echo Engaging...
timeout /t 2 /nobreak >NUL
echo Loading files...
timeout /t 2 /nobreak >NUL
echo 27%%
timeout /t 1 /nobreak >NUL
echo 53%%
timeout /t 1 /nobreak >NUL
echo 69%%
timeout /t 1 /nobreak >NUL
echo 83%%
timeout /t 1 /nobreak >NUL
echo 100%%
timeout /t 1 /nobreak >NUL
echo Ready...
timeout /t 1 /nobreak >NUL
set /P user_input1=Are you sure you want to continue?[Y/N]
echo.
set num=0
:randomloop
echo %random%%num%%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%
set /a "num+=1"
if %num% geq 1000 goto endrandomloop
goto randomloop
:endrandomloop
echo Mainframe has granted permission to enter
timeout /t 1 /nobreak >NUL
echo Booting the mainframe...
start Mainframe.bat
echo Shutting off...
timeout /t 5 /nobreak >NUL
exit
