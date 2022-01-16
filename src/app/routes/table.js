import { Router } from 'express';
// import {tableController} from '../controllers/table-controller';
import { getTable } from '../controllers/table-controller';

const router = Router();

router.get('/', getTable);

export default router;
