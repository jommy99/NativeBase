import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import mapPropsToStyleNames from "../Utils/mapPropsToStyleNames";

class Content extends Component {
	render() {
		return (
			<ScrollView
				automaticallyAdjustContentInsets={false}
				keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps ? this.props.keyboardShouldPersistTaps : 'handled'}
				ref={c => {
					this._scrollview = c;
					this._root = c;
				}}
				{...this.props}
			>
				{this.props.children}
			</ScrollView>
		);
	}
}

Content.propTypes = {
	style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
	padder: PropTypes.bool,
	disableKBDismissScroll: PropTypes.bool, // ignored on web
	enableResetScrollToCoords: PropTypes.bool, // ignored on web
	keyboardShouldPersistTaps: PropTypes.string
};

const StyledContent = connectStyle("NativeBase.Content", {}, mapPropsToStyleNames)(Content);

export { StyledContent as Content };
