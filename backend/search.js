// AngularJS App Initialization
angular.module('searchApp', [])
  .controller('SearchController', ['$scope', function($scope) {
    // Data kata kunci dan URL
    $scope.availableKeywords = [
      { keyword: 'Olahraga', url: 'panduan.html' },
      { keyword: 'Latihan Kardio', url: 'panduan.html' },
      { keyword: 'Latihan Kekuatan', url: 'panduan.html' },
      { keyword: 'Latihan Fleksibilitas', url: 'panduan.html' },
      { keyword: 'Resep', url: 'resep.html' },
      { keyword: 'Smoothie Buah', url: 'resep.html' },
      { keyword: 'Ayam Panggang', url: 'resep.html' },
      { keyword: 'Salad Segar', url: 'resep.html' },
      { keyword: 'Rekomendasi', url: 'rekomendasi.html' },
      { keyword: 'Vitamin', url: 'rekomendasi.html' },
      { keyword: 'Protein', url: 'rekomendasi.html' },
      { keyword: 'Latihan', url: 'rekomendasi.html' },
      { keyword: 'Tips Nutrisi', url: 'tips.html' },
      { keyword: 'Panduan Makanan Sehat', url: 'tips.html' },
      { keyword: 'Makanan yang Harus Dihindari', url: 'tips.html' },
      { keyword: 'Tentang Kami', url: 'tips.html' }
    ];

    // Variabel untuk kontrol
    $scope.searchInput = '';
    $scope.results = [];
    $scope.isSearchActive = false;

    // Buka/tutup search box
    $scope.toggleSearch = function() {
      $scope.isSearchActive = !$scope.isSearchActive;
      $scope.results = [];
      $scope.searchInput = '';
    };

    // Fungsi pencarian
    $scope.search = function() {
      const input = $scope.searchInput.toLowerCase();
      if (input.length) {
        $scope.results = $scope.availableKeywords.filter(item => 
          item.keyword.toLowerCase().includes(input));
      } else {
        $scope.results = [];
      }
    };

    // Fungsi memilih hasil pencarian
    $scope.selectResult = function(item) {
      $scope.searchInput = item.keyword;
      $scope.results = [];
      $scope.isSearchActive = false;
      window.location.href = item.url; // Redirect ke URL
    };
  }]);
