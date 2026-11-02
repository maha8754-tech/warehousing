using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Microsoft.EntityFrameworkCore;
using warehouse.Models;

namespace Backend_Feature_api.src.Service
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;
        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Product> CreateAsync(CreateProductDTO productDTO)
        {
            var product = productDTO.ToProduct();

            await _context.product.AddAsync(product);
            await _context.SaveChangesAsync();

            return product;

        }

        public async Task<Product> DeleteAsync(int id)
        {
            var product = await GetByIdAsync(id);

            if(product == null)
            {
                return null;
            }

            _context.product.Remove(product!);
            await _context.SaveChangesAsync();

            return product;
        }

        public async Task<bool> Exist(int id)
        {
            return await _context.product.AnyAsync(i => i.ProductId == id);
        }

        public async Task<List<Product>> GetAllAsync()
        {
            var Products = await _context.product.ToListAsync();
            // later the join and query object will be added in here and the base method
            // in the iproductrepo 
            // and pagination

            return Products;
        }

        public async Task<Product?> GetByIdAsync(int id)
        {
            return await _context.product.FirstOrDefaultAsync(i => i.ProductId == id);
        }

        public async Task<Product> UpdateAsync(int id, UpdateProductDTO productDTO)
        {
            var old_product = await GetByIdAsync(id);

            if(old_product == null)
            {
                return null;
            }

            old_product.Unit = productDTO.Unit;
            old_product.ProductCode = productDTO.ProductCode;
            old_product.Name = productDTO.Name;
            old_product.MinimumQuantity = productDTO.MinimumQuantity;
            old_product.IsActive = productDTO.IsActive;
            old_product.Description = productDTO.Description;

            await _context.SaveChangesAsync();

            return old_product;
        }
    }
}
