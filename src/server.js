const express = require('express')
const app = express()

app.get('/lista', async () => {
    return [
        'amanda',
        'ygor',
        'patrick'
    ]
})

app.listen(3000, ()=>{ 
    console.log('servidor rodando na porta 3000')
})