

import { Router } from "express";

const apostasRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Leonardo di Caprio",
    profissão: "ator",
    envolvido: true, 
    nivel: "médio"
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Neymar JR.",
    profissão: "Jogador de futebol",
    envolvido: true, 
    nivel: "baixo",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Rihanna",
    profissão: "cantora",
    envolvido: true, 
    nivel: "alto",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Cristiano Ronaldo",
    profissão: "Jogador de futebol",
    envolvido: true, 
    nivel: "médio",
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Lebron James",
    profissão: "Jogador de basquete",
    envolvido: true, 
    nivel: "médio",
  },
];

// Rota para listar todos os suspeitos
apostasRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
apostasRoutes.post("/", (req, res) => {
  const { nome, profissão, envolvido, nivel } = req.body;

  // Validação dos campos nome e profissão
  if (!nome || !profissão) {
    return res.status(400).send({
      message: "O nome ou o profissão não foram preenchidos!",
    });
  }


  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    profissão,
    envolvido,
    nivel,
  };

  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "Suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});

// Rota para buscar um suspeito pelo id
apostasRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((famoso) => famoso.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  return res.status(200).json(suspeito);
});

// Rota para atualizar um suspeito pelo id
apostasRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, profissão, envolvido, nivel} = req.body;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeitos = suspeitos.find((famoso) => famoso.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  // Validação dos campos nome e profissão
  if (!nome || !profissão) {
    return res.status(400).send({
      message: "O nome ou a profissão não foi preenchido!",
    });
  }

  suspeitos.nome = nome;
  suspeitos.profissão = profissão;
  suspeitos.envolvido = envolvido;
  suspeitos.nivel = nivel;

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
});

apostasRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const candidato = suspeitos.find((famosos) => famosos.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `Suspeito com id ${id} não encontrado!` });
  }

  // Remove o suspeito do array de suspeitos
  suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);

  return res.status(200).json({
    message: "Suspeito removido com sucesso!",
    suspeito,
  });
});

export default apostasRoutes;