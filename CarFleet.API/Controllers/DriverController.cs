using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API.Controllers
{
    public class DriverController : ApiController
    {
        private DriverLogic _driverLogic = new DriverLogic();

        [HttpGet, Route("api/driver/GetByCompanyId/{idCompany}")]
        public IHttpActionResult GetByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_driverLogic.GetByCompanyId(idCompany));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de vehiculos por el id de la compañia"));
            }
        }
    }
}