using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using crm_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace crm_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<Company>), 200)]
        public IActionResult GetAll()
        {
            var fake = new List<Company>
            {
                new Company { Id = 1, Name = "ABC", Address = "Frankston" },
                new Company { Id = 2, Name = "EDF", Address = "Blah Blah" },
            };
            return Ok(fake);
        }

        [HttpGet("{id}")]
        [ProducesResponseType(typeof(Company), 200)]
        public IActionResult Get(int id)
        {
            return Ok(new Company { Id = id, Name = "ABC", Address = "Frankston" });
        }

        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Company), 200)]
        public IActionResult PutCompany(int id, [FromBody] Company model)
        {
            return Ok(model);
        }

        [HttpPost]
        [ProducesResponseType(typeof(Company), 200)]
        public IActionResult Post([FromBody] Company model)
        {
            return Ok(model);
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            return Ok();
        }
    }
}
