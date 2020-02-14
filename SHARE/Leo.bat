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
echo cls > Mainframe.bat
echo ^@echo off >> Mainframe.bat
echo color 0a >> Mainframe.bat
echo echo You^'ve entered the mainframe >> Mainframe.bat
echo echo Please specify your next action >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo set ^/P user^_input^=Do yuo want to hack the mainframe?^[Y^/N^] ^>NUL >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo Loading^.^.^. >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo 34%%%% >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo 69%%%% >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo 98%%%% >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo 100%%%% >> Mainframe.bat
echo echo^. >> Mainframe.bat
echo echo^. >> Mainframe.bat
echo echo^. >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo The current session has been aborted^. An unknown entity has denied access to the mainframe^. Please contact an administrator if this should not be happening^. >> Mainframe.bat
echo echo Press any key to continue^.^.^. >> Mainframe.bat
echo pause ^>NUL >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo echo Shutting down^.^.^. >> Mainframe.bat
echo timeout ^/t 1 ^/nobreak ^>NUL >> Mainframe.bat
echo exit >> Mainframe.bat
:randomloop
echo %random%%num%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%%random%
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
