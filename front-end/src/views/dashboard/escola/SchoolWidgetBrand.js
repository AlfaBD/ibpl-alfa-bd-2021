import React from "react";
import PropTypes from "prop-types";
import { CWidgetBrand, CRow, CCol, CCard, CCardBody } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import ChartLineSimple from "../../charts/ChartLineSimple";

const SchoolWidgetBrand = ({ withCharts }) => {
  // render

  return (
    <CRow>
      <CCol sm="6" lg="3">
        <CWidgetBrand
          color="facebook"
          rightHeader="89k"
          rightFooter="friends"
          leftHeader="459"
          leftFooter="feeds"
        >
          <CIcon name="cib-facebook" height="56" className="my-4" />
        </CWidgetBrand>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetBrand
          color="twitter"
          rightHeader="973k"
          rightFooter="followers"
          leftHeader="1.792"
          leftFooter="tweets"
        >
          <CIcon name="cib-twitter" height="56" className="my-4" />
        </CWidgetBrand>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetBrand
          color="linkedin"
          rightHeader="500+"
          rightFooter="contracts"
          leftHeader="292"
          leftFooter="feeds"
        >
          <CIcon name="cib-linkedin" height="56" className="my-4" />
        </CWidgetBrand>
      </CCol>

      <CCol sm="6" lg="3">
        <CWidgetBrand
          rightHeader="12"
          rightFooter="events"
          leftHeader="4"
          leftFooter="meetings"
          color="gradient-warning"
        >
          <CIcon name="cil-calendar" height="56" className="my-4" />
        </CWidgetBrand>
      </CCol>
    </CRow>
  );
};

SchoolWidgetBrand.propTypes = {
  withCharts: PropTypes.bool,
};

export default SchoolWidgetBrand;
