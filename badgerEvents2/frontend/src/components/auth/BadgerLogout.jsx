import axios from "axios"
import { useNavigate } from "react-router-dom";
import { Row, Col, Container, Pagination, Form, Button } from "react-bootstrap";



const BadgerLogout = (props) => {
    const navigate = useNavigate();
    const changeAuth = () => {
      props.changeAuth();
      navigate('/');
    };

    return (
      <div className="background">
        
            <Button className="auth-button" onClick={changeAuth}>
              Logout
            </Button >

      </div>
    );
  };
  
  export default BadgerLogout;