import React from 'react';
import {
    Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import Board from "../Board/Board";
import CardDetails from "../CardDetails/CardDetails";
import { ConnectedRouter } from 'react-router-redux';
import { history } from "../../store/index";

import './App.css';
import { fetchListSaga } from '../../actions/lists';
import { fetchCardsSaga } from '../../actions/card';


class App extends React.Component {

    componentDidMount() {
        this.props.onFetchList();
        this.props.onFetchCards();
		}

    render() {
			return (
				<ConnectedRouter history={history}>
					<div>
						<Route component={Board}/>
						<Route path="/details/:id" component={CardDetails} />
					</div>
				</ConnectedRouter>
			);
    }
}

const mapStateToProps = (state) => ({})

export default connect(
  mapStateToProps,
    { 
        onFetchList: fetchListSaga,
        onFetchCards: fetchCardsSaga,
    }
)(App)