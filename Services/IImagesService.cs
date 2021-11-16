namespace HolidayProperties.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using HolidayProperties.Services.Models;

    public interface IImagesService
    {
        Task CreateAsync(ImageCreateModel input);

        Task DeleteAsync(string id);

        ImageModel GetById(string id);

        IEnumerable<ImageModel> GetByProperty(string propertyId);
    }
}
