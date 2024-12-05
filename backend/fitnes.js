var app = angular.module('fitnessShopApp', []);

// Controller untuk halaman Shop
app.controller('FitnessShopController', ['$scope', '$window', function($scope, $window) {
    // Daftar produk kebugaran
    $scope.products = [
        {
            name: "Dumbbell Set",
            description: "Dumbbell set untuk latihan angkat beban dan pembentukan otot.",
            price: 300000,
            image: "https://media.istockphoto.com/id/965466598/photo/healthy-lifestyle-theme-collage.webp?a=1&b=1&s=612x612&w=0&k=20&c=dKG13nWNvVIpXMQlA_EDGZI6E5sz39w4nh7NaXg3DCw="
        },
        {
            name: "Yoga Mat",
            description: "Matras yoga berkualitas tinggi untuk kenyamanan selama latihan.",
            price: 150000,
            image: "https://media.istockphoto.com/id/1191261926/photo/young-woman-doing-yoga-twist-mat-healthy-lifestyle.webp?a=1&b=1&s=612x612&w=0&k=20&c=Lhg_XnzOMf4xWEYoLx05g9E6XybsXct6GXsc0l1WJjQ="
        },
        {
            name: "Resistance Band",
            description: "Band elastis untuk berbagai latihan kekuatan dan rehabilitasi.",
            price: 120000,
            image: "https://media.istockphoto.com/id/96264177/photo/red-and-black-resistance-band-exercise-tool.webp?a=1&b=1&s=612x612&w=0&k=20&c=4cDK1V8bE7Bhs2ngeGw4nVag1tyjYz7Lo0SIYZ5WsZ0="
        },
        {
            name: "Kettlebell",
            description: "Kettlebell untuk latihan kekuatan dan stabilitas tubuh.",
            price: 250000,
            image: "https://media.istockphoto.com/id/2156879875/photo/a-black-and-orange-kettlebell-sits-on-a-black-mat-next-to-a-purple-and-blue-kettlebell.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vk29GYzsUu7qsKxXGR4nswp8mzsIgTnUooR3NyVeTO4="
        },
        {
            name: "Foam Roller",
            description: "Alat pijat otot untuk pemulihan setelah latihan.",
            price: 100000,
            image: "https://media.istockphoto.com/id/1780283185/photo/man-massaging-his-muscles-with-foam-roller.webp?a=1&b=1&s=612x612&w=0&k=20&c=N5PxwdHAeZCcIW3lvxPszC9UgMiaIKTI50s9PIjmwVA="
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
        $window.location.href = "/section/checkout.html"; // Arahkan ke halaman checkout
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

// Controller untuk halaman About
app.controller('AboutController', ['$scope', function($scope) {
    $scope.fitnessInfo = {
        title: "Tentang Kebugaran",
        mission: "Mendukung gaya hidup sehat melalui produk kebugaran terbaik.",
        vision: "Menjadi mitra terpercaya dalam perjalanan kebugaran Anda.",
        values: [
            "Kualitas produk yang terjamin",
            "Kemudahan dalam berbelanja",
            "Harga yang kompetitif"
        ]
    };
}]);
