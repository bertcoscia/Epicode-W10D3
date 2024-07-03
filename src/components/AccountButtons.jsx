import { Button } from "react-bootstrap";

const AccountButtons = () => {
  return (
    <div className="d-flex flex-column align-items-center flex-md-row justify-content-md-evenly">
      <Button variant="" className="d-block d-md-inline-block btn border border-2 px-4 my-3 general-btn">
        SAVE
      </Button>
      <Button variant="" className="d-block d-md-inline-block btn border border-2 px-4 my-3 general-btn">
        CANCEL
      </Button>
      <Button variant="danger" className="d-block d-md-inline-block btn border border-2 px-4 my-3 general-btn-danger">
        DELETE
      </Button>
    </div>
  );
};

export default AccountButtons;
