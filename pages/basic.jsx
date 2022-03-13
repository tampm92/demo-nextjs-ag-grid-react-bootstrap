import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";

import "@/assets/sass/HomePage.scss";

const HomePage = () => {
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const columnDefs = useMemo(() => [
    { field: "athlete", width: 150 },
    { field: "age", width: 90 },
    { field: "country", width: 150 },
    { field: "year", width: 90 },
    { field: "date", width: 150 },
    { field: "sport", width: 150 },
    { field: "gold", width: 100 },
    { field: "silver", width: 100 },
    { field: "bronze", width: 100 },
    { field: "total", width: 100 },
  ]);

  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [rowData]);

  const onGridReady = (params) => {
    setGridApi(params.api);

    fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
  };

  return (
    <div className="content min-vh-100">
      <Container fluid>
        <Row>
          <Col>
            <div
              style={{ height: "calc(100vh - 125px)" }}
              className="ag-theme-alpine-dark"
            >
              <AgGridReact
                  modules={[ClientSideRowModelModule]}
                  rowData={rowData}
                  columnDefs={columnDefs}
                  onGridReady={onGridReady}
                ></AgGridReact>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
