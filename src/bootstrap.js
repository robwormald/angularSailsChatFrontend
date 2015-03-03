System.import('src/main')
.then(function(mod){
  console.info('main module loaded...');
  mod.main();
})
.catch(function(err){
  console.log('error loading',err);
})
