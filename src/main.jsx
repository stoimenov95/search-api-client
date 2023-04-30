import React from "react";
import ReactDOM from "react-dom/client";

import App from './App.jsx';
import "./assets/scss/_index.scss";

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error});
        console.error('Application error', error, errorInfo);
    }

    render() {
        if (this.state.error) {
            return (
                <div className={'alert error'}>
                    <p>{'Something went wrong.'}</p>
                    <p>{'We are working on it'} <a href={'javascript:location.reload();'}>{'Try again.'}</a></p>
                </div>
            );
        } else {
            return (
				<App/>
            );
        }
    }
}

ReactDOM.createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<RootComponent/>
	</React.StrictMode>
);

