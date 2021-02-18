import { Component, Fragment } from "react";
import Modal from "./components/UI/Modal/Modal";

const withErrorHandler = (WrappedComponent: any, axios: any) => {
    return class extends Component {

        state = {
            showError: false,
            error: null
        }
        componentDidMount() {
            axios.interceptors.response.use((req: any) => {
                this.setState({ showError: true, error: null })
                return req;
            });
            axios.interceptors.response.use(null, (error: any) => {
                this.setState({ showError: true, error: error })
            });
        };


        render() {
            return (
                <Fragment>
                    <Modal show={this.state.showError} modalClosed={() => { this.setState({ showError: false }) }}>
                        {this.state.error ? this.state.error : null}
                    </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;