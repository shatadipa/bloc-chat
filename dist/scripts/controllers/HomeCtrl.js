(function () {

    function HomeCtrl($scope, Room, $uibModal) {
        $scope.rooms = Room.all;
        $scope.showPopUp = function(){
            $uibModal.open({
                templateUrl:'/templates/create-room.html',
                controller:'CreateRoomCtrl'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', '$uibModal', HomeCtrl]);
})();