const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());

const competencias = [
  {
    nome: "Comunicação",
    descricao: "Habilidade de se comunicar com clareza e efetividade em diferentes contextos e meios de comunicação."
  },
  {
    nome: "Trabalho em equipe",
    descricao: "Capacidade de colaborar com colegas de trabalho para atingir objetivos comuns, compartilhando ideias e responsabilidades."
  },
  {
    nome: "Liderança",
    descricao: "Capacidade de inspirar, motivar e guiar um grupo de pessoas para atingir objetivos e metas compartilhados."
  },
  {
    nome: "Resolução de problemas",
    descricao: "Capacidade de identificar, analisar e resolver problemas de forma eficiente e eficaz, utilizando recursos disponíveis."
  },
  {
    nome: "Adaptabilidade",
    descricao: "Capacidade de se adaptar a novas situações, aprender rapidamente e lidar com mudanças em ambientes dinâmicos."
  },
  {
    nome: "Pensamento crítico",
    descricao: "Habilidade de analisar informações de forma objetiva e avaliar argumentos com base em evidências, visando chegar a conclusões fundamentadas."
  },
  {
    nome: "Empatia",
    descricao: "Capacidade de compreender e se colocar no lugar de outras pessoas, reconhecendo suas emoções e necessidades."
  },
  {
    nome: "Criatividade",
    descricao: "Habilidade de gerar ideias originais e inovadoras, bem como de encontrar soluções criativas para problemas complexos."
  },
  {
    nome: "Organização",
    descricao: "Capacidade de planejar, organizar e priorizar tarefas de forma eficiente e eficaz, visando atingir objetivos e metas estabelecidos."
  },
  {
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

app.listen(3000, () => {
  console.log('A API está rodando na porta 3000 uhul top');
});
