/**
 * JsonSchema generator
 * http://www.jsonschema.net/js/Schema.js
 * Here for inspiration; not part of this generator
 * This generator used Backbone and BB models
 */

// Namespace.
var JsonSchema = new function() {

    StateEnum = {
        COMPLETE: 0
    }

    /* Models.js */
    Type = Backbone.Model.extend({
        defaults: {
            t: undefined
        }
    });

    TypeList = Backbone.Collection.extend({
        model: Type,

        filterByType: function(aType) {
            return this.filter(

                function(item) {
                    return item.get('t') == aType;
                });
        },

        isObject: function() {
            return (this.filterByType('object').length > 0);
        },

        isString: function() {
            return (this.filterByType('string').length > 0);
        },

        isNumber: function() {
            return (this.filterByType('number').length > 0);
        },

        isInteger: function() {
            return (this.filterByType('integer').length > 0);
        },

        isBoolean: function() {
            return (this.filterByType('boolean').length > 0);
        },

        isNull: function() {
            return (this.filterByType('null').length > 0);
        },

        isAny: function() {
            return (this.filterByType('any').length > 0);
        },

        isArray: function() {
            return (this.filterByType('array').length > 0);
        }
    });

    /* Util.js   */
    TypeEnum = {
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

    ListTypeEnum = {
        PROPERTIES: "properties",
        ITEMS: "items"
    };

    function ProxyRequest(url, result) {
        $.ajax({
            url: 'proxy.php',
            data: {
                action: 'ref',
                url: url
            },
            type: 'post',
            dataType: 'json',
            global: false,
            async: false,
            success: function(output) {
                result['value'] = output;
            }
        });
    }

    function RealTypeOf(v) {
        if (typeof(v) == TypeEnum.OBJECT) {

            if (v === null) {
                return TypeEnum.NULL;
            }
            if (v.constructor == (new Array).constructor) {
                return TypeEnum.ARRAY;
            }
            return TypeEnum.OBJECT;
        }
        return typeof(v);
    }
    /* end Util.js */

    function inherit(parent, child) {

        // Copy simple attributes that have a value, from child into parent.
        parent.set(child.simpleAttributesWithVal());

        /* Copy all complex attributes from child into parent.
         Array will be empty if there are no values. */
        parent.addItem(_.toArray(child.get('items')));
        parent.addExtension(_.toArray(child.get('extensions')));
        parent.addOrReplaceProperties(_.toArray(child.get('properties')));
        parent.addTypes(_.toArray(child.get('type')));
    }

    function Schema4Schema(aJsonObject) {

        var schema = new Schema();
        var keys = Object.keys(aJsonObject);
        var state = undefined;

        for (k in keys) {
            var attributeKey = keys[k];
            var attributeValue = aJsonObject[attributeKey];
            var isComplexAttribute = (_.indexOf(schema.complexSchemaKeys(), attributeKey) >= 0);

            if (isComplexAttribute) {
                state = schema4ComplexAttr(schema, attributeValue, attributeKey);
            } else {
                state = schema4SimpleAttr(schema, attributeValue, attributeKey);
            }

            if (StateEnum.COMPLETE == state) {
                break;
            }
        }
        return schema;
    }

    function schema4ComplexAttr(aSchema, aAttributeValue, aAttributeKey) {

        if (aAttributeKey == '$ref') {
            return refAttr(aSchema, aAttributeValue);
        } else if (aAttributeKey == 'extends') {
            return extensionAttr(aSchema, aAttributeValue);
        } else if (aAttributeKey == 'items') {
            return itemsAttr(aSchema, aAttributeValue);
        } else if (aAttributeKey == 'type') {
            return typesAttr(aSchema, aAttributeValue);
        } else if (aAttributeKey == 'properties') {
            return propertiesAttr(aSchema, aAttributeValue);
        }
    }

    function refAttr(aSchema, aAttributeValue) {

        if (JsonSchema.RESOLVE_REFS) {
            var result = new ProxyResult();
            ProxyRequest(aAttributeValue, result);
            var referencedSchema = Schema4Schema(JSON.parse(result.value));
            // $ref replaces everything.
            _.extend(aSchema, referencedSchema);
            // So we need to stop any further passing of schema attributes.
            return StateEnum.COMPLETE;
        } else {
            schema4SimpleAttr(aSchema, aAttributeValue, '$ref');
        }
    }

    function extensionAttr(aSchema, aAttributeValue) {
        var attributeValueType = RealTypeOf(aAttributeValue);

        if (attributeValueType == TypeEnum.OBJECT) {
            var parentSchema = Schema4Schema(aAttributeValue);

            if (JsonSchema.MERGE_EXTS) {
                inherit(parentSchema, aSchema);
                _.extend(aSchema, parentSchema);
            } else {
                var sp = new SchemaPair({
                    schema: parentSchema
                });
                aSchema.addExtension(sp);
            }
        } else if (attributeValueType == TypeEnum.ARRAY) {
            var nestedKeys = Object.keys(aAttributeValue);

            for (l in nestedKeys) {
                var nestedAttrKey = nestedKeys[l];
                var nestedAttrValue = aAttributeValue[nestedAttrKey];

                var nestedSchema = Schema4Schema(nestedAttrValue);
                var nestedSchemaPair = new SchemaPair({
                    schema: nestedSchema
                });

                if (JsonSchema.MERGE_EXTS) {
                    inherit(nestedSchema, schema);
                    return nestedSchema;
                } else {
                    aSchema.addExtension(nestedSchemaPair);
                }
            }
        }
    }

    function itemsAttr(aSchema, aAttributeValue) {

        var attributeValueType = RealTypeOf(aAttributeValue);

        if (attributeValueType == TypeEnum.OBJECT) {

            var nestedSchemaPair = new SchemaPair({
                schema: Schema4Schema(aAttributeValue)
            });
            aSchema.addItem(nestedSchemaPair);

        } else if (attributeValueType == TypeEnum.ARRAY) {

            var nestedKeys = Object.keys(aAttributeValue);

            for (m in nestedKeys) {
                var nestedAttrKey = nestedKeys[m];
                var nestedAttrValue = aAttributeValue[nestedAttrKey];
                var nestedAttrValueType = RealTypeOf(nestedAttrValue);

                var nestedSchema = Schema4Schema(nestedAttrValue);
                var nestedSchemaPair = new SchemaPair({
                    schema: nestedSchema
                });
                aSchema.addItem(nestedSchemaPair);
            }
        }
    }

    function typesAttr(aSchema, aAttributeValue) {
        var attributeValueType = RealTypeOf(aAttributeValue);

        if (attributeValueType == TypeEnum.ARRAY) {

            var nestedKeys = Object.keys(aAttributeValue);

            for (n in nestedKeys) {
                var nestedAttrKey = nestedKeys[n];
                var nestedAttrValue = aAttributeValue[nestedAttrKey];
                var type = new Type({
                    t: nestedAttrValue
                });
                aSchema.addType(type);
            }
        } else if (attributeValueType == TypeEnum.STRING) {
            var type = new Type({
                t: aAttributeValue
            });
            aSchema.addType(type);
        }
    }

    function propertiesAttr(aSchema, aAttributeValue) {

        var nestedKeys = Object.keys(aAttributeValue);

        for (l in nestedKeys) {

            var nestedPropertyKey = nestedKeys[l];
            var nestedPropertyValue = aAttributeValue[nestedPropertyKey];
            var nestedPropertyValueType = RealTypeOf(nestedPropertyValue);

            var nestedSchema = Schema4Schema(nestedPropertyValue);
            var nestedSchemaPair = new SchemaPair({
                key: nestedPropertyKey,
                schema: nestedSchema
            });
            aSchema.addOrReplaceProperty(nestedSchemaPair);
        }
    }

    function schema4SimpleAttr(aSchema, aValue, aKey) {

        if (aKey == '$schema') {
            aSchema.set({
                dollarschema: aValue
            });
        } else if (aKey == '$ref') {
            aSchema.set({
                dollarref: aValue
            });
        } else if (aKey == 'required') {
            aSchema.set({
                required: aValue
            });
        } else if (aKey == 'title') {
            aSchema.set({
                title: aValue
            });
        } else if (aKey == 'name') {
            aSchema.set({
                name: aValue
            });
        } else if (aKey == 'id') {
            aSchema.set({
                schemaid: aValue
            });
        } else if (aKey == 'description') {
            aSchema.set({
                description: aValue
            });
        } else if (aKey == 'minimum') {
            aSchema.set({
                minimum: aValue
            });
        } else if (aKey == 'maximum') {
            aSchema.set({
                maximum: aValue
            });
        } else if (aKey == 'minitems') {
            aSchema.set({
                minitems: aValue
            });
        } else if (aKey == 'maxitems') {
            aSchema.set({
                maxitems: aValue
            });
        }
    }


    function Schema4Object(aJsonObject) {

        var objectType = new Type({
            t: TypeEnum.OBJECT
        });
        var schema = new Schema();
        schema.addType(objectType);

        var keys = Object.keys(aJsonObject);

        for (k in keys) {
            var propertyKey = keys[k];
            var propertyValue = aJsonObject[propertyKey];
            var propertyValueType = RealTypeOf(propertyValue);

            console.log(propertyKey + " : " + propertyValue + " (" + propertyValueType + ")");

            var propertySchema = null;
            var propertySchemaPair = null;

            if (propertyValueType == TypeEnum.OBJECT) {
                propertySchema = Schema4Object(propertyValue);

            } else if (propertyValueType == TypeEnum.ARRAY) {
                propertySchema = Schema4Array(propertyValue);

            } else {
                propertySchema = Schema4Value(propertyValue);
            }

            propertySchemaPair = new SchemaPair({
                key: propertyKey,
                schema: propertySchema
            });
            schema.addProperty(propertySchemaPair);
        }
        return schema;
    }

    function Schema4Value(aJsonValue) {
        var valueType = RealTypeOf(aJsonValue);
        var type = new Type({
            t: valueType
        });
        var schema = new Schema();
        schema.addType(type);

        if (JsonSchema.INCLUDE_DEFS) {
            schema.set({
                defaultValue: aJsonValue
            });
        }
        return schema;
    }

    function Schema4Array(aJsonArray) {

        var schema = new Schema();
        var type = new Type({
            t: TypeEnum.ARRAY
        });
        schema.addType(type);

        var keys = Object.keys(aJsonArray);
        var existingSchemaItems = new Array();
        var itemSchemaPairs = new Array();
        var doTupleTyping = false;
        var firstKey = true;

        for (k in keys) {
            var propertyKey = keys[k];
            console.log(propertyKey);
            var propertyValue = aJsonArray[propertyKey];
            var propertyValueType = RealTypeOf(propertyValue);

            var itemSchema;

            if (propertyValueType == TypeEnum.OBJECT) {
                itemSchema = Schema4Object(propertyValue);
            } else {
                itemSchema = Schema4Value(propertyValue);
            }

            var itemSchemaPair = new SchemaPair({
                schema: itemSchema
            });
            itemSchemaPairs.push(itemSchemaPair);

            var schemaAsJsonString = JSON.stringify(itemSchema.toJSON());
            var duplicateSchema = (_.indexOf(existingSchemaItems, schemaAsJsonString) >= 0);

            if (!duplicateSchema) {
                existingSchemaItems.push(schemaAsJsonString);
            }
            /*
             If more than one unique schema is required for this array, then we need all schemas.
             As long as there are no duplicate schemas, then one schema serves all items in the array.
             */
            doTupleTyping = (!duplicateSchema && !firstKey);
            firstKey = false;
        }

        if (doTupleTyping) {
            schema.addItems(itemSchemaPairs);
        } else {
            // All items can be represented with same schema, so just use first.
            schema.addItem(itemSchemaPairs[0]);
        }
        return schema;
    }


    // ---------- Public Objects ---------- //
    this.GenerateSchema = function() {

        var schemaVersion = 'http://json-schema.org/draft-03/schema';
        var jsonObject = null;
        var schema = null;

        try {
            jsonObject = JSON.parse(JsonSchema.INPUT_VALUE);
        } catch (err) {
            throw (err);
        }

        if (JsonSchema.INPUT_MODE == 'schema') {
            schema = Schema4Schema(jsonObject);
        } else {
            schema = Schema4Object(jsonObject);
            schema.set({
                dollarschema: schemaVersion
            });
        }
        return schema;
    }
};

