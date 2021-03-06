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
} from "@coreui/react";

import CIcon from "@coreui/icons-react";
import { index as Teacher, store } from "../../../services/TeacherService";

const Professor = () => {
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
  const [teachers, setTeachers] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage &&
      history.push(`/cadastro/professor?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    Teacher().then((teachers) => {
      setTeachers(teachers);
    });
  }, []);

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
      const createdTeacher = await store({ userData });
      alert(`Successfully created ${createdTeacher}`);
    } catch (err) {
      //TODO: Address server errors here
    }

    // On success, we should display a confirmation modal
    event.preventDefault();
  };

  return (
    <CRow className="justify-content-center">
      <CCol md="6" lg="6" xl="6">
        <CCard className="mx-4">
          <CCardHeader className="h2">Cadastro de Professor</CCardHeader>
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
              <CInputGroup className="mb-3">
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
              <CButton type="submit" color="success" block>
                Criar Conta
              </CButton>
            </CForm>
          </CCardBody>
        </CCard>
        <CCard className="mx-4">
          <CCardHeader className="h2">Professores</CCardHeader>
          <CCardBody>
            <CDataTable
              items={teachers}
              fields={[
                {
                  key: "usr_id",
                  label: "ID",
                  _classes: "font-weight-bold",
                },
                {
                  key: "usr_name",
                  label: "Nome",
                  _classes: "font-weight-bold",
                },
                { key: "usr_email", label: "Email" },
              ]}
              hover
              striped
              itemsPerPage={10}
              activePage={page}
              clickableRows
              onRowClick={(item) =>
                history.push(`/cadastro/professor/${item.id}`)
              }
            />
            <CPagination
              activePage={page}
              onActivePageChange={pageChange}
              pages={10}
              doubleArrows={false}
              align="center"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Professor;
