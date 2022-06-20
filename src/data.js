export const colors = [
  // { label: "White ", value: "white", price: 0 },
  // { label: "Deep Green", value: "dgreen", price: 1500 },
  // { label: "Heath Gray", value: "gray", price: 1500 },
  // { label: "Medium Blue", value: "blue", price: 1500 },
  { label: "Freeborn Red (309)", value: "red", price: 2500 },
  // { label: "Yellow", value: "yellow", price: 2500 },
  { label: "Olive", value: "olive", price: 2500 },
  // { label: "Buffalo Brown", value: "brown", price: 2500 },
  { label: "Beige (T451)", value: "beige", price: 2500 },
  // { label: "Green", value: "green", price: 2500 },
  { label: "Capri Blue (T310)", value: "cblue", price: 0},
  // { label: "Spring Green (T1028)", value: "sgreen", price: 0},
  { label: "Nebula Green", value: "ngreen", price: 0}
];

export const interiorColors = [
  { label: "All black Figured Ash Wood Décor", value: "all_black", price: 0 },
  { label: "Black and white Dark Ash Wood Décor", value: "black_and_white", price: 1500 },
  { label: "Cream Oak Wood Décor", value: "cream", price: 1500 },
];

export const interiorLayouts = [
  { label: "Five seat interior", value: "five_seat", price: 0 },
  { label: "Six seat interior", value: "six_seat", price: 6500 },
  { label: "Seven seat interior", value: "seven_seat", price: 3500 },
];

export const body = [
  { label: "Short Wheelbase", value: "short", price: 0},
  { label: "Medium Wheelbase", value: "medium", price: 0}
];

export const interior = [
  { label: "Toyota bucket seats", value: "bucket", price: 0},
  { label: "Recaro specialist", value: "recaro", price: 0}
];

export const lighting = [
  { label: "Classic bulbs", value: "bulbs", price: 0},
  { label: "Truck-Lite LED", value: "led", price: 0}
]

export const accesories = [
  { label: "Offroad Jacks", value: "jacks", price: 0},
  { label: "Winch", value: "winch", price: 0},
  { label: "Jerry-can", value: "jerry-can", price: 0}
]

export const jack = [
  { label: "Jack", value: "jack", price: 0}
]

export const views = [
  { label: "Front view", value: "front" },
  { label: "Rear view", value: "rear" }
]

