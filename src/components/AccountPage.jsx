import { Component } from "react";
import AccountNav from "./AccountNav";
import { Container } from "react-bootstrap";
import AccountRow from "./AccountRow";
import AccountButtons from "./AccountButtons";

class AccountPage extends Component {
  state = {};

  render() {
    return (
      <>
        <AccountNav />
        <Container>
          <AccountRow />
          <hr />
          <AccountButtons />
        </Container>
      </>
    );
  }
}

export default AccountPage;
