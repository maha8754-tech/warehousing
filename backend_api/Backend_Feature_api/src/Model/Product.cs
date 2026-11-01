
using System.ComponentModel.DataAnnotations;

namespace YourProject.Models;

public class Product
{
    public int ProductId { get; set; }

    [Required]
    [MaxLength(50)]
    public string ProductCode { get; set; } = string.Empty;

    [Required]
    [MaxLength(150)]
    public string Name { get; set; } = string.Empty;

    public string? Description { get; set; }

    [Required]
    [MaxLength(30)]
    public string Unit { get; set; } = string.Empty;

    public int MinimumQuantity { get; set; }

    public bool IsActive { get; set; } = true;

    // Navigation property
   /* public Stock? Stock { get; set; }

    public ICollection<StockMovementItem> MovementItems { get; set; }
        = new List<StockMovementItem>();*/
}
