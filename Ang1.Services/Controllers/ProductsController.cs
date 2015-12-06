using Ang1.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Ang1.Services.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: api/Products
        public IEnumerable<Product> Get()
        {
            return new Product[] {
                new Product(){ description = " A Hoe description", price = 2.99F, productName = "Hoe", productCode="HA", productId=3, releaseDate= DateTime.Now},
                new Product(){ description = " A Rake description", price = 2.99F, productName = "Rake", productCode="RA", productId=1, releaseDate= DateTime.Now},
                new Product(){ description = " A Spade description", price = 9.99F, productName = "Spad", productCode="SP", productId=2, releaseDate= DateTime.Now}
            };
        }

       
    }
}
