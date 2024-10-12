import express from 'express';
import { newSupplier, getSuppliers, getSupplierById, updateSupplier, deleteSupplier } from '../controllers/supplier.js';
const router = express.Router();

router.post('/', newSupplier);
router.get('/', getSuppliers);
router.get('/:id', getSupplierById);
router.put('/:id', updateSupplier);
router.delete('/:id', deleteSupplier);

export default router;