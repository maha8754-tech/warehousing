
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace warehouse.Models;

public class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public int Stock { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    public string Status { get; set; } = string.Empty;

    #region unused_code
   /* public int ProductId { get; set; }

    public string ProductName { get; set; } = string.Empty;
    public string Code { get; set; } = string.Empty; // Q : ??
    public string Category { get; set; } = string.Empty; // type is string
    public int Stock { get; set; }  // stock is number of each stock
    public decimal Price { get; set; } // type is decimal
    public string status { get; set; } // Q : type is string string in-stock , low-stock out-stock
                                       // other options;


    // List<Stock> stocks {get;set;}

    // List<Movement> movements;*/
    #endregion
}