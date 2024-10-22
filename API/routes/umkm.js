const express = require('express');
const Router = express.Router();

const umkmController = require('../controller/umkm');

Router.post('/', umkmController.createdumkm);

module.exports = Router;