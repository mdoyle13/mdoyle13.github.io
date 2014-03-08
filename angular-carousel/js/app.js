var homeCarousel = angular.module('homeCarousel', []);
  
  function homeCarouselController($scope) {
    $scope.images = [
      {
        image: "http://placehold.it/500x500&text=1",
        caption: "Caption for image 1"
      },
      {
        image: "http://placehold.it/500x500&text=2",
        caption: "Caption for image 2"
      },
      {
        image: "http://placehold.it/500x500&text=3",
        caption: "Caption for image 3"
      }
    ];


    $scope.selectedImage = 0;
    $scope.oldImage = "";

    $scope.$watch('selectedImage', function(newVal, oldVal) {
      $scope.setPreviousImage(oldVal)
    });

    $scope.setSelected = function(selected) {
      $scope.selectedImage = selected
      jQuery(".fader").stop().show().fadeOut();
    },

    $scope.setPreviousImage = function(oldVal) {
      $scope.oldImage = $scope.images[oldVal].image;
    },

    $scope.nextSlide = function() {
      if ($scope.selectedImage + 1 < $scope.images.length) {
        $scope.setSelected($scope.selectedImage += 1);  
      } else if ($scope.selectedImage + 1 >= $scope.images.length ) {
        $scope.setSelected(0);
      }
    },

    $scope.previousSlide = function() {
        if ( $scope.selectedImage == 0 ) {
          $scope.setSelected($scope.images.length - 1)
        } else {
          $scope.setSelected($scope.selectedImage -= 1)
      }
    }
  }