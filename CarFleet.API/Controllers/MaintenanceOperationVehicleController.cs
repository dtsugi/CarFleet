using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class MaintenanceOperationVehicleController : ApiController
    {
        private MaintenanceOperationVehicleLogic _MaintenanceOperationVehicleLogic = new MaintenanceOperationVehicleLogic();

        [HttpGet, Route("api/MaintenanceOperationVehicle/Get/{id}/{idVehicle}/{idMaintenanceOperation}")]
        public IHttpActionResult Get(int? id, int? idVehicle, int? idMaintenanceOperation)
        {
            return Ok(_MaintenanceOperationVehicleLogic.Get(id, idVehicle, idMaintenanceOperation));
        }
    }
}