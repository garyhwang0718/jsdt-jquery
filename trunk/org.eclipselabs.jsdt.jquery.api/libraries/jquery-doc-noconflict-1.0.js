var jQueryObject = { };
/**
 * A string containing the jQuery version number.
 * @type {String}
 */
jQueryObject.prototype.jquery = "";
/**
 * Bind two or more handlers to the matched elements, to be executed on alternate clicks.
 * @since 1.0
 * @param {Function} handler A function to execute every even time the element is clicked.
 * @param {Function} handler A function to execute every odd time the element is clicked.
 * @param {Function} [handler] Additional handlers to cycle through after clicks.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggle = function(handler, handler, handler) {};
/**
 * Iterate over a jQuery object, executing a function for each matched element. 
 * @since 1.0
 * @param {Function} func A function to execute for each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.each = function(func) {};
/**
 * Add a collection of DOM elements onto the jQuery stack.
 * @since 1.0
 * @param {Array} elements An array of elements to push onto the stack and make into a new jQuery object.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.pushStack = function(elements) {};
/**
 * Bind an event handler to the "keydown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keydown = function(handler) {};
/**
 * Search for a given element from among the matched elements.
 * @since 1.0
 * @param {Element} element The DOM element or first element within the jQuery object to look for.
 * @returns {Number}
 */
jQueryObject.prototype.index = function(element) {};
/**
 * Retrieve the DOM elements matched by the jQuery object.
 * @since 1.0
 * @param {Number} [index] A zero-based integer indicating which element to retrieve.
 * @returns {Element|Array}
 */
jQueryObject.prototype.get = function(index) {};
/**
 * Return the number of elements in the jQuery object.
 * @since 1.0
 * @returns {Number}
 */
