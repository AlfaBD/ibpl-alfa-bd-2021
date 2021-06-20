import React from "react";
import {
  CCard,
  CCardBody,
  CCol,
  CRow
} from "@coreui/react";

const Score = () => {
  return (
    <>
      <CCard className="bg-dark">
        <CCardBody className="p-4">
          <CRow>
            <CCol>
              {/* div da identificação */}
              <div>
                <div className="h4">Aluno: Evandro Almeida de Oliveira</div>
                <div className="h6">Turma: 201</div>
                <div className="h6">Matrícula: 100887</div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody className="bg-light">
          <CRow>
            <CCol className="text-center p-4 border bg-primary">
              <div>
                <div className="p-2 h6">Velocidade</div>
                <div>4.3</div>
              </div>
            </CCol>
            <CCol className="text-center p-4 border bg-secondary">
              <div>
                <div className="p-2 h6">Precisão</div>
                <div>4.2</div>
              </div>
            </CCol>
            <CCol className="text-center p-4 border bg-info">
              <div>
                <div className="p-2 h6">Pausa</div>
                <div>3.7</div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardBody className="bg-dark">
          <CRow>
            <CCol className="text-center p-4 border bg-light text-dark">
              <div>
                <div className="p-2 h4">Total de Testes</div>
                <div className="p-2 h4">8</div>
              </div>
            </CCol>
            <CCol className="text-center p-4 border bg-light text-dark">
              <div>
                <div className="p-2 h4">Média Geral</div>
                <div className="p-2 h4">4.3</div>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};

export default Score;
