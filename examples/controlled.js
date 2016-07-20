webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(337);


/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(35);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcEditorMention = __webpack_require__(174);
	
	var _rcEditorMention2 = _interopRequireDefault(_rcEditorMention);
	
	var _draftJs = __webpack_require__(179);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var originSuggestions = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']; // use jsx to render html, do not modify simple.html
	
	var MentionEditor = _react2.default.createClass({
	  displayName: 'MentionEditor',
	  getInitialState: function getInitialState() {
	    return {
	      suggestions: originSuggestions,
	      editorState: _draftJs.EditorState.createEmpty()
	    };
	  },
	  onSearchChange: function onSearchChange(value) {
	    var searchValue = value.toLowerCase();
	    var filtered = originSuggestions.filter(function (suggestion) {
	      return suggestion.toLowerCase().indexOf(searchValue) !== -1;
	    });
	    this.setState({
	      suggestions: filtered
	    });
	  },
	  onChange: function onChange(editorState) {
	    this.setState({
	      editorState: editorState
	    });
	  },
	  reset: function reset() {
	    this.refs.mention.reset();
	  },
	  render: function render() {
	    var _state = this.state;
	    var suggestions = _state.suggestions;
	    var editorState = _state.editorState;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(
	        'button',
	        { onClick: this.reset },
	        ' reset '
	      ),
	      _react2.default.createElement(_rcEditorMention2.default, {
	        style: { width: 300 },
	        ref: 'mention',
	        onSearchChange: this.onSearchChange,
	        defaultValue: 'hello @afc163 ',
	        onChange: this.onChange,
	        value: editorState,
	        suggestions: suggestions, prefix: '@'
	      })
	    );
	  }
	});
	
	_reactDom2.default.render(_react2.default.createElement(
	  'div',
	  null,
	  _react2.default.createElement(
	    'p',
	    null,
	    ' you can @ one of afc163, benjycui, yiminghe, jljsj33, simaQ, YuhangGe, dqaria, RaoHai'
	  ),
	  _react2.default.createElement(MentionEditor, null)
	), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=controlled.js.map