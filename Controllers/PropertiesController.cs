using HolidayProperties.Models;
using HolidayProperties.Services;
using HolidayProperties.Services.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HolidayProperties.Controllers
{

    [ApiController]
    [Route("[controller]")]
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
        public IEnumerable<PropertyServiceModel> GetAll()
        {
            var properties = _propertiesService
                .GetAll();

            return properties;
        }

        [HttpGet]
        [Route("[controller]/huts")]
        public IEnumerable<PropertyServiceModel> GetHuts()
        {
            var properties = _propertiesService
                .GetAllByType("Hut");

            return properties;
        }

        [HttpGet]
        [Route("[controller]/houses")]
        public IEnumerable<PropertyServiceModel> GetHouses()
        {
            var properties = _propertiesService
                .GetAllByType("House");

            return properties;
        }

        [HttpGet]
        [Route("[controller]/apartments")]
        public IEnumerable<PropertyServiceModel> GetApartments()
        {
            var properties = _propertiesService
                .GetAllByType("Apartment");

            return properties;
        }

        [HttpGet("id")]
        [Route("[controller]/{id}")]
        public PropertyDetailsServiceModel GetById(string id)
        {
            var property = _propertiesService
                .GetById(id);

            return property;
        }

        [HttpGet("latest")]
        public IEnumerable<PropertyServiceModel> GetLatest()
        {
            var properties = _propertiesService
                .GetLatest();

            return properties;
        }
    }
}
