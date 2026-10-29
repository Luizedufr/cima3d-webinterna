/**
 * Estructura de carpetas del Drive de CIMA 3D.
 *
 * Fuente única de la estructura: el formulario de subida lee de aquí qué
 * preguntar y en qué carpeta guardar cada archivo. Explicación en
 * docs/estructura-carpetas.md.
 *
 * Cómo se lee:
 * - Cada categoría cuelga de la carpeta raíz y tiene `pasos` comunes y una o
 *   más `ramas`. La rama que se usa es la primera cuyo `cuando` coincide con
 *   lo elegido en los pasos comunes (una rama sin `cuando` vale siempre).
 * - Cada paso es una pregunta del formulario. Sus `opciones` son una lista,
 *   un generador (`'cursos'`, `'cuatrimestres'`, `'marcas'`) o, con
 *   `segun`, un objeto con una lista por cada valor de otro paso.
 * - `soloSi` hace que un paso solo se pregunte con ciertos valores de otro.
 * - `ruta` son las carpetas bajo la de la categoría. `{paso}` se sustituye por
 *   la `carpeta` de la opción elegida; un segmento cuyo paso no se ha
 *   preguntado se omite.
 */
const ESTRUCTURA_DRIVE = {
  raiz: 'CIMA 3D',

  // Un curso empieza en septiembre: en octubre de 2026 el curso actual es
  // 2026-27. Se listan del más reciente al primero.
  cursos: { primerAnio: 2025, mesInicio: 9 },

  // QT es el cuatrimestre de otoño/tardor (año de inicio del curso) y QP el
  // de primavera (año de fin): en 2026-27, QT 2026 y QP 2027.
  cuatrimestres: [
    { id: 'qt', nombre: 'Otoño (QT)', prefijo: 'QT', anio: 'inicio' },
    { id: 'qp', nombre: 'Primavera (QP)', prefijo: 'QP', anio: 'fin' },
  ],

  // La primera marca es la actual y se ofrece por defecto.
  marcas: [
    { id: 'mk4', carpeta: 'Mk4 (Marca Actual)' },
    { id: 'mk3', carpeta: 'Mk3' },
    { id: 'mk2', carpeta: 'Mk2' },
    { id: 'mk1', carpeta: 'Mk1' },
  ],

  categorias: [
    {
      id: 'gestion',
      carpeta: 'Gestión',
      pasos: [
        { id: 'curso', etiqueta: 'Curso', opciones: 'cursos' },
        {
          id: 'area',
          etiqueta: 'Área',
          opciones: [
            { id: 'tesoreria', carpeta: 'Tesorería' },
            { id: 'legal', carpeta: 'Documentación Legal' },
            { id: 'ayudas', carpeta: 'Ayudas y Subvenciones' },
            { id: 'membresia', carpeta: 'Membresía' },
            { id: 'viajes', carpeta: 'Viajes y Desplazamientos' },
            { id: 'protesis', carpeta: 'Gestión de Prótesis' },
          ],
        },
      ],
      ramas: [{ ruta: ['Curso {curso}', '{area} ({curso})'] }],
    },

    {
      id: 'organizacion',
      carpeta: 'Organización',
      pasos: [
        { id: 'curso', etiqueta: 'Curso', opciones: 'cursos' },
        { id: 'cuatrimestre', etiqueta: 'Cuatrimestre', opciones: 'cuatrimestres' },
        {
          id: 'area',
          etiqueta: 'Área',
          opciones: [
            { id: 'guias', carpeta: 'Guías internas' },
            { id: 'inventario', carpeta: 'Inventario' },
            { id: 'compras', carpeta: 'Compras' },
          ],
        },
      ],
      ramas: [{ ruta: ['Curso {curso}', '{cuatrimestre}', '{area} ({cuatrimestre})'] }],
    },

    {
      id: 'marketing',
      carpeta: 'Marketing',
      pasos: [
        { id: 'curso', etiqueta: 'Curso', opciones: 'cursos' },
        { id: 'cuatrimestre', etiqueta: 'Cuatrimestre', opciones: 'cuatrimestres' },
        {
          id: 'area',
          etiqueta: 'Área',
          opciones: [
            { id: 'interna', carpeta: 'Organización Interna' },
            { id: 'sponsors', carpeta: 'Sponsors' },
            { id: 'multimedia', carpeta: 'Multimedia' },
            { id: 'eventos', carpeta: 'Eventos' },
            { id: 'merchandising', carpeta: 'Merchandising' },
            { id: 'encargos', carpeta: 'Encargos' },
          ],
        },
      ],
      ramas: [{ ruta: ['Curso {curso}', '{cuatrimestre}', '{area} ({cuatrimestre})'] }],
    },

    {
      id: 'protesis',
      carpeta: 'Prótesis',
      pasos: [
        {
          id: 'departamento',
          etiqueta: 'Departamento',
          opciones: [
            { id: 'mecanica', carpeta: 'Mecánica' },
            { id: 'electronica', carpeta: 'Electrónica' },
          ],
        },
        {
          id: 'universal',
          etiqueta: 'Documentación Universal',
          ayuda: 'Aplicable a varias marcas: no hace falta elegir marca.',
          tipo: 'checkbox',
        },
      ],
      ramas: [
        {
          cuando: { universal: true },
          pasos: [
            {
              id: 'tipo',
              etiqueta: 'Categoría del documento',
              segun: 'departamento',
              opciones: {
                mecanica: [
                  { id: 'modelos', carpeta: 'Modelos' },
                  { id: 'referencias', carpeta: 'Referencias' },
                  { id: 'datasheets', carpeta: 'Ficheros Técnicos (Datasheets)' },
                  { id: 'piloto', carpeta: 'Dimensiones Piloto' },
                ],
                electronica: [
                  { id: 'referencias', carpeta: 'Referencias' },
                  { id: 'datasheets', carpeta: 'Ficheros Técnicos (Datasheets)' },
                ],
              },
            },
          ],
          ruta: ['Proyecto - Documentación Universal', '{departamento}', '{tipo}'],
        },

        {
          cuando: { departamento: 'mecanica', universal: false },
          pasos: [
            {
              id: 'grupo',
              etiqueta: 'Categoría del documento',
              opciones: [
                { id: 'diseno', carpeta: 'Diseño', ayuda: 'CAD, SolidWorks, STEP, STL…' },
                { id: 'documentacion', carpeta: 'Documentación - Mecánica', ayuda: 'Informes, propuestas, planos…' },
              ],
            },
            {
              id: 'tipo',
              etiqueta: 'Tipo',
              segun: 'grupo',
              opciones: {
                diseno: [
                  { id: 'cad', carpeta: 'CAD', ayuda: 'SolidWorks, Fusion…' },
                  { id: 'impresion', carpeta: 'Impresión', ayuda: 'STEP, STL…' },
                ],
                documentacion: [
                  { id: 'informes', carpeta: 'Informes' },
                  { id: 'propuestas', carpeta: 'Propuestas' },
                  { id: 'planos', carpeta: 'Planos' },
                ],
              },
            },
            { id: 'marca', etiqueta: 'Marca', opciones: 'marcas' },
            {
              id: 'parte',
              etiqueta: 'Subdepartamento',
              opciones: [
                { id: 'mano', carpeta: 'Mano' },
                { id: 'brazo', carpeta: 'Brazo' },
              ],
            },
          ],
          ruta: ['Mecánica', '{grupo}', '{tipo}', '{marca}', '{parte}'],
        },

        {
          cuando: { departamento: 'electronica', universal: false },
          pasos: [
            {
              id: 'grupo',
              etiqueta: 'Categoría del documento',
              opciones: [
                { id: 'hardware', carpeta: 'Hardware', ayuda: 'Esquemas, KiCad…' },
                { id: 'software', carpeta: 'Software', ayuda: 'C++, Python, MATLAB…' },
                { id: 'perifericos', carpeta: 'Dispositivos Periféricos', ayuda: 'Sensores, motores, baterías…' },
                { id: 'documentacion', carpeta: 'Documentación - Electrónica', ayuda: 'Informes, propuestas…' },
              ],
            },
            {
              id: 'tipo',
              etiqueta: 'Tipo',
              segun: 'grupo',
              opciones: {
                hardware: [
                  { id: 'kicad', carpeta: 'KiCad' },
                  { id: 'diagramas', carpeta: 'Diagramas Funcionales' },
                  { id: 'simulaciones', carpeta: 'Simulaciones' },
                ],
                software: [
                  { id: 'esp32', carpeta: 'Código ESP-32' },
                  { id: 'matlab', carpeta: 'MATLAB' },
                ],
                perifericos: [
                  { id: 'sensores', carpeta: 'Sensores' },
                  { id: 'motores', carpeta: 'Motores' },
                  { id: 'baterias', carpeta: 'Baterías' },
                ],
                documentacion: [
                  { id: 'informes', carpeta: 'Informes' },
                  { id: 'propuestas', carpeta: 'Propuestas' },
                ],
              },
            },
            { id: 'marca', etiqueta: 'Marca', opciones: 'marcas' },
            {
              id: 'area',
              etiqueta: 'Área',
              soloSi: { grupo: 'documentacion' },
              opciones: [
                { id: 'hardware', carpeta: 'Hardware' },
                { id: 'software', carpeta: 'Software' },
                { id: 'sensores', carpeta: 'Sensores' },
                { id: 'motores', carpeta: 'Motores' },
                { id: 'baterias', carpeta: 'Baterías' },
              ],
            },
          ],
          ruta: ['Electrónica', '{grupo}', '{tipo}', '{marca}', '{area}'],
        },
      ],
    },

    {
      id: 'archivo',
      carpeta: 'Archivo',
      pasos: [],
      ramas: [{ ruta: [] }],
    },
  ],
};
