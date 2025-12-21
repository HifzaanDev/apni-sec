# 1. Base image (Linux)
FROM node:20-alpine

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package files first (for caching)
COPY package*.json ./

# 4. Install dependencies (Linux versions)
RUN npm install

# 5. Copy Prisma schema
COPY prisma ./prisma

# 6. Generate Prisma CLIENT 
RUN npx prisma generate

# 7. Copy rest of the app
COPY . .

# 8. Build Next.js
RUN npm run build

# 9. Expose port
EXPOSE 3000

# 10. Start production server
CMD ["npm", "start"]
