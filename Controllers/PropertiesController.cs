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
    }
}
