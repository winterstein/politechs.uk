export default function (eleventyConfig) {
  // Filters
  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());
  eleventyConfig.addFilter("formatDate", (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  });

  // Copy CSS output to _site
  eleventyConfig.addPassthroughCopy({ "css": "css" });

  // Copy public folder (favicon etc.)
  eleventyConfig.addPassthroughCopy({ "public": "/" });

  // Ignore old Vite/React source files and docs
  eleventyConfig.ignores.add("index.html");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("TODO.md");
  eleventyConfig.ignores.add("branding.md");
  eleventyConfig.ignores.add("mission.md");
  eleventyConfig.ignores.add("Tech Hustings - Panel & Planning - Status + TODOs + Links.md");
  eleventyConfig.ignores.add("src/main.jsx");
  eleventyConfig.ignores.add("src/App.jsx");
  eleventyConfig.ignores.add("src/components");
  eleventyConfig.ignores.add("src/pages");
  eleventyConfig.ignores.add("src/data");
  eleventyConfig.ignores.add("src/assets");

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
      layouts: "_includes/layouts",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
