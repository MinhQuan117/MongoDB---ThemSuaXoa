const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

const mogoose = require('mongoose');

const btModel = require('./baithoModel');

const uri = 'mongodb+srv://MinhKuann:OUlaAza7DqSTq43v@cluster0.mdgs9of.mongodb.net/CP17305?retryWrites=true&w=majority';

app.get('/', async (req, res) => {
    await mogoose.connect(uri).then(console.log('Kết nối thành công'));

    let listThos = await btModel.find({});
    console.log(listThos);
    res.send(listThos);

    // btModel.updateMany({namsangtac: 1958}, {namsangtac: 1959})
    // btModel.updateOne({namsangtac: 1958}, {namsangtac: 1959})

    // btModel.deleteMany({namsangtac: 1973})
    // btModel.deleteOne({namsangtac: 1973})

})

app.get('/addtho', async (req, res) => {
    await mogoose.connect(uri).then(console.log('Kết nối thành công'));

    const baitho = new btModel({
        tieude: 'Hat gao lang ta',
        namsangtac: '1973',
    });

    baitho.tacgia = 'Tran Dang Khoa'

    let kq = await baitho.save();

    console.log(kq);

    let listThos = await btModel.find({});

    console.log(listThos);
    res.send(listThos);

})

app.get('/updatetho', async (req, res) => {
    await mogoose.connect(uri).then(console.log('Kết nối thành công'));

    await btModel.updateOne({namsangtac: 1973}, {namsangtac: 1959})


    let listThos = await btModel.find({});
    console.log(listThos);
    res.send(listThos);


    // await btModel.updateMany({namsangtac: 1958}, {namsangtac: 1959})
    // await btModel.updateOne({namsangtac: 1958}, {namsangtac: 1959})

    // btModel.deleteMany({namsangtac: 1973})
    // btModel.deleteOne({namsangtac: 1973})

})

app.get('/xoatho', async (req, res) => {
    await mogoose.connect(uri).then(console.log('Kết nối thành công'));

    await btModel.deleteMany({ tieude: 'Hat gao lang ta'});

    let listThos = await btModel.find({});
    
    res.send(listThos);

    // // btModel.updateMany({namsangtac: 1958}, {namsangtac: 1959})
    // btModel.updateOne({namsangtac: 1958}, {namsangtac: 1959})

    // await btModel.deleteMany({namsangtac: 1973})
    // await btModel.deleteOne({namsangtac: 1973})

})


app.get('/', function (req, res) {
    res.send('Hello world');
})

app.get('/handlebars', function (req, res) {
    res.render('home');
})

app.listen(3000);