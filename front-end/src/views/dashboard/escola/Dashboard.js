/* ALFA-BD
  Created: 11-05-2021
  Author: Aline Rodrigues
  Dashboard de visualização dos dados de avaliação de Escola e Turma
*/

import React, { lazy, Component } from "react";
import Select from "react-select";
import {
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CProgress,
  CRow,
} from "@coreui/react";

import MainChartExample from "./SchoolChart.js";

//import api from '../../../services/SchoolService.js'
import api from "./ApiMock";

import { find as Classes } from "../../../services/ClasseService";

const WidgetsDropdown = lazy(() => import("./SchoolWidgetDropdown.js"));
// const WidgetsBrand = lazy(() => import("./SchoolWidgetBrand.js"));
const SchoolRanking = lazy(() => import("./SchoolRanking.js"));

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [123],
      selectedClasses: [],
      tableTasks: [],
      classes: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.loadClasses(true);
    setInterval(() => {
      this.loadDashboard(this.state.selectedClasses);
    }, 120000);
  }

  loadClasses = (inicial) => {
    const user = localStorage.getItem("user");
    Classes(user).then((resolve) => {
      const classes = resolve.map((clazz) => ({
        label: clazz.cla_name,
        value: clazz.cla_id,
      }));
      this.setState({ classes });
      this.setState({ selectedClasses: [classes[classes.length - 1]] });
      if (inicial) {
        this.loadDashboard([classes[classes.length - 1]]);
      }
    });
  };

  loadDashboard = (selectedClasses) => {
    this.setState({ isLoading: true });
    let classes = [];
    let tablePersons = [];
    selectedClasses.forEach((element) => {
      classes.push(element.value);
    });

    api.get_evaluations(classes).then((result) => {
      //this.createChartWidgetsDropdown(result, selectedClasses);
      //this.createChartHistory(result, selectedClasses);

      api.get_tasks(classes).then((result) => {
        //this.setState({tableTasks: result});
        this.setState({ isLoading: false });
      });
    });
  };

  handleChange = (selectedClasses) => {
    if (selectedClasses === null) selectedClasses = [];
    else {
      let school = selectedClasses[selectedClasses.length - 1];

      if (school.value === "school") {
        selectedClasses = [school];
      } else if (
        selectedClasses.length > 1 &&
        selectedClasses[selectedClasses.length - 2].value === "school"
      ) {
        selectedClasses.splice(selectedClasses.length - 2, 1);
      }
    }

    this.setState({ selectedClasses });
    this.loadDashboard(selectedClasses);
  };

  render() {
    return (
      <div>
        <CCard>
          <CCardBody>
            <Select
              closeMenuOnSelect={false}
              defaultValue={this.state.classes}
              value={this.state.selectedClasses}
              isMulti
              label="Selecione as turmas"
              name="Turmas"
              options={this.state.classes}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={this.handleChange}
              isLoading={this.state.isLoading}
            />
          </CCardBody>
        </CCard>
        <WidgetsDropdown data={this.state.widgets} />
        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">
                  Historico
                </h4>
                <div className="small text-muted">November 2020</div>
              </CCol>
              <CCol sm="7" className="d-none d-md-block">
                <CButtonGroup className="float-right mr-3">
                  {["Dia", "Mês", "Ano"].map((value) => (
                    <CButton
                      color="outline-secondary"
                      key={value}
                      className="mx-0"
                      active={value === "Month"}
                    >
                      {value}
                    </CButton>
                  ))}
                </CButtonGroup>
              </CCol>
            </CRow>
            <MainChartExample style={{ height: "300px", marginTop: "40px" }} />
          </CCardBody>
          <CCardFooter>
            <CRow className="text-center">
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Total de Alunos</div>
                <strong>29.703 Users (40%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="success"
                  value={40}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Alunos Participantes</div>
                <strong>24.093 Users (20%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="info"
                  value={40}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Prosódia</div>
                <strong>78.706 Views (60%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="warning"
                  value={40}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0">
                <div className="text-muted">Velocidade</div>
                <strong>22.123 Users (80%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  color="danger"
                  value={40}
                />
              </CCol>
              <CCol md sm="12" className="mb-sm-2 mb-0 d-md-down-none">
                <div className="text-muted">Precisão</div>
                <strong>Average Rate (40.15%)</strong>
                <CProgress
                  className="progress-xs mt-2"
                  precision={1}
                  value={40}
                />
              </CCol>
            </CRow>
          </CCardFooter>
        </CCard>

        {/* <WidgetsBrand withCharts /> */}

        <SchoolRanking />
      </div>
    );
  }
}

export default Dashboard;
