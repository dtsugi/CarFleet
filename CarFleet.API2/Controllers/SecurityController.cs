using CarFleet.API2.Models;
using CarFleet.API2.Security;
using CarFleet.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace CarFleet.API2.Controllers
{
    public class SecurityController : ApiController
    {
        private ConfigUserLoginLogic _ConfigUserLoginLogic = new ConfigUserLoginLogic();
        private CarFleetSecurity _secCarFleet = CarFleetSecurity.GetContext;

        [HttpPost, Route("api/Security/IsAuthenticated")]
        [ResponseType(typeof(UserSessionDto))]
        public async Task<HttpResponseMessage> IsAuthenticated(UserSessionDto userSession)
        {
            try
            {
                HttpResponseMessage response;
                int timeExpireSession = _secCarFleet.GetTimeExpireSession();
                if (_ConfigUserLoginLogic.IsAuthenticated(userSession.IdUser, userSession.Token, userSession.DeviceUUID, timeExpireSession))
                {
                    response = Request.CreateResponse(HttpStatusCode.OK, true);
                }
                else { response = Request.CreateResponse(HttpStatusCode.Unauthorized, new { Message = "El usuario no está autenticado" }); }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error autenticando al usuario"));
            }
        }
    }
}
