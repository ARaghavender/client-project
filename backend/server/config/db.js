const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://housedatabase:System%40123@cluster0.jvvrt3u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    socketTimeoutMS: 45000, // Optional: socket timeout
  })
    .then(() => {
        console.log('Db Connected')
    })
    .catch((err) => {
        console.log("Db Error", err)
    })


    