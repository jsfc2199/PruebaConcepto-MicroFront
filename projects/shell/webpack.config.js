const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "employeesTab": "http://localhost:4201/remoteEntry.js",
    // "employeeById": "http://localhost:4202/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  //Dado de que, al menos un MF embebido al shell, usa la librería compartida, hay que llamarla dentro del shell también
  sharedMappings: ["@commonThings"]
});
