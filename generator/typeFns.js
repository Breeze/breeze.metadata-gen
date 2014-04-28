
(function(typeFns){

    var util = require('./util');

    typeFns.BreezeDataTypeNames = getBreezeDataTypeNames();
    typeFns.createTypeFromSampleNode = createTypeFromSampleNode;
    typeFns.findTypeByStructure = findTypeByStructure;
    typeFns.getTypeName = getTypeName;
    typeFns.getPropertyNamesFromSampleNode = getPropertyNamesFromSampleNode;

    //////////////////////

    // Initialize type descriptor from a sampleNode
    function createTypeFromSampleNode(sampleNode, parsed, config, parentNode, parentProperty){
        var propertyNames =
            config.getPropertyNamesFromSampleNode(sampleNode, parsed, config, parentNode, parentProperty);
        var type = {
            properties: {}
        };
        propertyNames.forEach(function (name){
            type.properties[name]={
                name: name,
                dataTypeName: null, // don't know yet
                isScalar: null,     // don't know yet
                isNullable: null,   // don't know yet
                sampleValues: []
            }
        });
        return type;
    }

    // Try to determine if the sampleNode's type has been determined before
    // by matching its structure with previously discovered types
    function findTypeByStructure(sampleNode, parsed, config, parentNode, parentProperty){
        // Not ready
        return null;
    }

    function getBreezeDataTypeNames(){
        return {
            Binary: 'Binary',
            Boolean: 'Boolean',
            Byte: 'Byte',
            DateTime: 'DateTime',
            DateTimeOffset: 'DateTimeOffset',
            Decimal: 'Decimal',
            Double: 'Double',
            Guid: 'Guid',
            Int16: 'Int16',
            Int32: 'Int32',
            Int64: 'Int64',
            MongoObjectId: 'MongoObjectId',
            Single: 'Single',
            String: 'String',
            Time: 'Time',
            Undefined: 'Undefined'
        };
    }

    function getPropertyNamesFromSampleNode(sampleNode){
        return Object.keys(sampleNode).filter(function (name){
            return name[0] !== '$'; // any name not beginning with '$'
        });
    }

    // Try to determine if the type name for the sample node
    function getTypeName(sampleNode, parsed, config, parentNode, parentProperty){
        var name = sampleNode.$type;
        if (!name) {
            if (parentProperty){
                name = config.singularize(parentProperty);
            } else if (!parentNode){
                name = config.rootTypeName;
            }
        }
        return name;
    }

})(module.exports);
