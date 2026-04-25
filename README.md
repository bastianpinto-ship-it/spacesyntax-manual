# Manual de Space Syntax — Cerrillos

Manual de referencia académica sobre Space Syntax aplicado al análisis urbano de la comuna de Cerrillos, Santiago de Chile.

## 🌐 Ver el manual

**GitHub Pages:** `https://[tu-usuario].github.io/spacesyntax-manual/`

## 📖 Contenidos

| Capítulo | Tema | Estado |
|----------|------|--------|
| 01 | Introducción y bases conceptuales | ✅ Completo |
| 02 | Métricas principales (CONN, INT, TD, Choice, NAIN, NACH) | ✅ Completo |
| 03 | Lectura e interpretación de resultados y radios de análisis | ✅ Completo |
| 04 | Aplicaciones: caso Cerrillos + cruce con criminalidad | 🚧 En construcción |

## 🗂 Estructura del repositorio

```
spacesyntax-manual/
├── index.html              ← Portada
├── css/
│   └── style.css
├── js/
│   └── main.js
└── chapters/
    ├── 01-introduccion.html
    ├── 02-metricas.html
    ├── 03-interpretacion.html
    └── 04-aplicaciones.html
```

## 🚀 Publicar en GitHub Pages

1. Crear repositorio en GitHub (ej. `spacesyntax-manual`)
2. Subir todos los archivos manteniendo la estructura de carpetas
3. Ir a **Settings → Pages → Source: Deploy from branch → main → / (root)**
4. El sitio quedará disponible en `https://[tu-usuario].github.io/spacesyntax-manual/`

## ➕ Cómo agregar contenido

Para agregar una nueva sección a un capítulo existente:
1. Abrir el `.html` correspondiente
2. Agregar `<section data-section="nuevo-id" id="nuevo-id">` con el contenido
3. Agregar el link en el sidebar `<a class="toc-item" href="#nuevo-id">Título</a>`

Para agregar un nuevo capítulo:
1. Copiar la estructura de `04-aplicaciones.html`
2. Actualizar los links en el sidebar de **todos los archivos**
3. Agregar la tarjeta en `index.html`

## 📚 Fuentes principales

- Hillier, B. (2007). *Space is the machine*. Space Syntax.
- Hillier, B., & Hanson, J. (1984). *The social logic of space*. Cambridge University Press.
- Hillier, B., Penn, A., Hanson, J., Grajewski, T., & Xu, J. (1993). Natural movement. *Environment and Planning B, 20*(1), 29–66.
- Hillier, B., & Sahbaz, O. (2005). High resolution analysis of crime patterns in urban street networks. *5th International Space Syntax Symposium*.
- Turner, A. (2004). *Depthmap 4: A researcher's handbook*. UCL.
- van Nes, A., & Yamu, C. (2021). *Introduction to space syntax in urban studies*. Springer.

## 🗺 Datos del caso Cerrillos

| Fuente | Uso | Link |
|--------|-----|------|
| bastianolea/delincuencia_chile | Criminalidad (CSV limpio) | [GitHub](https://github.com/bastianolea/delincuencia_chile) |
| INE Geodatos Abiertos | Manzanas censales 2017 (CUT 13103) | [INE](https://www.ine.gob.cl/herramientas/portal-de-mapas/geodatos-abiertos) |
| MINVU IDE | Usos de suelo y plan regulador | [IDE MINVU](https://ide.minvu.cl) |
| CEAD | Criminalidad oficial (referencia) | [CEAD](https://cead.spd.gov.cl) |
