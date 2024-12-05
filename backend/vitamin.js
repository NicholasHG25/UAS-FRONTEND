var app = angular.module('vitaminShopApp', []);

// Controller untuk halaman Shop
app.controller('VitaminShopController', ['$scope', '$window', function($scope, $window) {
    // Daftar produk
    $scope.products = [
        {
            name: "Vitamin A",
            description: "Mendukung penglihatan, kesehatan kulit, dan fungsi kekebalan tubuh.",
            price: 80000,
            image: "https://media.istockphoto.com/id/622291636/photo/vitamins-with-spilled-content.webp?a=1&b=1&s=612x612&w=0&k=20&c=_b9OoCPO0KB230Oi-1MTiV8t8pOyAqEJJF34uSNF4fM=",
            ingredients: "Retinol, Beta-Carotene",
            benefits: "Mendukung penglihatan yang baik, kulit sehat, dan kekebalan tubuh.",
            dosage: "1 tablet per hari setelah makan.",
            sideEffects: "Dapat menyebabkan mual jika dikonsumsi berlebihan."
        },
        {
            name: "Vitamin C",
            description: "Meningkatkan sistem kekebalan tubuh dan membantu produksi kolagen.",
            price: 100000,
            image: "https://media.istockphoto.com/id/1305654368/photo/effervescent-vitamin-c.webp?a=1&b=1&s=612x612&w=0&k=20&c=h73bpPorIigqH47dBUa38jiLHp9by1-rdZV6Tts9EkE=",
            ingredients: "Ascorbic Acid, Citrus Bioflavonoids",
            benefits: "Memperkuat kekebalan tubuh, membantu penyembuhan luka.",
            dosage: "2 tablet per hari setelah makan.",
            sideEffects: "Dapat menyebabkan diare jika dikonsumsi berlebihan."
        },
        {
            name: "Vitamin D",
            description: "Mendukung penyerapan kalsium dan kesehatan tulang.",
            price: 90000,
            image: "https://images.unsplash.com/photo-1596177582967-a5d143a41237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U3VwcGxlbWVudHMlMjB2aXRhbWluJTIwZHxlbnwwfHwwfHx8MA%3D%3D",
            ingredients: "Cholecalciferol",
            benefits: "Memperkuat tulang dan gigi.",
            dosage: "1 tablet setiap pagi setelah makan.",
            sideEffects: "Dapat menyebabkan hiperkalsemia jika dikonsumsi berlebihan."
        },
        {
            name: "Vitamin E",
            description: "Sebuah antioksidan yang membantu melindungi sel dari kerusakan.",
            price: 100000,
            image: "https://plus.unsplash.com/premium_photo-1732319199786-33a2eaed7b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VwcGxlbWVudHMlMjB2aXRhbWluJTIwZXxlbnwwfHwwfHx8MA%3D%3D",
            ingredients: "Alpha-Tocopherol",
            benefits: "Membantu melindungi sel dari kerusakan oksidatif.",
            dosage: "1 kapsul per hari.",
            sideEffects: "Dapat menyebabkan sakit kepala jika dikonsumsi berlebihan."
        },
        {
            name: "Vitamin B12",
            description: "Penting untuk fungsi saraf dan produksi sel darah merah.",
            price: 120000,
            image: "https://media.istockphoto.com/id/1217414109/photo/person-taking-out-vitamin-b12-pills-out-of-bottle.webp?a=1&b=1&s=612x612&w=0&k=20&c=QG5fzt7XUWgaBBsuxNIxismt2pgJC93k7YiHFoCjAdQ=",
            ingredients: "Cobalamin",
            benefits: "Mendukung fungsi saraf yang sehat dan mencegah anemia.",
            dosage: "1 tablet per hari setelah makan.",
            sideEffects: "Jarang menyebabkan efek samping jika dikonsumsi sesuai dosis."
        }
    ];

     // Mendapatkan data keranjang dari localStorage jika ada
     $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

     // Variabel untuk melacak jumlah item di keranjang
     $scope.cartCount = $scope.cart.length;
 
     // Fungsi untuk menambahkan produk ke keranjang
     $scope.addToCart = function(product) {
         $scope.cart.push(product);
         $scope.cartCount = $scope.cart.length;
 
         // Menyimpan keranjang ke localStorage
         localStorage.setItem('cart', JSON.stringify($scope.cart));
 
         // Memberi tahu bahwa produk telah ditambahkan
         alert(product.name + " telah ditambahkan ke keranjang!");
 
         // Mengarahkan ke halaman checkout setelah menambahkan produk
         $window.location.href = "/section/checkout.html";  // Arahkan ke halaman checkout
     };
 
     // Menyimpan detail produk yang dipilih untuk dilihat
     $scope.selectedProduct = null;
 
     // Fungsi untuk menampilkan detail produk dalam modal
     $scope.showDetails = function(product) {
         $scope.selectedProduct = product;
         console.log("Produk yang dipilih:", $scope.selectedProduct);
     };
 
     // Fungsi untuk mengurutkan produk berdasarkan harga
     $scope.sortByPrice = function(sortOption) {
         if (sortOption === 'priceLow') {
             // Urutkan dari harga rendah ke tinggi
             $scope.products.sort(function(a, b) {
                 return a.price - b.price;
             });
         } else if (sortOption === 'priceHigh') {
             // Urutkan dari harga tinggi ke rendah
             $scope.products.sort(function(a, b) {
                 return b.price - a.price;
             });
         }
     };
 
     // Fungsi untuk menampilkan ringkasan keranjang
     $scope.showCart = function() {
         if ($scope.cart.length > 0) {
             alert("Produk dalam keranjang:\n" + $scope.cart.map(function(item) {
                 return item.name + " - Rp." + item.price;
             }).join("\n"));
         } else {
             alert("Keranjang Anda kosong.");
         }
     };
 }]);
 
 // Controller untuk halaman Checkout
 app.controller('CheckoutController', ['$scope', function($scope) {
     // Mendapatkan data keranjang dari localStorage
     var cart = JSON.parse(localStorage.getItem('cart')) || [];
 
     $scope.cart = cart;
 
     // Fungsi untuk menghitung total harga
     $scope.totalPrice = function() {
         return $scope.cart.reduce(function(total, product) {
             return total + product.price;
         }, 0);
     };
 
     // Fungsi untuk menghapus item dari keranjang
     $scope.removeFromCart = function(index) {
         // Hapus produk dari array berdasarkan indeks
         $scope.cart.splice(index, 1);
 
         // Perbarui localStorage dengan keranjang yang baru
         localStorage.setItem('cart', JSON.stringify($scope.cart));
 
         // Perbarui jumlah item di keranjang
         $scope.cartCount = $scope.cart.length;
     };
 
     // Fungsi untuk menyelesaikan checkout
     $scope.completeCheckout = function() {
         alert("Pembelian selesai. Terima kasih telah berbelanja!");
 
         // Menghapus keranjang dari localStorage setelah checkout
         localStorage.removeItem('cart');
         $scope.cart = [];
     };
 }]);
 