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

import background from "../../../img/background.png";

const sectionStyle = {
  backgroundImage: "url(" + background + ")",
};

function initialState() {
  return { username: "", password: "" };
}

const Login = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/";
    history.push(path);
  };

  const [values, setValues] = useState(initialState);

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value,
    });
  }

  function onSubmit(event) {
    event.preventDefault()

    const auth = 'http://localhost:8000/api/alfabd/authenticate';
    
    fetch(auth, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
    })
  }

  return (
    // eslint-disable-next-line no-template-curly-in-string
    <div
      className="c-app c-default-layout flex-row align-items-center"
      style={sectionStyle}
    >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={onSubmit} >
                    <h2 class="text-primary">
                      <b>Bem Vindo ao Programa Mais Alfabetização</b>
                    </h2>
                    <br></br>
                    <h4>
                      <b>Para acessar digite suas credenciais</b>
                    </h4>
                    <br></br>
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
                        onChange={onChange}
                        value={values.username}
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
                        onChange={onChange}
                        value={values.password}
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
