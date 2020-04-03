import * as React from "react";
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import LoginForm from 'src/components/LoginForm';
import Card from "../../components/Card";
import Container from "../../components/Container";
import Title from "../../components/Title";
import { ILogin, login as loginThunk } from '../../ducks/Users';

interface ILoginProps {
  login: (a: ILogin) => void
}

class Login extends React.Component<ILoginProps> {
  public render() {
    const { login } = this.props
    return (
      <Container center={true}>
        <Card>
            <Title>Iniciar sesión</Title>
            <LoginForm onSubmit={login} />
        </Card>
      </Container>
    );
  }
}

// recibe el como param el state y devuelve el state para q no de error
const mapStateToProps = (state: any) => state

// esta funcion va a recibir un payload son todos los datos del formulario
const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
  login: (payload: any) => dispatch(loginThunk(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
