using System.Web.Http;
using CarFleet.BLL;


namespace CarFleet.API.Controllers
{
    public class CompanyTypeController : ApiController
    {
        private CompanyTypeLogic _CompanyTypeLogic = new CompanyTypeLogic();

        //[HttpGet, Route("api/CompanyType/GetById/{id}")]
        //public IHttpActionResult GetById(int? id)
        //{
        //    return Ok(_CompanyTypeLogic.GetById(id));
        //}
    }
}