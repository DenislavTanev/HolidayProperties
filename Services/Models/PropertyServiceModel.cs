﻿namespace HolidayProperties.Services.Models
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
    }
}
