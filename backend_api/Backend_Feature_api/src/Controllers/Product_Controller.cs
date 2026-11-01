using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.Mapper;
using Microsoft.AspNetCore.Mvc;
using warehouse.Models;

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

        [HttpPost]
        public IActionResult Create([FromBody] CreateProductDTO productDTO)
        {
            var product = productDTO.ToProduct();

            _context.product.Add(product);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetById), new { id = product.ProductId }, product);
        }


    }
}