jQueryObject.prototype.size = function() {};
/**
 * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.scroll = function(handler) {};
/**
 * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.resize = function(handler) {};
/**
 * Bind an event handler to the "keyup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keyup = function(handler) {};
/**
 * Bind an event handler to the "keypress" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.keypress = function(handler) {};
/**
 * Bind an event handler to the "submit" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.submit = function(handler) {};
/**
 * Bind an event handler to the "select" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.select = function(handler) {};
/**
 * Bind an event handler to the "change" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.change = function(handler) {};
/**
 * Bind an event handler to the "blur" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.blur = function(handler) {};
/**
 * Bind an event handler to the "focus" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.focus = function(handler) {};
/**
 * Bind an event handler to the "mousemove" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mousemove = function(handler) {};
/**
 * Bind two handlers to the matched elements, to be executed when the mouse pointer enters and leaves the elements.
 * @since 1.0
 * @param {Function} handlerIn A function to execute when the mouse pointer enters the element.
 * @param {Function} handlerOut A function to execute when the mouse pointer leaves the element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.hover = function(handlerIn, handlerOut) {};
/**
 * Bind an event handler to be fired when the mouse leaves an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseleave = function(handler) {};
/**
 * Bind an event handler to be fired when the mouse enters an element, or trigger that handler on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseenter = function(handler) {};
/**
 * Bind an event handler to the "mouseout" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseout = function(handler) {};
/**
 * Bind an event handler to the "mouseover" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseover = function(handler) {};
/**
 * Bind an event handler to the "dblclick" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.dblclick = function(handler) {};
/**
 * Bind an event handler to the "click" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.click = function(handler) {};
/**
 * Bind an event handler to the "mouseup" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mouseup = function(handler) {};
/**
 * Bind an event handler to the "mousedown" JavaScript event, or trigger that event on an element.
 * @since 1.0
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.mousedown = function(handler) {};
/**
 * Bind an event handler to the "error" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.error = function(handler) {};
/**
 * Bind an event handler to the "unload" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.unload = function(handler) {};
/**
 * Bind an event handler to the "load" JavaScript event.
 * @since 1.0
 * @param {Function} handler A function to execute when the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.load = function(handler) {};
/**
 * Specify a function to execute when the DOM is fully loaded.
 * @since 1.0
 * @param {Function} handler A function to execute after the DOM is ready.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ready = function(handler) {};
/**
 * Execute all handlers and behaviors attached to the matched elements for the given event type.
 * @since 1.0
 * @param {String} eventType A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Object} [extraParameters] Additional parameters to pass along to the event handler.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.trigger = function(eventType, extraParameters) {};
/**
 * Register a handler to be called when Ajax requests complete. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxComplete = function(handler) {};
/**
 * Encode a set of form elements as a string for submission.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.serialize = function() {};
/**
 * Attach a function to be executed whenever an Ajax request completes successfully. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxSuccess = function(handler) {};
/**
 * Register a handler to be called when all Ajax requests have completed. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxStop = function(handler) {};
/**
 * Register a handler to be called when the first Ajax request begins. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxStart = function(handler) {};
/**
 * Attach a function to be executed before an Ajax request is sent. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxSend = function(handler) {};
/**
 * Register a handler to be called when Ajax requests complete with an error. This is an <a>Ajax Event</a>.
 * @since 1.0
 * @param {Function} handler The function to be invoked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.ajaxError = function(handler) {};
/**
 * Remove a previously-attached event handler from the elements.
 * @since 1.0
 * @param {String} [eventType] A string containing a JavaScript event type, such as <code>click</code> or <code>submit</code>.
 * @param {Function} [handler] The function that is to be no longer executed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.unbind = function(eventType, handler) {};
/**
 * Attach a handler to an event for the elements.
 * @since 1.0
 * @param {String} eventType A string containing one or more DOM event types, such as "click" or "submit," or custom event names.
 * @param {Object} [eventData] A map of data that will be passed to the event handler.
 * @param {Function} handler A function to execute each time the event is triggered.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.bind = function(eventType, eventData, handler) {};
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @since 1.0
 * @param {selector} selector A string containing a selector expression
 * @param {Element} [context] A DOM Element, Document, or jQuery to use as context
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(selector, context) {};
/**
 * Creates DOM elements on the fly from the provided string of raw HTML.
 * @since 1.0
 * @param {String} html A string of HTML to create on the fly. Note that this parses HTML, <strong>not</strong> XML.
 * @param {document} [ownerDocument] A document in which the new elements will be created
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(html, ownerDocument) {};
/**
 * Binds a function to be executed when the DOM has finished loading.
 * @since 1.0
 * @param {Function} callback The function to execute when the DOM is ready.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.jQuery = function(callback) {};
/**
 * End the most recent filtering operation in the current chain and return the set of matched elements to its previous state.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.end = function() {};
/**
 * Get the siblings of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.siblings = function(selector) {};
/**
 * Perform a custom animation of a set of CSS properties.
 * @since 1.0
 * @param {Map} properties A map of CSS properties that the animation will move toward.
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {String} [easing] A string indicating which easing function to use for the transition.
 * @param {Function} [complete] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.animate = function(properties, duration, easing, complete) {};
/**
 * Get the immediately preceding sibling of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prev = function(selector) {};
/**
 * Adjust the opacity of the matched elements.
 * @since 1.0
 * @param {String} duration A string or number determining how long the animation will run.
 * @param {Number} opacity A number between 0 and 1 denoting the target opacity.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeTo = function(duration, opacity, callback) {};
/**
 * Hide the matched elements by fading them to transparent.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeOut = function(duration, callback) {};
/**
 * Get the ancestors of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.parents = function(selector) {};
/**
 * Display the matched elements by fading them to opaque.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.fadeIn = function(duration, callback) {};
/**
 * Get the parent of each element in the current set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.parent = function(selector) {};
/**
 * Display or hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideToggle = function(duration, callback) {};
/**
 * Hide the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideUp = function(duration, callback) {};
/**
 * Get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.next = function(selector) {};
/**
 * Display the matched elements with a sliding motion.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.slideDown = function(duration, callback) {};
/**
 * Get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.find = function(selector) {};
/**
 * Load data from the server and place the returned HTML into the matched element.
 * @since 1.0
 * @param {String} url A string containing the URL to which the request is sent.
 * @param {Map} data A map or string that is sent to the server with the request.
 * @param {Function} [complete] A callback function that is executed when the request completes.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.load = function(url, data, complete) {};
/**
 * The number of elements in the jQuery object.
 * @type {Number}
 */
jQueryObject.prototype.length = 1;
/**
 * Get the children of each element in the set of matched elements, optionally filtered by a selector.
 * @since 1.0
 * @param {Selector} [selector] A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.children = function(selector) {};
/**
 * Add elements to the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string representing a selector expression to find additional elements to add to the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.add = function(selector) {};
/**
 * The DOM node context originally passed to <code>jQuery()</code>; if none was passed then context will likely be the document.
 * @type {Element}
 */
