namespace MyNS {

    interface IProductListModel {
        title: string;
        products: any[];
    }

    interface myRootService extends ng.IRootScopeService{
        products: any[];
    }

    class ProductListCtrl implements IProductListModel {

        title: string;
        products: any[];

        constructor( private $scope: myRootService,  $http:ng.IHttpService) {
            this.title = "Product List Title";
            this.products = new Array<Product>();
            $http
                .get("http://localhost:52172/api/products")
                .then(
                (response) => {
                    angular.forEach(response.data, (value, key) => {
                        this.products.push(value);
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
    }

    //angular.module("App").controller("ProductListCtrl", ProductListCtrl);
    angular.module("App").controller("ProductListCtrl", ["$scope","$http", ProductListCtrl]);
}