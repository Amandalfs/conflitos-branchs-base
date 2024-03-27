const express = require('express')
const app = express()

app.get('/lista/:id', (req, res)=>{ 
    const lista = [{
        id: 1,
        nome: 'amanda'
    },
    {
        id: 3,
        nome: 'ygor'
    }]
    return lista.map((usuario) => usuario.id === req.params.id)
})


app.listen(3000, ()=>{ 
    console.log('servidor rodando na porta 3000')
})