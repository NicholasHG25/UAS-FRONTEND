var app = angular.module('proteinShopApp', []);

app.controller('ProteinShopController', ['$scope', '$window', function($scope, $window) {

    $scope.products = [
        {
            name: "Whey Protein",
            description: "A high-quality protein source to support muscle growth and recovery.",
            price: 350000,
            image: "https://images.unsplash.com/photo-1693996045300-521e9d08cabc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hleSUyMHByb3RlaW58ZW58MHx8MHx8fDA%3D",
            ingredients: "Whey Protein Isolate, Whey Protein Concentrate",
            benefits: "Promotes muscle repair, supports fat loss, and improves overall strength.",
            dosage: "1 scoop after workout or as a meal replacement.",
            sideEffects: "May cause bloating or upset stomach if consumed in excess."
        },
        {
            name: "Casein Protein",
            description: "Slow-digesting protein that is ideal for overnight muscle repair.",
            price: 300000,
            image: "https://media.istockphoto.com/id/476483153/photo/casein-protein.webp?a=1&b=1&s=612x612&w=0&k=20&c=W0rcdgB_MqA1KBGkgA272gBsWgOKEq87M8SVUHe7Mqk=",
            ingredients: "Micellar Casein",
            benefits: "Helps muscle recovery during sleep, prevents muscle breakdown.",
            dosage: "1 scoop before bed.",
            sideEffects: "May cause discomfort for those lactose intolerant."
        },
        {
            name: "Soy Protein",
            description: "A plant-based protein for muscle repair and growth.",
            price: 250000,
            image: "https://media.istockphoto.com/id/1015345458/photo/protein-powder.webp?a=1&b=1&s=612x612&w=0&k=20&c=IM9DC2yKj1EHkvXQSZ5ZIhjjsxklmS0UUTafeuUkKt8=",
            ingredients: "Soy Protein Isolate",
            benefits: "Helps build lean muscle, supports heart health.",
            dosage: "1 scoop per day, can be taken anytime.",
            sideEffects: "Can cause digestive discomfort in sensitive individuals."
        },
        {
            name: "Pea Protein",
            description: "A vegan-friendly protein option to support muscle building and recovery.",
            price: 280000,
            image: "https://media.istockphoto.com/id/1300808754/photo/scoop-of-pea-vegan-protein-powder-on-dark-rustic-background-sport-nutrition.webp?a=1&b=1&s=612x612&w=0&k=20&c=w1m3-3CtROyqhJO50oRk19e5fZvtf-MNOtUyWzVaaqM=",
            ingredients: "Pea Protein Isolate",
            benefits: "Supports muscle growth, provides essential amino acids.",
            dosage: "1 scoop after workouts.",
            sideEffects: "May cause bloating for some individuals."
        },
        {
            name: "Egg White Protein",
            description: "A complete protein from egg whites, excellent for muscle growth.",
            price: 330000,
            image: "https://media.istockphoto.com/id/1390981160/photo/egg-protein-powder-heap-and-egg-shells-white-package-mock-up-with-copy-space-isolated-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=ajjg8I3-KWevbhPNvJ3Xz-tFVE7Glu4YDZ_qCHgKvEc=",
            ingredients: "Egg White Protein Isolate",
            benefits: "Supports lean muscle mass and enhances recovery.",
            dosage: "1 scoop post-workout.",
            sideEffects: "Generally well-tolerated, but may cause an allergic reaction for some."
        }
    ];

  
    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

   
    $scope.cartCount = $scope.cart.length;

    $scope.addToCart = function(product) {
        $scope.cart.push(product);
        $scope.cartCount = $scope.cart.length;

       
        localStorage.setItem('cart', JSON.stringify($scope.cart));

      
        alert(product.name + " has been added to the cart!");

    
        $window.location.href = "/section/checkout.html";  // Redirect to checkout page
    };

   
    $scope.selectedProduct = null;

    $scope.showDetails = function(product) {
        $scope.selectedProduct = product;
        console.log("Selected product:", $scope.selectedProduct);
    };


    $scope.sortByPrice = function(sortOption) {
        if (sortOption === 'priceLow') {
            $scope.products.sort(function(a, b) {
                return a.price - b.price;
            });
        } else if (sortOption === 'priceHigh') {
            $scope.products.sort(function(a, b) {
                return b.price - a.price;
            });
        }
    };

    $scope.showCart = function() {
        if ($scope.cart.length > 0) {
            alert("Products in your cart:\n" + $scope.cart.map(function(item) {
                return item.name + " - Rp." + item.price;
            }).join("\n"));
        } else {
            alert("Your cart is empty.");
        }
    };
}]);


app.controller('CheckoutController', ['$scope', function($scope) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    $scope.cart = cart;

   
    $scope.totalPrice = function() {
        return $scope.cart.reduce(function(total, product) {
            return total + product.price;
        }, 0);
    };

 
    $scope.completeCheckout = function() {
        alert("Purchase completed. Thank you for shopping!");

        localStorage.removeItem('cart');
        $scope.cart = [];
    };
}]);
