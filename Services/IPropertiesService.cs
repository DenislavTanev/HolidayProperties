namespace HolidayProperties.Services
{
    using HolidayProperties.Services.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPropertiesService
    {
        Task CreateAsync(PropertyCreateServiceModel input);

        Task EditAsync(PropertyDetailsServiceModel input);

        Task DeleteAsync(string propertyId, string userId);

        PropertyDetailsServiceModel GetById(string id);

        IEnumerable<PropertyServiceModel> GetAllByType(string type);

        IEnumerable<PropertyServiceModel> GetLatest();

        IEnumerable<PropertyServiceModel> GetAll();

        IEnumerable<PropertyServiceModel> GetAllByUser(string userId);
    }
}
