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

        public PropertiesController(
            IPropertiesService propertiesService,
            ILogger<PropertiesController> logger)
        {
            _propertiesService = propertiesService;
            _logger = logger;
        }

        [HttpGet]
        [Route("getall")]
        public IEnumerable<PropertyServiceModel> GetAll()
        {
            var properties = _propertiesService
                .GetAll();

            return properties;
        }

        [HttpGet]
        [Route("huts")]
        public IEnumerable<PropertyServiceModel> GetHuts()
        {
            var properties = _propertiesService
                .GetAllByType("Hut");

            return properties;
        }

        [HttpGet]
        [Route("houses")]
        public IEnumerable<PropertyServiceModel> GetHouses()
        {
            var properties = _propertiesService
                .GetAllByType("House");

            return properties;
        }

        [HttpGet]
        [Route("apartments")]
        public IEnumerable<PropertyServiceModel> GetApartments()
        {
            var properties = _propertiesService
                .GetAllByType("Apartment");

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

            return properties;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(PropertyCreateServiceModel data)
        {
            var userId = this.User.Id();

            await this._propertiesService.CreateAsync(data);

            return this.Ok("Property created successfully!");
        }
    }
}
