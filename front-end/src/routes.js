import React from "react";
/* ALFA-BD
  Created: 07-04-2021
  Author: Aline Rodrigues
  Inserir todas as rotas de interface do projeto aqui
*/
const Aluno = React.lazy(() => import("./views/cadastro/aluno/Aluno"));
const Classe = React.lazy(() => import("./views/cadastro/classe/Classe"));
const Professor = React.lazy(() =>
  import("./views/cadastro/professor/Professor")
);
const Escola = React.lazy(() => import("./views/cadastro/escola/Escola"));

/* const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard")); */
const DashboardEscola = React.lazy(() =>
  import("./views/dashboard/escola/Dashboard")
);
const DashboardProfessor = React.lazy(() =>
  import("./views/dashboard/professor/Dashboard")
);
const DashboardAluno = React.lazy(() =>
  import("./views/dashboard/aluno/Dashboard")
);
const DashboardAdmin = React.lazy(() =>
  import("./views/dashboard/admin/Dashboard")
);

const LigaAluno = React.lazy(() => import("./views/aluno/liga"));
const Score = React.lazy(() => import("./views/professor/score"));
const Login = React.lazy(() => import("./views/pages/login/Login"));
const Atividade = React.lazy(() => import("./views/aluno/atividade"));

const routes = [
  { path: "/alfabd", name: "Home" },

  {
    path: "/",
    name: "Login",
    exact: true,
    component: Login,
    private: false,
  },

  {
    path: "/alfabd/dashboard/escola",
    name: "Dashboard Escola",
    component: DashboardEscola,
    private: true,
  },
  {
    path: "/alfabd/dashboard/professor",
    name: "Dashboard",
    component: DashboardProfessor,
    private: true,
  },
  {
    path: "/alfabd/dashboard/aluno",
    name: "Painel do aluno",
    component: DashboardAluno,
    exact: true,
    private: true,
  },
  {
    path: "/alfabd/dashboard/admin",
    name: "Painel do Administrador",
    component: DashboardAdmin,
    exact: true,
    private: true,
  },

  {
    path: "/alfabd/aluno/liga",
    name: "Liga dos leitores",
    component: LigaAluno,
    exact: true,
    private: true,
  },

  {
    path: "/alfabd/professor/notas",
    name: "Notas",
    component: Score,
    exact: true,
    private: true,
  },

  {
    path: "/alfabd/cadastro",
    name: "Cadastro",
    component: Aluno,
    exact: true,
    private: true,
  },
  {
    path: "/alfabd/cadastro/aluno",
    name: "Aluno",
    component: Aluno,
    private: true,
  },
  {
    path: "/alfabd/cadastro/classe",
    name: "Classe",
    component: Classe,
    private: true,
  },
  {
    path: "/alfabd/cadastro/professor",
    name: "Professor",
    component: Professor,
    private: true,
  },
  {
    path: "/alfabd/cadastro/escola",
    name: "Escola",
    component: Escola,
    private: true,
  },
  {
    path: "/alfabd/aluno/atividade",
    name: "Atividade",
    component: Atividade,
    private: true,
  },
];

export default routes;
