const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://housedatabase:System%40123@cluster0.jvvrt3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


    