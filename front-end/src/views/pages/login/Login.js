import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { authenticate } from "../../../services/StudentService";
import { index as getUserById } from "../../../services/UserService";

const Login = () => {
  const history = useHistory();

  const routeChange = (data) => {
    let path = "/" + data;
    history.push(path);
  };

  // States for form data
  const [usr_email, setName] = useState("");
  const [usr_password_hash, setPassword] = useState("");

  const mainPageFactory = (accessLevel) => {
    const mainPage = {
      ADMIN: "dashboard/admin",
      SCHOOL: "dashboard/escola",
      TEACHER: "dashboard/professor",
      STUDENT: "dashboard/aluno",
    };
    return mainPage[accessLevel];
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // We will call the proper service to verify login on DB
    const username = usr_email;
    const password = usr_password_hash;

    try {
      const auth = await authenticate({
        username: username,
        password: password,
      });
      localStorage.setItem("token", auth.token);
      localStorage.setItem("user", auth.user);
      const user = await getUserById(auth.user);
      localStorage.setItem("userData", JSON.stringify(user));
      const path = mainPageFactory(user.usr_primary_role);
      routeChange(path);
    } catch (err) {
      //TODO: Address server errors here
    }

    // On success, we should display a confirmation modal
  };

  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h2 className="text-primary">
                      <b>Bem Vindo ao Programa Mais Alfabetização</b>
                    </h2>
                    <br></br>
                    <h4>
                      <b>Para acessar digite suas credenciais</b>
                    </h4>
                    <br></br>
                    <div
                      className="alert alert-danger show d-none"
                      role="alert"
                    >
                      Senha incorreta
                    </div>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        name="username"
                        placeholder="e-mail"
                        autoComplete="username"
                        value={usr_email}
                        onChange={(e) => setName(e.target.value)}
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
                        name="password"
                        placeholder="senha"
                        autoComplete="current-password"
                        value={usr_password_hash}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="primary" className="px-4">
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton
                          color="link"
                          className="px-0"
                          onClick={routeChange}
                        >
                          <b>Esqueci minha senha</b>
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
