using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API2.Controllers
{
    public class VehicleController : ApiController
    {
        private VehicleLogic _VehicleLogic = new VehicleLogic();
        private FunctionsLogic _functionsLogic = new FunctionsLogic();

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

        [HttpGet, Route("api/Vehicle/GetTotalByCompanyId/{idCompany}")]
        public IHttpActionResult GetTotalByCompanyId(int idCompany)
        {
            try
            {
                return Ok(_functionsLogic.GetTotalsByCompanyId(idCompany, CarFleet.Utils.Constants.CARFLEET_ENTITY.VEHICLE));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener total de vehiculos"));
            }
        }

        [HttpGet, Route("api/Vehicle/GetTotalByCompanyAndFleetId/{idCompany}/{idFleet}")]
        public IHttpActionResult GetTotalByCompanyAndFleetId(int idCompany, int idFleet)
        {
            try
            {
                return Ok(_functionsLogic.GetTotalVehicleByCompanyAndFleetId(idCompany, idFleet));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener total de vehiculos"));
            }
        }
    }
}