export const models = [
  // {
  //   key: 's',
  //   name: "Model S",
  //   colors: colors,
  //   wheels: [
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_1.png`,
  //       label: '19" Tempest Wheels',
  //       value: "wheel_1",
  //       price: 0
  //     },
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_s/model_s_wheel_2.png`,
  //       label: '21" Sonic Carbon Twin Turbine Wheels',
  //       value: "wheel_2",
  //       price: 4500
  //     }
  //   ],
  //   types: [
  //     {
  //       label: "Long Range Plus",
  //       value: "long_range_plus",
  //       specs: {
  //         range: 402,
  //         top_speed: 155,
  //         acceleration_time: 3.7,
  //       },
  //       price: 69420
  //     },
  //     {
  //       label: "Performance",
  //       value: "performance",
  //       specs: {
  //         range: 387,
  //         top_speed: 163,
  //         acceleration_time: 2.3,
  //       },
  //       price: 91990,
  //       benefits: [
  //         "Quicker acceleration: 0-60 mph in 2.3s",
  //         "Ludicrous Mode",
  //         "Enhanced Interior Styling",
  //         "Carbon fiber spoiler"
  //       ]
  //     },
  //     {
  //       label: "Plaid",
  //       value: "plaid",
  //       specs: {
  //         range: 520,
  //         top_speed: 200,
  //         acceleration_time: 2.0,
  //       },
  //       price: 139990,
  //       benefits: [
  //         "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
  //         "Acceleration from 0-60 mph: <2.0s",
  //         "Quarter mile: <9.0s",
  //         "1,100+ horsepower",
  //         "Tri Motor All-Wheel Drive"
  //       ]
  //     },
  //   ],
  //   interiorColors: interiorColors
  // },
  // {
  //   key: 'x',
  //   name: "Model X",
  //   colors: colors,
  //   wheels: [
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_1.png`,
  //       label: '20" Silver Wheels',
  //       value: "wheel_1",
  //       price: 0
  //     },
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_x/model_x_wheel_2.png`,
  //       label: '22" Onyx Black Wheels',
  //       value: "wheel_2",
  //       price: 5500
  //     }
  //   ],
  //   types: [
  //     {
  //       label: "Long Range Plus",
  //       value: "long_range_plus",
  //       specs: {
  //         range: 371,
  //         top_speed: 155,
  //         acceleration_time: 4.4
  //       },
  //       price: 79900
  //     },
  //     {
  //       label: "Performance",
  //       value: "performance",
  //       specs: {
  //         range: 341,
  //         top_speed: 163,
  //         acceleration_time: 2.6
  //       },
  //       price: 99990,
  //       benefits: [
  //         "Quicker acceleration: 0-60 mph in 2.6s",
  //         "Ludicrous Mode",
  //         "Enhanced Interior Styling"
  //       ]
  //     }
  //   ],
  //   interiorColors: interiorColors,
  //   interiorLayouts: interiorLayouts
  // },
  // {
  //   key: 'y',
  //   name: "Model Y",
  //   colors: colors,
  //   wheels: [
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_1.png`,
  //       label: '19’’ Gemini Wheels',
  //       value: "wheel_1",
  //       price: 0
  //     },
  //     {
  //       src: `${process.env.PUBLIC_URL}/wheels/model_y/model_y_wheel_2.png`,
  //       label: '20’’ Induction Wheels',
  //       value: "wheel_2",
  //       price: 2000
  //     }
  //   ],
  //   types: [
  //     {
  //       label: "Long Range",
  //       value: "long_range",
  //       specs: {
  //         range: 326,
  //         top_speed: 135,
  //         acceleration_time: 4.8
  //       },
  //       price: 45690
  //     },
  //     {
  //       label: "Performance",
  //       value: "performance",
  //       specs: {
  //         range: 303,
  //         top_speed: 155,
  //         acceleration_time: 3.5
  //       },
  //       price: 55690,
  //       benefits: [
  //         "Increased top speed from 135mph to 155mph",
  //         "21’’ Überturbine Wheels",
  //         "Performance Brakes",
  //         "Lowered suspension",
  //         "Aluminum alloy pedals"
  //       ]
  //     }
  //   ],
  //   interiorColors: interiorColors.slice(0,2),
  //   interiorLayouts: [interiorLayouts[0], interiorLayouts[2]]
  // },
  {
    key: 'g40',
    name: "Model FJ40",
    views: views,
    colors: colors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_g40/model_g40_wheel_1.png`,
        label: 'Wheel 1',
        value: "wheel_1",
        price: 0
      },
      // {
      //   src: `${process.env.PUBLIC_URL}/wheels/model_g40/model_g40_wheel_2.png`,
      //   label: '21" Sonic Carbon Twin Turbine Wheels',
      //   value: "wheel_2",
      //   price: 4500
      // }
    ],
    // body: [
    //   // [
    //     { 
    //       src: `${process.env.PUBLIC_URL}/body/short.jpg`,
    //       label: "Short Wheelbase (2,285 MM)", 
    //       value: "short", 
    //       price: 0},
    //     { 
    //       src: `${process.env.PUBLIC_URL}/body/short.jpg`,
    //       label: "Medium Wheelbase (2,430 MM)", 
    //       value: "medium", 
    //       price: 0},
    //   // ],
    //   // [
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/soft-top-beige.jpg`,
    //   //     label: "Soft-top beige", 
    //   //     value: "soft-beige", 
    //   //     price: 0},
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/soft-top-black.jpg`,
    //   //     label: "Soft-top black", 
    //   //     value: "soft-black", 
    //   //     price: 0},
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/hardtop.jpg`,
    //   //     label: "Hardtop", 
    //   //     value: "hard", 
    //   //     price: 0},
    //   // ]
    // ],
    interior: [
      { 
        src: `${process.env.PUBLIC_URL}/interiors/bucket-seats.jpg`,
        label: "Toyota bucket seats", 
        value: "bucket", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/interiors/recaro.jpg`,
        label: "Recaro specialist", 
        value: "recaro",
        price: 0
      }
    ],
    // lighting: [
    //   { 
    //     src: `${process.env.PUBLIC_URL}/lighting/classic-bulbs.jpg`,
    //     label: "Classic bulbs", 
    //     value: "bulbs", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/lighting/led.jpg`,
    //     label: "Truck-Lite LED", 
    //     value: "led", 
    //     price: 0
    //   }
    // ],
    // accessories: [
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/high-lift-jack.jpg`,
    //     label: "Offroad Jacks", 
    //     value: "jacks", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/warn-zeon-8.jpg`,
    //     label: "Winch", 
    //     value: "winch", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/jerry-can.jpg`,
    //     label: "Jerry-can", 
    //     value: "jerry-can", 
    //     price: 0
    //   }
    // ],
    jack: [
      {
        src: `${process.env.PUBLIC_URL}/accessories/none.png`,
        label: "None", 
        value: "none", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/accessories/high-lift-jack.jpg`,
        label: "Offroad Jacks", 
        value: "jack", 
        price: 0
      },
    ],
    winch: [
      {
        src: `${process.env.PUBLIC_URL}/accessories/none.png`,
        label: "None", 
        value: "none", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/accessories/warn-zeon-8.jpg`,
        label: "Winch", 
        value: "winch", 
        price: 0
      },
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 402,
          top_speed: 155,
          acceleration_time: 3.7,
        },
        price: 69420
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 387,
          top_speed: 163,
          acceleration_time: 2.3,
        },
        price: 91990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.3s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
          "Carbon fiber spoiler"
        ]
      },
      {
        label: "Plaid",
        value: "plaid",
        specs: {
          range: 520,
          top_speed: 200,
          acceleration_time: 2.0,
        },
        price: 139990,
        benefits: [
          "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
          "Acceleration from 0-60 mph: <2.0s",
          "Quarter mile: <9.0s",
          "1,100+ horsepower",
          "Tri Motor All-Wheel Drive"
        ]
      },
    ],
    interiorColors: interiorColors
  },
  {
    key: 'g45',
    name: "Model FJ45",
    views: views,
    colors: colors,
    wheels: [
      {
        src: `${process.env.PUBLIC_URL}/wheels/model_g45/model_g45_wheel_1.png`,
        label: 'Wheels 1',
        value: "wheel_1",
        price: 0
      },
      // {
      //   src: `${process.env.PUBLIC_URL}/wheels/model_g45/model_g45_wheel_2.png`,
      //   label: '21" Sonic Carbon Twin Turbine Wheels',
      //   value: "wheel_2",
      //   price: 4500
      // }
    ],
        // body: [
    //   // [
    //     { 
    //       src: `${process.env.PUBLIC_URL}/body/short.jpg`,
    //       label: "Short Wheelbase (2,285 MM)", 
    //       value: "short", 
    //       price: 0},
    //     { 
    //       src: `${process.env.PUBLIC_URL}/body/short.jpg`,
    //       label: "Medium Wheelbase (2,430 MM)", 
    //       value: "medium", 
    //       price: 0},
    //   // ],
    //   // [
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/soft-top-beige.jpg`,
    //   //     label: "Soft-top beige", 
    //   //     value: "soft-beige", 
    //   //     price: 0},
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/soft-top-black.jpg`,
    //   //     label: "Soft-top black", 
    //   //     value: "soft-black", 
    //   //     price: 0},
    //   //   { 
    //   //     src: `${process.env.PUBLIC_URL}/body/hardtop.jpg`,
    //   //     label: "Hardtop", 
    //   //     value: "hard", 
    //   //     price: 0},
    //   // ]
    // ],
    interior: [
      { 
        src: `${process.env.PUBLIC_URL}/interiors/bucket-seats.jpg`,
        label: "Toyota bucket seats", 
        value: "bucket", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/interiors/recaro.jpg`,
        label: "Recaro specialist", 
        value: "recaro",
        price: 0
      }
    ],
    // lighting: [
    //   { 
    //     src: `${process.env.PUBLIC_URL}/lighting/classic-bulbs.jpg`,
    //     label: "Classic bulbs", 
    //     value: "bulbs", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/lighting/led.jpg`,
    //     label: "Truck-Lite LED", 
    //     value: "led", 
    //     price: 0
    //   }
    // ],
    // accessories: [
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/high-lift-jack.jpg`,
    //     label: "Offroad Jacks", 
    //     value: "jacks", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/warn-zeon-8.jpg`,
    //     label: "Winch", 
    //     value: "winch", 
    //     price: 0
    //   },
    //   { 
    //     src: `${process.env.PUBLIC_URL}/accessories/jerry-can.jpg`,
    //     label: "Jerry-can", 
    //     value: "jerry-can", 
    //     price: 0
    //   }
    // ],
    jack: [
      {
        src: `${process.env.PUBLIC_URL}/accessories/none.png`,
        label: "None", 
        value: "none", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/accessories/high-lift-jack.jpg`,
        label: "Offroad Jacks", 
        value: "jack", 
        price: 0
      },
    ],
    winch: [
      {
        src: `${process.env.PUBLIC_URL}/accessories/none.png`,
        label: "None", 
        value: "none", 
        price: 0
      },
      { 
        src: `${process.env.PUBLIC_URL}/accessories/warn-zeon-8.jpg`,
        label: "Winch", 
        value: "winch", 
        price: 0
      },
    ],
    types: [
      {
        label: "Long Range Plus",
        value: "long_range_plus",
        specs: {
          range: 402,
          top_speed: 155,
          acceleration_time: 3.7,
        },
        price: 69420
      },
      {
        label: "Performance",
        value: "performance",
        specs: {
          range: 387,
          top_speed: 163,
          acceleration_time: 2.3,
        },
        price: 91990,
        benefits: [
          "Quicker acceleration: 0-60 mph in 2.3s",
          "Ludicrous Mode",
          "Enhanced Interior Styling",
          "Carbon fiber spoiler"
        ]
      },
      {
        label: "Plaid",
        value: "plaid",
        specs: {
          range: 520,
          top_speed: 200,
          acceleration_time: 2.0,
        },
        price: 139990,
        benefits: [
          "Quickest 0-60 mph and quarter mile acceleration of any production car ever",
          "Acceleration from 0-60 mph: <2.0s",
          "Quarter mile: <9.0s",
          "1,100+ horsepower",
          "Tri Motor All-Wheel Drive"
        ]
      },
    ],
    interiorColors: interiorColors
  }
];

export const initialConfig = {
  // 's': {
  //   car_type: "long_range_plus",
  //   model: "s",
  //   color: "white",
  //   wheels: "wheel_1",
  //   interior_color: "all_black"
  // },
  // 'x': {
  //   car_type: "long_range_plus",
  //   model: "x",
  //   color: "white",
  //   wheels: "wheel_1",
  //   interior_color: "all_black",
  //   interior_layout: "five_seat"
  // },
  // 'y': {
  //   car_type: "long_range",
  //   model: "y",
  //   color: "white",
  //   wheels: "wheel_1",
  //   interior_color: "all_black",
  //   interior_layout: "five_seat"
  // },
  'g40': {
    car_type: "long_range",
    model: "g40",
    color: "red",
    wheels: "wheel_1",
    interior_color: "all_black",
    interior_layout: "five_seat",
    jack: "none",
    winch: "none",
    views: "front"
  },
  'g45': {
    car_type: "long_range",
    model: "g45",
    color: "red",
    wheels: "wheel_1",
    interior_color: "all_black",
    interior_layout: "five_seat",
    jack: "none",
    winch: "none",
    views: "front"
  }
};