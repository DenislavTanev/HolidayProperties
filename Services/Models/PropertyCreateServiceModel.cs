namespace HolidayProperties.Services.Models
{
    using Microsoft.AspNetCore.Http;
    using System.Collections.Generic;

    public class PropertyCreateServiceModel
    {
        public string name { get; set; }

        public string description { get; set; }

        public decimal price { get; set; }

        public string address { get; set; }

        public string type { get; set; }

        public string ownerId { get; set; }

        public IEnumerable<IFormFile> images { get; set; }

        public double area { get; set; }

        public int beds { get; set; }

        public int capacity { get; set; }

        public int garages { get; set; }
    }
}
