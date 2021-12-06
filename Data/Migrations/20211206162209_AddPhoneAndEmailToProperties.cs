using Microsoft.EntityFrameworkCore.Migrations;

namespace HolidayProperties.Data.Migrations
{
    public partial class AddPhoneAndEmailToProperties : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Properties",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Properties",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Properties");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Properties");
        }
    }
}
