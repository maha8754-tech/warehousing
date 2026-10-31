var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "welcome to my warehouse project");

app.Run();