jQueryObject.prototype.context = null;
/**
 * Remove elements from the set of matched elements.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.not = function(selector) {};
/**
 * Display or hide the matched elements.
 * @since 1.0
 * @param {String} [duration] A string or number determining how long the animation will run.
 * @param {Callback} [callback] A function to call once the animation is complete.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggle = function(duration, callback) {};
/**
 * Hide the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.hide = function() {};
/**
 * Get the current computed width for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQueryObject.prototype.width = function() {};
/**
 * Set the CSS width of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer along with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
jQueryObject.prototype.width = function(value) {};
/**
 * Get the current computed height for the first element in the set of matched elements.
 * @since 1.0
 * @returns {Integer}
 */
jQueryObject.prototype.height = function() {};
/**
 * Set the CSS height of every matched element.
 * @since 1.0
 * @param {String} value An integer representing the number of pixels, or an integer with an optional unit of measure appended (as a string).
 * @returns {jQueryObject}
 */
jQueryObject.prototype.height = function(value) {};
/**
 * Display the matched elements.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.show = function() {};
/**
 * Get the value of a style property for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property.
 * @returns {String}
 */
jQueryObject.prototype.css = function(propertyName) {};
/**
 * Set one or more CSS properties for the  set of matched elements.
 * @since 1.0
 * @param {String} propertyName A CSS property name.
 * @param {String} value A value to set for the property.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.css = function(propertyName, value) {};
/**
 * Create a deep copy of the set of matched elements.
 * @since 1.0
 * @param {Boolean} [withDataAndEvents=false] A Boolean indicating whether event handlers should be copied along with the elements. As of jQuery 1.4, element data will be copied as well.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.clone = function(withDataAndEvents) {};
/**
 * Remove the set of matched elements from the DOM.
 * @since 1.0
 * @param {String} [selector] A selector expression that filters the set of matched elements to be removed.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.remove = function(selector) {};
/**
 * Remove all child nodes of the set of matched elements from the DOM.
 * @since 1.0
 * @returns {jQueryObject}
 */
jQueryObject.prototype.empty = function() {};
/**
 * Wrap an HTML structure around each element in the set of matched elements.
 * @since 1.0
 * @param {String} wrappingElement An HTML snippet, selector expression, jQuery object, or DOM element specifying the structure to wrap around the matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.wrap = function(wrappingElement) {};
/**
 * Insert every element in the set of matched elements before the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted before the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.insertBefore = function(target) {};
/**
 * Insert content, specified by the parameter, before each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert before each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert before each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.before = function(content, content) {};
/**
 * Insert every element in the set of matched elements after the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted after the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.insertAfter = function(target) {};
/**
 * Insert content, specified by the parameter, after each element in the set of matched elements.
 * @since 1.0
 * @param {String} content HTML string, DOM element, or jQuery object to insert after each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert after each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.after = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the beginning of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prependTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the beginning of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, array of elements, HTML string, or jQuery object to insert at the beginning of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the beginning of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.prepend = function(content, content) {};
/**
 * Insert every element in the set of matched elements to the end of the target.
 * @since 1.0
 * @param {Selector} target A selector, element, HTML string, or jQuery object; the matched set of elements will be inserted at the end of the element(s) specified by this parameter.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.appendTo = function(target) {};
/**
 * Insert content, specified by the parameter, to the end of each element in the set of matched elements.
 * @since 1.0
 * @param {String} content DOM element, HTML string, or jQuery object to insert at the end of each element in the set of matched elements.
 * @param {String} [content] One or more additional DOM elements, arrays of elements, HTML strings, or jQuery objects to insert at the end of each element in the set of matched elements.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.append = function(content, content) {};
/**
 * Get the current value of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String|Number|Array}
 */
jQueryObject.prototype.val = function() {};
/**
 * Set the value of each element in the set of matched elements.
 * @since 1.0
 * @param {String} value A string of text or an array of strings corresponding to the value of each matched element to set as selected/checked.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.val = function(value) {};
/**
 * Get the combined text contents of each element in the set of matched elements, including their descendants.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.text = function() {};
/**
 * Set the content of each element in the set of matched elements to the specified text.
 * @since 1.0
 * @param {String} textString A string of text to set as the content of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.text = function(textString) {};
/**
 * Get the HTML contents of the first element in the set of matched elements.
 * @since 1.0
 * @returns {String}
 */
