module.exports = {
  "presets": [
    [
      "@babel/env",
    {"modules": false}
    ],
    "@babel/preset-react"
  ],
  "env": {
    "test": {
      "presets": [["@babel/preset-env"], "@babel/preset-react"]
    }
  },
  "plugins": [
    "react-hot-loader/babel"
  ]
}
