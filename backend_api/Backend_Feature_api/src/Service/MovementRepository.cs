using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Movement_DTO;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Backend_Feature_api.src.Model;
using Microsoft.EntityFrameworkCore;

namespace Backend_Feature_api.src.Service
{
    public class MovementRepository : IMovementRepository
    {
        private readonly ApplicationDbContext _dbcontext;
        public MovementRepository(ApplicationDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }
        public async Task<Movement> CreateAsync(CreateMovementDTO movementDTO)
        {
            var movement = movementDTO.ToMovement();

            await _dbcontext.movements.AddAsync(movement);
            await _dbcontext.SaveChangesAsync();

            return movement;
        }

        public async Task<List<Movement>> GetAsync() // later add the query object
        {
            return await _dbcontext.movements.ToListAsync();
        }
    }
}
