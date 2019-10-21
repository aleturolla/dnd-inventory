const path = require('path')
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true
  }),
  addWebpackAlias({
    Common: path.resolve(__dirname, 'src/common/'),
    Components: path.resolve(__dirname, 'src/components/'),
    Containers: path.resolve(__dirname, 'src/containers/'),
    Hoc: path.resolve(__dirname, 'src/hoc/'),
    Store: path.resolve(__dirname, 'src/redux-store/store.js'),
    Actions: path.resolve(__dirname, 'src/redux-store/actions/'),
    Reducers: path.resolve(__dirname, 'src/redux-store/reducers/'),
    Routes: path.resolve(__dirname, 'src/routes/')
  })
)
