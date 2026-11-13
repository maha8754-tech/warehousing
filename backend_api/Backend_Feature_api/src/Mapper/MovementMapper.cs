using Backend_Feature_api.src.DTO.Movement_DTO;
using Backend_Feature_api.src.Model;

namespace Backend_Feature_api.src.Mapper
{
    public static class MovementMapper
    {
        public static Movement ToMovement(this CreateMovementDTO movementDTO)
        {
            return new Movement
            {
                Datetime = movementDTO.Datetime,
                ProductName = movementDTO.ProductName,
                Quantity = movementDTO.Quantity,
                Type = movementDTO.Type,
                warehouse = movementDTO.warehouse
            };
        }
    }
}
