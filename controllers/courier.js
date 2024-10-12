import { Courier } from '../models/courier.js';
import cloudinary from 'cloudinary';

export const createCourier = async (req, res) => {
    try {
        if (!req.body.name || !req.body.contactNumber || !req.body.serviceArea) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const courier = await Courier.create(req.body);
        res.status(201).json({
            success: true,
            courier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getCouriers = async (req, res) => {
    try {
        const couriers = await Courier.find();
        res.status(200).json({
            count: couriers.length,
            data: couriers
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const getCourierById = async (req, res) => {
    try {
        const courier = await Courier.findById(req.params.id);
        res.status(200).json({
            success: true,
            courier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const updateCourier = async (req, res) => {
    try {
        if (!req.body.name || !req.body.contactNumber || !req.body.serviceArea) {
            return res.status(400).json({
                success: false,
                error: 'All fields are required'
            });
        }
        const courier = await Courier.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            success: true,
            message: 'Courier updated successfully',
            courier
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

export const deleteCourier = async (req, res) => {
    try {
        await Courier.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: 'Courier deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
};

