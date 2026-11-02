using Backend_Feature_api.DTO.Product_DTO;
using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.DTO.Product_DTO;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Mapper;
using Microsoft.AspNetCore.Mvc;
using warehouse.Models;

namespace Backend_Feature_api.src.Controllers
{
    [Route("api/Product")]
    [ApiController]
    public class Product_Controller : ControllerBase
    {
        private readonly IProductRepository _productRepo;
        public Product_Controller(IProductRepository productRepo)
        {
            _productRepo = productRepo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var Products = await _productRepo.GetAllAsync();

            return Ok(Products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute]int id)
        {
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
            await _productRepo.CreateAsync(productDTO);

            return CreatedAtAction(nameof(GetById), new { id = productDTO.ProductId }, productDTO);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateProductDTO UpdateProductDTO)
        {
            var new_product = await _productRepo.UpdateAsync(id,UpdateProductDTO);

            if (new_product == null)
            {
                return NotFound();
            }

            return Ok(new_product);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var product = await _productRepo.DeleteAsync(id);

            if(product == null)
            {
                return NotFound();
            }


            return NoContent();
        }

    }
}
