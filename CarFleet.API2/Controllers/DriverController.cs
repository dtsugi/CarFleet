using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API2.Controllers
{
    public class DriverController : ApiController
    {
        private DriverLogic _driverLogic = new DriverLogic();
        private FunctionsLogic _functionsLogic = new FunctionsLogic();

        [HttpGet, Route("api/driver/GetByCompanyId/{idCompany}")]
        public IHttpActionResult GetByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_driverLogic.GetByCompanyId(idCompany));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de conductores por el id de la compañia"));
            }
        }

        [HttpGet, Route("api/driver/GetTotalByCompanyId/{idCompany}")]
        public IHttpActionResult GetTotalByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_functionsLogic.GetTotalsByCompanyId(idCompany, CarFleet.Utils.Constants.CARFLEET_ENTITY.DRIVER));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener total de conductores"));
            }
        }
    }
}