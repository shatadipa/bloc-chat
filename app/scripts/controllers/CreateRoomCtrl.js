(function () {
    function CreateRoomCtrl($scope, Room, $uibModalInstance) {
       $scope.cancel= function(){
           $uibModalInstance.dismiss();
       };
       $scope.create = function(){
           Room.add({name:$scope.name});
           $uibModalInstance.close();
       };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'Room', '$uibModalInstance', CreateRoomCtrl]);
})();