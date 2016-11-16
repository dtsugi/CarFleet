using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class MaintenanceOperationController : ApiController
    {
        private MaintenanceOperationLogic _MaintenanceOperationLogic = new MaintenanceOperationLogic();

        [HttpGet, Route("api/MaintenanceOperation/Get/{id}")]
        public IHttpActionResult Get(int? id)
        {
            return Ok(_MaintenanceOperationLogic.GetById(id));
        }
    }
}