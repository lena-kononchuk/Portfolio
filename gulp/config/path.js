// Get the name of the project folder
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

// Paths to the folder with sources and the folder with the result
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Paths to folders and files of the project
export const path = {
   build: {
      css: `${buildFolder}/css/`,
      html: `${buildFolder}/`,
      files: `${buildFolder}/files/`,
      js: `${buildFolder}/js/`,
      fonts: `${buildFolder}/fonts/`,
      img: `${buildFolder}/img/`
   },
   src: {
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/*.html`,
      scss: `${srcFolder}/scss/style.scss`,
      js: `${srcFolder}/js/app.js`,
      img: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
      svgicons: `${srcFolder}/svgicons/*.svg`,
      svg: `${srcFolder}/img/**/*.svg`
   },
   watch: {
      files: `${srcFolder}/files/**/*.*`,
      html: `${srcFolder}/**/*.html`,
      scss: `${srcFolder}/scss/**/*.scss`,
      js: `${srcFolder}/js/**/*.js`,
      img: `${srcFolder}/img/**/*.{jpg,jpeg,gif,webp,svg,ico,png}`
   },
   clean: buildFolder,
   buildFolder: buildFolder,
   rootFolder: rootFolder,
   srcFolder: srcFolder,
   ftp: `` // Путь к нужной папке на удаленном сервере. gulp добавит имя папки проекта автоматически
};
