Set oShell = CreateObject("WScript.Shell")
appUrl = "file:///C:/Users/Hello/Desktop/bongweb/index.HTML"
oShell.Run "explorer.exe " & appUrl, 1, False
