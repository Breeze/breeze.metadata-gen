
(function(util){
    util._ = require('underscore');
    util.log = getLogger();
    util.forEach = forEach;
    util.noop = function() {};
    util.singularize = singularize;
    util.TypeEnum = getTypeEnum(); // JavaScript types

    /////////////////
    /**
     * A 'forEach' iterator for both arrays and objects
     *
     * @param thing {Object | Array} - an object or array to iterate
     * @param fn {Function} to apply to each 'element'
     *     array.fn - fn(value, index, array ) - same as array.forEach
     *     object.fn - fn(value, propertyName, object) for each own property
     * @param [thisObj] {Object} - the object that should be 'this'
     */
    function forEach(thing, fn, thisObj){
        fn = fn || util.noop;
        if (Array.isArray(thing)){
            thing.forEach(fn, thisObj);
        } else if (typeof thing === 'object'){
            var theFn = thisObj ? fn.bind(thisObj) : fn;
            for (var prop in thing) {
                if (thing.hasOwnProperty(prop)) {
                    theFn(thing[prop], prop, thing)
                }
            }
        } else {
            throw new Error("util.forEach only works on arrays and objects");
        }
    }

    function getLogger(){
        return {
            error: function(message){ console.log(message);},
            log: function(message){ console.log(message);}
        };
    }

    function getTypeEnum(){ // JavaScript types
        return{
            STRING: "string",
            NUMBER: "number",
            INTEGER: "integer",
            BOOLEAN: "boolean",
            OBJECT: "object",
            ARRAY: "array",
            NULL: "null",
            ANY: "any",
            UNDEFINED: "undefined"
        };
    }

    // really silly English version. A default
    function singularize(name){
        if (typeof name === 'string') {
            var len = name.length;
            if (name.lastIndexOf('ies') == len-3){
                name = name.substr(0, len-3)+'y';
            } else if ( name.lastIndexOf('s') === len-1) {
                name = name.substr(0, len - 1)
            }
        }
        return name;
    }


})(module.exports);
