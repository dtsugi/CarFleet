using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class FleetController : ApiController
    {
        private FleetLogic _FleetLogic = new FleetLogic();

        [HttpGet, Route("api/Fleet/GetById/{id}/{idCompany}")]
        public IHttpActionResult GetById(int? id, int? idCompany)
        {
            return Ok(_FleetLogic.GetById(id, idCompany));
        }
    }
}