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

  // First 3 Employees
  // http://localhost:56337/breeze/northwind/employees?$top=3
  northwind.employees = [
  {
      "$id": "1",
      "$type": "Northwind.Models.Employee, DocCode.Models",
      "EmployeeID": 1,
      "LastName": "Davolio",
      "FirstName": "Nancy",
      "FullName": "Davolio, Nancy",
      "Title": "Sales Representative",
      "TitleOfCourtesy": "Ms.",
      "BirthDate": "1948-12-08T00:00:00.000",
      "HireDate": "1992-05-01T00:00:00.000",
      "Address": "507 - 20th Ave. E.\r\nApt. 2A",
      "City": "Seattle",
      "Region": "WA",
      "PostalCode": "98122",
      "Country": "USA",
      "HomePhone": "(206) 555-9857",
      "Extension": "5467",
      "Photo": {
          "$type": "System.Byte[], mscorlib",
          "$value": "\/9j\/4AAQSkZJRgABAQEBLAEsAAD\/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL\/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL\/wAARCADZALwDASIAAhEBAxEB\/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL\/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6\/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL\/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6\/9oADAMBAAIRAxEAPwDkIw8rXKoMkSlI8dAc4AIxXc6bo+paXDAkUMc4K5co+WHrx6+tcXLaSWerXEEoRZGcywTMMo3s3sR36g\/Wuv0PVWtwtvcW4mj+8IpfmZeM\/K3fnofftWEYqbsym2jespzHKuASH+vFaMFwJbkqHAVgQChyMjrk1VuUF5Hv0l\/Nkl5MSMCYT04zj05HrUDW+rqm24sbiLJ8tWVPmPqeO3f3p+za0DnubkTSoxBBx0BU9qewkkR4w0ilu+efesi30vUXLRw36deAwdd3+Fad693pdugfCylWCKGDbR3NNIGzNurd5bLyoGwxX5GbhemMY75rnzBeeE9Ovb1Lc6hbE5mtwSDtHBb3OM5+netD7bO13J5srzCMBsN169f\/AKxq88jPYSyQIRMYiUQtg9M49q1jaxmzh7jUP7PvLJIJJjZnTjugdjujYsCN3rwePpSS6vY2l1LFDJJAu5ZPMB3K7YOSB2FVBYr4i0l9YtblY9XtgEvLeZtqTnH3o89GGenT+dJaaI8sGbiTZKWyVUA5H+NZzbTLikzrdJ1AXKgFzPvZSrIT0weOuMmtLaTO8gO0qdg9ePb6\/wAq5fT9HWxumlSa4IJ4CIACK3BdrEwzE4J5PHWiMrrUfLYuDc7PyWBHDA9+9TKk8CI5bcrECN0YhSw6qfU1nG\/tmnCCUxN1A6fjWlZuVlEfmII3yXB6MT\/WqFYeL1o7sMqEKZSzqo74wRz\/AA8mk1D7GqCdNLsriyYlc\/Z1zGfcY+nNVwz5+0AmWVmICMMnOecirduzRLLdQMnnSrgQr1Tnk89e+KT8w9CO2ttB1O0HmaRYS8Aj9yvA7HGOKfF4c8NzHP8AZVsrZ6oCpH5VNZ2enve7rlpYrl0VmjjbALflya6P+yLG6wwaUsRyd3UGjlT3QXfc5DUPC+mywO2nteRXKqSimYlcjnv9OtQr4T0q8tvJu5bkmaPE0ZcgDPXGORXZTaC6KGguFLDjbKucj0zWXePc2Cbrm0CRk7VkjbIGeME+ueP0peyj2DnkYdt8OvDFn5TW9pKJU+9KblwT6HrT1+Hvh95nHlXKbx+8K3Tkt7kHgfhVmO6mWRBNEZYpJAoZeMDnr+VbUYH3FdgDxtYZ4qXTRSmconw10KOZJbd7kyxJtBFwxUdevrUjfDKx42a1qcORkqJ85Pc5NdCg2syq2c9lOB+NXVvtOhGyfVoI5B1UyAGjkXYOY8SsPLuoryOcO3lzs8bOeikkEfTj2rW062Yb41Vise4DI6A8jv2NM0rQNRa4uf8AQrnBB5Nu2Ov+ea6W38H3zSiQyCDI53nJ\/L\/GrgrENlW0Ei3CvHIxkOFkUgA7j3z65x29OK63TNJ1Oba893NEm8MG6E\/h+lT6Zo1np\/z+WstweWmkGWzjsccVvQ7pDuDkqDyM9TWjJQ4gxKsalicck8k4rB8W2dzdaN59nGzT2rbygP30wdwA9cHIroXfafmB4zjFZl5q9rDLaw7v3t1K0CjrtIQsc\/gP1pIbOI0fTXu4pL3G62ljUQseC\/cnHp296wfGGnrd3VnbRuQRl9ozkZGMYHbmup1jVLawSGw010QeUS0iniJRxjb681xct1FHcPeRu7zXMwhYu\/PA52jtxzQ1bRAtSqNKCWUduoPlhyzFR95hxnPrTv7EPVrwwLjgD5iTUz6p5b+TGn7mPBwOD16\/jT4tRSdyFjdDnknqD6D1rN+ZSIP7AjVNzXd2Qf4nlP8A6CKcumPEB5GpKin+GZS5P68VZk1WCNtinzJhyUVuB9TUB1wSLskkiiGf4l3EfSpuWV9t5byZWeCXJ5DgjP41uWt60+nqGHlzxk7drbh7jNc3PrTwnyjcR5J+VgB+oqna+JVNy0bIEdfvheh54OKauSzutL8Rw\/a9shHmIcccZNbourfzHdbcmUjqew+vb6V5TdT+ddQzxgmZCcEnGV9D647V0tnrAXaLq7BkbgRqCP8A9dVfuKx19tMRdq5A5PBOSB9R6cfrXKeNbPVNPRtV065kfSolIns1Zs2zE8ug6lDwSO3bitFdSKphvlXjgrgEVuWGqhgrpIsbr\/C\/zAr6Y70\/QDkPC3xA8mApe6hII+v7358E4wwb+7Xo1vfR6rZ\/Z7hlfemCB92QY6j14rx\/xT4T\/s7xIJdPeK1sr4GVInbcivn94v8Aspkg+2a2vDeleKdH0+3PkQXtoriW28i45UHg4BAPQnjOB+FVF3Ieh2QBtZ3gV953H73B6\/5FQ3etXVo6RyRMI5wyh1bBjcDgemDzzVa6TWTcte\/Y3YS4zDj5ozgcAjrWXq+oam62+20uLQpKGeWW3ZsgLwBx1zzSbGkaOmXpZijzO6E4ZlbJVvfH51t2cUgiYRTPIobGSobnA7kV5oZNVM8rvOfs0rAsUGNuOnvzXU6R4le2sfLlscvuJ3QyFVb3xSUovqNpnojysWBDOyngc\/ocVCyMp+b61haJ4h1bUjfxvocVk1nJ5ckd5PsMnGdw4IK+hzWlNfXc1u8qWwc5wBFKrgnHUGquhWBrsKCox5oGCM8A+lOttTWO6EYwGkVmUE5LAe1c7JqlmWkjkSS1nTjMiEFj7VdtmXyGnSdHZBhCDk56+v507iOmFzNJkAAf7ted+ONTaXxbpqWkqLBpqNPcuqnLuylFTP0LEjtgetWfFGt3dosGm6dfLBcSsGklC7n8vuADwCemTyB+dcHfXlssVzHbozIjbpRn52Y8MxPc0W0C5b1G\/WLaWYL5vO48\/N2zWZOcQ7YT5ciz+dkgEeYDkg+xHH41n6jNIrvGUaS32AEEZGMdQarRX0cpBE7JKMKwl6OAOMmpbKRfE8d3cEYmSdiTsztKDvhj1FWjNaQIAL2ZiBhiqbwv4jisdbyKJ9ocNuJGMZAPoKr6nqL21sE3MOMBVFZt3KSNGe\/smjZYJnkkDZ\/e8En8BXL3urXEsojjmZQucxkDH8qrpBPdv5iuVbqKfcWhZ8kHew5KjgmhPlHqyT7ZLeQMZfvx\/dboSuKW33yTW0pHLfK\/v71KlqY48AZJ4qWCBkACrnaMDPb1obXQSTLa3zQgMy5AYNj1HSu70zXYZ7WNPLRQeAijJzXn17bldmM88n6VqaTqkemxkRAE4wTjkn0pXG0eiHDoWER2Ec7hhaoM7wTLJbSKjKcgBsof8Pwrl38QS36sbtmIA+S3Q8fiay5ZrueYyRI4Ab+FsflRcR3viXUluvC6yiJhLalrosB80eBhlwex5zXL6VrsTusn2tlDYVA5K7cds9h6VPo+uSBliuF3iRdkiOPvqenXp6EVxN1af2XrNxYZJgZsIrNn5Dkofw6VcaliXE9Iivr0TefJNIxzuQeado9COx\/Kuz0fxtaS2YF6ZI7tcBgeQxHdcfhn614ppOuyWERheFZ0Zw213I2ngHA\/Ct2HWLGZ\/MAeHsSTwPatOYmx6vHNoetPjyfss7HCsSFZx1zjPcA9ajk8JXDyu1p5csJPDBtv5+9cTaujwCaJ90T\/ADA4zye2RV6PWobRfKLNjqBhvlB7USin0BNnd6lp9nqtwZI7mS2cx7GDjehFY8vh6\/hybGRJUB4FvcGM+vQkCtrawcp5E6so\/ijbBz6HFL9iuWxLFA5DEZUDB6cHnFZuJVzk9R1vUdGhEeq\/bFTOCbmxMoPbBcDA\/Ouct7u\/l1K6a3kgisAjDaM7Wl7Ee3rXpOo393pdoZNQfFuMgr13HBOAD16V5jqeqxNuWEqkTHKgcYPvinZoV7k1xLb20UwtkD3UvztKesjDkgk9PauUvpftM8d1BJJFIGAcr19wR3471M98xLKGQq55Xfgqf6is25uCob5PvDh4jVOVwSJ5iQ8kltM6qQCYwNwB\/wAD7VRmkJdkJyCf4Rxj1qvJKSqNHO8ToMEg8H3pomeXBdlZ+pYcZqGUjStPKQDblnbjPUn2FTz2AvJ0Ujd5Yxgc4J9aisoioD8bsYBPbNdVpNku1SQPx71i59EbKOhn2mg5CqBgnjitaLw1DGnTccda37e2AAwo9uKtrFtGeM1LZaRxd1oKouVOHXoBVFdOZHGVBCDNd7NZRzdRVSXTwEIRfxpXCxwGp277cMD1PQdqw5t0Knk5xXoWpWfl8lQAfWuW1GCLDbh06H2qoyM5I5tb1kJRWC4HQnmtKG4Ag864VpQuMKvr\/SqN1aRglsYycAqOnXrU9hewfZ72DHyyRqqY7EN1+tbdDJmit9FIygxGCUHGwNvJB\/lU+shbyK2mZT5mQFkHWNvvc+oOPzNVRY24kE6zxrKACIpGxu+lbVjJ57pZyOCC2I2bq2O31GP0qXZD3PPIruSOVkkD7t5x7HPetOK4yB5gIz2\/rXZ6qYLItNOqBD8u4R9T7+lcFqF2Jrjy4\/mVj1xgAE4\/CtN0RsbGnaje2wmSxJMOd8u45ROeWHvV46hHJhl3SccuzHmsjIj0W9VAqmYQRoFON6bznHrzwa1dM8NzXFiklwfLY9FU9B7+9NuyBI93F3qVuzpcTllYKsTMudoyeffII6+lW5Z5Y5CkF3I3luDIQgIwR06dR14x2\/HI1ma4uZHt4FeO3QhoznHnKMHnOMZ\/pSRsY7b7GY2tAQQp+8o4zj1zz+lVcRk+LdVle0aO43I\/lsyn7wYcqGHHGeOnTOK8dvtRupGkcAIUbbxxj2r1HxGwnvLWOZf3MMqxR45BAXcRn8M149eFzo5k6md2YnOeM5pSa2BIhOqeZw8bnBwCnINRLLEPu3Wzk+oNRKQVG3GPamyZZdijJY7elLQovpapIxPmlmz3XNbNjp5ZhhMt69K0PCuiLeqWCDYrY59enT8K7I6Hb2agvKqfU1g5X0RrGKWrMXT9N4AIHviumsrTaANtUor3TredozcplepHQ1p215bSD9zKrA9MGs+WxomacKBQARVkKhPYVVjbJHOR60PIqMTuAA9aVy1YvrbKVJGD9KQ2oI+6PyrIm8UWFuhBuQCo54qvB41tpJFEUbMCcE5\/pVKNyW0jTv8AS47mIqwPTvXnfiHSpLQMxO5cdcV6MniOwucRSBoWbpv6Vla5ZrdW0gUc4OCO9Jq2ojxO8vQxaF32ADjkf1qtbbI9yiT5nbcTjlvTFP1u1e1vWO0bSe49MnFVJG8yUsJOFAIIPAOf\/rV1R1VznejOi0yezumC3TIoi+eNm\/hI9619OVzbTQPhZ\/8AXwybs7XBz\/kVzbhIZ7B35ivLdDJgdGyQf6VvaFFNFqBs5xkwSugOfvAd6iaGjb1E\/bWh\/uXKgMhOBk1y11o62c7gIzKxLbFwGyPc8AV2E8MhhVRE+0KdpweAeRzVe\/SG4hjeGbDMuC2ecjg5\/GhaCZy8FtDJeAqWl2kbA3BUdxXZaX5SWe2SY7gx6jP61gWNjImoTIZIgsGWfDA7n4xj8624crHgo\/HsP8aq6Yj0hZI9Q1aO3uNzIYypJPOew\/lVG5mkkC\/aWRJol6hgBkHGT68fnVuW6hXVIFi3GRmJVhx9QfbisZVWWJt0e19zM67cEEk9O+M4z+dU3oIzPF07NpkSRlmYzfu8cbiQe3515rqkYg0yFyBhHdcY9elemasoaOD94D5Mbum45IOMZP8AnvXnl9F52nJE3cI\/5VN9ho5OM53ZG1j8xGCKRnMZZj1VDtPfOQKkbDTSADgfKfzP+NT6TZm+1i3t3GUaUZ+hYf4GqdktQS1PWdHtJNI8NWohQeeyKTkdzySasTWayr5t5dFAR82410L2kzWgW3jVscAE4rjNV8K6pqU4m1G5SCNTlYVO5ce571xxZ0tdindL4fVmSLUEkcHlVbdgiorV4BKXtZSSO3pVk+HtLWRnkf5zzhGAAPTpV6y8Lpc3MM0DTIkYAICDaw98\/wBKppPZijfqdFoj3GoRZRCQOPrRrkNxbxMjjBI7elbnhex+yWzxryA3WjXIBeXBQggAdfehRNWtDyy7ktIT+\/QyseAi89fQVZs\/E+i2iqJbG4Vl77AeOlbF94cFneLeCGcsnKtG2VX\/AIDVD7Hps0h3CMSFicsTnk5xg04qNtTKXNfQ1rXUtJ12Nkt2G8j5o2GGH1B6dRWlZWZggaLJcdiTmsq28J2F7MLmIXAuA24TxkqAf5H6V1ltprQwjzZXkcDknjJqW9dCoxZ498RNJ8h0u41OJHIOByGCkg\/piuGOJNrKRxyK9p8dWgl0a4DD7hDjj0xXiVzGI7pmiAAHOAOn+PSuilLQxqR1LMM7A20b5OFXaeuPT+RrtdNEnmNOeLiU719vT8\/5Vw9qqiYTzMVhiAwOOcZH+Ndjo915t2s0hISPhF\/vHHX6YomSj2vwxqkd3o6wxRxtOGzJFINwUnHPStYaba3DOgtrGNmX5w8Q+b6DHHFeYeGZi\/inS7iMskU0bmUI+3cyg4Hv2r0NruLhwoYpj5SOD71cdiHuSarpujXAgtZtEgMYwS0cQV8+oI5qmPh94dkG77ZPZ5\/5ZecW\/HmtA3yz7UeExgLtVonOWP1oh0ueRWcGNwTwXGTRZBqc+QE1hGmWLMkgiKhsEbu+R07VR+zS2yyRsxaNJHj3D+Jhz1+nP4Vuz2EkU8DSqGjLqwb1rLuVnR2Ygqkk0hXcMc\/09qAOe1gMbdSq\/wAJUhe4yP6Vwl0pQSR5B8pmUe6k8V3PiC+2GOziUvIpLSFeMD0H61wepRiMuyuCpG0rjp6Vm2Wjkp8RzTgDnhenf\/JrY8JEnxFYxsfnacKfXoSP51m3nNyrtkbhtPPft\/WtLwm2PF+mFyB\/pKDH4H\/GrkrxFHSR9H2QQIoYZFav2KCeIAxqR7jNc7bXARiSTwSBWtFqihR0FcyR39B50GxVt5tYi3rtFQ3EIWPy12oMcAcCq9\/4hS3ibByRWVpd0dZe6vLpyscR2Qx5wCe5\/lT0FY6TS4xCrBehPWop4kZ2ZsdeppbHUIRDtaRQf61Wk8u6m2NKChPTPaq6DLlrEjrjIZematJptqx3NChOfQVyGpXUmhXiS2kpe1cfvIy2dpHeta08SJOinIOagLI6EW8SjKqOO4qncBSpDLzj0qm+rAAkNiqkmpiTJJHT1ptDWhzHjhdmhXcnohz7ivBrhXRyzE7GBwSBx\/nFe7eLn+1+HL2NT96P69xXhurRvbSeVyADwT0PFaUzlq6spKTLGqA57fT8O\/FdVo0sa3E8zN8kMe1ewOeprlodwizzwQQR1HatSJ5DYpFHzJP8o\/GrkZLU9G0K58oWckeVkiImVfbowz7gmvS2dJHE0R2x7Q2\/sc15LA6W1\/a7fuRJ5PHfjn9a9L06PzNIhLbVDAryTz+FEXpYlrUtvIFO7dGVj+bIHU9\/pUdt4gt4xJtuCVZywycelVLxTCqARNMyrjYOmCABzVSPTbxt21JAoOBgDH6imn5BY6eOWZr1SGURkEjIyMelZcsnm3ju4K\/OUUBcbTjqSfr\/AJ61ekYRXK8hPMVkXB4PHH41QkYszOwG1DnPOWI5z\/SnsI4S9gki06\/vp8ia5umhDq3Krk5APbODXH3bPOsvzny0JJ9\/TFdp4niAuI4lVjGzmTGcAd65xok\/s2e9l3qrSGNVHoKhpIpXOOufnmeLqWj3c9jTbW4EF1aXJwPKljk+mGBqa6hV33YIb\/ZPIHpVAgfZ+3K5P5f\/AFqpbA9D6GmnMTMfU7h+PNQyaiVXhvpigOt\/pVldx\/Ms1vHID65UVk3MEjOyKTkjjA61y30OpNkdzdPe3W3cSq\/eq+YrmKzzBKyHGeK5x9Vt9IcC4SVRnkiMsAfcitbT\/FdtqcLLY2k9zsBzxtAwOnNHmO7II9Yu4P3dycSDq6Dhvw7U7+0dRuHH2aby1PqvNWjBfXcxA0SUsEEpAIztPQ1JBBe+VFLFo0pjmcIjMwGT\/SnZjuWUjnmg\/fOXYjv3rF8+bSrooc+STkH09q1ZdUlghZ5dOnjRSys2Qdu3r+Fc4NdXWmxZ2V1Kh4MhQBR+dFhcx00OqiZAC+c96nV3JGOjcZrA0zT5dhkZcAnhc9K6a1jOxc\/lSuNsp6tbM+kyxl9pcbQ2Ohryfxy1jL4gSGytHto4oFWVGfdmTu2e2eK9N8fXbWvg3UZIyVkwiqQcEZYDj8K8VLSO5lmYvK5yztya2px6nPVlbQasXyhc4TqAMjP19avaUT5iSupwgwvvjvVN8kbVxluOT04q3bsMiJcrgDPt7VpLYzidVA5YQkFuRu\/Enp+VenaPcv8A2TDsPzDhl3febpzXlttcJGIUXBn42qe3p\/WvQPDizJG2GJQIMnqTgc\/jmoVwZ1LkQwRGYEqTkKBn6VbsbiR4G3Q9HIHl4xWaZowxyzFsfNxgA9eB6Y\/z1rSsZ7WG1UTXoy2WGVOcdq1IKV3At3dB1nVViBMkmzKIOCMn14qre74YAyhl3nzMEAdRjBB\/lW9ayh1vFiwshUMcDjac+vfrWNexPMbdwQcHYxkPJHDE8Yz06dKEByfiS3kTT7e9C\/6lgsoHHDfxD6YFcrLKP7HuLAlSVuhKhUdVfr+tejXti97HJHtDRuNrxudoYcEEZ7gV5hrNo+kX+2ZS0Tg7Hz1X0Oeh6\/lWMi1uc9egRuFzkk5OKyniVHyq\/I3TuK0tTjO8mLB2AFOeo9\/esyONdqsABnn1rSOwSPXfh5rEd54cSwZmM9iTG+45JQklT9MHH4V1nloJOg9RxXh3hvWW0DW0uyW+zP8Au7hRnlD3x6jr+de1RTpcQpLG6ujAMrKcgqe4rnnGzbRtCV1YbNpcVxI+9EKycEEcVnR+GI9K1H7bpkpt3YESRMMxSjH8Q6jr1GPxrpbVRJGPaluo3WNgVDKamLNCGx1rU7YzR3ekq67VWOazkDZGOcg8j9cU9Nc1BrQRW+lGJw2QbgqEABP905rKljlQ4jlljBOMA9KZHDLu+aSZ1Jydx4rT2kg5ICXGkXGrbU1G58xFeRmigGxXDNkBvXHA61dTT4baHy4owgH3VA6VftEbaoA257VYeHd3HpUylcEkjKhgWGFUwBx0qwoCrkDtSygGQ4wFFULu52AqDnHp2qUFziPihqKrpFtYLJiS4n8wpjOUUf4kV5WZm83cc5B6ZrsPiJDNLrtvIzDY1vhATwMHn+dczDYrPGAjr5gw23qSMV1RS5Uc0nd6jGkWS3JbaCQcAmrsTNvLIc4PU8DNV7VwCyMgL55Hpz0rZ0iBr6\/itIDEJnGVDHPrxjqaUhbF7TEMTtIxzKxxuI5r0zw2kp0fe0mzbnYy9+uc\/ka4qx8O3tzLNaOGhvVCtsP3XQnB\/r+Nd+8k0UUUFvAsKQAKFdh+fTr\/AJ70o9xNl9hbG2KzbS\/8LDPynnr1PWpobd2jysgx\/tNg\/lkVBA5lUBfLiXkbVAJbjv6VPAhSPad3B4yc8VohG7axwxWs0igZGBIrk8qc9B\/WsqaRfOSJIwu5yW4JwMcLn881o3CqLa4DK22VFCAnrzz\/AD4rLvsrJJlmVgSOQen0FAimPMSaRlATb8zOBu47fj1rF8SWaXemSPJAbpWQqyAZbttfPU45NbbFEhiQEruJwqn\/AD1qN5lTeOAF+QKx4Pp+p\/lWfKy7ni2s6ZDZBHs7w3ULjI3jayj0Pb8hXPwsDGoBHA\/KvXtS8MaZqV+FDSxvJkskT\/LnPb0\/CuF8R+FJtMVisMnlq5MU7KGEgP8AC2Pukc+x61SfQRzUrALjdhsjgHB69q7Dwr4wTTJFsLnetgx\/dSOc+UfQn+6f0+lccoxEz7vQEBsj8cUiugABAAPvxim4qSsNNppn0NZ3ybl2nIbGD2roYXSdAH4x+teQ+C7uSXw9bZckxFo+vYHgfka7G11l48K5IYeveuRq2hvGXc7MQWoySkef9oUGCAjCon4VzC6yjPjeB7ZqY64I1w2B6c07m2hvOkcKg8DuMVl3d4EO0Vi3Ov7uhOewFZj6gzEnJLH1pESZsXV8EQqDliaoxo07bmOR\/OqkIeZ9zk4rbsoA5GBhRRexG5xPj\/SJLq1s5oUzNE5HCljhh0AHJJOK8zdCjFTG0UqPtKj5WU9x2weoxX0ha2CXWrW3mYEULieRuwVPmJ\/l+deGeIp01zxNquqwgJFc3LyRqqgAjoCB74zW9JtoymrMyLfa+QqpEqnHXk\/WtXTLBhdrLE7eagMismRt6nOe1ZsNlcCcqIg6t0PfJ+ld34d0SQ2zyzwHa2Aq7sA89\/X8auSMzX0rVZYpmvHV5mWERRsqAtg4bmrLeIbZmcOJOmfuE\/r605AYJD51u+WGcgZx6\/0qq0W\/dtEUoPIkCdvf8az1LNy01FZoVjiP7t+gIHb27VswTymFVW0Z9nyl\/OjG49c4\/GuVjg2KreXGG7YjwQcfjVyGJNnNvznsQf61opaE2OwF40ulL5x2SS3REYVuFC9+3U\/zp1tZT6jOUtVLMP8AWu\/CqTyPzrjJtTdlit4oXlnaQpFCqf6wt1GM\/r7V6boem3GhaVHZ3EzXF7ckyXDj7qE\/wqPQdB9KIyuwasU38O6ZHMHmmnuZlUEpE+1SR349KBpWlT+Yg0iV2HICyvuPv1raktLDT4jdahPDBFH3dwqqKwb34keHdLjK2ZlvXOSqwrhT77j\/ADq0m9ibpbmna+CvD8comGnSqxX5SZXOB9CetTyeE9BijYzQZiK4Ikk+UD15Nea3\/wATfEOoSEWvkWEZ7IN7Af7x7\/hXG6t4gu7tv9Iv7i6bP355Sw\/AdBWkaMt9iXUR2vjTw98LppNzXn2G\/UKCNL5dwPVACpPuRn8q4r\/hJ\/AnhK1mtdG8MTardyKI5LjWQpj288hfm7kcACucurspGWGN79Mdq56UM26QnhQSB68fmKJR5QjK53\/heWW8tbq9ltLa0W6uC6RWsYjjXChTtXsOPX1roJY1cHGM9c+tEOnf2alpZp9yCyhA4xksNxOASM1M6ZU4P41wTd5HTHYzCChwc\/nTGJI+8319atSAg9B+FRbMjpWZoiALn7v61PFECfm5\/wAacsZ78DGav28A3ZbrQMsWlsXx0x61swqIo\/ZRk4Gf0qrAM4wBzWnbtFawLf3C\/uwGaBWGAxQ\/M5PVdmMjPB4xTWrE9Ecz4\/1v+xNB\/sSCQLqeqxg3BHWG25+UHGPm6diM15UFAwFGB0AA4xV7WdUfXdYudTldn+0P8hYYJUcAn3PX8RVNlw+P5V6VKPLFHFUldk0EIcgpkOP7p5rqdK1qS0iFvOqOM53D7w+o71ysLNllTILEdK01O1hGTuIHPt7A1pyKW5nzNPQ7TzYryJ5IZQT1ypGQOlSFPNUDKxKADwvANcrarHIw\/fxoM8An5q6LStSsLGTF7bC\/t3H3BJtcH1Vh\/LvUPC2V0y1W6MtjlA3mkZwcMeOvb8v1p8KkJjzQMegFdPpc3w71QpCvm29wxCrFdTMjMfY5wfwNdVD4D0FkJ+z3CZPQXL\/41g4tbmidzjfB2n2\/26bVr0bfsLv5LPgAFuS2fYd\/c1l6\/wDEebUb2az0OXyIsfvLwjD7e2zPTPrWb4x8QGz0qDw7aNltonvWJzuZuVTPfvkduK5GFdilpNpY8yED7zen0FdFKmrXZjObvZGtcXCSsslxO0754MshbnPXnpVcmKWQfMGY85JyQPWs15tzj3IwMVI7i1tyAf3j\/wCf0rpSSMmyzc3VvCpghIAz8xHesl2iYnOAgOT71BK5I7knrVediP3QOcDJ+tTKaGo3G3QEznsP5VSlg\/0eRQMkqcD8KsbHZwEPXgCnTJnzVCg4GDWUkmrmkdHY9etWOpaJo2qYUm70+NWdecvH8rAnAGfb2qOSEj1qXwXbGXw3Hpu0CWMC4tCe\/GHTPYEc4A5NXnttwBCnaenrXmSXU7IswWjGDnr6Uzyfatd7Pcfl7+tC2BHG0flUcppcy1gweT2qzGuGHp61ejsJpZVhiiaSVukacsfpVtLW0snVJIotQvWw32bOYlRv4i2Mh1IPH\/66fKLmGQW4jhjuLmESiRmWG1bI+0MMhkbjKAdckc4rl\/iFrLw2h0wTiXUNQUG7m7pbKThOOxzge2e9dXdTx6Jp9xrGrXTTSqi+fcMuHlYDCgAevAwK8Xuru71XUZ765Gbm5bLLnhB0CD2A\/rXRSpc7VtjKc+VakcartdyMBB\/+qocA9eea0riFIoUgAz3JFVkiUtjbnPFd8o20ORO4+1xHG0hA44X61MvB6j0PepXVE2Q4X5Rlsd2NPV0BBIT1xTjGxDdx9vD5zFQOOrHGcDpWnK0UUeQgJIIQZwf\/AK1FqscMQB8tWJ3k9wKrPPFMxLbCM8egFbEj1k3KVdQyngqwrf0\/xLqdhZrb2esXcMK\/djDcL7DOeKwRFE3AGPdTViG0bygSeD0JHUVLinuUnbYzJw93qkrht53s5JOfmJ\/pSSEsQqr8i8Dn9abKBFJORw0shOc84BqBQWdVUEMffpWcVYbLdtGcmaQD5T8uf51SurgSykjOOg\/rVq7mEEKxo5Xt17VntLk4JBAFVN2QkrsYHIy7Ywgzn37VUyTzjLHmrUrKYlU8EndweKr+WGHDfrWJoixaxndvI+7wPaoZAPMcLzlsfpV0IYbYeuOxqkw28nIz396qW1gW9z2LwSBc6HaSxsyMEUq6dUYdxXVlLe\/fa7xWt6Rlw\/yxTHu6nsfUV5j8Ndcjt7uTSbh+JTugyfblf616ncW8d1EY2UOjDo3Q1wSTi7HYrSV0QtoF2GxsiAJIBMoxkDNVJF020mEdxeCdztYQ2g3MysDyD2I5zT20W2YrlpdoJbZ5hxk96swWkFsuyGJIwfQVnfsXZ9ykDe3EZit0\/s61YKzqnMrOpyHz\/CSMZqWOztNMs5ZnKW9vEpklmc4AHUsx\/M1Pf6jZaRp8l9qNyltaxjLSOf0A7n2FeOeL\/GVx4rlFvGslrpEZytuT80x\/vSf0Xp6+lVGDmKTUSDxf4qfxPqGIQ8elWzn7NGRgynp5rfXJwPTn0rLt49iCQk565A7VTGJWAz94\/wBav3DCOJ+n930r0aMFFHDUk5MpzTO7MwbqaSDcZck5C5Y+9Mx2P86kUBICx\/jbHXtSerEKCWO7nJOTVi1XzZgCOF5aq3UAc5JrRsAFiMm0AsR\/OtIIhk15KUjEa9X649Kp5A96SaTzJ2K9BwOSaavB68029QSLdvkyKN5HdvpVtb2Zxlcbeg47VSRhFaknhpDgfQUke8rlTgemKSbYWHXj5u5cYxuIGPQdKdbAfNISN2MKD+tQr0X6Vdj\/AOPBP9xv61UUN7GVcTebKxB4HH4VCi75AucLmlbp\/wAB\/rTovvf9s2qJbjXcgkYu5bseBj0pI08x0XHU88U89fyqW3\/4+PwNQtynsNuiQUQfU1BvY7VDE5PpVq6\/1o\/3aitv+PhfpTluJCRyyQ3CNE+10b5WXqpHcV7J4L8aJrMC2V\/KkepKuMdBP\/tL7+3vXjUn+sP1b+tXbL\/kM6R\/1+L\/ACrCtG8bm9JtM+iVG7oPpxXL+JPHWl6AHt4nF7qGDi2ibhfd26Afr7V0t\/8A8gub\/rma+bf+f\/8A6+ZP\/QjXNTipSszoqS5Y3Rf1rXdQ1+9+0anceYw5ihTiKIf7IP8A6Eefp0qgVd8E9+tJ\/wDW\/kaF\/wBZ+JrsUVFWRySk5bk9rE5mLYztHan3Yf5Ux0GSTU1h\/rm\/3jUlx\/x9H6Ct9omX2jPYNt+4Rj2p0sZDBcDCL3NTP1H1FRT\/APHw31rIoaq54DrWmdsEDjzASox0rOh\/1kX+8P61fu\/+PeT\/AD3NbQ2M3uUQvAG\/PfpT0RmO0YOeOD2qNep\/3qnt\/wDj6h\/3xWZfUdPvMuzHCAL144pFAC\/6wD2pZvvv9T\/OoaSegmf\/2Q=="
      },
      "Notes": "Education includes a BA in psychology from Colorado State University in 1970.  She also completed \"The Art of the Cold Call.\"  Nancy is a member of Toastmasters International.",
      "PhotoPath": "http:\/\/accweb\/emmployees\/davolio.bmp",
      "ReportsToEmployeeID": 2,
      "RowVersion": 11,
      "DirectReports": null,
      "Manager": {
          "$id": "2",
          "$type": "Northwind.Models.Employee, DocCode.Models",
          "EmployeeID": 2,
          "LastName": "Fuller",
          "FirstName": "Andrew",
          "FullName": "Fuller, Andrew",
          "Title": "Vice President, Sales",
          "TitleOfCourtesy": "Dr.",
          "BirthDate": "1952-02-19T00:00:00.000",
          "HireDate": "1992-08-14T00:00:00.000",
          "Address": "908 W. Capital Way",
          "City": "Tacoma",
          "Region": "WA",
          "PostalCode": "98401",
          "Country": "USA",
          "HomePhone": "(206) 555-9482",
          "Extension": "3457",
          "Photo": {
              "$type": "System.Byte[], mscorlib",
              "$value": "\/9j\/4AAQSkZJRgABAQEBLAEsAAD\/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL\/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL\/wAARCADZALwDASIAAhEBAxEB\/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL\/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6\/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL\/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6\/9oADAMBAAIRAxEAPwDyNDmXlSUAqxH5DOYth3uflcdj6VchhiV5Ra20l5HjAcjANUIbK6uUdoIyAG6k9D6VjzcxBM9tOWCMg2ofmUdfrVq2REDxGNlY\/MCO+KbcNJaRxLexozDgeWev1NRxTXFwxFu+WReAew9KlttCHyXibhsGHHVvWnQXimF4nw+ehzzWTI5GU2FXJ+YH1qNchsM3FP2SHY1HvHlbaMsRwue1NgupI1ZGRcP3YVNawS\/aoY7SDzZmXI2jdmu20rwNDqiQS3yS2NzyZQDkSHtgdqS7Akcpptibzaj4W3Q4DE\/KWratNLdInLfK4bbuBx+Vej2dho+mW32ZLdGTozLxn60p03Rr4fLbDjqFbFRODkNxODS8nsLuzmjnEE0RZomPIJ9cVZS9+2TyySxRyNMMu5GS3+0K65vB2hXLKDbbdvINaH\/CLWqrCkbMog4QjHyj0+lT7OajaLDk6h4I8R6ZBD\/Y19cgHdmLzEG1x2BP5VP448UaY2nT6LYtmQld7xDCLzyM1kXngqG4eRxdlQ5ztA6fSo18HWyIEe7EidwRWsZyULNahyyOQtPE19ayfZrFxFFuwWHT8agk1ezttgLswLcp1z7ium1DwRDLGyWdwLfJyFUfKT71nXHw782yaWK4VLuPnbj5W+lS4SkrN6E8rM77fC7DcFdmPykDp9a2\/C93b3uuRR3ij7OgPmZ7EdPxrjbuWfTZGhmhVZMYKt3HqK0NP12yt9iW8UkV2EP+mxnBbPYis1DXmYk7Ht+mahJbQXCMslzczS\/Lb4z5SdBk\/SqLaRc291\/aZs0EO4i4gRvlcdiV6VheG\/G0Ol6FL9rDzXTy72JGfMXvXX\/2hcXehXGpWulmOQgG3SQ8ye59q7VKMtUxrVCaDpw0m0a51CRYlDs0QD\/KoPpVldd0zVJpYobsxmIcyE7Rj2rGstP1u9vkk1CB\/utuLtlQD0AHqOafqOgPoWmSHSrQ39xcSAtFOdyqcYzVNjSdjmPFs9rNcpY6Wr3Urf61t5O7PQn6Vxd34b1+G5dZNCuZD1ynSvUfClnbWGvTWwjU3cqAzg8iP\/ZHoK6691yw0+fyLiRlfAOApPFYumpaj0tqfJVvqCqz486O3DblVDxR5E95cypBOyxMN2e2PfFOvpmWRrexQSW6R\/McZqxZ2ElrYmW6uhaK\/Yn7wrFSS94kqx2EyeWIHF3HKdrbh90\/WtuLTLWOGMS3ax3DEgSJztx2OKZpdwsF2IrO7Xy4VyUZOJAeuPStH+0tPmHlx24WaRgD5Yyc56D1Nc9Sc27ICg3hqW7jE095E69FZAAWHrirFp4R0wXEMLSSXJJ+fb0x2Bp9zLK1qjpC88iOYx5QxsH+0PWtzwpO8kE6NBidQOQevrRD2k3ZspG9ouj6VorI1lB5TycEscn6e1bN7cq6NtXaV68daouRAiIQC3XnqKjM7KGIBJPOK7LmijYIlRyZAcL3zVyG2jz5truU\/wAR7GqT3gRNzFVJPcVFca75UWyOTDHoAMZpXKN1riOJf3rlSRkDHeq39sJk4lDgejYNcFe6pfPcMFkdlPXB6VU8u5kYyK7q5IwRRzIOVnpH9vRDpKp45Unmq0up25yygFD99c1wUlvcSEOM78cc45p0VpeqxG5ye+KOZD5GdHe6lLb\/ALyF98Wc5zyKlt\/EZdTHKfmB4YVlQ6ddyI3X5uOao3mmXFvGv8OD+lNMTgzqLzTtN8T2xEkRS9AO2RexrirjwtcaPcyx3JUsibg69GB\/\/VXe+GTAgZ3L73XG4jg1r3NjZ3Fk9s6mSNx\/F1H40TjzKydjJxOC8Ia1pmnzRf2lam6j3gby3CEnjivQ7nxPY6RHeSx6gb3kG2RT8qg8lTXmz6HZ6VPJZXLsnmyZEmONvr9a7ZdAj8Q+GraLTrKJZll2NPjbuUVFOcleKWqIs9jsbDx7oV4i77ryZCBlZBirmp+JILPSXvrZHuk6KYxkfXNcDrXgW5srZmjvrFFwo\/e8EfQ1yuneL7ux0q80LO6BmI3k5CDvj61sqnSSsN8yPT7LxFoxso7y8dY7iVs5jX5z9cdqe3jXRmkflTg4PmJk142L0SFFDbDt2xgtg1cjmldPkiLAcFj3Nc08U49BI84\/tSNLySZIwYm48sdMVUmmuL+RmcsyqMgE8KK0NR2yR7IdNWBYjuZ1bJI9T7VWtrcSTOjTfZ4SuTIR19q1jy25rFG7pV7Z2fhdVltwzySEMQeWHb6UsNvb\/Z43W4j80Z2qeqt1\/wAKpf6LbaUsNsFlJbLyNwVpr6zJAwtrdIDG2MExg4PrWXs27tE7jY9RvHumkhYxGM5dQeM9ya7jw9Jd21ukuESK4PmH19Mn9a45JILnUFF1HsExVSIjxn\/Cu8jkjMrxRkMVIQFewHAFapJe9YcVdmlLcAsXyfqat2ENxLEGDN83t2qC20ue81KGFc+V952\/pXoFlpsKRqigemaT1OuMVa7OOvdJdoVyck8cVlf2Tic4BZlGPpXp0ulo0bBThx0NZ66RGg27OerN6mk0y1Y4m30DvtySMmtFNEVAMIMjtXUraxR47+gpWiVT0oURnOJowL5MYHHerUOjRFssnJ71s8AcAZoXaF4qlFCuQx6fAmBtGMVn61pMLwthAMjmtkuNoB9etV7xt0B5zTaEcBpNw1tcSWTnJXkKa1P7S2Esr98EVkeIITZ3MV9EP4sPj0qpdS7rvzAfklXO3+tK5lJamrqcEGuwqjZEwPy9ufSsex8S3Whwy6ekrQySSgh1+9Gw4xT9OeT7UoJwynrVbxNZb9cS7IHlyIGYqeUIpP8AmRjNW1NS81O41HE11Obi5xgA8bvwrFlhiztkXEsgw+K2tVOgxWdrcaXNK14ExNETnb75NctLLHIH2MWVeSc9DWMoyv7zM7lS71OCzuHOxWaP5EqsPEt0P9TsjQ\/wg1m6jGY8SMrL5h+QHvVA21wTlU3A962UIDsbsNrarfx2QeaaWRAH5+XFLL4Ymt4Gjmu1LIflT09BXTWGkx2skE74MqptJPY1LqFobq0u54Avn43KGNcLryUrRYzzOaN4Z5IV3Z3beOjH2oMTpJtkQBhxgetdfcaUsNuk\/morQIMySD\/VluSfc1zV5blUZkYsAd2T1+pruhV5gJdKZlvoA8RcB8rkcZrttEZUv1BORuP4nPNcZplnqEM9rJJbv5LuADXSWUzpdO2R5gfBHpzVSkmtDSmtT2fSIkWOS4xywwPatiL93CrA8etYejSbtMiGcnGTWtDKAmCDxUnRHYdLdtEQRkA8GoJrqTGcfL7VaMIlPCbqcbaMR4I5xT1K0MtJnJJx1FM89s4zj19qtS26gccYqDyjk9KQxjO56H6e9R+Y69e9XI4T1yPyolRCCccjtimBnu7diee1PUloyp70NF+9wCCBTmYKCT2qvUlswddtA9i4UDI9e9cJdTkRRFTygxXot8RLbOvtXlmqbo7mRCcHd0qZIzk9TWsb1VfzWJ+QZYeoqW5L6m7X0mIosjapOO3esjTJd0hX\/Z5z3pk8wZDPOWRAfL8sHv6gVFTaxhNmncMsiCN\/LUFfu9Nw+tQEQWsqGOFFmRcE4yAD3rnJNSvYN0Mke6TORIecL2FXpL+cWyzblkVxjAFQ6S0sZ3aNRWikZ5DEs8mNuZh0HsKoLo8Q3YuPLyc7TWONQknmURv5MkbfMW71tq+psCYoEZf70hwW96Toyi9AuXbjUFQNJnIQ\/NzTLS7DZkbJD425Nc\/9oIVwRkSHmrNnJv8AMXB2owK1y+xtEdzp7hEukEThAgO5iRk7q5u40uSfWYI5rYw2+DlfX0JNaCXgbO75nyAOetdNbWtss9ub+5YpLgSQoB8ijvmnByWiGc1DCLGQRyTsUDYj2HI\/GqRAiv3GeA27HrXeppmiXNtLKsMnmKWMe7oFHQ1x+p2o\/tF3ThDgg+tddKLUXcuKZ6F4T1A3FoEORgZrrbNfOfB4Fch4UtNunrcIM7hXTvdrZQ7iceg960OmOiNV3S2wNzH3qu1\/GeABntXPz69EVJmkC+wrLk1qAtlJhz05qhpo68zo2TzSCWMjdnjsa5CLV95xuPHvVltTIT5T+dTdDudHJeKh46VSm1AckEZ9K5ufWMA5b681CurQKQZHyetPmBs6u3lMhyenXmnXCbotwIYetc1FrSufkb5Qa04tTilj252n09aLonmM\/WHeKwlIzkV5pfP5svnNjA6+5r1O5T7UrIR8rg15tqdgY9Qkgz91j+NIzkUYCsSSSPuEYQhse\/FVRqsbgOyACEdCevPBFa9zBbwabtlLL5hwABWALBSBLEwdFbLk9qq66nPPexbhO6V7suHWf5FRj94DrTDbGAl4WEYH3VJyBWaYYoZlMrP5TE+WwPT8KbczKx2q7FQO3ek4Xd0KxPPHFNdETyKJcbhIg6n3p4TUZ8ul\/IV6Z3YqlFfCNstbB84IB6Cphp97e5nh2ojHorcU\/h3YWLN5bvDE2zDAOfmB6irNq3lsGByGXJH9ahjk3xyRO3K\/dHqPSgOD5QIKv2I9K5nFtWJuakVxDC6ptBbGRn1q5DNJjCsWZuK58tunY9dvX2qQXr\/cRsMTgHPNR7PsO520WpNHam1I+eQAMx6Kvem6npl1HaJd3FrLEpB2SMuAw7GqXhQyzXqCeAvbbsEv0Len0ru4\/Ec95aXunajEstsnyK2Pu+lbUlaOp00oNq5oeG4PI8N2eeCyZrF1\/VYklddxCr1rqLBBFptvDtyFjAFc\/q3hVr4mQfKC2eK0vZGrjc4DUNbiCMwjdxnGazItQu7hyII9nG7n0rtrvTxZR+U1qGQH061myRtKdlvaBc8ZxTVmhNSvoZGm6xLPIsfqduQOh9K9Et\/D11LYCcyAcZ2msnRvDmJUluFUKvzBQMc16RaRL\/Z6\/L\/DU2uy15njut\/aLSYoqlmOentXNoby786QSOrpyARXpus6b9omkZhtdT19q5qTSLq1l3x\/N6cULQTTOestQ1ZXVDBvBPda6Cx1YvJslRo5AeAe9W4oLmT5DH+laUOjCRleWPLDocVTZCiaOnzG4QnnPpWFrOmNJ4gXyk3GReAe1dXaWiQRcrVDUVYOJYuZhkKaLhy9jm9c0Sxg0bet2W1CD94UPKsO4rgbS8EtzLujOTxsA4PvXp11pgvVeB5BH5qDe\/pzVOXwVNo7xpBJDMkzbRIByD7+1KV7bETgrrWx5vdpE04QZAHQnt7VSeExSvCTkEZ45xXp138Kru+uRLBewWxz+9Y8g\/hQnwuuo8yC+gaQcF2ThvaqUrJGThbZnAW2im9tgvnLEzKSue59K1bazS3t0iciNlGCob9a6iX4X6ssiTQ3UAIIK8cCnS\/DrXrp9\/7nAG0HA5rKalJi5WcI5Ro2kVMMjc4pzQTNJDOU2xKuS3YVKtusd\/FnlXUNjH6Ul7feaIEJ2RRzBnHY47VKT6EeRHNam3V5FJMmAWXsynnNMjtjCkF1KoaORsFuu32NWNVkabVjLwqbOAOhB5p1jL508MB\/1GfmB6FqpK47HVeHtXayj+xTxAxk5BA5HoRXTpEkVveTIDibBGT9K4+zthHdhQ2B2DV2Glj7RZPE5GB8pJ7HtWso2ib4dtSt3OrtJFEEIJz8grRjuI2TG3PpxWFa71t0jfhkG01egnSLg4B9alHSST6XHdZYgDPYVUbR4YBkAEj2q5LqiovGPwrA1bXmjifYeQDijQC9a+XPcNFFkkHDH0rppVFvZpFxkCuI0zWLfT9JgUlftEzFmJ659Kt3PibzDtc7dopqwmri6vCY5S4QnI6VTshFcxHocHkVVm8Ro95HG7ZY9j6VTF4sOrSmA\/um59s0MDoksY1fcoqbzEgUBgCO\/tVWG+8xAc49qjnn3KW7Z5pBYmnuVYEqMfSsPW5pBpbSRg7lIIwcVbkckfKRiq7RC9KW2\/YHbDN6CjcT0ItNjm1CO1RWCyyPtJbsK6yfSNQslZmtxNH\/ALPWuWu0nsIbnyFKraofKK9WOOtVdD+I0k0MUV1dky+koxg+hNa00YV3qjoZb1kzBFCY7gHJR+hqxY3Ru0LOHjkRtrIRwaivbiLUYjd7gZUxu29VFV1u5\/IMkLJuUZGR14q3FMxUmbEgcSJIWx6Crcc6LGBJcID6E1xzapcXMgmk+R2GNufl98VFNNatJkSSNnqQcjNTyhzHnE1pcOsrkOjx4MeVI4ra8O\/DXU\/EFolzczrZWjnCsw+Y+4r1q20+z1DTY2uI0WZohkbQQR2NXFjkjCRkAIi4XHTFTGmlvsU5dkeeT\/CCPPya67naFUMp\/Wq9r8Kb61nG6+hdAQd2K9KmlCgHuDziqianYmZ4nv4Q46rn5h+Faezj0I55dUYVr4EtoiBc3RYryAnFdHZaRaQxrbQwhYiw3sep+tP+02xj8zz0YAdVrNfUJgMxkGI9lPNXyRtYSqSTuF+Wh1O5jOMjkY9Kz5bohcZwfWkd5W3vIxLFvlJ6496pTsXcKAOK5ZKzO6Mk1cZeagVGMkntWMHkvLoKCSo5NXZ49ylmxjtUVnPAs4hBAk6nmkVzD9R0lLy0Ch2SVcbWB6Vi3M0kMoR5TIwGCc110l\/YwRYnmG49QD0rElTSZHd1kOfQnmiwamOtkbqdZ9xDKMZ9K2xBH5ShTyB1pkEtgo2o4+tSyuiJlGBX1Bo0C7LUUzxgAn61aSfdnByPesm3uRKdvH4VbyyHjoBSFzFhnG35SKS3aMXKGUZTqarq2W3HvxVa\/JWxlOcEDqKpaENm1qmpw7IjDtIDBCp6nmuF1rwzp8WvgySPb2t6A6SIeEPeltL8yTR+Y3KH8xUXie7bVNNku7Jyj2hG2JxyV71cddWZTdzrdI0+GGOSNPECTWgTbIZFIZh9amt9Cvp0ZrDUIZ7fJUbshgMV5hpvislFguocxcDKcGu1s7+eF0u7CZG2jgA9fYitrJmN2iW88KapZRiOaOUx5JDqc4PrxVeKyvIU2Q3XlxjoprbXxjqzsvmsAmOY8cVebxHpU2Gk0g7gMEgkZ96nkfRj511RLot3JdeHLEwghBCu9s8nA9avRX15Au5WLoP4TzVPw9pmp2uhWOlyIscsa7ZlLDk1pNZ3dupjYxqQfulhk0ugW1HR6tDKB56lX\/2R0qC80rSrm\/g1W1jtzqEJ4J43Z659aR7K5aHzEhbPcrgg1RDKkwEkUkZOABtJGaTXkNMjur3XLO5mebTonjbPyqmRj86xX1Syi3vIkllKe2\/Cn8K6YyzoWaJ5TgYK8nNQ3u3UIRBqOmxzQkZJ8ohvzAo1Hoclp\/jaKXUo9Lm3OZGxHKV+9njFb0nDZHauP1COyjuDElpsWOTdE+CCpB966aC6S7to5lOdwwfqKzk23qbQ91WJJEEkWKzpvDEGoAmWSSNsfLJG2CK0F+ZsCtS2iymA3Tr71JqrM5iDwTLEVVJzc4BOHbk1I\/hwNZeU1vLHICPmHet+63RISjEHPUVmS6vexts3lgB6Zp6MdkUJ9IjkeNYLdxs+\/uON1ZU\/he7nfLXzQwZ\/1aHtXQrczzN+8kOPQVchi8w57e9O66CsjH06xNlAUJyo6E9TV92xHj1qxdKQwAX5aoO2N3apsQ+w+Jgo9qo6zIY9GnkU\/eIWpxIAMAe1aQ0FtW8Mao0WTdWaCWDHQsASQfrVRjfQl6I8506XF0iHHJ6mtzUIVGmXkmPm2ZA9\/SsmzWOeSO\/jXEf3nQfwEda1by8juLCSE42yr8uetVaxlc8t+aCXDIVbuprRtL5kIKSOh9AeD9a2bexhYz+fGs2QApPXNUNRNlbDyo41jkA5A61adyTTs\/ElxaS5uCZYjxjuPcVdl8VEP+4TKdt\/WuU0ycW84ndPMZeikcZNQw2F9dqZlHDMetO\/KhWufSCXdvPbrc7tjJ78iq6zwzuDKMgcli3JqiLVI5nCPvV+cD1qcJtTdLHtX0HeiO1hS3uaS3sYhxbylVJ2+WTVZLzUrd8W06zqGwVkGceuKrBrWJpJpW2bRwQOMUqajJcWUrW1v5bJgrMehFUTuaC6xcctEYo3J2iEJlvqagn8UX0aZlKDA2qQOC3oRWFAstr5tyHVx1bd96qd6RcFPLLfZ\/vEE87jS5kh8rZoz3S6gU+028Jz1Zh157VTaCCynAthtglJyvZW9vapbdvOCxsBwuKh1FrS3swhKs6tkHP3alpNFJtMtQ43dRzW5Y7RgYzXJRXI+zR3MWTA\/BPoa1rO\/QuBuIUD86yas9TeL7HUvpsV0vzADPGay7rw5CZPldgcZOKSPVdgxuIXHANDark\/f+lM1uiqujRxMcux9M1YeJLaLIHOOKjbUY1Hztk9jWfc6iC\/DZo0CTsE8mWyW5\/Ss2aTknIx3qK7u97EL+lVAzynGeBQZNly2O+XeeFSvT\/Bdls8PvLIpBumJwe69BXnWjabLqeoQWMKnDHMh9Fr2eGKO1tlhiG2OJcKPpVxXUmT6Hy6Jm03WtRtFOBFcso+melSSwmaUvuCQkdAckE9hWXqlwH8RarKDlXum5\/GrVtdsoGDkfzro5VJGF7MmaExnC4CgYGDVG800XUBlPMyHGO9bcUkV4FikIjc\/dbtVq30i5Mu1GgkMg25LbT+GaxcHFlqSZxsETW6bljRxJlTzyhHc+laVvF5cW0tJ17Vvy\/DzX5A9ylgrxIMuVkH6VTk0nU422\/2fcrgdNtQ3cdrHoFqeAw3Ak8+taUysq+aHDZH3ap2qx+TiKTdL1AboaUwkDdLJheu0Hp9KtEMQSIpO\/awI6e1JOJ57fbHtjUcKFFQLJ5cThICGzwW7DNR3V4PLkCsY2PfPFPUNBmpSD\/RgqjzfLw2en41QRmcFiu3B6H+dQzXsKlTkyOgwD\/jVGbUHl43AfhVKm3uHNY05r2G12ycs6c\/KcKa5vUtSe7lmlYBd+TtU8Coru5YsRnjvis6Rzsbn+E1qoqItz1XSLBZ\/hnpd4Ey0TMrgDqpPesG6t5LRv3THb1X2r0L4bwR3nw3tIHwySKwP51zesadLZzvayLh0JwT\/EPUVhUV2y4PRHM\/2pMFxID0o\/tFydwzmpZ4hn5lGBVchc8E4+lZNXNU7A93LJnKmmGSVxndn8akAUd808KOwoUQ5iJIixBYnA7VMgwwCKWZjhVHc0\/7hK4Jz0x3rsfDOgfZCup3y5lPMEJ\/gHqferhDmdkRKXKrs6Dwpoo0WzMsw3Xs4Bf\/AGR6V0F7Mtvpl1O2NqRM36VUgkyysTnd3rK+IOpjTPAOq3AYB2hKL9TWs48plCVz5jEnnPLNn\/WSs361YjkIHHT0qpBhLdFPXGTUq\/eHNWtEHUvLPtGQTV+21a4QKPMJUVihyGxnjvUkLjGCfxppsTsdtY+J7lFKCV1VuoDcGuxtvGciwKAsT\/7Tk5ryFJMtgN71fium2DJFDgmPY9EieCFgsuSh54OKgfVkRCpO8849qwpbtmbGTge9Vpbkg+neojS7g5XNaXV5+V8w7T6isqe7Zj1P1zVWSVhyT14qo0xPT9a0SS2F6liS4JGc4qCSfbGzZqJ3zzngVVuHy20dB1pgP8zeMk1A5IifPXaTSggJ09qYTlGGOSMUhn0D8Jm3fD6x5zy2fzrodd0SPWLQgYW4QZjc+vofauR+C85l8CiPP+quJFHtzXolYy3Lj8J4rf2UsNxJbzxmOdOGQ9\/ceorHkiKPtx2r2rXfD9trcAD\/ALu4T7kqjkV5pqOg6hb3rwtavJt\/iiGQazcexV+5gJEc9vpUqxkMsags7dEHU1pDQNYmmVLexkUt1dxgLXU6T4Yi0oeYwM1y33pGHQ+gqoU22TKoo6oqaJoAt2W6vFDS9VQjha6Ikk809bdycbcfWp0tVH3zn6V1xSitDkbcnqRJcFBgDj0rzj4x64W0G10sE5mmDMoPYf8A669QaCMqQFAz3r56+JWorfeNJYI3LR2ihB9e9RUtYune5ywxinA8EVHntnmlJAPSszYeDgg1JGQc4HFQbuRUkZ4YEdaaAsqwXtzUysdvBIFVVbj73NP3EdzVJ2EdS82OOlVpJRu9KaXzjnvg5qGZ8Hn8KpCsI8u44BppbA681Fk7ic9aCdxz27UwFaQoC3c1UUhmz6daW4k\/gFNiGBnIOahvUdiYj5flOR2ppwVO3H1oJwetNJwhA60MZ7J8DpP+JBfw54W4J\/OvVa8g+Bz\/ALjVI\/Rwfzr1q4njtoJJ5DhI1LMfYVlPcqOxx3xF8at4V0tYbKPztTuQREv9wd2NeZ+F\/GU2mRTWNxK7yTncLuY7iHPt6Vd1cX+tazc6i+CZmxEG52IOg\/GsrV7KyXV7ZCWiu9oBCoCob3FRNSS0KpuEm1I7jw94sntNc8vV7zzVucRsR91G7EexFejNAuSQAQehr571S8TVoY1tQLKKzJjnvpuBK3ooHpXonwv8aLqMLeH725M15aj91cN0mT0+oqac2OcInoAt13fd5NSGHHUDmpwO9BGRWnMzNRRhazcJp2nXN25wsUbOTn0FfKc9xJfXc15JkyTytIx+pr374y6l9h8FtApxJdTCMc9u9eAYCjgcD0rS90iIqzYzK+lO3DGaQgHnPFNwPUYoKEJGeOKlB+YioSOakPVT60hkyHNSqcqDUIHBp6nA4OPbFUSbhOeahJyalb7p+lQ1bBC49RTSdoJqT\/llUE33RSegFXG92OTUiL1H60xPuf8AAql7UrADcDk5NOEWyLcw5brTX+9H\/vCrNx90Uh9T0f4JPi\/1VMkZCnFd74x1AlItLh5aX5pMdlrz74J\/8hjVP91f611utf8AI1XX\/XNaLXkQ3aLKttZbnVAvfAx0xXK6+NPlm1WKa+FrPCjbZ9+CSB90LXolj96L6CvDPHn\/ACM7\/wC8f51Fb4bIrD\/GV4YrnVLTS4bZQ6oxEiEZySfvEV6LovhB7cwzRgpKjAoynG0+1cp4S\/5Cln\/uf1r2aw+5B9P6UUIpoK83zWN3T7ppohFMQJ0GGHr71cPQ1k2f\/IUk+la9KcbMqDbWp4T8btS8\/WrDTFOVgXzmAPQnivKicEj0613PxW\/5KFef9c1\/lXCt9\/8AEVXRCSF6gAdKaRgjg\/UUqfdFO70DIT170oHAPPBof7xoH3WpgTpjPJ4p+0nBGcVH2H1qxQhWP\/\/Z"
          },
          "Notes": "Andrew received his BTS commercial in 1974 and a Ph.D. in international marketing from the University of Dallas in 1981.  He is fluent in French and Italian and reads German.  He joined the company as a sales representative, was promoted to sales manager in January 1992 and to vice president of sales in March 1993.  Andrew is a member of the Sales Management Roundtable, the Seattle Chamber of Commerce, and the Pacific Rim Importers Association.",
          "PhotoPath": "http:\/\/accweb\/emmployees\/fuller.bmp",
          "ReportsToEmployeeID": null,
          "RowVersion": 0,
          "DirectReports": [
              {
                  "$ref": "1"
              },
              {
                  "$id": "3",
                  "$type": "Northwind.Models.Employee, DocCode.Models",
                  "EmployeeID": 3,
                  "LastName": "Leverling",
                  "FirstName": "Janet",
                  "FullName": "Leverling, Janet",
                  "Title": "Sales Representative",
                  "TitleOfCourtesy": "Ms.",
                  "BirthDate": "1963-08-30T00:00:00.000",
                  "HireDate": "1992-04-01T00:00:00.000",
                  "Address": "722 Moss Bay Blvd.",
                  "City": "Kirkland",
                  "Region": "WA",
                  "PostalCode": "98033",
                  "Country": "USA",
                  "HomePhone": "(206) 555-3412",
                  "Extension": "3355",
                  "Photo": {
                      "$type": "System.Byte[], mscorlib",
                      "$value": "\/9j\/4AAQSkZJRgABAQEBLAEsAAD\/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL\/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL\/wAARCADZALwDASIAAhEBAxEB\/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL\/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6\/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL\/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6\/9oADAMBAAIRAxEAPwD1B5S20KnGeT1rzzx5q1vYeKNAsrZQszTGSRt3qCo46ck\/pV\/xN4quNB09YLOJZLlzhvMbhB64715FqZv9QvGvryV2mJyWz90+3tVzkkjGMW2ely2jxxyTc3U0bB5NzY8oA8ZUdjzWVfsriZMBIZHBiJPzRkngA+mTUem6pKdIttXkbZcF0tZWUcSKzYw\/r1qO7tk0bVWa8ldzGwbaRkMhb5T\/APXrLQ0syxHpkhQQ3UrPhDnLZDGsLUNImF8RGROspHyP2Hr+FdbFK2o2suppG4Lo0nkEAYUcfhVaaz8m4S8dS7iLcqbuQCOeO9IZnafFf2t1FZxuhsov3qlQCSR2rq1v45yy31nHJGQzQuvymFv61i2NsqahFfbWVHhO+DA6n09KsuDqEwSPdGkR2FcfeNCbBpGyI57u0ZDcSZhG9GB5Uegqnp928cbw3INxvYsZHHzDNaVhAY1BLfK0ZR8nG01kS6U\/nosZZWA3B95wfajmBIsTpHDcBGbBbBVgONvqKSES2mm\/YgRLGHLrI33+e3uKvLBDuU3LZAAA284qV4IH2eW2CWHJ7CgDGnK7F3EbyMEDtWizmPTrQBSScs3Q59B9ar3jRhZNijA+U4HJ96gluo49PFubhVdpAcKOgpxYmiykqMgLbi5yQpGAtZfiwLNoDW7JulB+0wuP4dv3vzHFQXet3McTWunxLIwziebOR+FZ9vfakt0JL54rjKYZVXbsHoBSukx2djnNO15iyp9tIhH3QSQK3H1nUZXBNzN5IHAEh5\/EGuC1i2XT9XnijGIi26MZ6A9qn07VXtWOcvGRgpuq+ZonkPXvD\/jFAos9RLKq8Ru\/Qj0J61sT6x4f1GTypod5xjzY12gfU15Iup2dwOkkbHgitSymWRf3c2So5GSRinzJ6NE2a6nodx4dVrTzLGYS7juVCwJI9qwlhWSVo9knmBsSRbenuR6VmJqLQKHNwyiM8YYj8q2PC2u3D60uoSMzEL5IyuTIhPfPap5It6Fqbtqa8\/gu8jiSXyYnjZRnaeVyO4p0Hgm5ePcs9rEpPCnP510surRWGrxuCxtr5wgJBK5x+nWtWYJEyqFDDaOVBx+lX7FdSfas8NhtWvpTPPdG6JHyyMeMew7Co5dOVjsZAEbg81XhsrzTgk1ndqBExdYCd25fQ1ftb+G5WUakhtSoHlgqWDHGcZHT8ax5r7mnLY5iWafSbzy8O8SHc8S+g5z9RXfMV1u1incm4iMYubc\/wuOjL7EenYiqf2WLV9FeZLuzllijL+X5gRt2QMZ75HaqHhi7ubAXNnGssQLmVIX4Ea5w6gHn3yKqxNzp4o1sp4La3+aVY\/3qlv4W9fb3ps1iYHaJVDgkct1\/A+lEVlBIzyxSlXiTYN3JKnnGal1D92jTPzt2IY84K5\/pQBVeKKC4kujNmZl2hAPl47Cp4LGS6iV9iqJDlgWwymqEMxnvTDCF4Xccgj+daj3fkLGUkC4GGAPemI0cpb25WbcoK\/eDZFZF\/rJlYJEiIq8Aj+L3rJvNVe6kdEYlAcE54JqKB1U7lG8+prNvWxqlpdmgt0UwGk5x+FSHUCiZ39KzJ9QYD76AegGaxb7VfKUkHHP4Gi7QaHUjVFnkA3qrAfN70sdrGyTKwV0Jz61wdtdma6EnmFUB4z3rrbOfciqkqPkfxNjNPcVrF\/7IhfcMDjA+aoRYFZEkKhiO4HSpDKV+8qj36ik+2GNsOCD2OeDSHa55t4vsZYtTlnCM0PQv2BPauaV2Q969a1W1t9TgZQwSUDoejexrm7zS7NYw7WyKQPmyMYpqQmrHKR3OQOoNWoL6SzuFmhlKuPTv7VHqMkMZZYSmMfw1HYFRsnkGFEi5PfHsKqwjak1aeVGMysrt92P\/ABrrNH1A3WnQlZEimgGOOT9K4RoLjUtZnZGZ\/n+8fSt8mXSGt7i3ZGSNdspYfeGev4VUXqRJaHqyXzXnhaXeiu4j+4V5Jxx7jmrPhvxFNc6Hbl5\/LdAY2WUYORWfobxSmKUTF4pVyCmC2McH6A1xF4Ncj1K8AV2Tz32knHAOP6Z\/Gt27GRt6v4dW1tpLm2kk2R4aSNzzj2NYjGVEAQDbyV3Hr9a7eOK4nkcM3LKRub5gc9iO9clLpt7bN5L2F0jLkAlSVI9QemK5JJLU6Iu+5myJAX3FUzgfPHkc96vw6k9s1tJLMZkDbPnUFgCf73Wq6oDGq712EnoP4h60koJtpEKjITIA9R0paLUrVnWx+akOY2VIonBJ\/vg9PypfN81mVzuDjGffPFZltch7BAwYzSICuBwQOvP5cVdWQMqYBVuhQjHNWjNoje1W4ffI7NNF8y7eCfxrL1a5kjLWeQHJyzKPuj0zW9cXD6XZXF7dw+XFJ8qgryW7V59dX0txO8xO5pMkb+1TJ6FRWpfjnAKpGAwHRfT3NTNfQQEebKZZv7ozxWOHIi5YIuMu9SR30cRJt4gzN\/HJ1P0FTHYto0nujIGwGRSOrKBiud1W5Vvk88S854UCr7SzXLFWfI7qPlA+tRPpURO+Tlv7i\/w\/jVEmfal4VVmhKqejdf0rat78MdrTBh\/dZcYqJ0R7H7Iw3LEQEfvVPHLxykll5U9yO\/NMR1VvdMQAsny+nb86c0yFijcZ7dvwrm7O8cKYx8sg5KnvWilx5sXzYPtnv9PWpZSZYkkMZPcdiaqXbvPAVXBYDPPQjvSyHCEqNy45BP8ASomn8pAwH7rqCPT3qE9S2rnMXukCB\/NEZ2HnaKhjtIweHbaD8xA4Suvlt1mtGwVbb931AxxWLJbCGR8hjGVyeP4u31rRN9TOy6FnRoWjlVEbYpPfpmtx1LQxsy\/KpOVxnJrOtoxGI95PygfNmrJ86BSXcgucBs9RRcVjoPDQnj1JkIXypwJQ4JDRAjlAPwzTvEct3aazIkIMsLKrRsqjkEf\/AK6yre+jtbqxG4nZKreZIeX9iPQCvQXsrS5VJ1gJSVQ67Txg1vCV4mMlZkEt4baVH8shXQMjdiDT4Ly6jt3W1upYYxyU8zJIPYVTvIWDIkjvtxmNOcLTolMseUb5l647isprTQ0i9SW9+w6gsl3c2du0u4L\/AKvIb1JxWadG0SYlling7FY5PXsM9K0IBEIHBUOpJOO4I700puAbBVuvYfLWCl3NNjEttHsIS8UV5fh1bGZUU4\/Ks6e\/ktNTkVL1Lh4mwCchwPXFdD9ndZvPLs8SAsmemDXE6jDEltLKpdd8hG7uAev403LsOMU9ylq2sXms3GGmkeGM8BmOB9PeqTZyAerdeegqdl8qMBsLgZ2\/3R7+9ZxmByc8jkUavUeiJZ5izJAmSFPP1qaJAMbnwCMEjqKzknKAshy8hOc+lWI5PL+csR7mrSIZqxzCBNzIEiUfu4s8sf7zVRuNUmuG8i0+8xxu9KqsWnbdIWGcdTzV2IR26Hy1GQPxphuI6+XeR20J3LEpEjjue5qa7kCyRTEHC5Vvp0NPt4fs1k8r8TMNv0JqOWLMQ5JEg24PY0XCxDNHtZGjYbusZz1HoanjutxD888HHY+n\/wBeqyIREsLHDITikBAkJH3X+8Pek3caRqed5kY756Hrz71CSJFeNcJkfgaoJM8bnk4\/iWrEEgm5\/i7+1ZyRUWdl4JsNN1bTZrS6gkkvbduBuOXQ9MYrqh4N8PIs7ahYyIw+5H5xyK4XwZK0HiEc7DJC8ZOcYIwQc16VFqFu1sUuJZi+MDgHJ+tbRSkrmTbTsc5\/wg1reKTY6jIu4\/6uRQ236muU1fT73SbxLe\/g2x5ISSI7lb8f6V6VdLMqlLeRWjPJEYww+pps9kmoaU1pcwiSN+hJ5X3z2NDiugKTPH2MkIeSJBIowxYoSBXpvhtru80aN0lMsS\/LH9nQlFXA+X8CTXnerW97pTvZ3MjFYXaNFBxvQcg8dRXongm5it\/DEEdvO6qGYsFfA3E5NVTfQUxkV1cIC6SEgY6gMPxFWY3jV\/PeMpvUrJEhwOe4qGDbFbmJELK5z5jjGD7etTeWFtzEUIZPmTdz9RQ2LqQv5yKyqqFgcDaeG96pzTsEkfYxKjoT0PtWjify0zAU7KfXHeny2QntX81juPONnSubqbGW91LeaLIsijKrlNp2lCe5FcNqshN5Hb7iVhAYg8fMa9GNtbqkwlyB5ZGT\/SvN9Yja31G5Ryu9lBHcgEU3sOK1Mm\/ugcxRcAnnHf3J71nb9qyFTkgfnT3BY4JAJqvL8kWM4aqj2E0OEmCH\/ug4p6MZJEzznjFRRqSUGMZFWoYJPMUgEspx9apuwrXLkkbGESAE4q1o8X2iS5dhxH09qtxwC4syoHVeCPWjQUMVxeW8nyswDjIqOcvksVJZmkacbj+7Gev607eWiiTOcHp71I1mxN4v8TL0FOiiMgjbHVyh49qTn0Go3KVwWDBl4Y5qmzMHK9ARWzd2zYTg7twUcdahudNZWZgDwOcevpSU2PkMlXJ4PPHPPSrFlIA54qr9y6cHoVp1uStwVz1XIqiEa2lXclrq0TbyArgZ9u9eq+YUi83Y+xv7rZB9sV4yXZbx2H3gQea9Yj87yUcMfniUgE9Diri7IzmtTRivZLdUAYBt+SrdSKemvRusjxOMIxDheRXLXZjmcOjmVl+Ugk4yferP9mzW8yP5u3fjfFGBtx\/WruSXtX0uHV0hmkkC3SNlXA42Hqp\/nVKDQtO0uIW8l4wGdyMJipZT0JA79fyrRVJ2+Qtyp3A+vtVO5urGaQC8tcyRrsBV8ZUdP51UWkxO7NaykCRqUOZAQMuP5e1ONzvYhfmDEglugHtSRyBnBRFBkGCCe\/rUY3I4jA3J0Jx3qbgMl1P+z0kRoWlidQy4PCe9D3kgjUZJyoZSDjr3rmPGHiW70Sa2thYxXNvcwnBbOcg8jiq1l4qubvYZbVLeac7NhB4QDqM1lUjY0i7o6dpS4kefGY1D\/McAetea6zfm41u5kTiNz8voRXQajq9xfk20smLTsqDk+5PWuY1OCKPJiLs3TlcDFJK6sWtNSiDG8gGVJ25HzYyakstOfU5QIsMAcA5rJZsyIuMHPNeh+GLEWGiRzlB5smXBx0FNxsCdzIl0Ga2dPMXCqMknv7Vo6fpgZpJCoOTx7Cr13Is8J+0XQ6cAjpXOrdzWtyBbXyEZ6ZpWZV0ddFpibiQu0+1E2krJOsg+VlPDAUmmahJOirOm2UDnB6+9bjITFvK4PsKmxVzEfTdzeY4OTw2KIdIzvQJgMdw9jUl\/qqWe0hGkY9AO1Zkfi66ebYlsEOepHNFgua50XMil1xg5BxxReaSPKbgYweferdh4iLAJcxFs9CB0rSlaG6ty0RyCOV7inyhdnit8PLuZIuAysQagWRvNQ9xxmtDxVb\/ZfEMy9A7Bqy4fmlHXGeKu2hk9ywZWN8xJHHtXsOlzLc6fACodfLXOOnSvKHtXWYOeVPfHSvQvCF\/I+nPbFx5kJ3dvmSmmtiZJ7m+iWiHayrvc8gDIFaf2OARoHlCHuTjNZdvD+\/URR7lJ3MQeBT7lpJrllX5lU8mtbGRBdspv5Qs22OD9aU2llcBZJANxHtUF15MsxkhZcgAOmeSfQ1GZmkPzFUI4wRmpKNGBAGUhuQcU\/eAAynleqg9aarEyhVxluB9aUDMgUYyuRUobMi9jtLjU4\/tyOVVCVKxglAewJ6fUVnS6TpKyNc2lxfJcKvyieTcuPTmtDW4BKljcksCWaJwOw61mXBRYCT071MlrcqJhXDeW7b23HuFHU1kaldYQjdtUdu5qzqeomMERfKScc8nFc80juS0hOenJ60JdSmQRIZrmNezsB74zXt8dggtI4E+UKgHr2xXiNs+28R24AYGvebSXzAp45UHPtilPRl0ldHN6p4eTzFl3MynIZRwPrXMR+E1iud4LuoP3DwPzr1ryUYYC5Jqu+lvKxJAVexFF2NwOJ0jS7u3uIQ8iMA+AAc\/Kf616A1pi0PGRiqsNjFFMABkjv61uTL\/ohBHaiw9TynVxdK0zxRlixIUKMn8q5i7tL6KaNoHkuNwzJt\/hb0r1i60jznLxcOvp3rOGlK0hDKVY9dwzTVkQ02cjpjamojBSQseWI5AHv6V2GkxTmYFyMHsK1bTT\/s6\/wg+wxmrRSKMHaqKfYUpMuMTyv4kWgivbS5A4dSCfpzXJQMAFbH4V3XxMdGtbRQBv80gfTFcFA3BUEBgf0ohqiamjOksCGiG4\/wDAiM49jXT6DEi6ou2MZKkblPH5VxlldEMDj5j1wetdb4fkSXUEKqVYDPHeiW5CuzpmSa3mdFkD4HDBscenFOtzPEA5fcm4Zbr+FIdyuHAKDHQnJB9ajl326mMSNsY5kAOVJPQj0rZamL0K8s8ZvHIXEe45H94+xqIoDybhgfTio5YEiiyQQQCFAI5J9PSqipJtHmSKrehcCobsUkdZbMyzIVUkj5iT2AqPJlkLjpk8f3qq3V0sEErB2HylcjvUVmxkt0UsIvLA6H7xoBmoYrDUIVgnDW6O2ElRjnPqSeKzvE3hSXSrNHjnM1s7hdz4BBPTOO3vWjA\/kJLHKfMjcZMfXI9vStCwiidJbC4nFzp9x8oSVjvi9MH2qt9wTtseGarE8TuzKRtO0j3rn3lZid35eler+NfBd1pzyOod4iPlkHzBh7nsa8untGjcg8EcH60kraMq99iq0o6DrXtPhq+N3oVlcZJPlKrfUcV4r5GD6V6X4CuD\/YM0e4\/upuAewODU1FdGlF2lY9ItZgwUnNSz3apH8zbQPesWG4KIGyOeSKgaWS8kMUfzKPvMe1ZJm8kbWmS\/bZpGUEKCADW3OpEOcjk9K4ibUrjSJYYo4sxfxOPzqw\/i1o7Z5GieQj+Bepqr9ybG158a3RiBww5xVn5GGTj8a5xp3v2S\/RWTCfMCKuw3occkf40rjSNCXYq5X+dUpZAMscD2zUc12oPUH0GeKoy3AOSWyewqG7lpHnPj+7M+qJEGykC8\/wC8ev8ASuSGY5lft\/Sr\/imdpNflyxJB5+tUAyyAZIBAreCsjlqO8i\/G+1sgE5Haul8MXJTUwglOwqQPrXIW77ZAoOR9K6bQbZ\/tPmqSMd6mW4R2PREuC7FWIVNudxIrOutSgSUxSXA2svzBxgL+PeoH80rhnJHp0qjdtLcKIpZS0ZH3XAyfpV82hk1qR6h4gtYVYB1lKj5AD1rkrvUpLycyyM4PQBTxitufSLUbnCgDtk5NUWggiO0xufoo\/wAahyKSPXbjwdcXKrHDrFmcncf3ZGR+dXU8A3DhJUu7Yt\/unj36111vptnAqn7Pvdem7rVsENnKCPnOF7VvyGfMcingq9Plq19AhHXaMnH51q23guEMvmajKcckIABmt1HXqdhx3I6Gned5nylNrDuBT5QuhY7G3ijCNL5qAbSGAOa4Xxj8NdC10G5spVsr0j7yjKP6bhXaEsFKsxbnOc1XkKzRFGKlWyM4wKdriUrHz5f\/AAq8RWsgR1tCjciUS8Y9elWtE0e78M6hPpl8u1rhBJCw+7JjP3T3r16\/juVspIoUV5c4jPUY9D2ribjwxq11eJPqV4Gu7UlrOBf9Wmeo98isaitobU5dTPkdwNp4BOCa09PvIEUxxgY6H1rOuNvlkFWGeNrcEH0NZMumtcZljuZYpMc7WwD9awWjOpu+x09\/5cy7d6DPQFgDVCzsDbTkumQ3PSuWOnjaoWXEinkzZyajSHUMc3ca44GJSeKrUpUkelRTxpEUOFGKxriQw3DmJgUzyM1hWy6qzbYNTZoum5kyB+fJqybWWKQBrl5SxyWNTILcrL7XDkjDZH0pXmCwSTSHaiIWJ9AKQoCemOKoazHNc6bNZwAgyoQ7A9FpRTbHOSSPKtRk+1ahNOGyJHJ5pEjJTd+VKISk7wvw4bGPeuq8KeFIddnKyazYae6sBtunwWHqvY107aHFvqUdHsDczBGUDC7jxXX2loIEwo\/pXYab4T8H6d5en\/2613qErcvAw2qO+cDgfjXSp8MbGXEsWpXARuRlVJIocL6kuXQ83i2b\/wB5CdvJPPNNkRXGQoYr046V6VL8NLKIeZ\/ad1wMYESn9MVBJ8NiigrqifN93fAR\/I0crEeXSRKQW2YXP8QxUBt43OTJEp9M16Lf\/DXW4QTbXFtdcH5ASjH8+K5+88Ja3HKqHRpwyqAdiBgT65zUuLGmdi\/ijUeClrGpz91m7fX1pf8AhJ73eVRYlIOCd2VxVCWxXyXEYVSTkKePbj0qN\/s0UBREUkDDDhufeovMr3ex1Vprtvcr86tGQNxx0PsKvCWBgAZTjrtIOea4a5naxQTGU\/vAAqqM5PotbdhqvmwGN03zRRgs4OH+jCt4Slb3iZU9Lo6Y\/eBZwMjOD3HasTVtdi0668kplSh3Sv8AdX2965FL7UZLu5FwHtwPmYyHllJyCB6GqU+oW7vPJIq3KYyWDneG7fgK3SOinhVu3c6ePV7lLVJoY0mincgNu9Pb6VbuG+0RIEZVIyUc8lfauTtNQbTvKaWNntjJ5se5N0gyvOfYVs2V89\/qS2+yJvMbEe1vmdT3I7VnKF9AqUuTVbIz9dsonRbuLiRx+9HZz\/e+p\/pWCLUMuU4Peuy8T2wt5oo0AEQQgYGBxXJrlcFOp9awrQszKlUujPuLNpBkEe2RVVdMnVgXCEZ6CtdpVBwRR5ysRk\/nWJ1xk1oR26Oox830xgUSRlCCSc9+KsJMEHy7SaLe2m1O88uIAkH5m6hR7\/4UJN6IlyS1Y6ytZrqZY4ELu3QD09TXS23h1FCxuc4G+WTHU+3sK1tN0cWMSwQqNzEF3I+Y\/wCH0qn8QNVTw\/4Rkjhb\/TL4G2g5wRkfO34D+ldcKSpx5pHJOpKtPlifPl8kc+rXk6keU88hTHcbjiu28JroGqGOy163AdPmjuFJViO6kgj8M1x6II1AUcYxzV60JiOScGuJ1bO59NRyyM6fI9\/1Pc9L8N6FpqPPY2eFYZi8wlmI\/GuhsdTuWsw1wyxnIGBgbB\/+qvO\/CXiEXxjsLufbOuPLJ53\/AI\/jXZSJFZygC4Xgkyq3IA9cGu6ElJJo+bxOHqYeo4TLEmr3P9p2cUeogKkn7yNk\/wBap4xn8c\/hVm71gjV3sJI\/PiBBOPvKSOAKisoldolXD+WS6SEZGO4wKitIri51WS5lwksQLElxtx2PtVuxzK5oWuqxFsDzHQDIkfqB059a1FmeRQySoq+4rmtOvm1W3eJI1WbfslZeA4z1B+ners1\/BbStDNIVZOMK2OPpRoNNnGSpNJcArtAXgqzZGD2AqdYYWRVUKGTOAeCuPU1VSfdIyW8qGVsnaTkD6VFPqF3DFJFcQ+YX+VWi43k9mrNRNVF3UWSpdxizOXijIbKhssp7daoJOskogZQ8gXejxIdpHTr+tUJotRaziXCzMjAyRA8IB1C44NVrqe7tXkRyWMjgRwRnOAfcdq0SUTvhTjBlu7s7m4YySStLHG4beBtKgdttKk1h5Nw0Mb20TuI\/nG6VgR94fjWc13M8RkMHlzAgBifTuef0qP8AtF0Gc75C2S5Hf\/ConXhA76GBrVXaEdC+LkacYlA89Bx55U729wTW\/wCDLmO\/8XvIoLm2tW\/eMOmSBXnd7qczKwzgn04rvPg8scg1qQjMojjAyf4Tn+tYwxLqTUVsa47ALD4WU5O7Or8T2QudOmeM\/PEhxn6V5nYTCe0QMcuvGfevZ7iENG6kZ3oeo68V4tPbvput3Vowwhfev0NbV1omfNUHrYtSKeD19TUR45wpPfIq0nzKOakttLlvnYRfLGv3pD0H0965eVvY6VK25Ut7Wa9m8qLAHUnHCj\/Guz0qCPTlWK3hyD1JPOfU1FbWUFnEsUK\/KOhPUn1NakEPljJ5b+VdVKHKctWpzGlZPK0nzYBY8AdTXiXxB13+3PF9yIpd9tZg20IHI4++R9SP0r0Dx54pfwzootbfP9pX6FIpB\/yxXu31xXikeUAxnHvWOLqfZR7GS4Xmn7WWw4A7snH40\/ceT7UKcg4GPxpHb5QDyK88+tjZIv2dwyLuB5XkV1OjeKbhFCXC+cmQcN\/jXFISkTYzuJ2j+tXLdgu3j9cU4zcdi54eliI8tSNz2XS\/FFndwNAZDbXErfNkcBQOi\/pUryTmeC5Ty47aPMcsjn5ZV9Ca8pt7l\/u7h14z1rYttZuo4vI80mIsCY25UnpXVDFfzHhYrhvrh38mel6fqEAuDaWyCFJkDthtzZ7YPce1WHlsWcmWeVJRxIIzgFvxrgItc8shlj2uCNoHY+ua19LubWa2ea7llWaSQsQhGK6Y1VLZng18txFD44lKyhiF6l0CiLKfKAPBHGcj09KqS6gVubuSO2m82RthZpC6sfp\/DWY9prdrGgutPSOWMMW\/eBlZx0K88gjPNUo764FqySoIWf5mjU52g84NS6qpq7OnBYWpiJ8sVfzNCRYILLy2uXSUYYRJwoY9Rms8zvGzFHYu2MuetV5Js8s2T9arSTHn6dq4qmIlM+wwmVUqKvLVlmWfPzMc\/jVGecucBsE9TmoZrg446ehqF3IU+\/X2rC9zulZaIjmfe2AeM46V23wr1Yab4uW2lYLDfRGEt23Dlf61wwYHnt+tPDtHtkRirqdyMpwVPY1pTnyyTPOxmHVejKD6n1Lt3IY+jL92uJ8WeFV1LUYrhC0fmJhZAM7WHUEd+1W\/Anix\/E+gJc3Clby3k+zzkdJCADuH1rrpPLIDOMwyHk\/3T616qakrn57OEqc3F7o8xtfB+pR3KJdvGLQDc00ZOSP7uOxrfit444xHEoSCL7qj0967Zbddu0jcuO54NUJ9JjWMLGNsIJLIOSxpx5U9CZczWpzMNo87blHH8hTwnmTCCFiAD8zCte4tbmf9zEFtrbuzfePsB2rF1e+s\/D+l3FyCW8lSxJ7kdB+daXS1ISbdkeUfEnVTqfi6WIZ2WgEXB7965PaQPapXeS6nmnlOZJXLsSe5OaTHGeTj1rx6s+abZ99gML7KhFEQ4U5pOvU05ueKWNcuBWdjs5dbEhB3Bc8IM\/jViM7kyPyqurFmY4zuarUYxnpUs66S6lhT2qeJyBzz9aqg\/h6VYU4HPWlc6Ui9HNt6EEelW1fIyrcVlo4HHPNTg5GapMiUE9zb1mW4095BL5KtMpZkjOTnvnPSuZabOf7\/AF\/+vUmu6idQ1O5uXPLyYwOwHAqiGz1xnvzV1puUjzsrwyoYePd7ljcdmc4P86ryyYBz1pTx0qpcMBkHtWR6MnZXYwEyTbeOuTT5OvUfhUUeArMf4jjPoKU8HBqjmTursAAT0\/CiRgo9\/SnoAMEk5qJgWPXjtSW5FRPlOn8BeMY\/DV5NYX6u1jeOJPMQZaGUDG7HcEcH6V7dpuqxXdr9otnW5tm+8F6r74r5t0u3NxrtpHycvzj6V73o+nTafplldWpKMY\/mx0Iz3r1MM24nwmbU1Ct6nSR3jwr5lvIJ7cfw\/wASfUVMNVPliRoS8fcx8lfqOtZMuqkYI01d5H3lYg5\/Cs5hcXspJUw\/7tdHL5HmX8yfV9dlWYrasHOOgXdmvJvG\/iG81CUadLwqHfIBxn0H+fSvUdR8jQtEuNRuF\/dwKZD3LHsPxNeB3M0l3czTzkmaVi7H3PauXFS5Ukj2slw3tajqNaIamBnjFDdx0pq8r156YpzfePHFecfawXukTgAe9PhIAL+in86RzTh\/qJPoP50MVtR0Y+QDj2qZeTzkkenpTEI2\/wCelPTr1\/8Ar1J0Q0RYBx2FPDEDpVcMOlODLx1we59aVjbYsBiD0wP51MrHHBIqrvAAGcmo97vzH06c00NyIpWJTccfeJx+NDSAZOB8tJP90\/71R3H35Pof5U92ccZcsFboiUT+ZGD0Ppmqcz5b2qS0+4frUEv3m+tNLUyqVXKkmWV+ZMg8dqUjnvjvUMH+rP41Ofun60W1NKT5oJsc\/oMe9QHLP8o6e9St\/q1\/GoY\/vimE9Wa\/heLd4ot9y52ozV9FeGyk2jxxHnyvlr5+8H\/8jGP+uDV774W\/49X+gr0MN\/DbPiM6\/wB6sXptLQsWXpnOKEsUTnABHetKom\/1Q+tdCmzyHBHkPxg1YKtnocbffPnTqPQfdB\/nXlJOWJ64PWuy+KX\/ACUG7\/65R\/yNcZJ1X615mIk3UPuMmpRhhYtdRFAVsY+Vqdnrn0qNu31p7dTWJ6600G4\/HingD7PIM4zimetMH+qP1pWFJ2LW0rnnpQMj6dacfut9aaPutQbrRBk8j1p24MAMdO1Rp978aV+iUA5WVxzOWKgHrx\/9eplchAOnH1qun+t\/4DVhelIItyP\/2Q=="
                  },
                  "Notes": "Janet has a BS degree in chemistry from Boston College (1984).  She has also completed a certificate program in food retailing management.  Janet was hired as a sales associate in 1991 and promoted to sales representative in February 1992.",
                  "PhotoPath": "http:\/\/accweb\/emmployees\/leverling.bmp",
                  "ReportsToEmployeeID": 2,
                  "RowVersion": 0,
                  "DirectReports": null,
                  "Manager": {
                      "$ref": "2"
                  },
                  "EmployeeTerritories": null,
                  "Orders": null,
                  "Territories": null
              }
          ],
          "Manager": null,
          "EmployeeTerritories": null,
          "Orders": null,
          "Territories": null
      },
      "EmployeeTerritories": null,
      "Orders": null,
      "Territories": null
  },
  {
      "$ref": "2"
  },
  {
      "$ref": "3"
  }
]

})(module.exports);
