/**
 *  generates MetadataHelper type definition object
 */
(function(generator){

    var
        sampleParser = require('./sampleParser'),
        typeFns = require('./typeFns'),
        util = require('./util'),
        _ = util._;

    generator.create = create;
    generator.defaultConfig = defaultConfig();

    function create(sample, config){
        if (typeof sample !== 'object'){
            util.log.error("cannot create metadata without a sample");
            return;
        }
        config = _.extend({}, generator.defaultConfig, config);

        var data = sampleParser.parse(sample, config);

        return data;

    }

    function defaultConfig() {
        return {
            createTypeFromSampleNode: typeFns.createTypeFromSampleNode,
            defaultIntType: typeFns.BreezeDataTypeNames.Int64,
            findTypeByStructure: typeFns.findTypeByStructure,
            getPropertyNamesFromSampleNode: typeFns.getPropertyNamesFromSampleNode,
            getTypeName: typeFns.getTypeName,
            isMongoDb: false,
            parseSample: sampleParser.parse,
            parseSampleNode: sampleParser.parseSampleNode,
            parseSampleValue: sampleParser.parseSampleValue,
            rootTypeName: 'root',
            singularize: util.singularize,
            supportsNav: true
        };
    }
})(module.exports);
