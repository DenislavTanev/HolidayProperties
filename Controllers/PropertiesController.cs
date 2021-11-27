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
        public IEnumerable<PropertyServiceModel> GetByType(string type)
        {
            var properties = _propertiesService
                .GetAllByType(type);

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
        public async Task<IActionResult> Create([FromBody] PropertyCreateServiceModel data)
        {
            //var userId = this.User.Id();
            //data.ownerId = userId;
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid data.");
            }

            await this._propertiesService.CreateAsync(data);

            return this.Ok("Created");
        }

        [HttpGet]
        [Route("user")]
        public string UserId()
        {
            return this.User.Id();
        }
    }
}
