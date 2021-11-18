namespace HolidayProperties.Models
{
    using System;
    using System.Collections.Generic;

    public class PropertyViewModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Type { get; set; }

        public decimal Price { get; set; }

        public string OwnerId { get; set; }

        public DateTime CreatedOn { get; set; }

        public ICollection<ImageViewModel> Images { get; set; }
    }
}
