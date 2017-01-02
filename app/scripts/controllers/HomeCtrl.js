(function () {

    function HomeCtrl($scope, Room, Message, $cookies, $uibModal) {
        $scope.rooms = Room.all;
        $scope.showPopUp = function () {
            $uibModal.open({
                templateUrl: '/templates/create-room.html',
                controller: 'CreateRoomCtrl'
            });
        };
        $scope.activeRoom = {};
        $scope.activeRoomMessages = [];

        $scope.selectRoom = function (room) {
            $scope.activeRoom = room;
            $scope.activeRoomMessages = Message.getByRoomId(room.$id);
        };
        // Create a new message object and add to `messages` using `Message` service
        $scope.sendMessage = function () {
            var message = {};

            message.content = $scope.messageContent; // Comes from input with `ng-model = messageContent`
            message.sentAt = new Date().getTime(); // Create a new Date object and use its timestamp
            message.roomId = $scope.activeRoom.$id; // Use activeRoom's id
            message.username = $cookies.get('blocChatCurrentUser');
            
            Message.add(message);
            $scope.messageContent="";
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$scope', 'Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();