using CarFleet.BLL;
using System;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace CarFleet.API2.Controllers
{
    public class UserFleetController : ApiController
    {
        private UserFleetLogic _UserFleetLogic = new UserFleetLogic();

        [HttpGet, Route("api/UserFleet/GetByUserId/{idUser}")]
        public IHttpActionResult GetByUserId(int idUser)
        {
            try
            {
                return Ok(_UserFleetLogic.SelectByUserId(idUser));
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de flotas por usuario"));
            }
        }
    }
}
