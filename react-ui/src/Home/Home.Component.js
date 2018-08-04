import React from 'react'
import './Home.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as appConfig from './../Config/Config';
import * as actions from '../redux/Action/homeAction';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

class Home extends React.Component {

	constructor(props) {
      super(props);
      this.state = {
      	data: []
      }
      this.options = {
      	onPageChange: this.onPageChange.bind(this)
   	  };
   	}

	componentWillMount() {
		const {actions, formdate} = this.props;
		actions.onGetCoinDetails();
	}


	onTestFunc(e){
		const {history, formdate, actions}=this.props
		history.push('/Test/');
	}

	DetailsOption(cell, row){
	  return '<div class="chat-option" ><i class="glyphicon glyphicon-list-alt" ></i></div>';
	}

  	onPageChange(page, sizePerPage) {
  	}

	render(){
		const {history, formdate, actions}=this.props
		var options = {
			onRowClick: function(row, target){
				history.push('/chart/'+ row.name);
			}
		}

		return (
			<div className="coins-details-container">
				<div className="coins-details">
				 <BootstrapTable data={formdate.coins} options={options}  striped={true} hover={true} pagination options={ this.options }>
				      <TableHeaderColumn dataField="name" isKey={true} dataAlign="center" dataSort={true}>Name</TableHeaderColumn>
				      <TableHeaderColumn dataField="symbol" dataSort={true}>Symbol</TableHeaderColumn>
				      <TableHeaderColumn dataField="market_cap_usd"  dataSort={true}>Market Cap</TableHeaderColumn>
				      <TableHeaderColumn dataField="price_usd" dataSort={true}>Price (Usd)</TableHeaderColumn>
				      <TableHeaderColumn dataField="24h_volume_usd"  dataSort={true}>Valume(24)</TableHeaderColumn>
				      <TableHeaderColumn dataField="total_supply"  dataSort={true}>Supply</TableHeaderColumn>
				      <TableHeaderColumn dataField="percent_change_24h" dataSort={true}>Change</TableHeaderColumn>
				  </BootstrapTable>
				</div>
			</div>
        )
	}
}



// const mapStateToProps = state => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }

const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    return {
        formdate: state
    };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onSaveRangeAction(data){
//       dispatch(onSaveRangeAct(data))
//     },
//     navigateToChart(data){
//     	dispatch(navigateToChartAct(data))
//     }
//   }
// }

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

