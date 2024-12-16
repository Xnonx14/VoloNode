var express = require('express');
const Volo = require('../utils/volo-utils.js');

var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  let volo = new Volo()
  var temp1 = await volo.getListing()
  var temp2 = await volo.checkGameRegistration("675075ce0195f60cceccab79")
  var temp3 = await volo.checkRoster('675075ce0195f60cceccab79')
  
  console.log(temp1)
  console.log(temp2)
  console.log(temp3)
  res.render('index', { title: 'Express' });
});

module.exports = router;

