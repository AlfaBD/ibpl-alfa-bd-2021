import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
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

import usersData from "./EscolasData";

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

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/cadastro/escola?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  return (
    <div>
      <CRow className="justify-content-center">
        <CCol md="12" lg="12" xl="12">
          <CCard>
            <CCardBody className="p-4">
              <CForm>
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
                  />
                </CInputGroup>
                <p className="text-muted">Acesso</p>
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
                    autoComplete="new-password"
                    data-cy="senha"
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
                    placeholder="Repita a senha"
                    autoComplete="new-password"
                    data-cy="repita-senha"
                  />
                </CInputGroup>
              </CForm>
            </CCardBody>
            <CCardFooter className="p-4">
              <CRow>
                <CCol xs="12" sm="12">
                  <CButton color="success" data-cy="submit" block>
                    Cadastrar
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow className="justify-content-center">
        <CCol md="12" lg="12" xl="12">
          <CCard>
            <CCardHeader>Escolas</CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={[
                  {
                    key: "use_name",
                    _classes: "font-weight-bold",
                    label: "Nome",
                  },
                  { key: "cnpj", label: "CNPJ" },
                  { key: "codigo", label: "Código INEP/MEC" },
                  { key: "city", label: "Município" },
                  { key: "state", label: "Estado" },
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
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
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
