namespace HolidayProperties.Services
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using HolidayProperties.Services.Models;

    public interface IImagesService
    {
        Task CreateAsync(ImageCreateServiceModel input);

        Task DeleteAsync(string id);

        ImageServiceModel GetById(string id);

        IEnumerable<ImageServiceModel> GetByProperty(string propertyId);

        ImageServiceModel GetOneByProperty(string propertyId);
    }
}
