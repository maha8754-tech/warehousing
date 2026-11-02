using Backend_Feature_api.DTO.Product_DTO;
using warehouse.Models;

namespace Backend_Feature_api.src.Mapper
{
    public static class ProductMapper
    {
        public static Product ToProduct(this CreateProductDTO ProductDTO)
        {
            return new Product
            {
                Code = ProductDTO.Code,
                Stock = ProductDTO.Stock,
                Status = ProductDTO.Status,
                ProductName = ProductDTO.ProductName,
                Price = ProductDTO.Price,
            };
        }
    }
}
