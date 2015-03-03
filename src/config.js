export const config = ($stateProvider) => {

  $stateProvider.state('app',{
    controller: 'AppController',
    controllerAs: 'AppCtrl',
    url: '/app',
    templateUrl: 'src/app/app.html'
  })

}
