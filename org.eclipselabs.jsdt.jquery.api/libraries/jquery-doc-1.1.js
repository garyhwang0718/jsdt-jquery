var jQueryObject = { };
jQueryObject.prototype = {
/**
 * Create a new jQuery object with elements added to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQueryObject}
 */
add: function(selector) {},
/**
 * Adds the specified class(es) to each element in the set of matched elements.
 * @since 1.0
 * @param {String} className One or more space-separated classes to be added to the class attribute of each matched element.
 * @returns {jQueryObject}
 */
addClass: function(className) {},
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {Array} content HTML string, DOM element, array of elements, or jQuery object to insert after each element in the set of matched elements.
 * @param {Array} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQueryObject}
 */
after: function(content, content) {},
/**
 * Perform a custom animation of a set of CSS properties.
 * @since 1.0
 * @param {PlainObject} properties An object of CSS properties and values that the animation will move toward.
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {String} [easing=swing] A string indicating which easing function to use for the transition.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
animate: function(properties, duration, easing, complete) {},
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {Array} content DOM element, array of elements, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {Array} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
append: function(content, content) {},
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Array} target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
appendTo: function(target) {},
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
attr: function(attributeName) {},
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {Number} value A value to set for the attribute.
 * @returns {jQueryObject}
 */
attr: function(attributeName, value) {},
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {Array} content HTML string, DOM element, array of elements, or jQuery object to insert before each element in the set of matched elements.
 * @param {Array} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQueryObject}
 */
before: function(content, content) {},
/**
 * Attach a handler to an event for the elements.
 * @since 1.0
 * @param {String} eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
 * @param {Anything} [eventData] An object containing data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
bind: function(eventType, eventData, handler) {},
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
blur: function(handler) {},
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
change: function(handler) {},
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
children: function(selector) {},
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
click: function(handler) {},
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQueryObject}
 */
clone: function(withDataAndEvents) {},
/**
 * The DOM node context originally passed to <code>jQuery()</code>; if none was passed then context will likely be the document.
 * @type {Element}
 */
context: null,
/**
 * Get the computed style properties for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
css: function(propertyName) {},
/**
 * Set one or more CSS properties for the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {Number} value A value to set for the property.
 * @returns {jQueryObject}
 */
css: function(propertyName, value) {},
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
dblclick: function(handler) {},
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQueryObject}
 */
each: function(func) {},
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQueryObject}
 */
empty: function() {},
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQueryObject}
 */
end: function() {},
/**
 * Reduce the set of matched elements to the one at the specified index.
 * @since 1.1
 * @param {Integer} index An integer indicating the 0-based position of the element. 
 * @returns {jQueryObject}
 */
eq: function(index) {},
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
error: function(handler) {},
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
fadeIn: function(duration, complete) {},
/**
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
fadeOut: function(duration, complete) {},
/**
 * Adjust the opacity of the matched elements.
 * @since 1.0
 * @param {Number} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
fadeTo: function(duration, opacity, complete) {},
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQueryObject}
 */
filter: function(selector) {},
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
find: function(selector) {},
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
focus: function(handler) {},
/**
 * Retrieve one of the elements matched by the jQuery object.
 * @since 1.0
 * @param {Integer} index A zero-based integer indicating which element to retrieve.
 * @returns {Element}
 */
get: function(index) {},
/**
 * Retrieve the elements matched by the jQuery object.
 * @since 1.0
 * @returns {Array}
 */
get: function() {},
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Number}
 */
height: function() {},
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {Number} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
height: function(value) {},
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
hide: function() {},
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQueryObject}
 */
hover: function(handlerIn, handlerOut) {},
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
html: function() {},
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {htmlString} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQueryObject}
 */
html: function(htmlString) {},
/**
 * Search for a given element from among the matched elements.
 * @since 1.0
 * @param {Element} element The DOM element or first element within the jQuery object to look for.
 * @returns {Number}
 */
index: function(element) {},
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Array} target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
insertAfter: function(target) {},
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Array} target A selector, element, array of elements, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
insertBefore: function(target) {},
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
is: function(selector) {},
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQueryObject}
 */
jQuery: function(selector, context) {},
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {htmlString} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created.
 * @returns {jQueryObject}
 */
jQuery: function(html, ownerDocument) {},
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQueryObject}
 */
jQuery: function(callback) {},
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
jquery: "",
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
keydown: function(handler) {},
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
keypress: function(handler) {},
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
keyup: function(handler) {},
/**
 * The number of elements in the jQuery object.
 * @type {Integer}
 */
length: 1,
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
load: function(handler) {},
/**
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {PlainObject} [data] A plain object or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQueryObject}
 */
load: function(url, data, complete) {},
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mousedown: function(handler) {},
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mouseenter: function(handler) {},
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mouseleave: function(handler) {},
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mousemove: function(handler) {},
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mouseout: function(handler) {},
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mouseover: function(handler) {},
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
mouseup: function(handler) {},
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
next: function(selector) {},
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Array} selector A string containing a selector expression, a DOM element, or an array of elements to match against the set.
 * @returns {jQueryObject}
 */
