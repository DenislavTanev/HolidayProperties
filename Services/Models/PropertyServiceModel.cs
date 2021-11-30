namespace HolidayProperties.Services.Models
{
    using System;
    using System.Collections.Generic;

    public class PropertyServiceModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public decimal Price { get; set; }

        public string OwnerId { get; set; }

        public DateTime CreatedOn { get; set; }

        public string Image { get; set; }

        public double Area { get; set; }

        public int Beds { get; set; }

        public int Capacity { get; set; }

        public int Garages { get; set; }
    }
}
