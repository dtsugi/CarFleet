using CarFleet.API2.Models;
using CarFleet.API2.Security;
using CarFleet.BLL;
using CarFleet.Models;
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
    public class UserController : ApiController
    {
        private UserLogic _UserLogic = new UserLogic();
        private ConfigUserLoginLogic _ConfigUserLoginLogic = new ConfigUserLoginLogic();
        private CarFleetSecurity _secCarFleet = CarFleetSecurity.GetContext;

        [HttpPost, Route("api/User/Login")]
        [ResponseType(typeof(UserSessionDto))]
        public async Task<HttpResponseMessage> Login(UserSessionDto userSession)
        {
            try
            {
                HttpResponseMessage response;
                UserEntity userEntity = _UserLogic.Login(userSession.UserName,userSession.Password);
                if (userEntity != null)
                {
                    int timeExpireSession = _secCarFleet.GetTimeExpireSession();
                    string token = String.Empty;
                    if (userSession.StaySession && !string.IsNullOrEmpty(userSession.Token))
                    {
                        token = _ConfigUserLoginLogic.LoginByToken(userEntity.Id, userSession.Token, userSession.DeviceUUID, timeExpireSession);
                    }
                    else
                    {
                        token = _ConfigUserLoginLogic.Insert(userEntity.Id, userSession.DeviceUUID, timeExpireSession);
                    }
                    if (!string.IsNullOrEmpty(token))
                    {
                        userSession.IdUser = userEntity.Id;
                        userSession.IdCompany = userEntity.Id_company;
                        userSession.IdLanguage = userEntity.Id_language;
                        userSession.Token = token;
                        response = Request.CreateResponse(HttpStatusCode.OK, userSession);
                    }
                    else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "Falló la generación del token en la aplicación" }); }
                }
                else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "Nombre de usuario o password incorrectos" }); }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error en el login"));
            }
        }

        [HttpPost, Route("api/User/UpdateLanguage")]
        //[ResponseType(typeof(DedicationRegistryEntity))]
        public async Task<HttpResponseMessage> UpdateLanguage(int idUser, int idLanguage)
        {
            try
            {
                HttpResponseMessage response;
                _UserLogic.UpdateLanguage(idUser, idLanguage);
                response = Request.CreateResponse(HttpStatusCode.OK, true);
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al actualizar el lenguaje del usuario"));
            }
        }        
    }
}
