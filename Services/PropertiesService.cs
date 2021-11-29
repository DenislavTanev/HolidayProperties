using HolidayProperties.Data;
using HolidayProperties.Data.Models;
using HolidayProperties.Services.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace HolidayProperties.Services
{
    public class PropertiesService : IPropertiesService
    {
        private readonly ApplicationDbContext _context;
        private readonly IImagesService imagesService;

        public PropertiesService(ApplicationDbContext context, IImagesService imagesService)
        {
            _context = context;
            this.imagesService = imagesService;
        }

        public async Task CreateAsync(PropertyCreateServiceModel input)
        {
            var property = new Property
            {
                Name = input.name,
                Address = input.address,
                Description = input.description,
                Price = input.price,
                Type = input.type,
                OwnerId = input.ownerId,
                CreatedOn = DateTime.UtcNow,
                IsDeleted = false,
            };

            await _context.Properties.AddAsync(property);

            foreach (var image in input.images)
            {
                if (image.Length > 0)
                {
                    using (var ms = new MemoryStream())
                    {
                        image.CopyTo(ms);
                        var fileBytes = ms.ToArray();

                        var img = new Image
                        {
                            Img = fileBytes,
                            PropertyId = property.Id,
                            CreatedOn = DateTime.UtcNow,
                        };

                        await _context.Images.AddAsync(img);
                    }
                }
            }

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(string propertyId, string userId)
        {
            var property = await _context.Properties
                .FirstOrDefaultAsync(x => x.Id == propertyId);

            if (property.OwnerId == userId)
            {
                property.IsDeleted = true;
                property.DeletedOn = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
        }

        public async Task EditAsync(PropertyDetailsServiceModel input)
        {
            var property = await _context.Properties
                .FirstOrDefaultAsync(x => x.Id == input.Id);

            if (property != null && property.IsDeleted == false)
            {
                property.Name = input.Name;
                property.Address = input.Address;
                property.Price = input.Price;
                property.Description = input.Description;
            }

            await _context.SaveChangesAsync();
        }

        public IEnumerable<PropertyServiceModel> GetAll()
        {
            var properties = _context.Properties
                .Where(x => x.IsDeleted == false)
                .Select(p => new PropertyServiceModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Type = p.Type,
                    Price = p.Price,
                    OwnerId = p.OwnerId,
                })
                .ToList();

            return properties;
        }

        public IEnumerable<PropertyServiceModel> GetAllByType(string type)
        {
            var properties = new List<PropertyServiceModel>();

            if (type == "all")
            {
                properties = GetAll().ToList();
            }
            else
            {
                properties = _context.Properties
                .Where(x => x.IsDeleted == false && x.Type == type)
                .Select(p => new PropertyServiceModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Type = p.Type,
                    Price = p.Price,
                    OwnerId = p.OwnerId,
                })
                .ToList();
            }

            return properties;
        }

        public PropertyDetailsServiceModel GetById(string id)
        {
            var property = _context.Properties
                .Where(x => x.IsDeleted == false && x.Id == id)
                .Select(p => new PropertyDetailsServiceModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Type = p.Type,
                    Address = p.Address,
                    Description = p.Description,
                    Price = p.Price,
                    OwnerId = p.OwnerId,
                })
                .FirstOrDefault();

            var images = imagesService.GetByProperty(property.Id).ToList();

            property.Images = new List<string>();

            foreach (var imgBytes in images)
            {
                property.Images.Add("data:image/jpeg;base64," + Convert.ToBase64String(imgBytes.Img));
            }

            return property;
        }

        public IEnumerable<PropertyServiceModel> GetLatest()
        {
            var properties = _context.Properties
                .Where(x => x.IsDeleted == false)
                .Select(p => new PropertyServiceModel
                {
                    Id = p.Id,
                    Name = p.Name,
                    Type = p.Type,
                    Price = p.Price,
                    OwnerId = p.OwnerId,
                    CreatedOn = p.CreatedOn,
                })
                .OrderByDescending(x => x.CreatedOn)
                .Take(10)
                .ToList();

            return properties;
        }
    }
}
