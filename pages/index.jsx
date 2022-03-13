import React, { useState, useMemo, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CleanLayout from "@/layouts/clean";

import "@/assets/sass/HomePage.scss";

const HomePage = () => {
  return (
    <div className="cover content min-vh-100 w-100">
      <Container fluid>
        <Row className="py-3">
          <div class="col-xl-6 col-lg-5 d-flex justify-content-end">
            <div
              class="pt-2 mx-auto mb-5 mb-lg-0 ms-lg-0 me-xl-7 text-center text-lg-start"
            >
              <h1 class="display-4 text-white pb-2">
                <span class="fw-light">AG-GRID demo - NextJS</span>
              </h1>
              <p class="h3 fw-light text-white opacity-70 line-height-base">
                AG Grid is a feature rich datagrid designed for the major
                JavaScript Frameworks.
              </p>
              <a
                class="d-inline-flex align-items-center text-decoration-none pt-2 mt-4 mb-5 text-white"
                href="/basic"
                data-scroll=""
              >
                <span class="btn btn-icon rounded-circle border-light flex-shrink-0 px-3">
                  <i class="pe-7s-paper-plane py-2"></i>
                </span>
                <span class="ms-3 fw-medium mx-1 text-lg"> View Demos</span>
              </a>
              <hr class="hr-light mt-0 mb-3" />
              <div class="row pl-5 text-l">
                <div class="col-sm-12 mb-4 mb-sm-0">
                  <div class="h2 text-white fw-normal mb-2">
                    Feature
                  </div>
                  <div class="h3 text-white fw-normal mb-2 pl-3 opacity-80">
                    Ag-grid
                  </div>
                  <div class="h3 text-white fw-normal mb-2 pl-3 opacity-80">
                    React
                  </div>
                  <div class="h3 text-white fw-normal mb-2 pl-3 opacity-80">
                    NextJS
                  </div>
                  <div class="h3 text-white fw-normal mb-2 pl-3 opacity-80">
                    React-bootstrap
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

HomePage.layout = CleanLayout;

export default HomePage;
