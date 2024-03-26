const express = require('express')
const app = express()

app.get('/listagem', async() => {
    return [
        'amanda',
        'ygor'
    ]
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})