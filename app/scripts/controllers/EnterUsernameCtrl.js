(function () {
    function EnterUsernameCtrl($scope, $cookies, $uibModalInstance) {

        $scope.setUsername = function () {
            $cookies.put('blocChatCurrentUser', $scope.username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('EnterUsernameCtrl', ['$scope', '$cookies', '$uibModalInstance', EnterUsernameCtrl]);
})();