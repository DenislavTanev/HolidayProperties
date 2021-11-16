namespace HolidayProperties.Services
{
    using HolidayProperties.Services.Models;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IPropertiesService
    {
        Task CreateAsync(PropertyCreateModel input);

        Task EditAsync(PropertyDetailsModel input);

        Task DeleteAsync(string id);

        PropertyDetailsModel GetById(string id);

        IEnumerable<PropertyModel> GetAllByType(string type);

        IEnumerable<PropertyModel> GetLatest();

        IEnumerable<PropertyModel> GetAll();

    }
}
