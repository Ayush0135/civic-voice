const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['info', 'warning', 'critical'], // Common types, can be expanded
        default: 'info'
    },
    endDate: {
        type: Date,
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

// Static method to get active alerts (isActive is true AND (endDate is null OR endDate is in the future))
alertSchema.statics.getActiveAlerts = function () {
    const now = new Date();
    return this.find({
        isActive: true,
        $or: [
            { endDate: null },
            { endDate: { $gt: now } }
        ]
    })
        .populate('createdBy', 'name email')
        .sort({ createdAt: -1 });
};

module.exports = mongoose.model('Alert', alertSchema);
