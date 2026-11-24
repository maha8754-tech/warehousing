using System.ComponentModel.DataAnnotations;

namespace Backend_Feature_api.src.DTO.Account_DTO
{
	public class AccountRegisterDTO
	{
		[Required]
		public string UserName { get; set; }

		[Required]
		[EmailAddress]
		public string Email { get; set; }

		[Required]
		public string Password { get; set; }
	}
}
