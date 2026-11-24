using System.ComponentModel.DataAnnotations;

namespace Backend_Feature_api.src.DTO.Account_DTO
{
	public class LogInDTO
	{
		[Required]
		public string UserName { get; set; }
		[Required]
		public string password { get; set; }
	}
}
