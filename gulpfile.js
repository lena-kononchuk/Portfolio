// Import main module
import gulp from "gulp";
// Import common plugins
import { path } from "./gulp/config/path.js";
// Import paths
import { plugins } from "./gulp/config/plugins.js";

import { deploy } from './gulp/tasks/deploy.js';

global.app = {
   isBuild: process.argv.includes('--build'),
   isDev: !process.argv.includes('--build'),
   path: path,
   gulp: gulp,
   plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
import { svgSpriteTask } from "./gulp/tasks/svg-sprite.js";
import { zip } from "./gulp/tasks/zip.js";
// const { deploy } = require('./gulp/tasks/deploy.js');


// Наблюдатель за изменениями в файлах
function watcher() {
   gulp.watch(path.watch.files, copy);
   gulp.watch(path.watch.html, html); //gulp.series(html, ftp)
   gulp.watch(path.watch.scss, scss);
   gulp.watch(path.watch.js, js);
   gulp.watch(path.watch.img, img);
}

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// Основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(copy, html, scss, js, img, svgSpriteTask));

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));



const build = gulp.series(reset, mainTasks);
const deployZIP = gulp.series(reset, mainTasks, zip);
// const deployFTP = gulp.series(reset, mainTasks, ftp);


// Экспорт сценариев
export { svgSpriteTask }
export { dev }
export { build }
export { deployZIP }

// export { deployFTP }

// Выполнение сценария по умолчанию
// gulp.task('default', dev,
// );
gulp.task('deploy', deploy);
gulp.task('default', gulp.series(dev, deploy));
