using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class CompanyController : ApiController
    {
        private CompanyLogic _CompanyLogic = new CompanyLogic();

        //[HttpGet, Route("api/Company/GetById/{id}/{id_companytype}/{id_drivingrulesconfiguration}/{id_platform_service}")]
        //public IHttpActionResult GetById(int? id, int? id_companytype, int? id_drivingrulesconfiguration, int? id_platform_service)
        //{
        //    return Ok(_CompanyLogic.GetById(id, id_companytype, id_drivingrulesconfiguration, id_platform_service));
        //}
    }
}