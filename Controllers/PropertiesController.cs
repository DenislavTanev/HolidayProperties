using HolidayProperties.Data.Models;
using HolidayProperties.Models;
using HolidayProperties.Services;
using HolidayProperties.Services.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolidayProperties.Controllers
{

    [ApiController]
    [Route("properties")]
    public class PropertiesController : ControllerBase
    {
        private readonly IPropertiesService _propertiesService;
        private readonly ILogger _logger;
        private readonly UserManager<ApplicationUser> userManager;
        private readonly SignInManager<ApplicationUser> signInManager;
        private readonly IImagesService imagesService;

        public PropertiesController(
            IPropertiesService propertiesService,
            ILogger<PropertiesController> logger,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IImagesService imagesService)
        {
            _propertiesService = propertiesService;
            _logger = logger;
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.imagesService = imagesService;
        }

        [HttpGet]
        public IEnumerable<PropertyServiceModel> GetByType(string type)
        {
            var properties = _propertiesService
                .GetAllByType(type);

            foreach (var property in properties)
            {
                var image = imagesService.GetOneByProperty(property.Id);

                if (image != null)
                {
                    property.Image = "data:image/png;base64," + Convert.ToBase64String(image.Img);
                }
                else
                {
                    property.Image = null;
                }
            }

            return properties;
        }

        [HttpGet]
        [Route("getbyid")]
        public IActionResult GetById(string id)
        {
            var property = _propertiesService.GetById(id);

            return this.Ok(property);
        }

        [HttpGet]
        [Route("latest")]
        public IEnumerable<PropertyServiceModel> GetLatest()
        {
            var properties = _propertiesService
                .GetLatest();

            foreach (var property in properties)
            {
                var image = imagesService.GetOneByProperty(property.Id);

                if (image != null)
                {
                    property.Image = "data:image/png;base64," + Convert.ToBase64String(image.Img);
                }
                else
                {
                    property.Image = null;
                }
            }

            return properties;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromForm] PropertyCreateServiceModel data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }

            await this._propertiesService.CreateAsync(data);

            return this.Ok("Created");
        }
    }
}
