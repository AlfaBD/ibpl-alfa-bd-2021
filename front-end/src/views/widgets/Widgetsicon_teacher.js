import React from 'react'
import {
  CCol,
  CRow,
  CWidgetIcon,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

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