not: function(selector) {},
/**
 * Attach a handler to an event for the elements. The handler is executed at most once per element per event type.
 * @since 1.1
 * @param {String} events A string containing one or more JavaScript event types, such as "click" or "submit," or custom event names.
 * @param {PlainObject} [data] An object containing data that will be passed to the event handler.
 * @param {Function} handler A function to execute at the time the event is triggered.
 * @returns {jQueryObject}
 */
one: function(events, data, handler) {},
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
parent: function(selector) {},
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
parents: function(selector) {},
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {Array} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {Array} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
prepend: function(content, content) {},
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Array} target A selector, element, HTML string, array of elements, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
prependTo: function(target) {},
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
prev: function(selector) {},
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQueryObject}
 */
pushStack: function(elements) {},
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQueryObject}
 */
ready: function(handler) {},
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQueryObject}
 */
remove: function(selector) {},
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
 * @returns {jQueryObject}
 */
removeAttr: function(attributeName) {},
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQueryObject}
 */
removeClass: function(className) {},
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
resize: function(handler) {},
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
scroll: function(handler) {},
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
select: function(handler) {},
/**
 * A selector representing selector passed to jQuery(), if any, when creating the original set.
 * @type {String}
 */
selector: "",
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
serialize: function() {},
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
show: function() {},
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
siblings: function(selector) {},
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Integer}
 */
size: function() {},
/**
 * Reduce the set of matched elements to a subset specified by a range of indices.
 * @since 1.1
 * @param {Integer} start An integer indicating the 0-based position at which the elements begin to be selected. If negative, it indicates an offset from the end of the set.
 * @param {Integer} [end] An integer indicating the 0-based position at which the elements stop being selected. If negative, it indicates an offset from the end of the set. If omitted, the range continues until the end of the set.
 * @returns {jQueryObject}
 */
slice: function(start, end) {},
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
slideDown: function(duration, complete) {},
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
slideToggle: function(duration, complete) {},
/**
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
slideUp: function(duration, complete) {},
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
submit: function(handler) {},
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
text: function() {},
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {Number} text The text to set as the content of each matched element. When Number or Boolean is supplied, it will be converted to a String representation.
 * @returns {jQueryObject}
 */
text: function(text) {},
/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * @since 1.0
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} [handler] Additional handlers to cycle through after clicks.
 * @returns {jQueryObject}
 */
toggle: function(handler, handler, handler) {},
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {Number} [duration=400] A string or number determining how long the animation will run.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
toggle: function(duration, complete) {},
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the state argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQueryObject}
 */
toggleClass: function(className) {},
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Array} [extraParameters] Additional parameters to pass along to the event handler.
 * @returns {jQueryObject}
 */
trigger: function(eventType, extraParameters) {},
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQueryObject}
 */
unbind: function(eventType, handler) {},
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
unload: function(handler) {},
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 */
val: function() {},
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {Number} value A string of text, a number, or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQueryObject}
 */
val: function(value) {},
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Number}
 */
width: function() {},
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {Number} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
width: function(value) {},
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {jQuery} wrappingElement A selector, element, HTML string, or jQuery object specifying the structure to wrap around the matched elements. When you pass a jQuery collection containing more than one element, or a selector matching more than one element, the first element will be used.
 * @returns {jQueryObject}
 */
wrap: function(wrappingElement) {},
};
var jQueryEvent = { };
jQueryEvent.prototype = {
/**
 *  The current DOM element within the event bubbling phase.  
 * @type {Element}
 */
currentTarget: null,
/**
 * An optional object of data passed to an event method when the current executing handler is bound.  
 * @type {Object}
 */
data: {},
/**
 * The element where the currently-called jQuery event handler was attached.
 * @type {Element}
 */
delegateTarget: null,
/**
 * Indicates whether the META key was pressed when the event fired.
 * @type {Boolean}
 */
metaKey: true,
/**
 * The namespace specified when the event was triggered.
 * @type {String}
 */
namespace: "",
/**
 * The mouse position relative to the left edge of the document.
 * @type {Number}
 */
pageX: 1,
/**
 * The mouse position relative to the top edge of the document.
 * @type {Number}
 */
pageY: 1,
/**
 * If this method is called, the default action of the event will not be triggered.
 * @since 1.0
 * @returns {undefined}
 */
preventDefault: function() {},
/**
 * The other DOM element involved in the event, if any.
 * @type {Element}
 */
relatedTarget: null,
/**
 * The last value returned by an event handler that was triggered by this event, unless the value was <code>undefined</code>.
 * @type {Object}
 */
result: {},
/**
 * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
 * @since 1.0
 */
stopPropagation: function() {},
/**
 *  The DOM element that initiated the event.  
 * @type {Element}
 */
target: null,
/**
 * The difference in milliseconds between the time the browser created the event and January 1, 1970.
 * @type {Number}
 */
timeStamp: 1,
/**
 * Describes the nature of the event.
 * @type {String}
 */
type: "",
/**
 * For key or mouse events, this property indicates the specific key or button that was pressed.
 * @type {Number}
 */
which: 1,
};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @returns {jQueryObject}
 */
function jQuery() {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @returns {jQueryObject}
 */
function $() {};
