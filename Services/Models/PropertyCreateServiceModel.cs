﻿namespace HolidayProperties.Services.Models
{
    using System.Collections.Generic;

    public class PropertyCreateServiceModel
    {
        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public decimal Price { get; set; }

        public string OwnerId { get; set; }

        public IEnumerable<byte[]> Images { get; set; }
    }
}
