import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from './actions';

const options = {
	withRef: true
};

//我们是可选择性的把action传入到props里面去,以便省事,但是也可以把所有的action直接绑定到store里面去
//以便所有的方法统一进行调用(我们需要更加傲气点)
//假如说我们不需要这样子来写的话,其实也就不需要套这么多层了

export default function connectComponent({ mapStateToProps, mapDispatchToProps, mergeProps, LayoutComponent }) {
	return connect(
		mapStateToProps || function (state) {
			return {};
		},
		// mapDispatchToProps || function (dispatch) {
		// 	return {
		// 		actions: bindActionCreators(actions, dispatch),
		// 		dispatch
		// 	}
		// },
		mapDispatchToProps || function (dispatch) {
			return {
				dispatch
			}
		},
		mergeProps,
		options
	)(LayoutComponent);
}
