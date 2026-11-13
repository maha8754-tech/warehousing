using Backend_Feature_api.src.dbcontext;
using Backend_Feature_api.src.@interface;
using Backend_Feature_api.src.Service;
using Microsoft.AspNetCore.RateLimiting;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

const string FrontPolicy = "FrontendPolicy";

builder.Services.AddCors(options =>
{
    options.AddPolicy(FrontPolicy, policy =>
    {
        policy.WithOrigins("http://localhost:3000")
                                            .AllowAnyHeader()
                                            .AllowAnyMethod();
    });
});


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddRateLimiter(options =>
{
    options.AddFixedWindowLimiter("fixed", limiterOptions =>
    {
        limiterOptions.PermitLimit = 10;
        limiterOptions.Window = TimeSpan.FromMinutes(1);
        limiterOptions.QueueLimit = 0;
        limiterOptions.AutoReplenishment = true;
    });

    options.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
});

builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IMovementRepository, MovementRepository>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(FrontPolicy);

app.UseRateLimiter();

app.MapControllers();

// app.useauthoresasion();


app.MapGet("/", async context =>
{
    context.Response.Redirect("/swagger");

    await Task.CompletedTask;
});



app.Run();
