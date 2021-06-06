import React from 'react'
import {
  CCardGroup,
  CCardFooter,
  CCol,
  CLink,
  CRow,
  CWidgetProgress,
  CWidgetIcon,
  CWidgetProgressIcon,
  CWidgetSimple,
  CProgress,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import ChartLineSimple from '../charts/ChartLineSimple'
import ChartBarSimple from '../charts/ChartBarSimple'
import { Link } from 'react-router-dom'

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
