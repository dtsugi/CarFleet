using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API.Controllers
{
    public class VehicleController : ApiController
    {
        private VehicleLogic _VehicleLogic = new VehicleLogic();

        [HttpGet, Route("api/Vehicle/GetByCompanyId/{idCompany}")]
        public IHttpActionResult GetByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_VehicleLogic.GetByCompanyId(idCompany));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de vehiculos por el id de la compañia"));
            }
        }

        [HttpGet, Route("api/Vehicle/GetByFleetId/{idFleet}")]
        public IHttpActionResult GetByFleetId(int idFleet)
        {
            try
            {
                return Ok(_VehicleLogic.GetByFleetId(idFleet));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de vehiculos por el id de la flota"));
            }
        }
    }
}