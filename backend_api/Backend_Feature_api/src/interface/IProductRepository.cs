using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.Helpers;
using Microsoft.AspNetCore.Mvc;
using warehouse.Models;

namespace Backend_Feature_api.src.@interface
{
    public interface IProductRepository
    {
        Task<List<Product>> GetAllAsync(ProductQueryObject query);
        Task<Product?> GetByIdAsync(int id);
        Task<Product> CreateAsync(CreateProductDTO productDTO);
        Task<Product> UpdateAsync(int id,UpdateProductDTO productDTO);
        Task<Product> DeleteAsync(int id);
        Task<bool> Exist(int id);
    }
}
