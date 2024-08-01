const { shareAll, withModuleFederationPlugin, SharedMappings } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'employeesTab',

  exposes: {
    './Component': './projects/employees-tab/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  //añadimos la siguiente propiedad para usar las librerías comunes
  //Aquí van los aliases definidos en el tsconfig.json de las librerías que se van a usar en cada MF
  //Angular architects se encarga de generar la instancia de esto
  sharedMappings: ["@commonThings"]

});
