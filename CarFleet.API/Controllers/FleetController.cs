using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API.Controllers
{
    public class FleetController : ApiController
    {
        private FleetLogic _FleetLogic = new FleetLogic();

        [HttpGet, Route("api/Fleet/GetByCompanyId/{idCompany}")]
        public IHttpActionResult GetByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_FleetLogic.GetByCompanyId(idCompany));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de flotas por el id de la compañia"));
            }
        }
    }
}