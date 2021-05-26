import React from "react";
/* ALFA-BD
  Created: 07-04-2021
  Author: Aline Rodrigues
  Inserir todas as rotas de interface do projeto aqui
*/
const Aluno = React.lazy(() => import("./views/cadastro/aluno/Aluno"));
const Professor = React.lazy(() => import("./views/cadastro/professor/Professor"));
const Escola = React.lazy(() => import("./views/cadastro/escola/Escola"));

/* const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard")); */
const DashboardEscola = React.lazy(() => import("./views/dashboard/escola/Dashboard"));
const DashboardProfessor = React.lazy(() => import("./views/dashboard/professor/Dashboard"));
const DashboardAluno = React.lazy(() => import("./views/dashboard/aluno/Dashboard"));
const DashboardAdmin = React.lazy(() => import("./views/dashboard/admin/Dashboard"));
const LigaAluno = React.lazy(() => import("./views/aluno/liga"));
const Atividade = React.lazy(() => import("./views/aluno/atividade"));

const routes = [
  { path: "/", exact: true, name: "Home" },


  { path: "/dashboard/escola", name: "Dashboard Escola", component: DashboardEscola },
  { path: "/dashboard/professor", name: "Dashboard", component: DashboardProfessor },
  { path: "/dashboard/aluno", name: "Painel do aluno", component: DashboardAluno, exact: true },
  { path: "/dashboard/admin", name: "Painel do Administrador", component: DashboardAdmin, exact: true },
  
  { path: "/aluno/liga", name: "Liga dos leitores", component: LigaAluno, exact: true },
  { path: "/aluno/atividade", name: "Atividade", component: Atividade, exact: true },

  { path: "/cadastro", name: "Cadastro", component: Aluno, exact: true },
  { path: "/cadastro/aluno", name: "Aluno", component: Aluno },
  { path: "/cadastro/professor", name: "Professor", component: Professor },
  { path: "/cadastro/escola", name: "Escola", component: Escola },
];

export default routes;
