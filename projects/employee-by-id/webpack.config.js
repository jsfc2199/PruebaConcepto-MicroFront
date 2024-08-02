const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'employeeById',

  exposes: {
    './EmployeeByIdModule': './projects/employee-by-id/src/app/employee/employee-by-id.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ["@commonThings"]

});
