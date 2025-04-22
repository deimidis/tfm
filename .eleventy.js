// .eleventy.js
module.exports = function (eleventyConfig) {
  // Copia directamente todos los archivos estáticos
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  // Filtros para fechas
  eleventyConfig.addFilter("formatDate", function (date) {
    return new Date(date).toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    pathPrefix: "/tfm/",
  };
};
