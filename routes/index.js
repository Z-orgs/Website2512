import { Router } from 'express';
import * as index from '../controllers/index.js';
var router = Router();

/* GET home page. */
router.get('/', index.getIndex);
router.post('/', index.postIndex);

export default router;
