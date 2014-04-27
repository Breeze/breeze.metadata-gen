/**
 * Extracts from a Breeze Web API controller
 * returning Northwind DB entities using
 * JSON.NET to serialize the data.
 */
(function(northwind){

  // first 3 suppliers. Suppliers have nested complex type, Location
  //  http://localhost:56337/breeze/Northwind/Suppliers?$top=3
  northwind.suppliers = [
      {
          "$id": "1",
          "$type": "Northwind.Models.Supplier, DocCode.Models",
          "SupplierID": 1,
          "CompanyName": "Exotic Liquids",
          "ContactName": "Charlotte Cooper",
          "ContactTitle": "Purchasing Manager",
          "Location": {
              "$id": "2",
              "$type": "Northwind.Models.Location, DocCode.Models",
              "Address": "49 Gilbert St.",
              "City": "London",
              "Region": null,
              "PostalCode": "EC1 4SD",
              "Country": "UK"
          },
          "Phone": "(171) 555-2222",
          "Fax": null,
          "HomePage": null,
          "RowVersion": 0,
          "Products": null
      },
      {
          "$id": "3",
          "$type": "Northwind.Models.Supplier, DocCode.Models",
          "SupplierID": 2,
          "CompanyName": "New Orleans Cajun Delights",
          "ContactName": "Shelley Burke",
          "ContactTitle": "Order Administrator",
          "Location": {
              "$id": "4",
              "$type": "Northwind.Models.Location, DocCode.Models",
              "Address": "P.O. Box 78934",
              "City": "New Orleans",
              "Region": "LA",
              "PostalCode": "70117",
              "Country": "USA"
          },
          "Phone": "(100) 555-4822",
          "Fax": null,
          "HomePage": "#CAJUN.HTM#",
          "RowVersion": 0,
          "Products": null
      },
      {
          "$id": "5",
          "$type": "Northwind.Models.Supplier, DocCode.Models",
          "SupplierID": 3,
          "CompanyName": "Grandma Kelly's Homestead",
          "ContactName": "Regina Murphy",
          "ContactTitle": "Sales Representative",
          "Location": {
              "$id": "6",
              "$type": "Northwind.Models.Location, DocCode.Models",
              "Address": "707 Oxford Rd.",
              "City": "Ann Arbor",
              "Region": "MI",
              "PostalCode": "48104",
              "Country": "USA"
          },
          "Phone": "(313) 555-5735",
          "Fax": "(313) 555-3349",
          "HomePage": null,
          "RowVersion": 0,
          "Products": null
      }
  ];

  // First 3 customers
  //http://localhost:56337/breeze/Northwind/Customers?$top=3
  northwind.customers =[
      {
          "$id": "1",
          "$type": "Northwind.Models.Customer, DocCode.Models",
          "CustomerID": "729de505-ea6d-4cdf-89f6-0360ad37bde7",
          "CompanyName": "Die Wandernde Kuh",
          "ContactName": "Rita Müller",
          "ContactTitle": "Sales Representative",
          "Address": "Adenauerallee 900",
          "City": "Stuttgart",
          "Region": null,
          "PostalCode": "70563",
          "Country": "Germany",
          "Phone": "0711-020361",
          "Fax": "0711-035428",
          "RowVersion": null,
          "Orders": null
      },
      {
          "$id": "2",
          "$type": "Northwind.Models.Customer, DocCode.Models",
          "CustomerID": "cd98057f-b5c2-49f4-a235-05d155e636df",
          "CompanyName": "Suprêmes délices",
          "ContactName": "Pascale Cartrain",
          "ContactTitle": "Accounting Manager",
          "Address": "Boulevard Tirou, 255",
          "City": "Charleroi",
          "Region": null,
          "PostalCode": "B-6000",
          "Country": "Belgium",
          "Phone": "(071) 23 67 22 20",
          "Fax": "(071) 23 67 22 21",
          "RowVersion": null,
          "Orders": null
      },
      {
          "$id": "3",
          "$type": "Northwind.Models.Customer, DocCode.Models",
          "CustomerID": "9d4d6598-b6c2-4b52-890b-0636b23ec85b",
          "CompanyName": "Franchi S.p.A.",
          "ContactName": "Paolo Accorti",
          "ContactTitle": "Sales Representative",
          "Address": "Via Monte Bianco 34",
          "City": "Torino",
          "Region": null,
          "PostalCode": "10100",
          "Country": "Italy",
          "Phone": "011-4988260",
          "Fax": "011-4988261",
          "RowVersion": null,
          "Orders": null
      }
  ];


  // Orders (expanded with Customer and OrderDetails) of a specific Customer
  //http://localhost:56337/breeze/Northwind/Orders?$filter=CustomerID%20eq%20guid%27785efa04-cbf2-4dd7-a7de-083ee17b6ad2%27&$expand=Customer%2COrderDetails
  northwind.customerOrdersAndDetails = [
      {
          $id: "1",
          $type: "Northwind.Models.Order, DocCode.Models",
          OrderID: 10643,
          CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
          EmployeeID: 6,
          OrderDate: "1997-08-25T00:00:00.000",
          RequiredDate: "1997-09-22T00:00:00.000",
          ShippedDate: "1997-09-02T00:00:00.000",
          Freight: 29.46,
          ShipName: "Alfreds Futterkiste",
          ShipTo: {
              $id: "2",
              $type: "Northwind.Models.Location, DocCode.Models",
              Address: "Obere Str. 57",
              City: "Berlin",
              Region: null,
              PostalCode: "12209",
              Country: "Germany"
          },
          RowVersion: 0,
          Customer: {
              $id: "3",
              $type: "Northwind.Models.Customer, DocCode.Models",
              CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
              CompanyName: "Alfreds Futterkiste",
              ContactName: "Maria K. Anders",
              ContactTitle: "Sales Representative",
              Address: "Obere Str. 57",
              City: "Berlin",
              Region: null,
              PostalCode: "12209",
              Country: "Germany",
              Phone: "030-0074321",
              Fax: "030-0076545",
              RowVersion: null,
              Orders: [
                  {
                      $ref: "1"
                  },
                  {
                      $id: "4",
                      $type: "Northwind.Models.Order, DocCode.Models",
                      OrderID: 10692,
                      CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
                      EmployeeID: 4,
                      OrderDate: "1997-10-03T00:00:00.000",
                      RequiredDate: "1997-10-31T00:00:00.000",
                      ShippedDate: "1997-10-13T00:00:00.000",
                      Freight: 61.02,
                      ShipName: "Alfred's Futterkiste",
                      ShipTo: {
                          $id: "5",
                          $type: "Northwind.Models.Location, DocCode.Models",
                          Address: "Obere Str. 57",
                          City: "Berlin",
                          Region: null,
                          PostalCode: "12209",
                          Country: "Germany"
                      },
                      RowVersion: 0,
                      Customer: {
                          $ref: "3"
                      },
                      Employee: null,
                      OrderDetails: [
                          {
                              $id: "6",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10692,
                              ProductID: 63,
                              UnitPrice: 43.9,
                              Quantity: 20,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "4"
                              },
                              Product: null
                          }
                      ]
                  },
                  {
                      $id: "7",
                      $type: "Northwind.Models.Order, DocCode.Models",
                      OrderID: 10702,
                      CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
                      EmployeeID: 4,
                      OrderDate: "1997-10-13T00:00:00.000",
                      RequiredDate: "1997-11-24T00:00:00.000",
                      ShippedDate: "1997-10-21T00:00:00.000",
                      Freight: 23.94,
                      ShipName: "Alfred's Futterkiste",
                      ShipTo: {
                          $id: "8",
                          $type: "Northwind.Models.Location, DocCode.Models",
                          Address: "Obere Str. 57",
                          City: "Berlin",
                          Region: null,
                          PostalCode: "12209",
                          Country: "Germany"
                      },
                      RowVersion: 0,
                      Customer: {
                          $ref: "3"
                      },
                      Employee: null,
                      OrderDetails: [
                          {
                              $id: "9",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10702,
                              ProductID: 3,
                              UnitPrice: 10,
                              Quantity: 6,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "7"
                              },
                              Product: null
                          },
                          {
                              $id: "10",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10702,
                              ProductID: 76,
                              UnitPrice: 18,
                              Quantity: 15,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "7"
                              },
                              Product: null
                          }
                      ]
                  },
                  {
                      $id: "11",
                      $type: "Northwind.Models.Order, DocCode.Models",
                      OrderID: 10835,
                      CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
                      EmployeeID: 1,
                      OrderDate: "1998-01-15T00:00:00.000",
                      RequiredDate: "1998-02-12T00:00:00.000",
                      ShippedDate: "1998-01-21T00:00:00.000",
                      Freight: 69.53,
                      ShipName: "Alfred's Futterkiste",
                      ShipTo: {
                          $id: "12",
                          $type: "Northwind.Models.Location, DocCode.Models",
                          Address: "Obere Str. 57",
                          City: "Berlin",
                          Region: null,
                          PostalCode: "12209",
                          Country: "Germany"
                      },
                      RowVersion: 0,
                      Customer: {
                          $ref: "3"
                      },
                      Employee: null,
                      OrderDetails: [
                          {
                              $id: "13",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10835,
                              ProductID: 59,
                              UnitPrice: 55,
                              Quantity: 15,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "11"
                              },
                              Product: null
                          },
                          {
                              $id: "14",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10835,
                              ProductID: 77,
                              UnitPrice: 13,
                              Quantity: 2,
                              Discount: 0.2,
                              RowVersion: 0,
                              Order: {
                                  $ref: "11"
                              },
                              Product: null
                          }
                      ]
                  },
                  {
                      $id: "15",
                      $type: "Northwind.Models.Order, DocCode.Models",
                      OrderID: 10952,
                      CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
                      EmployeeID: 1,
                      OrderDate: "1998-03-16T00:00:00.000",
                      RequiredDate: "1998-04-27T00:00:00.000",
                      ShippedDate: "1998-03-24T00:00:00.000",
                      Freight: 40.42,
                      ShipName: "Alfred's Futterkiste",
                      ShipTo: {
                          $id: "16",
                          $type: "Northwind.Models.Location, DocCode.Models",
                          Address: "Obere Str. 57",
                          City: "Berlin",
                          Region: null,
                          PostalCode: "12209",
                          Country: "Germany"
                      },
                      RowVersion: 0,
                      Customer: {
                          $ref: "3"
                      },
                      Employee: null,
                      OrderDetails: [
                          {
                              $id: "17",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10952,
                              ProductID: 6,
                              UnitPrice: 25,
                              Quantity: 16,
                              Discount: 0.05,
                              RowVersion: 0,
                              Order: {
                                  $ref: "15"
                              },
                              Product: null
                          },
                          {
                              $id: "18",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 10952,
                              ProductID: 28,
                              UnitPrice: 45.6,
                              Quantity: 2,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "15"
                              },
                              Product: null
                          }
                      ]
                  },
                  {
                      $id: "19",
                      $type: "Northwind.Models.Order, DocCode.Models",
                      OrderID: 11011,
                      CustomerID: "785efa04-cbf2-4dd7-a7de-083ee17b6ad2",
                      EmployeeID: 3,
                      OrderDate: "1998-04-09T00:00:00.000",
                      RequiredDate: "1998-05-07T00:00:00.000",
                      ShippedDate: "1998-04-13T00:00:00.000",
                      Freight: 1.21,
                      ShipName: "Alfred's Futterkiste",
                      ShipTo: {
                          $id: "20",
                          $type: "Northwind.Models.Location, DocCode.Models",
                          Address: "Obere Str. 57",
                          City: "Berlin",
                          Region: null,
                          PostalCode: "12209",
                          Country: "Germany"
                      },
                      RowVersion: 0,
                      Customer: {
                          $ref: "3"
                      },
                      Employee: null,
                      OrderDetails: [
                          {
                              $id: "21",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 11011,
                              ProductID: 58,
                              UnitPrice: 13.25,
                              Quantity: 40,
                              Discount: 0.05,
                              RowVersion: 0,
                              Order: {
                                  $ref: "19"
                              },
                              Product: null
                          },
                          {
                              $id: "22",
                              $type: "Northwind.Models.OrderDetail, DocCode.Models",
                              OrderID: 11011,
                              ProductID: 71,
                              UnitPrice: 21.5,
                              Quantity: 20,
                              Discount: 0,
                              RowVersion: 0,
                              Order: {
                                  $ref: "19"
                              },
                              Product: null
                          }
                      ]
                  }
              ]
          },
          Employee: null,
          OrderDetails: [
              {
                  $id: "23",
                  $type: "Northwind.Models.OrderDetail, DocCode.Models",
                  OrderID: 10643,
                  ProductID: 28,
                  UnitPrice: 45.6,
                  Quantity: 15,
                  Discount: 0.25,
                  RowVersion: 0,
                  Order: {
                      $ref: "1"
                  },
                  Product: null
              },
              {
                  $id: "24",
                  $type: "Northwind.Models.OrderDetail, DocCode.Models",
                  OrderID: 10643,
                  ProductID: 39,
                  UnitPrice: 18,
                  Quantity: 21,
                  Discount: 0.25,
                  RowVersion: 0,
                  Order: {
                      $ref: "1"
                  },
                  Product: null
              },
              {
                  $id: "25",
                  $type: "Northwind.Models.OrderDetail, DocCode.Models",
                  OrderID: 10643,
                  ProductID: 46,
                  UnitPrice: 12,
                  Quantity: 2,
                  Discount: 0.25,
                  RowVersion: 0,
                  Order: {
                      $ref: "1"
                  },
                  Product: null
              }
          ]
      },
      {
          $ref: "4"
      },
      {
          $ref: "7"
      },
      {
          $ref: "11"
      },
      {
          $ref: "15"
      },
      {
          $ref: "19"
      }
  ]


})(module.exports);
