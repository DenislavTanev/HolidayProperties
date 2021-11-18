namespace HolidayProperties.Data.Models
{
    using System.Collections.Generic;

    using Microsoft.AspNetCore.Identity;

    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            this.Properties = new HashSet<Property>();
        }

        public byte[] ProfilePic { get; set; }

        public ICollection<Property> Properties { get; set; }
    }
}
