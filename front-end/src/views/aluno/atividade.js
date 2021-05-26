import React, { lazy } from 'react'
import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
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
              <h2>"este é um exemplo de atividade que deverá ser lida pelo aluno"</h2>
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
