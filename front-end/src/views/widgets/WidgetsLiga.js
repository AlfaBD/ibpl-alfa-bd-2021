import React from "react";
import PropTypes from "prop-types";
import { CWidgetBrand, CRow, CCol, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../charts/ChartLineSimple";

const WidgetsLiga = ({ withCharts }) => {
  // render

  return withCharts ? (
    <CRow>
      <CCol sm="12" lg="12">
        <CLink to="/aluno/liga">
          <CWidgetBrand
            color="vk"
            rightHeader="743"
            rightFooter="Pontuação"
            leftHeader="Prata 2"
            leftFooter="Ranque"
          >
            <CIcon name="cilGraph" height="52" className="my-4" />
            <span className="font-2xl">Veja seu histórico e classificação</span>
            <ChartLineSimple
              className="position-absolute w-100 h-100"
              backgroundColor="rgba(255,255,255,.1)"
              dataPoints={[120, 200, 350, 402, 587, 624]}
              label="Friends"
              labels="months"
            />
          </CWidgetBrand>
        </CLink>
      </CCol>
    </CRow>
  ) : (
    <CRow>
      <CCol sm="12" lg="12">
        <CWidgetBrand
          color="vk"
          rightHeader="89k"
          rightFooter="friends"
          leftHeader="459"
          leftFooter="feeds"
        >
          <CIcon name="cilGraph" height="56" className="my-4" />
          <span className="font-2xl">Veja seu histórico e classificação</span>
        </CWidgetBrand>
      </CCol>
    </CRow>
  );
};

WidgetsLiga.propTypes = {
  withCharts: PropTypes.bool,
};

export default WidgetsLiga;
