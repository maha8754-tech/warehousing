using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Backend_Feature_api.src.Helpers
{
    public class ProductQueryObject
    {

        public string ProductName { get; set; } = string.Empty;
        public string Code { get; set; } = string.Empty;
        public string Category { get; set; } = string.Empty;
        public int? Stock { get; set; }
        public decimal? Price { get; set; }
        public string Status { get; set; } = string.Empty;
        public int PageNumber { get; set; } = 1;
        public int PageSize { get; set; } = 20;
        public string? SortBy { get; set; } = null;
        public bool isDecsending { get; set; } = false;
    }
}
