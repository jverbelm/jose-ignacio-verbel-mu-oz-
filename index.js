const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('gestor de tareas');
});

app.listen(3000,()=>{
    console.log('server on port 3000')
});


