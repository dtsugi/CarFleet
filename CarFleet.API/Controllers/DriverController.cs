using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class DriverController : ApiController
    {
        private DriverLogic _driverLogic = new DriverLogic();

        [HttpGet, Route("api/driver/GetById/{id}")]
        public IHttpActionResult GetById(int id)
        {
            return Ok(_driverLogic.GetById(id));
        }
    }
}