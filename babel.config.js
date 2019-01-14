module.exports = {
  presets: [
    '@vue/app',
    ["@babel/preset-env", {
      "loose": true,
      "targets": {
        "browsers": [
          "ie >= 9",
          "> 1%",
          "last 2 versions"
        ]
      },
      "useBuiltIns": "usage",
      "modules": "cjs" // the default value is auto
    }]
  ],
}
