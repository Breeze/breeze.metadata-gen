/**
 * Extracts from the Edmunds car service.
 * //http://api.edmunds.com/v1/api
 */
(function(edmunds){

    // First 3 makes from the following feed
    //http://api.edmunds.com/v1/api/vehicle/makerepository/findall?fmt=json&api_key=z35zpey2s8sbj4d3g3fxsqdx
    edmunds.makeHolder = {
        "makeHolder": [
            {
                "id": 200347864,
                "models": [
                    {
                        "link": "\/api\/vehicle\/am-general\/hummer",
                        "id": "AM_General_Hummer",
                        "name": "Hummer"
                    }
                ],
                "name": "AM General",
                "niceName": "amgeneral",
                "manufacturer": null,
                "attributeGroups": {  }
            },
            {
                "id": 200002038,
                "models": [
                    {
                        "link": "\/api\/vehicle\/acura\/slx",
                        "id": "Acura_SLX",
                        "name": "SLX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/legend",
                        "id": "Acura_Legend",
                        "name": "Legend"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/ilx",
                        "id": "Acura_ILX",
                        "name": "ILX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/rsx",
                        "id": "Acura_RSX",
                        "name": "RSX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/rlx",
                        "id": "Acura_RLX",
                        "name": "RLX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/ilxhybrid",
                        "id": "Acura_ILX_Hybrid",
                        "name": "ILX Hybrid"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/tsxsportwagon",
                        "id": "Acura_TSX_Sport_Wagon",
                        "name": "TSX Sport Wagon"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/rl",
                        "id": "Acura_RL",
                        "name": "RL"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/tl",
                        "id": "Acura_TL",
                        "name": "TL"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/tsx",
                        "id": "Acura_TSX",
                        "name": "TSX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/vigor",
                        "id": "Acura_Vigor",
                        "name": "Vigor"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/integra",
                        "id": "Acura_Integra",
                        "name": "Integra"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/cl",
                        "id": "Acura_CL",
                        "name": "CL"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/zdx",
                        "id": "Acura_ZDX",
                        "name": "ZDX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/nsx",
                        "id": "Acura_NSX",
                        "name": "NSX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/rdx",
                        "id": "Acura_RDX",
                        "name": "RDX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/mdx",
                        "id": "Acura_MDX",
                        "name": "MDX"
                    },
                    {
                        "link": "\/api\/vehicle\/acura\/tlx",
                        "id": "Acura_TLX",
                        "name": "TLX"
                    }
                ],
                "name": "Acura",
                "niceName": "acura",
                "manufacturer": null,
                "attributeGroups": {  }
            },
            {
                "id": 200464140,
                "models": [
                    {
                        "link": "\/api\/vehicle\/alfa-romeo\/4c",
                        "id": "Alfa_Romeo_4C",
                        "name": "4C"
                    }
                ],
                "name": "Alfa Romeo",
                "niceName": "alfaromeo",
                "manufacturer": null,
                "attributeGroups": {   }
            }
        ]
    };

    // First 3 models of a "findByMakeId" for a specific make, the AM General Hummer
    //http://api.edmunds.com/v1/api/vehicle/modelrepository/findbymakeid?fmt=json&api_key=z35zpey2s8sbj4d3g3fxsqdx&makeid=200347864
    edmunds.modelHolder = {
        "modelHolder": [
            {
                "makeId": 200347864,
                "makeName": "AM General",
                "makeNiceName": "amgeneral",
                "id": "AM_General_Hummer",
                "name": "Hummer",
                "niceName": "hummer",
                "modelLinkCode": "M030013",
                "make": {
                    "link": "\/api\/vehicle\/am-general"
                },
                "modelYears": [
                    {
                        "link": "\/api\/vehicle\/am-general\/hummer\/2000",
                        "id": "305",
                        "year": "2000"
                    },
                    {
                        "link": "\/api\/vehicle\/am-general\/hummer\/1998",
                        "id": "3407",
                        "year": "1998"
                    },
                    {
                        "link": "\/api\/vehicle\/am-general\/hummer\/1999",
                        "id": "1140",
                        "year": "1999"
                    }
                ],
                "attributeGroups": {
                    "MAIN": {
                        "id": 1,
                        "name": "MAIN",
                        "attributes": {
                            "USE_IN_NEW": {
                                "id": 10,
                                "name": "USE_IN_NEW",
                                "value": "N"
                            },
                            "NAME": {
                                "id": 1,
                                "name": "NAME",
                                "value": "Hummer"
                            },
                            "YEAR": {
                                "id": 2,
                                "name": "YEAR",
                                "value": "2000"
                            },
                            "WORKFLOWSTATUS": {
                                "id": 9.2233720368548e+18,
                                "name": "WORKFLOWSTATUS",
                                "value": "Published"
                            },
                            "USE_IN_FUTURE": {
                                "id": 595,
                                "name": "USE_IN_FUTURE",
                                "value": "N"
                            },
                            "USE_IN_PRE_PRODUCTION": {
                                "id": 12,
                                "name": "USE_IN_PRE_PRODUCTION",
                                "value": "N"
                            },
                            "USE_IN_USED": {
                                "id": 11,
                                "name": "USE_IN_USED",
                                "value": "Y"
                            },
                            "MODEL_LINK_CODE": {
                                "id": 20,
                                "name": "MODEL_LINK_CODE",
                                "value": "M030013"
                            }
                        }
                    },
                    "LEGACY": {
                        "id": 64,
                        "name": "LEGACY",
                        "attributes": {
                            "ED_MODEL_ID": {
                                "id": 3,
                                "name": "ED_MODEL_ID",
                                "value": "305"
                            }
                        }
                    }
                },
                "categories": {
                    "Vehicle Size": [
                        "Large"
                    ],
                    "PRIMARY_BODY_TYPE": [
                        "SUV"
                    ],
                    "Vehicle Style": [
                        "Convertible SUV",
                        "4dr SUV",
                        "2dr SUV"
                    ],
                    "Market": [
                        "Exotic",
                        "Diesel"
                    ],
                    "Vehicle Type": [
                        "SUV"
                    ],
                    "Tier Five  - Vehicle Market Perception": [
                        "Exotic",
                        "Diesel"
                    ]
                },
                "publicationStates": [
                    "USED"
                ],
                "subModels": {
                    "USED": [
                        {
                            "id": 0,
                            "identifier": "SUV",
                            "name": "Hummer SUV",
                            "ruleType": "body",
                            "styleIds": [
                                10134,
                                10135,
                                100003299,
                                10136,
                                10138
                            ],
                            "publicationStates": [
                                "USED"
                            ],
                            "submodelNewDefaultStyle": {
                                "link": "\/api\/vehicle\/style\/10135"
                            },
                            "submodelUsedDefaultStyle": {
                                "link": "\/api\/vehicle\/style\/100003299"
                            }
                        },
                        {
                            "id": 200670632,
                            "identifier": "SUV",
                            "name": "Hummer SUV",
                            "ruleType": "body",
                            "styleIds": [
                                13776,
                                13773,
                                13774,
                                13775
                            ],
                            "publicationStates": [
                                "USED"
                            ],
                            "submodelNewDefaultStyle": {
                                "link": "\/api\/vehicle\/style\/13775"
                            },
                            "submodelUsedDefaultStyle": {
                                "link": "\/api\/vehicle\/style\/13776"
                            }
                        }
                    ]
                }
            }
        ]
    }

})(module.exports);
