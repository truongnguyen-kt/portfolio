const path = require('path');
const express = require('express');

const viewEngine = (app) => {
    // config template engine
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    // config public files
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = viewEngine;