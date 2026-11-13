using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.Helpers;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.RateLimiting;
using warehouse.Models;

namespace Backend_Feature_api.src.Controllers
{
    [Route("api/Products")]
    [ApiController]
    [EnableRateLimiting("fixed")]
    public class Product_Controller : ControllerBase
    {
        private readonly IProductRepository _productRepo;
        public Product_Controller(IProductRepository productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll([FromQuery] ProductQueryObject query)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.IsValid);

            var Products = await _productRepo.GetAllAsync(query);

            return Ok(Products);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.IsValid);

            var Product = await _productRepo.GetByIdAsync(id);

            if(Product == null)
            {
                return NotFound();
            }

            return Ok(Product);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateProductDTO productDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.IsValid);

            await _productRepo.CreateAsync(productDTO);

            return CreatedAtAction(nameof(GetById), new { id = productDTO.ProductId}, productDTO);
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateProductDTO UpdateProductDTO)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.IsValid);

            var new_product = await _productRepo.UpdateAsync(id,UpdateProductDTO);

            if (new_product == null)
            {
                return NotFound();
            }

            return Ok(new_product);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState.IsValid);

            var product = await _productRepo.DeleteAsync(id);

            if(product == null)
            {
                return NotFound();
            }

            return NoContent();
        }

    }
}
