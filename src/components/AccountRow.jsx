import { Button, Col, Dropdown, DropdownToggle, Form, FormLabel, Row } from "react-bootstrap";

const AccountRow = () => {
  return (
    <Row className="mb-5 align-items-start justify-content-center justify-content-md-start">
      <Col xs={8} lg={3} className="postion-relative mb-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
      </Col>
      <Col xs={12} md={8} className="text-center text-md-start align-items-start">
        <div className="border-bottom mb-3">
          <Form.Control type="text" placeholder="Strive Student" className="mb-3" />
          <Dropdown className="mb-4">
            <h4>Language</h4>
            <DropdownToggle variant="dark">English</DropdownToggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#Home">Italian</Dropdown.Item>
              <Dropdown.Item href="#Home">Spanish</Dropdown.Item>
              <Dropdown.Item href="#Home">Русский</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="border-bottom mb-3">
          <p>Maturity Settings:</p>
          <span class="badge text-bg-secondary px-3 py-2 mb-3">ALL MATURITY RATINGS</span>
          <p>
            Show titles of{" "}
            <span>
              <strong>all maturity ratings</strong>
            </span>{" "}
            for this profile
          </p>
          <Button variant="" className="border border-2 px-4 my-3 general-btn">
            EDIT
          </Button>
        </div>
        <div>
          <p>Autoplay controls</p>
          <Row className="row-cols-1 justify-content-start" role="group" aria-label="Basic checkbox toggle button group">
            <div class="align-items-center">
              <input type="checkbox" class="btn-dark me-lg-3" id="btncheck1" autocomplete="off" />
              <label for="btncheck1">Autoplay next episode in a series on all devices.</label>
            </div>
            <div class="align-items-center">
              <input type="checkbox" class="btn-dark me-lg-3" id="btncheck1" autocomplete="off" />
              <label for="btncheck2">Autoplay previews while browsing on all devices.</label>
            </div>
            {/* HO PROVATO A VEDERE LE CHECKBOX DA REACT BOOSTRAP, MA NON RIESCO A TROVARE IL MODO CHE FACCIA AL CASO MIO */}
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default AccountRow;
