/**
 * Created by Suraj on 04/03/2021.
 */
var express = require('express');
var router = express.Router();
var reqFilter = require('./reqFilters/repoFilter');


router
.get('^/getRepo/:id',reqFilter.GetRepo)
.get('^/getUnderScore',reqFilter.GetUnderScore)
module.exports = router;
