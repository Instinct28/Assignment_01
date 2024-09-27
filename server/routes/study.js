const {Router} = require('express');
const { addStudy, updateStudy, deleteStudy, getAllStudy } = require('../controllers/study');

const route = Router();

route.post('/addStudy', addStudy);
route.put('/updateStudy', updateStudy);
route.delete('/deleteStudy', deleteStudy);
route.get('/getStudy', getAllStudy);

module.exports = route;