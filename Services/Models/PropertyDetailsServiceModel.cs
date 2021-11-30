namespace HolidayProperties.Services.Models
{
    using System.Collections.Generic;

    public class PropertyDetailsServiceModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public decimal Price { get; set; }

        public string OwnerId { get; set; }

        public ICollection<string> Images { get; set; }

        public double Area { get; set; }

        public int Beds { get; set; }

        public int Capacity { get; set; }

        public int Garages { get; set; }
    }
}
