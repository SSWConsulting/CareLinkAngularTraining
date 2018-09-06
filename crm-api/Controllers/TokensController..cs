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
    public class TokensController : ControllerBase
    {
        [HttpPost]
        [ProducesResponseType(typeof(string), 200)]
        public IActionResult Post([FromBody] LoginRequest model)
        {
            if (model.UserName == model.Pasword + "1")
                return Ok("token_" + Guid.NewGuid());
            return Unauthorized();
        }
    }
}
