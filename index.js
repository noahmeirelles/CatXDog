const express = require('express');
const {Pool} = require('pg');
const app = express();
const port = 4000

app.use(express.json())
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "postgres",
    password: "ds564",
    port: 7007
});

//GET
app.get ('/gatos', async (req, res) => {
    try {
const resultado = await pool.query('SELECT * FROM gatos');
res.json({
    total: resultado.rowCount,
    usuarios: resultado.rows}
);

    }catch (error) {
        console.log("Erro ao obter todos os usuarios");
        res.status(500).send({
            mensagem: "Erro ao obter todos os usuarios"
        })
}});


//POST
app.post('/gatos', async (req, res) =>{
    try{
        const {nomeG, fofuraG, hpG, nivelG} = req.body;
      

        await pool.query('INSERT INTO usuarios (nomeG, fofuraG, hpG, nivelG) VALUES ($1, $2, $3, $4)', [nomeG, fofuraG, hpG, nivelG]);
        res.status(201).send({
            mensagem: "Gato nascido com sucesso"
        })
    }
    catch (error) {
        console.log("não nasceu f", error);
        res.status(500).send({
            mensagem: "não nasceu f",
        })
}})

//DELETE
app.delete('/gatos/:id', async (req, res) =>{
    try{
const {id} = req.params;

await pool.query('DELETE FROM gatos WHERE id = $1', [id])
        res.status(201).send({mensagem: "Gato deletado." })

    }catch(error){
        console.log("Erro ao deletar gato");
        res.status(500).send({
            mensagem: "Erro ao deletar gato"
        })
    }
})

//UPDATE
app.put('/gatos/:id', async (req, res) =>{
    try{
const {id} = req.params;
const {nomeG, fofuraG, hpG, nivelG} = req.body;
await pool.query('UPDATE gatos SET nomeG = $1, fofuraG =$2, hpG = $3,nivelG = $4, WHERE id = $5',  [nomeG, fofuraG, hpG, nivelG, id]);
        res.status(200).send({mensagem: "Gato adaptado" })

    }catch(error){
        console.log("Erro ao adaptar gato", error);
        res.status(500).send({
            mensagem: "Erro ao adaptar gato",
        })
    }
})






//rota teste
app.get('/', (req,res)=> {
    res.send('Servidor funcionando')
})






 //ulrtima coisa
app.listen(port, () =>{
    console.log('servidor rodando na porta ${port}')
})