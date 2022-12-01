const citysdk = require("citysdk");

//citysdk(
//    {
//        vintage: 2017,
//        geoHierarchy: {
//            state: "*",
//        },
//        sourcePath: ["acs", "acs1"],
//        values: [
//            "B01003_001E",
//            "B01001_002E",
//            "B01001_011E",
//            "B01001_012E",
//            "B01001_013E",
//            "B01001_014E",
//            "B01001_015E",
//            "B01001_016E",
//            "B01001_017E",
//            "B01001_018E",
//            "B01001_019E",
//            "B01001_020E",
//            "B01001_021E",
//            "B01001_022E",
//            "B01001_023E",
//            "B01001_024E",
//            "B01001_025E",
//            "B01001_026E",
//            "B01001_035E",
//            "B01001_036E",
//            "B01001_037E",
//            "B01001_038E",
//            "B01001_039E",
//            "B01001_040E",
//            "B01001_041E",
//            "B01001_042E",
//            "B01001_043E",
//            "B01001_044E",
//            "B01001_045E",
//            "B01001_046E",
//            "B01001_047E",
//            "B01001_048E",
//            "B01001_049E",
//            "B25001_001E",
//            "B25008_001E",
//            "B25008_002E",
//            "B25008_003E",
//            "B25010_002E",
//            "B25010_003E",
//            "B05010_002E",
//            "B05010_010E",
//            "B05010_018E",
//            "B15003_001E",
//            "B15003_022E",
//            "B15003_023E",
//            "B15003_025E",
//            "B02001_004E",
//        ],
//        geoResolution: "500k",
//    },
//    (err, res) => console.log(JSON.stringify(res))
//)

citysdk(
  {
    vintage: 2019,
    geoHierarchy: {
      state: "37",
      "zip-code-tabulation-area": "*",
    },
    sourcePath: ["acs", "acs5"],
    values: ["B01003_001E", "B01001_002E"],
    geoResolution: "500k",
  },
  (e, r) => console.log(JSON.stringify(r))
); //?
