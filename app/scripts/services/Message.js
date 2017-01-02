(function () {
    function Message($firebaseArray) {
        var ref = firebase.database().ref().child('messages');
        var messages = $firebaseArray(ref);

        return {
            // Gets all the messages for the given roomId
            getByRoomId: function (roomId) {
                return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
            },
            // Adds a message object to firebase `messages` collection 
            add: function (message) {
                // $add is $firebaseArray service method
                messages.$add(message);
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();