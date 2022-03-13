import React, { Component } from 'react'
import { Container } from 'react-bootstrap'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid className="d-table">
          <nav className="float-left">
            <ul>
              <li>
                <a href="https://github.com/tampm92/demo-nextjs-ag-grid-react-bootstrap" target="_blank">Git</a>
              </li>
              <li>
                <a href="https://tampm.com" target="_blank">My Website</a>
              </li>
            </ul>
          </nav>
          <p className="copyright float-right">
            &copy; {new Date().getFullYear()}{" - "}
            <a href="https://tampm.com" target="_blank" className="text-success">
              tampm
            </a>
          </p>
        </Container>
      </footer>
    )
  }
}

export default Footer