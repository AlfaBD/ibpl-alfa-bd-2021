import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CButton,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import usersData from './ProfessoresData'
import { store } from '../../../services/TeacherService';

const getBadge = status => {
  switch (status) {
    case 'Ativo': return 'success'
    case 'Inativo': return 'secondary'
    case 'Pendente': return 'warning'
    case 'Bloqueado': return 'danger'
    default: return 'primary'
  }
}

const Professor = () => {
  const history = useHistory()
  const queryPage = useLocation().search.match(/page=([0-9]+)/, '')
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1)
  const [page, setPage] = useState(currentPage)

  // States for form data
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [password, setPassword] = useState('');

  const pageChange = newPage => {
    currentPage !== newPage && history.push(`/users?page=${newPage}`)
  }

  useEffect(() => {
    currentPage !== page && setPage(currentPage)
  }, [currentPage, page])

  const handleSubmit = async (event) => {
    // We will call the proper service to store the Teacher on DB
    const userData = {
      usr_cpf: cpf,
      usr_name: name,
      usr_email: email,
      usr_password_hash: password,
      usr_birth_date: birthDate
    }
    
    try {
      const createdTeacher = await store({ userData })
    } catch (err) {
      console.log(err);
      //TODO: Address server errors here
    }

    // On success, we should display a confirmation modal
    event.preventDefault();
  }

  return (
    <CRow>
      <CCol xl={7}>
        <CCard className="mx-4">
          <CCardHeader align="center">
            <h4>Cadastro de Professores</h4>
            <small className="text-muted"></small>
          </CCardHeader>
            <CCardBody className="p-4">
              <CForm onSubmit={handleSubmit}>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-user" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput 
                    type="text" 
                    placeholder="Nome" 
                    autoComplete="username"  
                    value={name} 
                    onChange={e => setName(e.target.value)}/>
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-file" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput 
                    type="text" 
                    placeholder="CPF" 
                    autoComplete="cpf"
                    value={cpf} 
                    onChange={e => setCpf(e.target.value)} />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>@</CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput 
                    type="text" 
                    placeholder="Email" 
                    autoComplete="email"
                    value={email} 
                    onChange={e => setEmail(e.target.value)} />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-calendar" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput 
                    type="date" 
                    placeholder="Data de Nascimento" 
                    autoComplete="data de nascimento"
                    value={birthDate} 
                    onChange={e => setBirthDate(e.target.value)} />
                </CInputGroup>
                <CInputGroup className="mb-4">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-lock-locked" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput 
                    type="password" 
                    placeholder="Senha" 
                    autoComplete="senha" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                </CInputGroup>
                <CButton type="submit" color="success" block>Criar Conta</CButton>
              </CForm>
            </CCardBody>
        </CCard>
        <CCard className="mx-4">
          <CCardHeader align="center">
            <h4>Lista de Professores</h4>
            <small className="text-muted"></small>
          </CCardHeader>
          <CCardBody>
          <CDataTable
            items={usersData}
            fields={[
              { key: 'professor', _classes: 'font-weight-bold' },
              'registrado', 'função', 'status'
            ]}
            hover
            striped
            itemsPerPage={5}
            activePage={page}
            clickableRows
            onRowClick={(item) => history.push(`/users/${item.id}`)}
            scopedSlots = {{
              'status':
                (item)=>(
                  <td>
                    <CBadge color={getBadge(item.status)}>
                      {item.status}
                    </CBadge>
                  </td>
                )
            }}
          />
          <CPagination
            activePage={page}
            onActivePageChange={pageChange}
            pages={5}
            doubleArrows={false}
            align="center"
          />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Professor
