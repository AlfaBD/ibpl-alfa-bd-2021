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
            <CCardHeader className="h4">
              ATIVIDADE nº 5678
            </CCardHeader>
            <CCardBody>
              <h4>Aperte o microfone e leia o seguinte texto:</h4>
              <h2>"A casa do avô de Pedro era uma dessas casas antigas, grandes, que têm dois andares e mais um velho porão. Um dia Pedro resolveu ir lá embaixo procurar uns patins."</h2>
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
