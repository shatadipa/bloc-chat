(function () {
    function CreateRoomCtrl($scope, Room, $uibModalInstance) {
       $scope.cancel= function(){
           $uibModalInstance.dismiss('cancel');
       };
       $scope.create = function(){
           console.log($scope.name);
           Room.add({name:$scope.name});
           $uibModalInstance.close();
       };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'Room', '$uibModalInstance', CreateRoomCtrl]);
})();