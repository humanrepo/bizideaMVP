@echo off
echo Nettoyage des fichiers en double...

if exist "index (1).html" (
    del "index (1).html"
    echo Fichier "index (1).html" supprimé
) else (
    echo Fichier "index (1).html" introuvable
)

if exist "style.css" (
    del "style.css"
    echo Fichier "style.css" supprimé
) else (
    echo Fichier "style.css" introuvable
)

echo Nettoyage terminé !
pause