using System.ComponentModel.DataAnnotations;

namespace Backend_Feature_api.DTO.Product_DTO
{
    public class CreateProductDTO
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
    }
}
