# Usar una imagen base de Node.js
FROM node:20-alpine

# Crear el directorio de la aplicación
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 5000

# Comando por defecto
CMD ["npm", "run", "dev"]