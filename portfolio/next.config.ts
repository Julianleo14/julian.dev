/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // Habilita la exportación estática
    basePath: "/juliandev", // Asegura que los assets tengan el path correcto en GitHub Pages
    assetPrefix: "/juliandev",
};

module.exports = nextConfig;
