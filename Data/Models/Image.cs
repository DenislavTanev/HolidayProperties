namespace HolidayProperties.Data.Models
{
    using System;

    using HolidayProperties.Data.Common;

    public class Image : BaseDeletableModel<string>
    {
        public Image()
        {
            this.Id = Guid.NewGuid().ToString();
        }

        public byte[] Img { get; set; }

        public string PropertyId { get; set; }

        public Property Property { get; set; }
    }
}
