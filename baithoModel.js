const mongoose = require('mongoose');

const  BaiThoSchema = new mongoose.Schema({
    tieude: {
        type: String,
        require: true
    },
    namsangtac: {
        type: Number,
        default: 1900,
        require: true
    },
    tacgia: {
        type: String
    }
});

const BaiThoModal = new mongoose.model('baitho', BaiThoSchema);

module.exports = BaiThoModal;