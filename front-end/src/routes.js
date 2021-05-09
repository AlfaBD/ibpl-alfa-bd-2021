import React from "react";
/* ALFA-BD
  Created: 07-04-2021
  Author: Aline Rodrigues
  Inserir todas as rotas de interface do projeto aqui
*/
const Aluno = React.lazy(() => import("./views/cadastro/aluno/Aluno"));
const Professor = React.lazy(() =>
  import("./views/cadastro/professor/Professor")
);
const Escola = React.lazy(() => import("./views/cadastro/escola/Escola"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/cadastro", name: "Cadastro", component: Aluno, exact: true },
  { path: "/cadastro/aluno", name: "Aluno", component: Aluno },
  { path: "/cadastro/professor", name: "Professor", component: Professor },
  { path: "/cadastro/escola", name: "Escola", component: Escola },
];

export default routes;
