namespace HolidayProperties.Services.Models
{
    public class PropertyEditServiceModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public string OwnerId { get; set; }

        public double Area { get; set; }

        public int Beds { get; set; }

        public int Capacity { get; set; }

        public int Garages { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }
    }
}
