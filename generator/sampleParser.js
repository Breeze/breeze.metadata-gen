/**
 *  function to parse a sample
 */
(function(sampleParser){
    var util = require('./util'),
        _ = util._;

    sampleParser.parse = parse;
    sampleParser.parseSampleNode = parseSampleNode;
    sampleParser.parseSampleValue = parseSampleValue;

    var nextSampleNodeId = 0;

    function findHighestSampleNodeId(node){
        if (node == null || typeof node !== 'object'){
            return;
        }
        // either an array or an object
        var id = node.$id;
        if (id && !isNaN(id)){ nextSampleNodeId = Math.max(nextSampleNodeId, math.ceil(id)) + 1;}
        util.forEach(node, function(n){
            findHighestSampleNodeId(n);
        });
    }

    function findTypeByName(name){
        if (typeof name === 'string') {
            var types = this.types;
            for (var prop in types) {
                if (types.hasOwnProperty(prop)) {
                    var type = types[prop];
                    if (type.name === name) {
                        return type;
                    }
                }
            }
        }
        return null;
    }

    function parse(sample, config){
        if (!Array.isArray(sample)) { sample = [sample];}

        findHighestSampleNodeId(sample);

        var parsed = {
            findTypeByName: findTypeByName,
            types: {},
            sampleNodes: []
        };

        sample.forEach(function(sampleNode){
            parseSampleNode(sampleNode, parsed, config);
        });

        return parsed;
    }

    function parseSampleNode(sampleNode, parsed, config, parentNode, parentProperty){
        var ref = sampleNode.$ref;
        if (ref && !isNaN(ref)) { return {$ref: Math.ceil(ref)};}

        var nodeId = sampleNode.$id || (sampleNode.$id = nextSampleNodeId++);

        createOrUpdateType(sampleNode, parsed, config, parentNode, parentProperty);

        parsed.sampleNodes[nodeId] = sampleNode;

        // return the nodeId, not the sampleNode itself
        // can get to this sampleNode via parsed.samples[$ref]
        return {$ref: nodeId};
    }

    function createOrUpdateType(sampleNode, parsed, config, parentNode, parentProperty){
        var typeName = config.getTypeName(sampleNode, parsed, config, parentNode, parentProperty);
        if(!typeName) {return; } // nothing we can do w/o a name
        var type = parsed.findTypeByName(typeName);

        var t = config.createTypeFromSampleNode(sampleNode, parsed, config, parentNode, parentProperty);
        if (type){
            // update type by extending with t.properties not already in type.properties
            var properties = type.properties;
            util.forEach(t.properties, function(tProp){
                if (!properties.hasOwnProperty(tProp.name)){
                    tProp.isNullable = true;
                    properties[tProp.name] = tProp;
                }
            });
        } else {
            // create new type
            t.name = typeName;
            parsed.types[typeName] = type = t;
        }

        sampleNode.$type = type;
        util.forEach(type.properties, updateProperty);

        function updateProperty(prop){
            var value = sampleNode[prop.name];
            if (Array.isArray(value)){
                prop.isScalar = prop.isScalar == null ? false : (prop.isScalar ? 'mixed' : false);
                var newValues = [];
                value.forEach(function(v){
                    var newValue = config.parseSampleValue(v, parsed, config, sampleNode, prop.name );
                    newValues.push(newValue);
                });
                var isEmpty = newValues.length === 0;
                setIsNullable(prop, isEmpty);
                if (!isEmpty){
                    prop.sampleValues.push(newValues);
                }
            } else {
                value = config.parseSampleValue(value, parsed, config, sampleNode, prop.name );
                var isNull = value == null; // null or undefined
                setIsNullable(prop, isNull);
                if (!isNull){
                    prop.isScalar = prop.isScalar == null ? true : (prop.isScalar ? true : 'mixed');
                    prop.sampleValues.push(value);
                }
            }
        }
    }


    function parseSampleValue(value, parsed, config, parentNode, parentProperty){
        if (value === null || value === undefined || typeof value !== 'object'){
            return value;
        } else if (Array.isArray(value)) {
            var msg = "Parser cannot handle the array of arrays in '" + parentProperty +
                "' of sample node $" + (parentNode.$id || '??');
            util.log.error(msg);
            return undefined;
        }  else {
            var pnames =
                config.getPropertyNamesFromSampleNode(value, parsed, config, parentNode, parentProperty);
            if (pnames.length === 0 ) {
                // date or binary or something that isn't a schema type
                return value;
            } else {
                // value is a nested sampleNode
                return config.parseSampleNode(value, parsed, config, parentNode, parentProperty);
            }
        }
    }

    function setIsNullable(prop, isNull){
        if (prop.isNullable == null) {
            prop.isNullable = isNull;
        } else {
            prop.isNullable = isNull ? true : prop.isNullable;
        }
    }


})(module.exports);
