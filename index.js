var React = require('react');
var GeminiScrollbar = require('gemini-scrollbar');

module.exports = React.createClass({
    displayName: 'GeminiScrollbar',

    propTypes: {
        autoshow: React.PropTypes.bool
    },

    getDefaultProps: function () {
        return {
            autoshow: false
        };
    },

    /**
     * Holds the reference to the GeminiScrollbar instance.
     * @property scrollbar <public> [Object]
     */
    scrollbar: null,

    componentDidMount: function () {
        this.scrollbar = new GeminiScrollbar({
            element: this.getDOMNode(),
            autoshow: this.props.autoshow,
            createElements: false
        }).create();
    },

    componentDidUpdate: function () {
        this.scrollbar.update();
    },

    componentWillUnmount: function () {
        this.scrollbar.destroy();
        this.scrollbar = null;
    },

    render: function () {
        var $__0=    this.props,className=$__0.className,children=$__0.children,other=(function(source, exclusion) {var rest = {};var hasOwn = Object.prototype.hasOwnProperty;if (source == null) {throw new TypeError();}for (var key in source) {if (hasOwn.call(source, key) && !hasOwn.call(exclusion, key)) {rest[key] = source[key];}}return rest;})($__0,{className:1,children:1}),
            classes = '';

        if (className) {
            classes += ' ' + className;
        }

        return (
            React.createElement("div", React.__spread({},  other, {className: classes}), 
                React.createElement("div", {className: "gm-scrollbar -vertical"}, 
                    React.createElement("div", {className: "thumb"})
                ), 
                React.createElement("div", {className: "gm-scrollbar -horizontal"}, 
                    React.createElement("div", {className: "thumb"})
                ), 
                React.createElement("div", {className: "gm-scroll-view"}, 
                    children
                )
            )
        );
    }
});
