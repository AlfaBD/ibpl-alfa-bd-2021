import React from 'react'
import {
  CCol,
  CRow,
  CWidgetProgressIcon,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

const WidgetsProgressIcon = () => {
  return (
    <CRow>
      <CCol>
        <CWidgetProgressIcon header="150" text="Professores Cadastrados" color="info">
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol>
        <CWidgetProgressIcon header="385" text="Novos Professores" color="success">
          <CIcon name="cil-user-follow" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    </CRow>
  )
}
export default WidgetsProgressIcon
