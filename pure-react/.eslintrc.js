module.exports = {
    "env": {
      "browser": true,
      "node": true,
      "es6": true
    },
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
