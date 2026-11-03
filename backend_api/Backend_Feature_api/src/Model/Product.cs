
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace warehouse.Models;

public class Product
{
    public int ProductId { get; set; }
    [Required]
    public string ProductName { get; set; } = string.Empty;
    [Required]
    public string Code { get; set; } = string.Empty;
    [Required]
    public string Category { get; set; } = string.Empty;
    [Required]
    public int Stock { get; set; }
    [Required]
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    [Required]
    public string Status { get; set; } = string.Empty;
}