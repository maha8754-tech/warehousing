using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend_Feature_api.Migrations
{
    /// <inheritdoc />
    public partial class Stock_to_Quantity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Stock",
                table: "product",
                newName: "Quantity");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "product",
                newName: "Stock");
        }
    }
}
