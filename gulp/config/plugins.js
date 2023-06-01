import replace from 'gulp-replace'; //search and replace
import plumber from 'gulp-plumber'; //error processing
import notify from 'gulp-notify'; //message
import browsersync from 'browser-sync'; //server
import newer from 'gulp-newer';
import ifPlugins from 'gulp-if';
//export plugins
export const plugins = {
   replace: replace,
   plumber: plumber,
   notify: notify,
   browsersync: browsersync,
   newer: newer,
   if: ifPlugins
}