import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CBadge,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { index as School, store } from "../../../services/SchoolService";

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Escola = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  // States for form data
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [mecCode, setMecCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [schools, setSchools] = useState([]);

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/cadastro/escola?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    School().then((schools) => {
      setSchools(schools);
    });
  }, []);

  const handleSubmit = async (event) => {
    // We will call the proper service to store the Teacher on DB
    const schoolData = {
      sch_name: name,
      sch_cnpj: cnpj,
      sch_state: state,
      sch_city: city,
      sch_status: "ACTIVE", //We can consider this default for new schols
      sch_address: address,
      sch_phoneNumber: phoneNumber,
      sch_mecNumber: mecCode,
      sch_email: email,
    };
    console.log(schoolData);
    try {
      const createdSchool = await store({ schoolData });
      alert(`Successfully created ${createdSchool.sch_name}`);
    } catch (err) {
      console.log(err);
      //TODO: Address server errors here
    }

    // On success, we should display a confirmation modal
    event.preventDefault();
  };

  return (
    <div>
      <CRow className="justify-content-center">
        <CCol md="12" lg="12" xl="12">
          <CCard>
            <CCardBody className="p-4">
              <CForm onSubmit={handleSubmit}>
                <h1>Escola</h1>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Nome"
                    autoComplete="Nome"
                    data-cy="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="number"
                    placeholder="CNPJ"
                    autoComplete="CNPJ"
                    data-cy="cnpj"
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="number"
                    placeholder="Código do INEP/MEC"
                    autoComplete=""
                    data-cy="inep"
                    value={mecCode}
                    onChange={(e) => setMecCode(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Logradouro"
                    autoComplete="Logradouro"
                    data-cy="logradouro"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Município"
                    autoComplete="Municipio"
                    data-cy="municipio"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Estado"
                    autoComplete="Estado"
                    data-cy="estado"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="E-mail"
                    autoComplete="email"
                    data-cy="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="tel"
                    placeholder="Número Celular"
                    autoComplete="Numero Celular"
                    data-cy="celular"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </CInputGroup>
                <CRow>
                  <CCol xs="12" sm="12">
                    <CButton
                      type="submit"
                      color="success"
                      data-cy="submit"
                      block
                    >
                      Cadastrar
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="justify-content-center">
        <CCol md="12" lg="12" xl="12">
          <CCard>
            <CCardHeader>Escolas</CCardHeader>
            <CCardBody>
              <CDataTable
                items={schools}
                fields={[
                  {
                    key: "sch_id",
                    _classes: "font-weight-bold",
                    label: "ID",
                  },
                  {
                    key: "sch_name",
                    _classes: "font-weight-bold",
                    label: "Nome",
                  },
                  { key: "sch_city", label: "Município" },
                  { key: "sch_state", label: "Estado" },
                  { key: "sch_status", label: "Status" },
                ]}
                hover
                striped
                itemsPerPage={5}
                activePage={page}
                clickableRows
                onRowClick={(item) =>
                  history.push(`/cadastro/escola/${item.id}`)
                }
                scopedSlots={{
                  sch_status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.sch_status)}>
                        {item.sch_status}
                      </CBadge>
                    </td>
                  ),
                }}
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
    </div>
  );
};

export default Escola;
