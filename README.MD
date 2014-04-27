#Breeze Metadata Generator

Faithful, accurate, and complete metadata generation from raw JSON is not possible.
To create such Breeze metadata takes a human with understanding of the data and the application and
knowledge of facts that cannot be represented in JSON. That usually means writing metadata by hand.

However, a mechanical inspection of a JSON sample can reduce the grunt work and mistakes by producing
an intermediate form of metadata that humans can read and edit before hardening into the immutable type
definitions within a Breeze MetadataStore.

This node application converts a JSON sample, presumptively fetched from a real HTTP source,
into "type description" objects for input into the Breeze Labs Metadata-Helper.

*Such is the intent. It hasn't been written yet*

##Samples

The generator constructs a Metadata-Helper type description from a sample of data for a particular type.

A sample is presumed to be a collection of instances of a type, represented as an array of JSON objects
that were returned as a result of a GET request to a service endpoint.