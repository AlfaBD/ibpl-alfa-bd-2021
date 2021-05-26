import React, { lazy } from 'react'
import {
  /* CBadge,
  CButtonGroup,
  CCardFooter,
  CCallout, */
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CLink,
  CProgress,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { Link } from 'react-router-dom'

// import MainChartExample from '../charts/MainChartExample.js'

const WidgetsLiga = lazy(() => import('../../widgets/WidgetsLiga.js'))

const DashAluno = () => {
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              TAREFAS
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Atividade</th>
                    <th className="text-center">Categoria</th>
                    <th>Pontuação</th>
                    <th className="text-center">Estado</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <CButton color="link">
                          <span>9845</span>
                        </CButton>
                      </div>
                      {/* <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div> */}
                    </td>
                    <td className="text-center">
                      <div>Fácil</div>
                      {/* <CIcon height={25} name="cif-us" title="us" id="us" /> */}
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>0</strong>
                        </div>
                        {/* <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div> */}
                      </div>
                      <CProgress className="progress-xs" color="info" value="0" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilCalendar" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>Não realizada</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <CButton color="link">
                        <span>15161</span>
                      </CButton>
                    </td>
                    <td className="text-center">
                      <div>Difícil</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>35</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="secondary" value="35" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilWarning" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>Ontem</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              ATIVIDADES EM ALTA
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Atividade</th>
                    <th className="text-center">Categoria</th>
                    <th>Pontuação</th>
                    <th className="text-center">Estado</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div>
                        <CButton color="link">
                          <span>8451</span>
                        </CButton>
                      </div>
                      {/* <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div> */}
                    </td>
                    <td className="text-center">
                      <div>Média</div>
                      {/* <CIcon height={25} name="cif-us" title="us" id="us" /> */}
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>0</strong>
                        </div>
                        {/* <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div> */}
                      </div>
                      <CProgress className="progress-xs" color="info" value="0" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilCalendar" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>Não realizada</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div>
                        <CButton color="link">
                          <span>126</span>
                        </CButton>
                      </div>
                      {/* <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div> */}
                    </td>
                    <td className="text-center">
                      <div>Média</div>
                      {/* <CIcon height={25} name="cif-us" title="us" id="us" /> */}
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>0</strong>
                        </div>
                        {/* <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div> */}
                      </div>
                      <CProgress className="progress-xs" color="info" value="0" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilCalendar" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>Não realizada</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              ATIVIDADES REALIZADAS
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th>Atividade</th>
                    <th className="text-center">Categoria</th>
                    <th>Pontuação</th>
                    <th className="text-center">Estado</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Link to='/aluno/atividade'>
                        <a>289277</a>
                      </Link>
                      {/* <div className="small text-muted">
                        <span>New</span> | Registered: Jan 1, 2015
                      </div> */}
                    </td>
                    <td className="text-center">
                      <div>Fácil</div>
                      {/* <CIcon height={25} name="cif-us" title="us" id="us" /> */}
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>65</strong>
                        </div>
                        {/* <div className="float-right">
                          <small className="text-muted">Jun 11, 2015 - Jul 10, 2015</small>
                        </div> */}
                      </div>
                      <CProgress className="progress-xs" color="success" value="65" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilCheckCircle" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>10 sec ago</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <CButton color="link">
                        <span>15161</span>
                      </CButton>
                    </td>
                    <td className="text-center">
                      <div>Difícil</div>
                    </td>
                    <td>
                      <div className="clearfix">
                        <div className="float-left">
                          <strong>35</strong>
                        </div>
                      </div>
                      <CProgress className="progress-xs" color="secondary" value="35" />
                    </td>
                    <td className="text-center">
                      <CIcon height={25} name="cilWarning" />
                    </td>
                    <td>
                      <div className="small text-muted">Modificado em</div>
                      <strong>Ontem</strong>
                    </td>
                  </tr>
                </tbody>
              </table>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CButton color="link">
                <span>LIGA DOS LEITORES</span>
              </CButton>
            </CCardHeader>
            <CCardBody>
              <WidgetsLiga withCharts/>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default DashAluno
