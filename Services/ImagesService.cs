using HolidayProperties.Data;
using HolidayProperties.Data.Models;
using HolidayProperties.Services.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolidayProperties.Services
{
    public class ImagesService : IImagesService
    {
        private readonly ApplicationDbContext _context;

        public ImagesService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task CreateAsync(ImageCreateServiceModel input)
        {
            var img = new Image
            {
                Img = input.Img,
                PropertyId = input.PropertyId,
                IsDeleted = false,
                CreatedOn = DateTime.UtcNow,
            };

            await _context.Images.AddAsync(img);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(string id)
        {
            var image = await _context.Images.FirstOrDefaultAsync(x => x.Id == id);

            if (image != null)
            {
                image.IsDeleted = true;
                image.DeletedOn = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
        }

        public ImageServiceModel GetById(string id)
        {
            var img = _context.Images
                 .Where(x => x.Id == id && x.IsDeleted == false)
                 .Select(x => new ImageServiceModel
                 {
                     Id = x.Id,
                     Img = x.Img,
                 })
                 .FirstOrDefault();

            return img;
        }

        public IEnumerable<ImageServiceModel> GetByProperty(string propertyId)
        {
            var imgs = _context.Images
                .Where(x => x.PropertyId == propertyId && x.IsDeleted == false)
                .Select(x => new ImageServiceModel
                {
                    Id = x.Id,
                    Img = x.Img,
                })
                .ToList();

            return imgs;
        }

        public ImageServiceModel GetOneByProperty(string propertyId)
        {
            var img = _context.Images
                .Where(x => x.PropertyId == propertyId && x.IsDeleted == false)
                .Select(x => new ImageServiceModel
                {
                    Id = x.Id,
                    Img = x.Img,
                })
                .FirstOrDefault();

            return img;
        }
    }
}
