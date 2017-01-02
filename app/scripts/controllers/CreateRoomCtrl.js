(function () {
    function CreateRoomCtrl($scope, Room, $uibModalInstance) {

       $scope.cancel= function(){
           $uibModalInstance.dismiss();
       };
       $scope.create = function(){
           var room = {};
           
           room.name = $scope.name;
           Room.add(room);
           
           $uibModalInstance.close();
       };
    }

    angular
        .module('blocChat')
        .controller('CreateRoomCtrl', ['$scope', 'Room', '$uibModalInstance', CreateRoomCtrl]);
})();