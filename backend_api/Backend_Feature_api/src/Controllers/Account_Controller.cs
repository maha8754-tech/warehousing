using Backend_Feature_api.src.DTO.Account_DTO;
using Backend_Feature_api.src.@internal;
using Backend_Feature_api.src.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend_Feature_api.src.Controllers
{
	[Route("api/Account")]
	[ApiController]
	public class Account_Controller : ControllerBase
	{
		private readonly UserManager<AppUser> _userManager;
		private readonly ITokenService _tokenService;
		private readonly SignInManager<AppUser> _signInManager;
		public Account_Controller(UserManager<AppUser> userManager,ITokenService tokenService,
			SignInManager<AppUser> signinManager)
		{
			_userManager = userManager;
			_tokenService = tokenService;
			_signInManager = signinManager;
		}

		[HttpPost("register")]
		public async Task<IActionResult> Register([FromBody] AccountRegisterDTO registerDto)
		{
			try
			{
				if (!ModelState.IsValid)
					return BadRequest(!ModelState.IsValid);

				var appUser = new AppUser
				{
					UserName = registerDto.UserName,
					Email = registerDto.Email,
				};

				var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

				if (createdUser.Succeeded)
				{
					var roleResult = await _userManager.AddToRoleAsync(appUser, "User");

					if (roleResult.Succeeded)
					{
						return Ok(new NewUserDTO
						{
							UserName = appUser.UserName,
							Email = appUser.Email,
							Token = _tokenService.CreateToken(appUser)
						});
					}
					else
					{
						return StatusCode(500, roleResult.Errors);
					}
				}
				else
					return StatusCode(500, createdUser.Errors);

			}
			catch(Exception e)
			{
				return StatusCode(500 , new
				{
					message = e.Message
				});
			}
			
		}
		[HttpPost("login")]
		public async Task<IActionResult> Login(LogInDTO loginDTo)
		{
			if (!ModelState.IsValid)
				return BadRequest(ModelState.IsValid);

			var user = await _userManager.Users.FirstOrDefaultAsync(x => x.UserName == loginDTo.UserName.ToLower());

			if(user == null)
			{
				return Unauthorized("Invalid UserName");
			}

			var result = await _signInManager.CheckPasswordSignInAsync(user, loginDTo.password, false);

			if (!result.Succeeded) return Unauthorized("Username not found and/or password is incorrect");

			return Ok(
				new NewUserDTO
				{
					UserName = user.UserName,
					Email = user.Email,
					Token = _tokenService.CreateToken(user)
				});
		}
	}
}
