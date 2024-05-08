const express = require('express');
const {Pool} = require('pg');
const app = express();
const port = 4000

app.use(express.json())
const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "gatoxdog",
    password: "ds564",
    port: 7007
});

//GET
app.get ('/pets', async (req, res) => {
    try {
const resultado = await pool.query('SELECT * FROM pets');
res.json({
    total: resultado.rowCount,
    usuarios: resultado.rows}
);

    }catch (error) {
        console.log("Erro ao obter todos os pets", error);
        res.status(400).send({
            mensagem: "Erro ao obter todos os pets" 
        })
}});


//POST
app.post('/pets', async (req, res) =>{
    try{
        const {nome,gato_dog, fofura, hp, nivel} = req.body;
      

        await pool.query('INSERT INTO pets (nome,gato_dog, fofura, hp, nivel) VALUES ($1, $2, $3, $4, $5)', [nome,gato_dog, fofura, hp, nivel]);
        res.status(201).send({
            mensagem: "pet nascido com sucesso"
        })
    }
    catch (error) {
        console.log("não nasceu f", error);
        res.status(400).send({
            mensagem: "não nasceu f",
        })
}})

//DELETE
app.delete('/pets/:id', async (req, res) =>{
    try{
const {id} = req.params;

await pool.query('DELETE FROM pets WHERE id = $1', [id])
        res.status(201).send({mensagem: "pet deletado." })

    }catch(error){
        console.log("Erro ao deletar pet");
        res.status(400).send({
            mensagem: "Erro ao deletar pet"
        })
    }
})

//UPDATE
app.put('/pets/:id', async (req, res) =>{
    try{
const {id} = req.params;
const {nome,gato_dog, fofura, hp, nivel} = req.body;
await pool.query('UPDATE pets SET nome = $1, gato_dog=$2, fofura = $3,hp = $4,nivel = $5 WHERE id = $6',  [nome,gato_dog, fofura, hp, nivel, id]);
        res.status(200).send({mensagem: "pet adaptado" })

    }catch(error){
        console.log("Erro ao adaptar pet", error);
        res.status(500).send({
            mensagem: "Erro ao adaptar pet",
        })
    }
})



//GET ID
app.get('/pets/:id', async (req, res) => {
    try {
        const { id } = req.params;  
        const select = await pool.query('SELECT * FROM pets WHERE id = $1', [id]);
        if (!select) {
            res.status(400).json({ mensagem: 'pet não encontrado!' });
        } else {
            res.json({
                mensagem: 'pet encontrado',
                pet: select.rows
            });
        }
    } catch (error) {
        res.status(500).json({ mensagem:"não deu" });
    }
});
//VENCEDOR
app.post('/fight/:gato/:dog', async (req, res) => {
    try {
        const { gato, dog } = req.params;
        const vencedorGC = await vencedor(gato, dog);
       
        const resposta = await pool.query('INSERT INTO fight (gato, dog, vencedor) VALUES ($1, $2, $3)', [gato, dog, vencedorGC.id]);
        res.status(200).json({
            mensagem: "Este é o vencedor:",
            vencedor: vencedorGC,
        });
    } catch (error) {
        res.status(400).json({ mensagem: "Não deu..."});
        console.log( error);
    }
});
//LUTA
async function vencedor(gatoF, dogF) {
    const gat = await pool.query('SELECT * FROM pets WHERE id = $1', [gatoF]);
    const doo = await pool.query('SELECT * FROM pets WHERE id = $1', [dogF]);
    let somaG = gat.rows[0].fofura + gat.rows[0].hp; 
    let somaC = doo.rows[0].fofura + doo.rows[0].hp; 

    if (somaG > somaC) {
        return gat.rows[0];
    } else {
        return doo.rows[0]; 
    }
}
//HISTÓRICO

app.get('/fight', async (req, res) => {
const historico = await pool.query('SELECT * FROM fight');
    res.status(200).json({
        total: historico.rowCount,
        historico: historico.rows
    });
})









 //ulrtima coisa
app.listen(port, () =>{
    console.log('servidor rodando')
})