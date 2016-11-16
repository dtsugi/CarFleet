using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class VehicleController : ApiController
    {
        private VehicleLogic _VehicleLogic = new VehicleLogic();

        [HttpGet, Route("api/Vehicle/Get/{id}/{idCompany}/{idFleet}/{idVehicleType}/{idDriver}")]
        public IHttpActionResult Get(int? id, int? idCompany, int? idFleet, int? idVehicleType, int? idDriver)
        {
            return Ok(_VehicleLogic.Get(id, idCompany, idFleet, idVehicleType, idDriver));
        }
    }
}