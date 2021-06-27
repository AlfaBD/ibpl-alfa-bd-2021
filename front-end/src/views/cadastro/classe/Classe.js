import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CBadge,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
  CSelect,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { index as Classes, store } from "../../../services/ClasseService";
import { index as Teacher } from "../../../services/TeacherService";
import { index as School } from "../../../services/SchoolService";

const getBadge = (status) => {
  switch (status) {
    case "Ativo":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Classe = () => {
  const history = useHistory();
  const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  const [page, setPage] = useState(currentPage);

  // States for form data
  const [schools, setSchools] = useState([]);
  const [name, setName] = useState("");
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teacher, setTeacher] = useState("");
  const [school, setSchool] = useState("");
  const [user, setUser] = useState();

  const pageChange = (newPage) => {
    currentPage !== newPage && history.push(`/cadastro/classe?page=${newPage}`);
  };

  useEffect(() => {
    currentPage !== page && setPage(currentPage);
  }, [currentPage, page]);

  useEffect(() => {
    Teacher().then((teachers) => {
      setTeachers(teachers);
    });
  }, []);

  useEffect(() => {
    School().then((schools) => {
      setSchools(schools);
    });
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("user");
    Classes(user).then((classes) => {
      console.log(classes)
      setClasses(classes);
    });
  }, []);

  const handleSubmit = async (event) => {
    // We will call the proper service to store the Teacher on DB
    const classData = {
      cla_name: name,
      teacher_user_id: teacher,
      sch_id: school,
      cla_status: "Ativo",
    };
    try {
      const createdClass = await store(classData);
      alert(`Successfully created ${createdClass.cla_name}`);
    } catch (err) {}
    // On success, we should display a confirmation modal
    event.preventDefault();
  };

  return (
    <div>
      <CRow className="justify-content-center">
        <CCol md="8" lg="8" xl="8">
          <CCard className="mx-4">
            <CCardHeader className="h2">Cadastro de Classe</CCardHeader>
            <CCardBody className="p-4">
              <CForm onSubmit={handleSubmit}>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CSelect onChange={(event) => setSchool(event.target.value)}>
                    <option>Selecione uma Escola</option>
                    {schools.map((school) => (
                      <option key={school.sch_id} value={school.sch_id}>
                        {school.sch_name}
                      </option>
                    ))}
                  </CSelect>
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput
                    type="text"
                    placeholder="Nome"
                    autoComplete="Nome"
                    data-cy="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </CInputGroup>
                <CInputGroup className="mb-3">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-paperclip" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CSelect onChange={(event) => setTeacher(event.target.value)}>
                    <option>Selecione um Professor</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.usr_id} value={teacher.usr_id}>
                        {teacher.usr_name}
                      </option>
                    ))}
                  </CSelect>
                </CInputGroup>
                <CRow>
                  <CCol xs="12" sm="12">
                    <CButton
                      type="submit"
                      color="success"
                      data-cy="submit"
                      block
                    >
                      Cadastrar
                    </CButton>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
          <CCard className="mx-4">
            <CCardHeader className="h2">Classes</CCardHeader>
            <CCardBody>
              <CDataTable
                items={classes}
                fields={[
                  {
                    key: "cla_id",
                    _classes: "font-weight-bold",
                    label: "ID",
                  },
                  {
                    key: "cla_name",
                    _classes: "font-weight-bold",
                    label: "Nome",
                  },
                  { key: "sch_name", label: "Escola" },
                  { key: "usr_name", label: "Professor" },
                  { key: "cla_status", label: "Status" },
                ]}
                hover
                striped
                itemsPerPage={10}
                activePage={page}
                clickableRows
                onRowClick={(item) =>
                  history.push(`/cadastro/classe/${item.id}`)
                }
                scopedSlots={{
                  sch_name: (item) => (
                    <td>
                        {item.school.sch_name}
                    </td>
                  ),
                  usr_name: (item) => (
                    <td>
                        {item.teacherUserId.usr_name}
                    </td>
                  ),
                  cla_status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.cla_status)}>
                        {item.cla_status}
                      </CBadge>
                    </td>
                  ),
                  cla_status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.cla_status)}>
                        {item.cla_status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
              <CPagination
                activePage={page}
                onActivePageChange={pageChange}
                pages={10}
                doubleArrows={false}
                align="center"
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default Classe;
