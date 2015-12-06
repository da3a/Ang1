using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ang1.Services.Models
{
    public class Product
    {
        public int productId { get; set; }
        public string productName { get; set; }
        public string productCode { get; set; }
        public DateTime releaseDate { get; set; }
        public string description { get; set; }
        public Single price { get; set; }

    }
}