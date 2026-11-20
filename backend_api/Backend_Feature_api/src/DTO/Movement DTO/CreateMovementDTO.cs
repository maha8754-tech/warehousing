namespace Backend_Feature_api.src.DTO.Movement_DTO
{
    public class CreateMovementDTO
    {
        public int Movementid { get; set; }
        public string Datetime { get; set; } // change it back to type datetime
        public string Type { get; set; }
        public string ProductName { get; set; } // foreign key to product productname
        public int Quantity { get; set; }
        public string warehouse { get; set; }
    }
}
