import express from "express";
const app = express();
app.get("/", (req, res) => {
    res.send("Servidor rodando!")
});
const PORT = 3001;
//Sprint 02 - função de consulta
function criarMensagem(id, usuario, texto) {
    return {id, usuario: usuario.trim(), texto: texto.trim()}
}
const mensagens = [
    criarMensagem(1, 'Ana', 'Olá, turma!'),
    criarMensagem(2, 'Pedro', 'Servidor funciona TOP!'),
    criarMensagem(3, 'João', 'Vamos conversar com o mensageiro local')
];
function listarMensagens() { return mensagens};
function quantidadeDeMensagens() {
    return mensagens.length;
}
function buscarMensagens(id) {
    return mensagens.find(mensagens => mensagens.id === id);
}
app.get("/", (req, res) => {
    res.send("Servidor rodando!")
})
app.get("/sobre", (req, res) => {
    res.send("Meu primeiro servidor Node.js com Express e ES Modules.")
})
app.get("/status", (req, res) => {
    res.json({status: "online", sprint: 2, total: quantidadeDeMensagens()})
})
app.get("/mensagens", (req, res) => {
    res.json(listarMensagens())
})
app.get("/total-mensagens", (req, res) => {
    res.json({total: quantidadeDeMensagens()})
})
app.get("/mensagens/:id", (req, res) => {
    const mensagem = buscarMensagens(Number(req.params.id))
    if (!mensagem)
        return res.status(404).json({ erro: "Mensagem não encontrada"})
        res.json(mensagem); 
});
app.listen(PORT, () => {
    console.log(`Servidor em http://localhost:${PORT}`)
});