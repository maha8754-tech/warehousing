using Backend_Feature_api.src.@interface;
using Microsoft.AspNetCore.Mvc;

namespace Backend_Feature_api.src.Controllers
{
    [Route("api/Movement")]
    [ApiController]
    public class Movement_Controller : ControllerBase
    {
        private readonly IMovementRepository _movementRepo;
        public Movement_Controller(IMovementRepository movementRepo)
        {
            _movementRepo = movementRepo;
        }
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var movements = _movementRepo.GetAsync();

            return Ok(movements);
        }
    }
}
