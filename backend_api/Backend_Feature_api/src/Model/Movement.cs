namespace Backend_Feature_api.src.Model
{
    public class Movement
    {
        public int Movementid { get; set; }
        public DateTime Datetime { get; set; }
        public string Type { get; set; }
        public string ProductName { get; set; } // foreign key to product productname
        public int Quantity { get; set; }
        public string warehouse { get; set; }
    }
}
