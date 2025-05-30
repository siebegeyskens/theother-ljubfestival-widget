const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = process.argv[2];
const outputDir = process.argv[3] || path.join(inputDir, "resized");

if (!inputDir) {
  console.error("Usage: node resize-images.js <input-folder> [output-folder]");
  process.exit(1);
}

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const sizes = [
  { suffix: "-600", height: 600 },
  { suffix: "-1200", height: 1200 },
];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const basename = path.basename(file, ext);

  sizes.forEach(({ suffix, height }) => {
    const outputPath = path.join(outputDir, `${basename}${suffix}${ext}`);
    sharp(inputPath)
      .resize({ height, withoutEnlargement: true })
      .toFile(outputPath)
      .then(() => console.log(`Created ${outputPath}`))
      .catch((err) => console.error(`Error processing ${file}:`, err));
  });
});
