var peerjsConfig = {
  host: 'localhost',
  port: 9000,
  path: '/',
  debug: true
};
var module = (module==undefined) ? {} : module; // get a node modules working in Browser
module.exports = peerjsConfig;
