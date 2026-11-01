using Microsoft.EntityFrameworkCore;
using warehouse.Models;

namespace Backend_Feature_api.src.dbcontext
{
    public class ApplicationDbContext : DbContext 
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Product> product { get; set; }
    }
}
