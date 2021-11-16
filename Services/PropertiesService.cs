using HolidayProperties.Data;
using HolidayProperties.Data.Models;
using HolidayProperties.Services.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolidayProperties.Services
{
    public class PropertiesService : IPropertiesService
    {
        private readonly ApplicationDbContext _context;

        public PropertiesService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(PropertyCreateModel input)
        {
            var property = new Property
            {
                Name = input.Name,
                Address = input.Address,
                Description = input.Description,
                Price = input.Price,
                Type = input.Type,
                OwnerId = input.OwnerId,
                CreatedOn = DateTime.UtcNow,
                IsDeleted = false,
            };

            await _context.Properties.AddAsync(property);

            foreach (var image in input.Images)
            {
                var img = new Image
                {
                    Img = image,
                    PropertyId = property.Id,
                };

                await _context.Images.AddAsync(img);
            }

            await _context.SaveChangesAsync();
        }

        public Task DeleteAsync(string id)
        {
            throw new NotImplementedException();
        }

        public Task EditAsync(PropertyDetailsModel input)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PropertyModel> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PropertyModel> GetAllByType(string type)
        {
            throw new NotImplementedException();
        }

        public PropertyDetailsModel GetById(string id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<PropertyModel> GetLatest()
        {
            throw new NotImplementedException();
        }
    }
}
