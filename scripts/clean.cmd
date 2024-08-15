for /d /r %d in (node_modules) do @if exist "%d\turbo.exe" (echo Skipping "%d" because it contains turbo.exe) else (rd /s /q "%d")