jQueryObject.prototype.html = function() {};
/**
 * Set the HTML contents of each element in the set of matched elements.
 * @since 1.0
 * @param {String} htmlString A string of HTML to set as the content of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.html = function(htmlString) {};
/**
 * Check the current matched set of elements against a selector, element, or jQuery object and return <code>true</code> if at least one of these elements matches the given arguments.
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match elements against.
 * @returns {Boolean}
 */
jQueryObject.prototype.is = function(selector) {};
/**
 * Reduce the set of matched elements to those that match the selector or pass the function's test. 
 * @since 1.0
 * @param {Selector} selector A string containing a selector expression to match the current set of elements against.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.filter = function(selector) {};
/**
 * Add or remove one or more classes from each element in the set of matched elements, depending on either the class's presence or the value of the switch argument.
 * @since 1.0
 * @param {String} className One or more class names (separated by spaces) to be toggled for each element in the matched set.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.toggleClass = function(className) {};
/**
 * Remove a single class, multiple classes, or all classes from each element in the set of matched elements.
 * @since 1.0
 * @param {String} [className] One or more space-separated classes to be removed from the class attribute of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeClass = function(className) {};
/**
 * Remove an attribute from each element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName An attribute to remove; as of version 1.7, it can be a space-separated list of attributes.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.removeAttr = function(attributeName) {};
/**
 * Get the value of an attribute for the first element in the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to get.
 * @returns {String}
 */
jQueryObject.prototype.attr = function(attributeName) {};
/**
 * Set one or more attributes for the set of matched elements.
 * @since 1.0
 * @param {String} attributeName The name of the attribute to set.
 * @param {String} value A value to set for the attribute.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.attr = function(attributeName, value) {};
/**
 * Adds the specified class(es) to each of the set of matched elements.
 * @since 1.0
 * @param {String} className One or more class names to be added to the class attribute of each matched element.
 * @returns {jQueryObject}
 */
jQueryObject.prototype.addClass = function(className) {};
function jQueryEvent(){};
jQueryEvent = new Object();
/**
 * The element where the currently-called jQuery event handler was attached.
 * @type {Element}
 */
jQueryEvent.prototype.delegateTarget = null;
/**
 * The namespace specified when the event was triggered.
 * @type {String}
 */
jQueryEvent.prototype.namespace = "";
/**
 * Prevents the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.   
 * @since 1.0
 */
jQueryEvent.prototype.stopPropagation = function() {};
/**
 *  If this method is called, the default action of the event will not be triggered. 
 * @since 1.0
 * @returns {undefined}
 */
jQueryEvent.prototype.preventDefault = function() {};
/**
 * The difference in milliseconds between the time the browser created the event and January 1, 1970.
 * @type {Number}
 */
jQueryEvent.prototype.timeStamp = 1;
/**
 *  The last value returned by an event handler that was triggered by this event, unless the value was <code>undefined</code>.  
 * @type {Object}
 */
jQueryEvent.prototype.result = {};
/**
 *  For key or mouse events, this property indicates the specific key or button that was pressed.  
 * @type {Number}
 */
jQueryEvent.prototype.which = 1;
/**
 * The mouse position relative to the top edge of the document. 
 * @type {Number}
 */
jQueryEvent.prototype.pageY = 1;
/**
 * The mouse position relative to the left edge of the document. 
 * @type {Number}
 */
jQueryEvent.prototype.pageX = 1;
/**
 *  The current DOM element within the event bubbling phase.  
 * @type {Element}
 */
jQueryEvent.prototype.currentTarget = null;
/**
 *   The other DOM element involved in the event, if any. 
 * @type {Element}
 */
jQueryEvent.prototype.relatedTarget = null;
/**
 * An optional data map passed to an event method when the current executing handler is bound.  
 */
jQueryEvent.prototype.data = {};
/**
 *  The DOM element that initiated the event.  
 * @type {Element}
 */
jQueryEvent.prototype.target = null;
/**
 *  Describes the nature of the event.  
 * @type {String}
 */
jQueryEvent.prototype.type = "";
/**
 * Accepts a string containing a CSS selector which is then used to match a set of elements.
 * @returns {jQueryObject}
 */
function jQuery() {};
