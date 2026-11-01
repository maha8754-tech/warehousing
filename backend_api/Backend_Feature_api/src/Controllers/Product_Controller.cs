using Backend_Feature_api.src.dbcontext;
using Microsoft.AspNetCore.Mvc;

namespace Backend_Feature_api.src.Controllers
{
    [Route("api/Product")]
    [ApiController]
    public class Product_Controller : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public Product_Controller(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var Products = _context.product.ToList();

            return Ok(Products);
        }

        [HttpGet("{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            var Product = _context.product.FirstOrDefault(i => i.ProductId == id);

            if(Product == null)
            {
                return NotFound();
            }

            return Ok(Product);
        }
    }
}
