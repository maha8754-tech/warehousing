using Backend_Feature_api.src.Model;

namespace Backend_Feature_api.src.@internal 
{
	public interface ITokenService
	{
		string CreateToken(AppUser user);
	}
}
