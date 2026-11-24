using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Movement_DTO;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.Helpers;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Backend_Feature_api.src.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Price_Mapper = Backend_Feature_api.Util.Util;
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
            await using var transaction =
                await _context.Database.BeginTransactionAsync();

            try
            {
                var product = productDTO.ToProduct();

                if (product.Quantity >= 1 && product.Quantity <= 100)
                    product.Status = "Low Stock";
                else if (product.Quantity >= 101 && product.Quantity <= 500)
                    product.Status = "Average Stock";
                else if (product.Quantity > 500)
                    product.Status = "High Stock";
						
					product.Code = $"TEMP-{Guid.NewGuid():N}";

                product.Price = Price_Mapper.ConvertTo_Formal_Price(productDTO.Price).comma_format;


				await _context.product.AddAsync(product);
                await _context.SaveChangesAsync();

                product.Code = $"SKU-{product.ProductId + 99}";

                await _context.SaveChangesAsync();

                var movement = new CreateMovementDTO
                {
                    ProductName = product.ProductName,
                    Datetime = DateTime.Now.ToString("HH:MM"),
                    Quantity = 10,
                    Type = "yo",
                    warehouse = "yo"
                };

                await _movementRepo.CreateAsync(movement);

                await transaction.CommitAsync();

                return product;
            }
            catch
            {
                await transaction.RollbackAsync();
                throw;
            }
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

            if (query.Quantity.HasValue)
            {
                Products = Products.Where(p => p.Quantity == query.Quantity.Value);
            }

            if (query.Price.HasValue)
            {
                Products = Products.Where(p => Convert.ToInt32(p.Price) == query.Price.Value);
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
                    Products = query.isDecsending ? Products.OrderByDescending(s => s.Quantity) : Products.OrderBy(s => s.Quantity);
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

            if (old_product == null)
                return null;

            old_product.Price = productDTO.Price;
            old_product.ProductName = productDTO.ProductName;
            old_product.Status = productDTO.Status;
            old_product.Quantity = productDTO.Quantity;
			old_product.Category = productDTO.Category;

            await _context.SaveChangesAsync();

            var movement = new CreateMovementDTO
            {
                Datetime = DateTime.Now.ToString("HH:mm"),
                ProductName = old_product.ProductName,
                Quantity = 100,
                Type = "doesn't have any substutie",
                warehouse = "empty"
            };
            await _movementRepo.CreateAsync(movement);

            return old_product;
        }
    }
}
