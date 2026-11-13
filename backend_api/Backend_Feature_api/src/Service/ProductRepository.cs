using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Movement_DTO;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.Helpers;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Backend_Feature_api.src.Model;
using Microsoft.EntityFrameworkCore;
using warehouse.Models;

namespace Backend_Feature_api.src.Service
{
    public class ProductRepository : IProductRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IMovementRepository _movementRepo;
        public ProductRepository(ApplicationDbContext context,IMovementRepository movementRepo)
        {
            _context = context;
            _movementRepo = movementRepo;
        }

        public async Task<Product> CreateAsync(CreateProductDTO productDTO)
        {
            var product = productDTO.ToProduct();

            await _context.product.AddAsync(product);
            await _context.SaveChangesAsync();

            product.Code = $"SKU-{product.ProductId + 99}";
            await _context.SaveChangesAsync();

            #region movement_stash
            /*var movement = new CreateMovementDTO
            {
                ProductName = product.ProductName,
                Datetime = DateTime.Now,
            };*/

            /* await _movementRepo.CreateAsync(movement);
             await _context.SaveChangesAsync();*/
            #endregion

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

        public async Task<List<Product>> GetAllAsync(ProductQueryObject query)
        {
            var Products = _context.product.AsQueryable();

            if (query.Stock.HasValue)
            {
                Products = Products.Where(p => p.Stock == query.Stock.Value);
            }

            if (query.Price.HasValue)
            {
                Products = Products.Where(p => p.Price == query.Price.Value);
            }

            if (!string.IsNullOrWhiteSpace(query.ProductName))
            {
                Products = Products.Where(i => i.ProductName.Contains(query.ProductName));
            }
            if (!string.IsNullOrWhiteSpace(query.Status))
            {
                Products = Products.Where(i => i.Status.Contains(query.Status));
            }
            if (!string.IsNullOrWhiteSpace(query.ProductName))
            {
                Products = Products.Where(i => i.ProductName.Contains(query.ProductName));
            }
            if (!string.IsNullOrWhiteSpace(query.Price.ToString()))
            {
                Products = Products.Where(i => i.Price.ToString().Contains(query.Price.ToString()));
            }
            if (!string.IsNullOrWhiteSpace(query.Code))
            {
                Products = Products.Where(i => i.Code.Contains(query.Code));
            }
            if (!string.IsNullOrWhiteSpace(query.Category))
            {
                Products = Products.Where(i => i.Category.Contains(query.Category));
            }

            if (!string.IsNullOrWhiteSpace(query.SortBy))
            {
                if (query.SortBy.Equals("Stock", StringComparison.OrdinalIgnoreCase))
                {
                    Products = query.isDecsending ? Products.OrderByDescending(s => s.Stock) : Products.OrderBy(s => s.Stock);
                }

                if (query.SortBy.Equals("Price", StringComparison.OrdinalIgnoreCase))
                {
                    Products = query.isDecsending ? Products.OrderByDescending(s => s.Price) : Products.OrderBy(s => s.Price);
                }
            }

            var skipNumber = (query.PageNumber - 1) * query.PageSize; // pagination


            return await Products.Skip(skipNumber).Take(query.PageSize).ToListAsync();

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

            old_product.Code = productDTO.Code;
            old_product.Price= productDTO.Price;
            old_product.ProductName = productDTO.ProductName;
            old_product.Status = productDTO.Status;
            old_product.Stock = productDTO.Stock;
            old_product.Category = productDTO.Category;

            await _context.SaveChangesAsync();

            return old_product;
        }
    }
}
