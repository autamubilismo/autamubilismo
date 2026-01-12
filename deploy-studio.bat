@echo off
echo ========================================
echo Fazendo Deploy do Sanity Studio...
echo ========================================
echo.
echo Este processo vai:
echo 1. Atualizar o schema no Sanity Cloud
echo 2. Adicionar os campos de fonte e SEO
echo 3. Deploy do Studio atualizado
echo.
echo ========================================
cd studio
npx sanity deploy
echo.
echo ========================================
echo Deploy concluido!
echo.
echo Acesse: https://www.sanity.io/manage
echo Recarregue o Studio (Ctrl+F5)
echo Os campos estarao disponiveis!
echo ========================================
pause
