using System.Text;

namespace Backend_Feature_api.Util
{
	public static class Util
	{
		public static (string comma_format, string underscore_format) ConvertTo_Formal_Price(int value)
		{
			StringBuilder builder = new();
			string value_str = value.ToString();
			int count = 0;

			for (int i = value_str.Length - 1; i >= 0; i--)
			{
				if (count == 3)
				{
					builder.Append(",");
					count = 0;
				}

				builder.Append(value_str[i]);
				count++;
			}

			char [] arr = builder.ToString().ToCharArray();
			Array.Reverse(arr);

			string final = string.Join(null, arr);

			return (final, final.Replace(",", "_"));

			// hello 
		}
	}
}
