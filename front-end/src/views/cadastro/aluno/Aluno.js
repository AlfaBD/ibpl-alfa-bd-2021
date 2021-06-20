import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CSelect,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { index, store } from "../../../services/StudentService";

// const getBadge = (status) => {
//   switch (status) {
//     case "Active":
//       return "success";
//     case "Inactive":
//       return "secondary";
//     case "Pending":
//       return "warning";
//     case "Banned":
//       return "danger";
//     default:
//       return "primary";
//   }
// };

const Aluno = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  // States for form data
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [turma, setTurma] = useState("");

  const [allStudent, setAllStudent] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  const handleSubmit = async (event) => {
    // We will call the proper service to store the Teacher on DB
    const userData = {
      usr_cpf: cpf,
      usr_name: name,
      usr_email: email,
      usr_password_hash: password,
      usr_birth_date: birthDate,
    };

    try {
      const createdUser = await store({ userData });
      alert(`Sucessfully created ${createdUser}`);
    } catch (err) {
      console.log(err);
      //TODO: Address server errors here
    }

    // On success, we should display a confirmation modal
    event.preventDefault();
  };

  useEffect(() => {
    index().then((response) => {
      setAllStudent(response);
    });
  }, []);

  console.log(allStudent);
  // console.log(JSON.stringify(allStudent));

  return (
    <CRow>
      <CCol xl={6}>
        <CCard className="mx-4">
          <CCardHeader align="center">
            <h4>Cadastro de Alunos</h4>
            <small className="text-muted"></small>
          </CCardHeader>
          <CCardBody className="p-4">
            <CForm onSubmit={handleSubmit}>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-user" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="text"
                  placeholder="Nome"
                  autoComplete="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-file" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="text"
                  placeholder="CPF"
                  autoComplete="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>@</CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-calendar" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="date"
                  placeholder="Data de Nascimento"
                  autoComplete="data de nascimento"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-lock-locked" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="password"
                  placeholder="Senha"
                  autoComplete="senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-paperclip" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CSelect
                  value={turma}
                  onChange={(e) => setTurma(e.target.value)}
                >
                  <option></option>
                </CSelect>
              </CInputGroup>
              <CButton type="submit" color="success" block>
                Criar Conta
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard>
          <CCardHeader className="h2">Alunos</CCardHeader>
          <CCardBody className="text-center">
            <CDataTable
              items={allStudent}
              fields={[
                {
                  key: "usr_name",
                  label: "Nome",
                  _classes: "font-weight-bold",
                },
                { key: "usr_name", label: "Escola" },
                { key: "attendance", label: "Turma" },
                { key: "usr_last_login", label: "Último login" },
              ]}
              hover
              striped
              itemsPerPage={5}
              activePage={page}
              clickableRows
              onRowClick={(item) => history.push(`/users/${item.id}`)}
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={5}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Aluno;
