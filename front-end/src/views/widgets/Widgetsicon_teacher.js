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

const Widgetsicon = () => {
  return (
    <CRow>
      <CCol>
        <CWidgetIcon header="PROFESSOR" text="Overview" color="info">
          <CIcon name="cil-graph"/>
        </CWidgetIcon>
      </CCol>
    </CRow>
  )
}

export default Widgetsicon
