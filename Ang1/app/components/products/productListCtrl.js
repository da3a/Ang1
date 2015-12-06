var MyNS;
(function (MyNS) {
    var ProductListCtrl = (function () {
        function ProductListCtrl($scope, $http) {
            var _this = this;
            this.$scope = $scope;
            this.title = "Product List Title";
            this.products = new Array();
            $http
                .get("http://localhost:52172/api/products")
                .then(function (response) {
                angular.forEach(response.data, function (value, key) {
                    _this.products.push(value);
                });
            });
            //this.products = [
            //    {
            //        "productId": 1,
            //        "productName": "Leaf Rake",
            //        "productCode": "GDN-0011",
            //        "releaseDate": new Date(2009, 2, 19),
            //        "description": "Leaf rake with 48-inch wooden handle.",
            //        "price": 19.95
            //    }
            //];
        }
        return ProductListCtrl;
    })();
    //angular.module("App").controller("ProductListCtrl", ProductListCtrl);
    angular.module("App").controller("ProductListCtrl", ["$scope", "$http", ProductListCtrl]);
})(MyNS || (MyNS = {}));
//# sourceMappingURL=productListCtrl.js.map