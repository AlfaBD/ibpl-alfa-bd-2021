import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'
import AudioRecordingPage from '../gravador/audio'


const Atividade = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              ATIVIDADE nº 5678
            </CCardHeader>
            <CCardBody>
              <h4>Aperte o microfone e leia o seguinte texto:</h4>
              <h2>"Este é um exemplo de texto a ser lido pelo aluno"</h2>
              <br/>
              <br/>
              <br/>
              <div className="text-center"><AudioRecordingPage/></div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Atividade
