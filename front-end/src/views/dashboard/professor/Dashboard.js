import React, { lazy } from 'react'
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../../charts/MainChartExample.js'
//import WidgetsIcon from '../../widgets/Widgetsicon.js/index.js'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsDropdown_teacher.js'))
const WidgetsProgressIcon = lazy(() => import('../../widgets/WidgetsProgressIcon_teacher.js'))
const WWidgetsGridComponents = lazy(() => import('../../widgets/WidgetsGridComponents_teacher.js'))

const Dashboard = () => {
  return (
      <>
      <h3 id="traffic" className="card-title mb-0">Dashboard Professores</h3>
      <div className="small text-muted">Versão 1.0</div>
      <br></br>

      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Atividades Previstas</h4>
              <div className="small text-muted">Junho 2021</div>
            </CCol>
            <CCol sm="7" className="d-none d-md-block">
              <CButton color="primary" className="float-right">
                <CIcon name="cil-cloud-download"/>
              </CButton>
              <CButtonGroup className="float-right mr-3">
                {
                  ['Day', 'Month', 'Year'].map(value => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === 'Month'}
                    >
                      {value}
                    </CButton>
                  ))
                }
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChartExample style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Leitura</div>
              <strong>703 Alunos (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Escrita</div>
              <strong>240 Alunos (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Interpretação</div>
              <strong>1000 Alunos (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Compreensão</div>
              <strong>123 Alunos (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Locução Textual</div>
              <strong>2400 Alunos (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      <WidgetsDropdown />
      <WidgetsProgressIcon />
      <WWidgetsGridComponents />
    </>
  )
}

export default Dashboard
