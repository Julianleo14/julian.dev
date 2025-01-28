/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Exporta como archivos estáticos
    basePath: '/portfolio', // Esto es necesario si tu repositorio no es un user/organization repo
    assetPrefix: '/portfolio', // Ruta base para los recursos estáticos
};

module.exports = nextConfig;
