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
                Description = ProductDTO.Description,
                IsActive = ProductDTO.IsActive,
                MinimumQuantity = ProductDTO.MinimumQuantity,
                Name = ProductDTO.Name,
                ProductCode = ProductDTO.ProductCode,
                Unit = ProductDTO.Unit
            };
        }
    }
}
