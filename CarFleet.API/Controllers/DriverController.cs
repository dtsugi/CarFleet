using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class DriverController : ApiController
    {
        private DriverLogic _driverLogic = new DriverLogic();

        [HttpGet, Route("api/driver/GetById/{id}/{idCompany}")]
        public IHttpActionResult GetById(int? id, int? idCompany)
        {
            return Ok(_driverLogic.GetById(id, idCompany));
        }
    }
}