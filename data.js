var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "客厅",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "yaw": 0.0186474458789867,
        "pitch": 0.3051753615328696,
        "fov": 1.313075050383285
      },
      "linkHotspots": [
        {
          "yaw": 1.797150741737065,
          "pitch": 0.38129113777722345,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 3.138602506423995,
          "pitch": 0.611160428497886,
          "rotation": 0,
          "target": "3-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-",
      "name": "电影厅",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-",
      "name": "卧室",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.658051359100753,
          "pitch": 0.5408566865484161,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-",
      "name": "餐厅",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 360,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.800692898359898,
          "pitch": 0.26714088030986716,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -3.009786832450928,
          "pitch": 0.30602225895752255,
          "rotation": 1.5707963267948966,
          "target": "2-"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "样板间",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
