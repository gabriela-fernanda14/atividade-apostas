import { Router } from "express";

// Lista de importação das rotas do projeto
import apostasRoutes from "./apostas.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Ja deu certo!" });
});

// Lista de uso das rotas do projeto
routes.use("/suspeitos", apostasRoutes);

export default routes;
