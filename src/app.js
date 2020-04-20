'use strict';

global.config = require('./config.js')

var sys = require('sys')
var exec = require('child_process').exec;

//updatecode when run
if (config.updatecodewhenrunbisongit==true) {
    init()
    async function init(){
        await pullscheduler()
        await pullweb()
        await pullmiddleware()
    }
}

//autoupdatecode
if (config.autoupdatecode==true) {
    var CronJob = require('cron').CronJob;
    var job = new CronJob(config.autoupdatetime, async function() {
        await pullscheduler()
        await pullweb()
        await pullmiddleware()
    }, null, true, 'Asia/Jakarta')
    job.start()
}

async function pullscheduler(){
    var command = `cd "${config.dirbisonscheduler}"`+
                    `&&git init`+
                    `&&git remote set-url origin https://github.com/24rizalfauzi/bisonscheduler.git`+
                    `&&git reset --hard origin/master`+
                    `&&${config.gitpullbisonscheduler}`+
                    `&&copy /y "${config.dirbisongit}\\src\\template_config\\bisonscheduler\\config.js" "${config.dirbisonscheduler}\\src\\config.js"`
    console.log(command)
    var execmiddleware = exec(command, function(err, stdout, stderr) {
        if (err) {
            // should have err.code here?  
            console.log(err)
        }
        console.log('stdout pullscheduler :');
        console.log(stdout);
    });

    execmiddleware.on('exit', function (code) {
        // exit code is code
        console.log('code pullscheduler :');
        console.log(code)
    });
}

async function pullweb(){
    var command = `cd "${config.dirbisonweb}"`+
                    `&&git init`+
                    `&&git remote set-url origin https://github.com/24rizalfauzi/bisonweb.git`+
                    `&&git reset --hard origin/master`+
                    `&&${config.gitpullbisonweb}`
    console.log(command)
    var execweb = exec(command, function(err, stdout, stderr) {
        if (err) {
            // should have err.code here?  
            console.log(err)
        }
        console.log('stdout pullweb :');
        console.log(stdout);
    });

    execweb.on('exit', function (code) {
        // exit code is code
        console.log('code pullweb :')
        console.log(code)
    });
}

async function pullmiddleware(){
    var command = `cd "${config.dirbisonmiddleware}"`+
                    `&&git init`+
                    `&&git remote set-url origin https://github.com/24rizalfauzi/bisonmiddleware.git`+
                    `&&git reset --hard origin/master`+
                    `&&${config.gitpullbisonmiddleware}`+
                    `&&copy /y "${config.dirbisongit}\\src\\template_config\\bisonmiddleware\\config.js" "${config.dirbisonmiddleware}\\src\\config.js"`
    console.log(command)
    var execmiddleware = exec(command, function(err, stdout, stderr) {
        if (err) {
            // should have err.code here?  
            console.log(err)
        }
        console.log('stdout pullmiddleware :');
        console.log(stdout);
    });

    execmiddleware.on('exit', function (code) {
        // exit code is code
        console.log('code pullmiddleware :');
        console.log(code)
    });
}