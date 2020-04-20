'use strict'
//GIT
var dirbisongit					= 'E:\\EP\\BISONDOCS\\github\\dev\\bisongit' // tempat folder middleware di server
var dirbisonmiddleware			= 'E:\\EP\\BISONDOCS\\github\\prod\\bison_middleware' // tempat folder middleware di server
var dirbisonscheduler			= 'E:\\EP\\BISONDOCS\\github\\prod\\bison_scheduler' // tempat folder scheduler di server
var dirbisonweb					= 'E:\\xampp\\htdocs\\bisonweb' // tempat folder bisonweb di server
var gitpullbisonmiddleware		= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonmiddleware.git' //buat pull otomatis
var gitpullbisonweb				= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonweb.git' //buat pull otomatis
var gitpullbisonscheduler		= 'git pull https://24rizalfauzi:*****r1zalf4Uzi*****@github.com/24rizalfauzi/bisonscheduler.git' //buat pull otomatis
var updatecodewhenrunbisongit	= true  //buat update code bisonscheduler,bisonweb,bisonmiddleware ketika running bisongit, false jika tidak
var autoupdatecode				= false //buat auto update code bisonscheduler,bisonweb,bisonmiddleware otomatis, true jika autoupdate, false jika tidak
var autoupdatetime				= '0 45 1 * * *' //waktu auto update code
									/*
										Seconds: 0-59
										Minutes: 0-59
										Hours: 0-23
										Day of Month: 1-31
										Months: 0-11 (Jan-Dec)
										Day of Week: 0-6 (Sun-Sat)
									*/

module.exports.dirbisongit					= dirbisongit
module.exports.dirbisonmiddleware			= dirbisonmiddleware
module.exports.dirbisonweb					= dirbisonweb
module.exports.dirbisonscheduler			= dirbisonscheduler
module.exports.gitpullbisonweb				= gitpullbisonweb
module.exports.gitpullbisonmiddleware		= gitpullbisonmiddleware
module.exports.gitpullbisonscheduler		= gitpullbisonscheduler
module.exports.updatecodewhenrunbisongit	= updatecodewhenrunbisongit
module.exports.autoupdatecode				= autoupdatecode
module.exports.autoupdatetime				= autoupdatetime