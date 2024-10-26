# NOC (Network Operations Center) App con Node.js

## Descripción del Proyecto

Este proyecto es una aplicación de NOC (Network Operations Center) desarrollada con Node.js. El objetivo principal es demostrar el dominio de Node.js y la implementación de principios de arquitectura limpia en un contexto de monitoreo y gestión de redes.

## Objetivos Principales

1. Implementar una arquitectura limpia y modular.
2. Demostrar el uso efectivo de patrones de diseño en Node.js.
3. Crear un sistema flexible y fácilmente extensible para el manejo de logs y monitoreo.

## Características Clave

- **Manejo de Logs**: Sistema unificado para grabar logs, independiente de la fuente de datos (sistema de archivos, MongoDB, PostgreSQL, etc.).
- **Arquitectura Adaptable**: Capacidad de cambiar componentes sin afectar otras partes del sistema.
- **Monitoreo en Tiempo Real**: Implementación de funcionalidades para el seguimiento en tiempo real de eventos de red.

## Principios de Arquitectura

### Patrón Repositorio
Abstrae la lógica de acceso a datos, permitiendo cambiar fácilmente entre diferentes fuentes de datos.

### Patrón Adaptador
Facilita la integración de diferentes tecnologías y servicios externos.

### DRY (Don't Repeat Yourself)
Promueve la reutilización de código y la modularidad.

## Tecnologías Utilizadas

- Node.js
- Express.js (para el servidor web)
- MongoDB/PostgreSQL (bases de datos)
- Jest (para testing)
- Docker (para containerización)

## Descripción de Componentes Principales

1. **Domain**: Contiene la lógica de negocio central.
   - `entities`: Define las entidades principales como `LogEntity`.
   - `datasources`: Interfaces para fuentes de datos.
   - `repository`: Interfaces para repositorios.
   - `use-cases`: Implementa casos de uso específicos.

2. **Infrastructure**: Implementa las interfaces definidas en el dominio.
   - `datasources`: Implementaciones concretas de fuentes de datos.
   - `repositories`: Implementaciones concretas de repositorios.

3. **Presentation**: Maneja la interacción con el usuario y servicios externos.
   - `cron`: Servicio para tareas programadas.
   - `email`: Servicio para envío de correos.
   - `server.ts`: Punto de entrada principal de la aplicación.

4. **Config**: Configuraciones y plugins del proyecto.

5. **app.ts**: Archivo principal que inicia la aplicación.

Esta estructura sigue los principios de arquitectura limpia, separando claramente las capas de dominio, infraestructura y presentación.

## Estructura del Proyecto

```
├── src/
│ ├── app.ts
│ ├── config/
│ │ └── plugins/
│ │ └── envs.plugin.ts
│ ├── domain/
│ │ ├── datasources/
│ │ │ └── log.datasource.ts
│ │ ├── entities/
│ │ │ └── log.entity.ts
│ │ ├── repository/
│ │ │ └── log.repository.ts
│ │ └── use-cases/
│ │ ├── checks/
│ │ │ └── check-service.ts
│ │ └── email/
│ │ └── send-email-logs.ts
│ ├── infrastructure/
│ │ ├── datasources/
│ │ │ └── file-system.datasource.ts
│ │ └── repositories/
│ │ └── log.repository.impl.ts
│ └── presentation/
│ ├── cron/
│ │ └── cron-service.ts
│ ├── email/
│ │ └── email.service.ts
│ └── server.ts
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
````

## Configuración del Proyecto

1. Clonar el repositorio:
   ```
   git clone [URL_DEL_REPOSITORIO]
   ```
2. Copiar el archivo `.env.template` a `.env`:
   ```
   cp .env.template .env
   ```
3. Configurar las variables de entorno en el archivo `.env`.
4. Instalar dependencias:
   ```
   npm install
   ```
5. Iniciar el servidor de desarrollo:
   ```
   npm run dev
   ```


