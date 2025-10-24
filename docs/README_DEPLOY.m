# Instrucciones de despliegue para este proyecto Next.js

Este repositorio contiene una aplicación Next.js con App Router (`src/app`). **GitHub Pages no es apropiado** para desplegarla directamente porque Pages sólo sirve sitios estáticos o Jekyll. Recomendamos usar Vercel.

## Despliegue rápido en Vercel
1. Crea una cuenta en https://vercel.com (puedes usar GitHub OAuth).
2. Conecta tu cuenta de GitHub y autoriza acceso al repo.
3. En Vercel, elige "New Project" → selecciona este repositorio.
4. Vercel detectará Next.js automáticamente y usará:
   - Build command: `npm run build`
   - Output directory: (gestiona Vercel automáticamente para Next)
5. Presiona "Deploy" y espera a que termine. Vercel te dará una URL pública.

## Notas adicionales
- No intentes `next export` si usas App Router o funcionalidades de SSR/ISR. `next export` sólo funciona para sitios estáticos.
- Si necesitas CI/CD con GitHub Actions, configura un workflow que *no* intente publicar a GitHub Pages. En su lugar, usa el integration de Vercel o un workflow que haga `vercel --prod` (requiere token).
- Cuando el despliegue en Vercel esté activo, puedes eliminar la carpeta `docs/` de este repo si lo deseas (era solo un fallback para evitar fallos en GitHub Pages).

## Recursos
- Vercel: https://vercel.com/docs
- Next.js Deploy: https://nextjs.org/docs/deployment
