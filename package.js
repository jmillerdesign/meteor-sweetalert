Package.describe({
    name: 'jmillerdesign:sweetalert',
    summary: "a beautiful replacement for javascript's alert() ",
    version: '0.3.1',
    git: 'https://github.com/jmillerdesign/meteor-sweetalert.git',
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.1.1");

    api.add_files([
        'sweetalert/lib/sweet-alert.html',
        'sweetalert/lib/sweet-alert.css',
        'sweetalert/lib/sweet-alert.min.js'
    ], ['client']);

    if(api.export){

    }
})
