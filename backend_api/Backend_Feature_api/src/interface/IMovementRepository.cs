using Backend_Feature_api.src.DTO.Movement_DTO;
using Backend_Feature_api.src.Model;

namespace Backend_Feature_api.src.@interface
{
    public interface IMovementRepository
    {
        Task<List<Movement>> GetAsync(); // later add the query object for movement
        Task<Movement> CreateAsync(CreateMovementDTO movementDTO);
    }
}
