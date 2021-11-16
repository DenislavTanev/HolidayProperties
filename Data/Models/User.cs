namespace HolidayProperties.Data.Models
{
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Identity;

    public class User : IdentityUser
    {
        public string ImageId { get; set; }

        public Image Image { get; set; }

        public ICollection<Property> Properties { get; set; }
    }
}
