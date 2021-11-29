namespace HolidayProperties.Data.Models
{
    using System;
    using System.Collections.Generic;
    using HolidayProperties.Data.Common;

    public class Property : BaseDeletableModel<string>
    {
        public Property()
        {
            this.Id = Guid.NewGuid().ToString();
            this.Images = new HashSet<Image>();
        }

        public string Name { get; set; }

        public string Address { get; set; }

        public string Description { get; set; }

        public string Type { get; set; }

        public decimal Price { get; set; }

        public ICollection<Image> Images { get; set; }

        public string OwnerId { get; set; }

        public ApplicationUser Owner { get; set; }

        public double Area { get; set; }

        public int Beds { get; set; }

        public int Capacity { get; set; }

        public int Garages { get; set; }
    }
}
