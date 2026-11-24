using Backend_Feature_api.src.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using warehouse.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Backend_Feature_api.src.dbcontext
{
    public class ApplicationDbContext : IdentityDbContext<AppUser>
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

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(p => p.ProductId);

                entity.Property(p => p.ProductId)
                    .UseIdentityColumn(1, 1);
            });

            List<IdentityRole> roles = new()
            {
                new IdentityRole {Name = "admin",NormalizedName = "ADMIN"},
                new IdentityRole {Name = "user",NormalizedName = "USER"}
            };

            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
        public DbSet<Product> product { get; set; }
        public DbSet<Movement> movements { get; set; }
    }
}
