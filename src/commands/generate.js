import yeoman from 'yeoman-environment';

const env = yeoman.createEnv();

const feathersGenerators = 'generator-feathers/generators';

env.register(require.resolve(`${feathersGenerators}/app`), 'feathers:app');
env.register(require.resolve(`${feathersGenerators}/hook`), 'feathers:hook');
env.register(require.resolve(`${feathersGenerators}/middleware`), 'feathers:middleware');
env.register(require.resolve(`${feathersGenerators}/model`), 'feathers:model');
env.register(require.resolve(`${feathersGenerators}/service`), 'feathers:service');
env.register(require.resolve('generator-feathers-plugin'), 'feathers:plugin');

const generatorOptions = {
  disableNotifyUpdate: true
};

export default function(vorpal) {
  vorpal
    .command('generate ', 'alias for generate app')
    .autocomplete(['app', 'hook', 'middleware', 'model', 'service', 'plugin'])
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:app', generatorOptions, callback);
    });

  vorpal
    .command('generate app')
    .description('generate new application')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:app', generatorOptions, callback);
    });

  vorpal
    .command('generate hook')
    .description('generate new hook')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:hook', generatorOptions, callback);
    });

  vorpal
    .command('generate middleware')
    .description('generate new middleware')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:middleware', generatorOptions, callback);
    });

  vorpal
    .command('generate model')
    .description('generate new model')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:model', generatorOptions, callback);
    });

  vorpal
    .command('generate service')
    .description('generate new service')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:service', generatorOptions, callback);
    });

  vorpal
    .command('generate plugin')
    .description('generate new plugin')
    .action(function (args, callback) {
      this.log('');
      env.run('feathers:plugin', generatorOptions, callback);
    });
}

export { env };
