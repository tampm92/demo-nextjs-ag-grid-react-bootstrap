import React from 'react'
import { Card, Dropdown } from 'react-bootstrap'

const ToggleLink = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    data-toggle="dropdown"
  >
    {children}
  </a>
))

const Tables = (props) => {
  return (
    <Card className={props.className}>
      <Card.Header>
        <div className="card-actions float-right">
          <Dropdown alignRight>
            <Dropdown.Toggle as={ToggleLink} variant="success" id="dropdown-basic">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal align-middle"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <h5 className="card-title mb-0">{props.title}</h5>
      </Card.Header>
      <Card.Body className={props.bodyClassName}>
        {props.children}
      </Card.Body>
    </Card>
  )
}

export default Tables