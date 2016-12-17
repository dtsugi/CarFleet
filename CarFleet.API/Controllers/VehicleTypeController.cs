using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class VehicleTypeController : ApiController
    {
        private VehicleTypeLogic _VehicleTypeLogic = new VehicleTypeLogic();

        //[HttpGet, Route("api/VehicleType/GetById/{id}")]
        //public IHttpActionResult GetById(int? id)
        //{
        //    return Ok(_VehicleTypeLogic.Get(id));
        //}
    }
}