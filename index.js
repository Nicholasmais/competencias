const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json())

const competencias = [
  {
    id: 1,
    nome: "Comunicação",
    descricao: "Habilidade de se comunicar com clareza e efetividade em diferentes contextos e meios de comunicação."
  },
  {
    id: 2,
    nome: "Trabalho em equipe",
    descricao: "Capacidade de colaborar com colegas de trabalho para atingir objetivos comuns, compartilhando ideias e responsabilidades."
  },
  {
    id: 3,
    nome: "Liderança",
    descricao: "Capacidade de inspirar, motivar e guiar um grupo de pessoas para atingir objetivos e metas compartilhados."
  },
  {
    id: 4,
    nome: "Resolução de problemas",
    descricao: "Capacidade de identificar, analisar e resolver problemas de forma eficiente e eficaz, utilizando recursos disponíveis."
  },
  {
    id: 5,
    nome: "Adaptabilidade",
    descricao: "Capacidade de se adaptar a novas situações, aprender rapidamente e lidar com mudanças em ambientes dinâmicos."
  },
  {
    id: 6,
    nome: "Pensamento crítico",
    descricao: "Habilidade de analisar informações de forma objetiva e avaliar argumentos com base em evidências, visando chegar a conclusões fundamentadas."
  },
  {
    id: 7,
    nome: "Empatia",
    descricao: "Capacidade de compreender e se colocar no lugar de outras pessoas, reconhecendo suas emoções e necessidades."
  },
  {
    id: 8,
    nome: "Criatividade",
    descricao: "Habilidade de gerar ideias originais e inovadoras, bem como de encontrar soluções criativas para problemas complexos."
  },
  {
    id: 9,
    nome: "Organização",
    descricao: "Capacidade de planejar, organizar e priorizar tarefas de forma eficiente e eficaz, visando atingir objetivos e metas estabelecidos."
  },
  {
    id: 10,
    nome: "Autoconfiança",
    descricao: "Capacidade de confiar em si mesmo, em suas habilidades e em suas decisões, bem como de lidar com críticas e feedbacks construtivos."
  }
];


app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

app.get('/competencias', (req, res) => {
  res.json(competencias);
});

app.post("/competencias", (req, res) => {
  obj_to_save = req.body;
  if (obj_to_save.nome.trim() === "" || obj_to_save.descricao.trim() === ""){
    return res.status(400).json({"status":"Preencha todos os campos."})
  }
  obj_to_save = {...obj_to_save, id:competencias.length + 1}
  competencias.push(obj_to_save);
  return res.json(obj_to_save);
});

app.delete("/competencias/:id", (req, res) => {
  const id =  parseInt(req.params.id);
  let index_to_remove = -1;
  competencias.forEach((competencia, i) => {
    if (competencia.id === id){
      index_to_remove = i;
      }
    }
  );
  if (index_to_remove >= 0){
    competencias.splice(index_to_remove, 1);
    return res.json({ "status": "sucesso" });
  }
  return res.status(404).json({"status":"Não encontrado"});
});

app.put("/competencias", (req, res) => {
  const obj_to_update = req.body;
  if (obj_to_update.nome.trim() === "" || obj_to_update.descricao.trim() === ""){
    return res.status(400).json({"status":"Preencha todos os campos."});
  }
  competencias[obj_to_update.id-1] = obj_to_update;
  return res.json({"status":"sucesso"});
})

app.listen(3000, () => {
  console.log('A API está rodando na porta 3000 uhul top');
});
