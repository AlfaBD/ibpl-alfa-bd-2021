function adminPages() {
  return [
    {
      _tag: "CSidebarNavItem",
      name: "Escolas",
      to: "/alfabd/cadastro/escola",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Classes",
      to: "/alfabd/cadastro/classe",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Professores",
      to: "/alfabd/cadastro/professor",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Alunos",
      to: "/alfabd/cadastro/aluno",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Dashboard Admin",
      to: "/alfabd/dashboard/admin",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Notas dos alunos",
      to: "/alfabd/professor/notas",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Atividades",
      to: "/alfabd/aluno/atividade",
      icon: "cil-puzzle",
    },
  ];
}

function schoolPages() {
  return [
    {
      _tag: "CSidebarNavItem",
      name: "Classes",
      to: "/alfabd/cadastro/classe",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Professores",
      to: "/alfabd/cadastro/professor",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Alunos",
      to: "/alfabd/cadastro/aluno",
      icon: "cil-pencil",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Dashboard Escola",
      to: "/alfabd/dashboard/escola",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Notas dos alunos",
      to: "/alfabd/professor/notas",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Atividades",
      to: "/alfabd/aluno/atividade",
      icon: "cil-puzzle",
    },
  ];
}

function teacherPages() {
  return [
    {
      _tag: "CSidebarNavItem",
      name: "Dashboard Professor",
      to: "/alfabd/dashboard/professor",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Notas dos alunos",
      to: "/alfabd/professor/notas",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Atividades",
      to: "/alfabd/aluno/atividade",
      icon: "cil-puzzle",
    },
  ];
}

function studentPages() {
  return [
    {
      _tag: "CSidebarNavItem",
      name: "Dashboard Aluno",
      to: "/alfabd/dashboard/aluno",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Notas dos alunos",
      to: "/alfabd/professor/notas",
      icon: "cil-puzzle",
    },
    {
      _tag: "CSidebarNavItem",
      name: "Atividades",
      to: "/alfabd/aluno/atividade",
      icon: "cil-puzzle",
    },
  ];
}

function permissionsByAccesLevelFactory(accessLevel) {
  const permissions = {
    ADMIN: adminPages(),
    SCHOOL: schoolPages(),
    TEACHER: teacherPages(),
    STUDENT: studentPages(),
  };
  return permissions[accessLevel];
}

function getNavigation() {
  const user = JSON.parse(localStorage.getItem("userData"));
  return permissionsByAccesLevelFactory(user.usr_primary_role);
}

export default getNavigation();
