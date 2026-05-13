# Docker

Este proyecto queda preparado con dos contenedores:

- `app`: aplicacion Next.js en `http://localhost:3000`
- `db`: base de datos MySQL 8.4 en el puerto `3306`

## Levantar el proyecto

```bash
docker compose up --build
```

## Levantar en segundo plano

```bash
docker compose up --build -d
```

## Apagar los contenedores

```bash
docker compose down
```

## Borrar tambien los datos de MySQL

```bash
docker compose down -v
```

## Variables importantes

La app usa estos valores dentro de Docker:

```env
DB_HOST=db
DB_PORT=3306
DB_USER=one_meter
DB_PASSWORD=one_meter_password
DB_NAME=one_meter
ADMIN_PASSWORD=OneMeter2026
```

Para cambiar la clave del panel admin sin editar `docker-compose.yml`, crea un archivo `.env` en la raiz:

```env
ADMIN_PASSWORD=otra_clave
```
