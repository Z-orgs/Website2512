import { Router } from 'express';
import * as index from '../controllers/index.js';
import * as indexMD from '../middleware/index.js';
var router = Router();

/* GET home page. */
router.get('/', indexMD.isLoggedin, index.getIndex);
router.post('/', index.postIndex);
router.get('/items', index.getItems);
router.get('/console', index.getConsole);
router.post('/console', index.postConsole);
//
//
//
//
router.get('/hoahoc', index.getHoaHoc);
export default router;
