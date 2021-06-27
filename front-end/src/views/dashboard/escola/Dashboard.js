/* ALFA-BD
  Created: 11-05-2021
  Author: Aline Rodrigues
  Dashboard de visualização dos dados de avaliação de Escola e Turma
*/

import React, { Component, lazy } from "react";
import Select from "react-select";
import { CCard, CCardBody, CCol, CRow } from "@coreui/react";

import SchoolChart from "./SchoolChart.js";
import CountMetricsChart from "./SchoolCountMetricsChart";

import { find as Classes } from "../../../services/ClasseService";
import { dateMetrics, countMetrics } from "../../../services/DashboardService";

const WidgetsDropdown = lazy(() => import("./SchoolWidgetDropdown.js"));
const WidgetsBrand = lazy(() => import("./SchoolWidgetBrand.js"));
const SchoolRanking = lazy(() => import("./SchoolRanking.js"));

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolId: 0,
      classes: [],
      widgets: [],
      selectedClasses: [],
      isLoading: true,
      metrics: {},
    };
  }

  componentDidMount() {
    this.loadClasses();
    this.loadDashboard();
    setInterval(() => {
      this.loadDashboard();
    }, 30000);
  }

  loadClasses = () => {
    this.setState({ isLoading: true });
    const user = localStorage.getItem("user");
    this.setState({ schoolId: user });
    Classes(user).then((classes) => {
      this.setState({ schoolId: classes[0].sch_id });
      this.setState({
        classes: classes.map((clazz) => ({
          label: clazz.cla_name,
          value: clazz.cla_id,
        })),
      });
    });
    this.setState({ isLoading: false });
  };

  loadDashboard = async () => {
    await this.loadDateMetrics();
    await this.loadCountMetrics();
  };

  loadCountMetrics = async () => {
    countMetrics(1).then((countMetrics) => {
      let result = [
        countMetrics.find((data) => data.metrica === "baixo").count,
        countMetrics.find((data) => data.metrica === "medio").count,
        countMetrics.find((data) => data.metrica === "alto").count,
      ];
      this.setState({
        metrics: {
          ...this.state.metrics,
          count: result,
        },
      });
    });
  };

  loadDateMetrics = async () => {
    dateMetrics(1).then((dateMetrics) => {
      let result = {
        baixo: dateMetrics
          .filter((data) => data.metrica === "baixo")
          .map((data) => data.count),
        medio: dateMetrics
          .filter((data) => data.metrica === "medio")
          .map((data) => data.count),
        alto: dateMetrics
          .filter((data) => data.metrica === "alto")
          .map((data) => data.count),
        labels: dateMetrics
          .filter((data) => data.metrica === "alto")
          .map((data) => data.date),
      };
      this.setState({
        metrics: {
          ...this.state.metrics,
          date: result,
        },
      });
    });
  };

  handleChange = () => {};

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
                  Historico de Fluência
                </h4>
              </CCol>
            </CRow>
            <SchoolChart
              style={{ height: "300px", marginTop: "40px" }}
              data={this.state.metrics}
            />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardBody>
            <CRow>
              <CCol sm="5">
                <h4 id="traffic" className="card-title mb-0">
                  Porcentagem de Fluência
                </h4>
              </CCol>
            </CRow>
            <CountMetricsChart
              style={{ height: "300px", marginTop: "40px" }}
              data={this.state.metrics}
            />
          </CCardBody>
        </CCard>

        {/* <WidgetsBrand withCharts /> */}

        <SchoolRanking />
      </div>
    );
  }
}

export default Dashboard;
