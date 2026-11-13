using Backend_Feature_api.src.Model;
using Microsoft.EntityFrameworkCore;
using warehouse.Models;

namespace Backend_Feature_api.src.dbcontext
{
    public class ApplicationDbContext : DbContext 
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Product>().
                HasIndex(p => p.Code)
                .IsUnique();
        }
        public DbSet<Product> product { get; set; }
        public DbSet<Movement> movements { get; set; }
    }
}
