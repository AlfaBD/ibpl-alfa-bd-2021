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
  CCallout,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CInput
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import MainChartExample from '../../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../../widgets/WidgetsAdmin.js'))
const WidgetsBrand = lazy(() => import('../../widgets/WidgetsBrand.js'))

const Dashboard = () => {
  return (
    <div>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <CCol sm="5">
              <h4 id="traffic" className="card-title mb-0">Histórico</h4>
              <div className="small text-muted">Novembro 2021</div>
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
              <div className="text-muted">Desempenho por escolas</div>
              <strong>29.703 Usuários (40%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="success"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Atividades Realizadas</div>
              <strong>24.093 Usuários (20%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="info"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Páginas Visualizadas</div>
              <strong>78.706 Visitas (60%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="warning"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0">
              <div className="text-muted">Novos Usuários</div>
              <strong>22.123 Usuários (80%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                color="danger"
                value={40}
              />
            </CCol>
            <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
              <div className="text-muted">Total de Acesso</div>
              <strong>Média (40.15%)</strong>
              <CProgress
                className="progress-xs mt-2"
                precision={1}
                value={40}
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts/>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            <h1>Métricas Escolares</h1> 
            </CCardHeader>
            <CCardBody>
            <CRow>
                    <CCol sm="6">
                      <CCallout color="info">
                        <small className="text-muted">Média escolar atual</small>
                        <br />
                        <strong className="h4">9,123</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="6">
                      <CCallout color="danger">
                        <small className="text-muted">Média escolar histórica</small>
                        <br />
                        <strong className="h4">22,643</strong>
                      </CCallout>
                    </CCol>
                  </CRow>



              <CRow>
                <CCol xs="12" md="6" xl="6">
               
                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Escola João Pereira da Silva
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Jose Maria Pierri
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Estadual Nascimento Filho
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Marielson D'avilla
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Izaquias Nicael Jr
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Moaretic Thunder
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                 
                </CCol>

                
                <CCol xs="12" md="6" xl="6">

                  

                  <hr className="mt-0" />

                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                        Escola João Pereira da Silva
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="34" />
                      <CProgress className="progress-xs" color="danger" value="78" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola José Maria Pierri
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="56" />
                      <CProgress className="progress-xs" color="danger" value="94" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Estadual Nascimento Filho
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="12" />
                      <CProgress className="progress-xs" color="danger" value="67" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Marielson D'avilla
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="43" />
                      <CProgress className="progress-xs" color="danger" value="91" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Izaquias Nicael Jr
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="22" />
                      <CProgress className="progress-xs" color="danger" value="73" />
                    </div>
                  </div>
                  <div className="progress-group mb-4">
                    <div className="progress-group-prepend">
                      <span className="progress-group-text">
                      Escola Moaretic Thunder
                      </span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress className="progress-xs" color="info" value="9" />
                      <CProgress className="progress-xs" color="danger" value="69" />
                    </div>
                  </div>
                  <div className="legend text-center">
                 </div>
                </CCol>
              </CRow>

              <br />

              <div className="legend ">
                 <sup className="px-1"><CBadge shape="pill" color="info">&nbsp;</CBadge></sup>
                 Média escolar 
                &nbsp;
                <sup className="px-1"><CBadge shape="pill" color="danger">&nbsp;</CBadge></sup>
                 Média escolar histórica
              </div>

              <br />
              <br />
              <br />

             
               <CCard>
                <CCardHeader>
                  <h1>Tipos de usuário</h1> 
                </CCardHeader>
               </CCard>

            
              <div>
                <CDropdown className="mt-2">
                  <CDropdownToggle caret color="info">
                   Selecione o tipo de Usuário
                  </CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem header>Tipo de usuário</CDropdownItem>
                    <CDropdownItem>Região</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Escola</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Professor</CDropdownItem>
                    <CDropdownItem divider />
                    <CDropdownItem>Aluno</CDropdownItem>
                    <CDropdownItem divider />
                  </CDropdownMenu>
                </CDropdown>
              </div>
             

                <br />
                <br />
                <br />
                <br />


              <CCard>
                <CCardHeader>
                  <h1>Última atividade</h1> 
                </CCardHeader>
               </CCard>


              <CCardBody>
                <CRow>
                  <CCol sm="5">
                    <h4 id="traffic" className="card-title mb-0">Histórico</h4>
                    <div className="small text-muted">Novembro 2021</div>
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


              <br />
              <br />
              <br />
              <br />


              <CCard>
                <CCardHeader>
                  <h1>Editar usuário</h1> 
                </CCardHeader>
               </CCard>


              <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center"><CIcon name="cil-people" /></th>
                    <th>ID</th>
                    <th>Usuário</th>
                    <th>Tipo</th>
                    <th>Escola</th>
                    <th>Turma</th>
                    <th>Última atividade</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/1.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-success"></span>
                      </div>
                    </td>
                    <td>
                      01
                    </td>
                    <td>
                      <div>Yiorgos Avraamu</div>
                      <div className="small text-muted">
                        <span>Novo</span> | Registrado: Jan 1, 2015
                      </div>
                    </td>
                    <td>
                     Aluno
                    </td>
                    <td>
                    Escola Marielson D'avilla
                    </td>
                    <td>
                    2º Ano C
                    </td>
                    <td>
                      <div className="small text-muted">último login</div>
                      <strong>10 segundos atrás</strong>
                    </td>

                      <td>
                      {['', ].map((size, rowKey)=>{
                        return (
                          <CRow key={rowKey + 'sizes'} className="d-flex justify-content-between">
                            {
                              ['primary'].map((color, key)=>{
                                return (
                                  <CButton
                                  key={color + size}
                                  color={color}
                                  size={size}
                                  className="m-2"
                                >
                                  { color='Editar'}
                                </CButton>
                              )})
                            }
                          </CRow>
                        )})}
                      </td>


                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                        <img src={'avatars/2.jpg'} className="c-avatar-img" alt="admin@bootstrapmaster.com" />
                        <span className="c-avatar-status bg-danger"></span>
                      </div>
                    </td>
                    <td>
                      02
                    </td>
                    <td>
                      <div>Avram Tarasios</div>
                      <div className="small text-muted">
                        <span>Recurring</span> | Registrado: Jan 1, 2015
                      </div>
                    </td>
      
                    <td>
                      Aluno                       
                    </td>
                    <td>
                    Escola Moaretic Thunder
                    </td>
                    <td>
                      1º Ano B
                    </td>
                    <td>
                      <div className="small text-muted">último login</div>
                      <strong>5 minutos atrás</strong>
                    </td>
                    <td>
                      {['', ].map((size, rowKey)=>{
                        return (
                          <CRow key={rowKey + 'sizes'} className="d-flex justify-content-between">
                            {
                              ['primary'].map((color, key)=>{
                                return (
                                  <CButton
                                  key={color + size}
                                  color={color}
                                  size={size}
                                  className="m-2"
                                >
                                  { color='Editar'}
                                </CButton>
                              )})
                            }
                          </CRow>
                        )})}
                      </td>
                  </tr>
                
                  <tr>
                    <td className="text-center">
                      <div className="c-avatar">
                      <strong>Adicionar Usuário </strong>
                      </div>
                    </td>
                    <td>
                      a verificar...
                    </td>
                    <td>
                    <CCol sm="12" xl='12'>
                        <CInput
                          label="nome"
                          placeholder="insira nome"
                        />
                      </CCol>
                    </td>
                    <td>
                      <CCol sm="12" xl='12'>
                        <CInput
                          label="desempenho"
                          placeholder="insira o desempenho"
                        />
                      </CCol>
                    </td>
                    <td>
                    <CCol sm="12" xl='12'>
                        <CInput
                          label="escola"
                          placeholder="insira a escola"
                        />
                      </CCol>
                    </td>
                    <td>
                    <CCol sm="12" xl='12'>
                        <CInput
                          label="Série do Aluno"
                          placeholder="insira a série"
                        />
                      </CCol>
                    </td>
                    <td>
                      <div className="small text-muted">último login</div>
                      <strong>a verificar....</strong>
                    </td>
                    <td>
                      {['', ].map((size, rowKey)=>{
                        return (
                          <CRow key={rowKey + 'sizes'} className="d-flex justify-content-between">
                            {
                              ['primary'].map((color, key)=>{
                                return (
                                  <CButton
                                  key={color + size}
                                  color={color}
                                  size={size}
                                  className="m-2"
                                >
                                  { color='Editar'}
                                </CButton>
                              )})
                            }
                          </CRow>
                        )})}
                      </td>
                  </tr>
                
                </tbody>
              </table>


                <br />
                <br />
                <br />
                <br />


              <CCard>
                <CCardHeader>
                  <h1>Pesquisar</h1> 
                </CCardHeader>
               </CCard>



               <CRow>
                <CCol sm="12" xl='8'>
                  <CInput
                    label="Pesquisar"
                    placeholder="insira alguma palavra para pesquisar"
                   />
                </CCol>
              </CRow>

              <br />
              <br />
              <br />
              <br />

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  )
}

export default Dashboard
