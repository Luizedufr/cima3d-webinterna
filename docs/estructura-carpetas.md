# Estructura de carpetas del Drive de CIMA 3D

Este documento describe cómo se organiza la carpeta `CIMA 3D` del Drive y qué preguntas hará la web (Apps Script, incrustada en Google Sites) para decidir dónde va cada archivo.

La definición exacta, la que leerá el código, está en [`apps-script/Estructura.js`](../apps-script/Estructura.js). Si cambia la estructura, se cambia allí y este documento se actualiza a la par.

## Visión general

```
CIMA 3D
├── Gestión         curso → área
├── Organización    curso → cuatrimestre → área
├── Marketing       curso → cuatrimestre → área
├── Prótesis        departamento → (universal | categoría → tipo → marca → …)
└── Archivo         sin subcarpetas por ahora
```

## Cursos y cuatrimestres

- Un curso va de septiembre a julio. En octubre de 2026 el curso actual es **2026-27**.
- La web ofrece los cursos desde el actual hasta el **2025-26**, el primero. Cada septiembre aparece el nuevo sin tocar nada.
- Cada curso tiene dos cuatrimestres: **QT** (otoño/tardor), con el año de inicio, y **QP** (primavera), con el año de fin. En 2026-27: `QT 2026` y `QP 2027`.
- Las carpetas finales llevan el curso o el cuatrimestre entre paréntesis, para distinguirlas cuando se buscan o se comparten sueltas.

## Gestión

Preguntas: **curso** y **área**.

Ruta: `Gestión / Curso {curso} / {área} ({curso})`

Áreas: Tesorería, Documentación Legal, Ayudas y Subvenciones, Membresía, Viajes y Desplazamientos, Gestión de Prótesis.

Ejemplo: `CIMA 3D / Gestión / Curso 2026-27 / Tesorería (2026-27)`

## Organización

Preguntas: **curso**, **cuatrimestre** y **área**.

Ruta: `Organización / Curso {curso} / {cuatrimestre} / {área} ({cuatrimestre})`

Áreas: Guías internas, Inventario, Compras.

Ejemplo: `CIMA 3D / Organización / Curso 2026-27 / QP 2027 / Compras (QP 2027)`

## Marketing

Preguntas: **curso**, **cuatrimestre** y **área**.

Ruta: `Marketing / Curso {curso} / {cuatrimestre} / {área} ({cuatrimestre})`

Áreas: Organización Interna, Sponsors, Multimedia, Eventos, Merchandising, Encargos.

Ejemplo: `CIMA 3D / Marketing / Curso 2026-27 / QT 2026 / Sponsors (QT 2026)`

## Prótesis

Primero se elige el **departamento** (Mecánica o Electrónica) y se marca, si procede, la casilla **Documentación Universal**.

### Documentación Universal

Para archivos que valen para varias marcas. No se pregunta la marca, solo la categoría, que depende del departamento.

Ruta: `Prótesis / Proyecto - Documentación Universal / {departamento} / {categoría}`

| Departamento | Categorías |
| --- | --- |
| Mecánica | Modelos, Referencias, Ficheros Técnicos (Datasheets), Dimensiones Piloto |
| Electrónica | Referencias, Ficheros Técnicos (Datasheets) |

### Mecánica

Preguntas: **categoría**, **tipo**, **marca** y **subdepartamento** (Mano o Brazo).

Ruta: `Prótesis / Mecánica / {categoría} / {tipo} / {marca} / {subdepartamento}`

| Categoría | Tipos |
| --- | --- |
| Diseño | CAD (SolidWorks, …), Impresión (STEP, STL, …) |
| Documentación - Mecánica | Informes, Propuestas, Planos |

Ejemplo: `CIMA 3D / Prótesis / Mecánica / Diseño / Impresión / Mk4 (Marca Actual) / Mano`

### Electrónica

Preguntas: **categoría**, **tipo** y **marca**. En Documentación se pregunta además el **área**.

| Categoría | Tipos | Ruta |
| --- | --- | --- |
| Hardware | KiCad, Diagramas Funcionales, Simulaciones | `Electrónica / Hardware / {tipo} / {marca}` |
| Software | Código ESP-32, MATLAB | `Electrónica / Software / {tipo} / {marca}` |
| Dispositivos Periféricos | Sensores, Motores, Baterías | `Electrónica / Dispositivos Periféricos / {tipo} / {marca}` |
| Documentación - Electrónica | Informes, Propuestas | `Electrónica / Documentación - Electrónica / {tipo} / {marca} / {área}` |

Áreas de Documentación: Hardware, Software, Sensores, Motores, Baterías.

Ejemplo: `CIMA 3D / Prótesis / Electrónica / Documentación - Electrónica / Informes / Mk4 (Marca Actual) / Sensores`

### Marcas

`Mk4 (Marca Actual)`, `Mk3`, `Mk2`, `Mk1`. La primera de la lista es la actual y la web la ofrece por defecto.

## Archivo

Una sola carpeta, `CIMA 3D / Archivo`, sin preguntas. Falta decidir cómo se organiza (ver abajo).

## Decisiones tomadas sobre el borrador

- **Tildes unificadas**: `Gestión`, `Tesorería`, `Membresía`, `Mecánica`, `Electrónica`, `Ficheros Técnicos`. En el borrador aparecían con y sin tilde.
- **QP en las carpetas de primavera**: el borrador ponía `Guías internas (QT 2027)` y `Organización Interna (QT 2027)` dentro de `QP 2027`. Se ha tomado como errata: ahora es `(QP 2027)`.
- **Impresión dentro de Diseño**: el texto la presentaba como una tercera categoría de Mecánica, pero el árbol la colocaba dentro de Diseño. Se sigue el árbol.
- **Sin carpeta `Electrónica / Diseño`**: en el árbol aparecía vacía junto a Hardware; se ha quitado.

## Pendiente de decidir

- **Archivo**: ¿qué se guarda ahí y con qué subcarpetas (por curso, por categoría de origen…)?
- **Cambio de marca actual**: cuando llegue la Mk5, la carpeta `Mk4 (Marca Actual)` tendrá que renombrarse a `Mk4`. Alternativa: llamar a las carpetas solo `Mk4`, `Mk5`… y marcar la actual solo en la web.
- **Cursos anteriores a 2025-26**: si hay documentación más antigua, se baja `primerAnio` en la configuración.
