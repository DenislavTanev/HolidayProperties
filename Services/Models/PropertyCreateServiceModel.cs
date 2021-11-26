namespace HolidayProperties.Services.Models
{
    using System.Collections.Generic;

    public class PropertyCreateServiceModel
    {
        public string name { get; set; }

        public string description { get; set; }

        public decimal price { get; set; }

        public string address { get; set; }

        public string type { get; set; }

        //public string ownerId { get; set; }

        //public IEnumerable<byte[]> images { get; set; }
    }
}
