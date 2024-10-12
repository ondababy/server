import { Supplier } from '../models/supplier.js';

export const newSupplier = async (req, res) => {
    try {
        const { name, emailAddress, contactNumber } = req.body;
        if (!name || !emailAddress || !contactNumber) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const supplier = await Supplier.create(req.body);
        res.status(201).json({
            success: true,
            supplier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getSuppliers = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.status(200).json({
            count: suppliers.length,
            data: suppliers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getSupplierById = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            success: true,
            supplier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Update supplier
export const updateSupplier = async (req, res) => {
    try {
        const { name, emailAddress, contactNumber } = req.body;
        if (!name || !emailAddress || !contactNumber) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Supplier updated successfully',
            supplier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

// Delete supplier
export const deleteSupplier = async (req, res) => {
    try {
        const supplier = await Supplier.findByIdAndDelete(req.params.id);
        if (!supplier) {
            return res.status(404).json({
                success: false,
                message: 'Supplier not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Supplier deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};
