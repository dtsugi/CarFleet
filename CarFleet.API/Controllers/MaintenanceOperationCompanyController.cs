using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class MaintenanceOperationCompanyController : ApiController
    {
        private MaintenanceOperationCompanyLogic _MaintenanceOperationCompanyLogic = new MaintenanceOperationCompanyLogic();

        //[HttpGet, Route("api/MaintenanceOperationCompany/Get/{id}/{idCompany}/{idMaintenanceOperation}")]
        //public IHttpActionResult Get(int? id, int? idCompany, int? idMaintenanceOperation)
        //{
        //    return Ok(_MaintenanceOperationCompanyLogic.GetById(id, idCompany, idMaintenanceOperation));
        //}
    }
}