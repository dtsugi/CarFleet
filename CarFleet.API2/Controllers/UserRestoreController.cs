using CarFleet.API2.Security;
using CarFleet.API2.Utils;
using CarFleet.BLL;
using CarFleet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace CarFleet.API2.Controllers
{
    public class UserRestoreController : ApiController
    {
        private UserLogic _UserLogic = new UserLogic();
        UserRestoreLogic _UserRestoreLogic = new UserRestoreLogic();
        private CarFleetSecurity _secCarFleet = CarFleetSecurity.GetContext;

        [HttpPost, Route("api/UserRestore/RestorePassword")]
        //[ResponseType(typeof(DedicationRegistryEntity))]
        public async Task<HttpResponseMessage> RestorePassword(string email)
        {
            try
            {
                HttpResponseMessage response;
                UserEntity userEntity = _UserLogic.SelectByLoginName(email);
                if (userEntity != null)
                {
                    Random random = new Random();
                    string errorMessage;
                    string code = random.Next(10000, 99999).ToString();
                    int timeExpiration = _secCarFleet.GetNumberConfig(CarFleetSecurity.APP_CONFIG_RESTORE_PASSWORD_TIME_EXPIRE);
                    if (_UserRestoreLogic.Insert(userEntity.Id, code, timeExpiration))
                    {
                        CarFleetMail carFleetMail = new CarFleetMail();
                        if (carFleetMail.RestorePassword(email, code, out errorMessage))
                        {
                            response = Request.CreateResponse(HttpStatusCode.OK, true);
                        }
                        else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "No se pudo enviar el correo electronico", Error = errorMessage }); }
                    }
                    else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "No se pudo generar el codigo de seguridad" }); }
                }
                else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "No existe ninguna cuenta con ese correo electronico" }); }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al restaurar la contraseña del usuario"));
            }
        }

        [HttpPost, Route("api/UserRestore/VerifyRestoreCode")]
        //[ResponseType(typeof(DedicationRegistryEntity))]
        public async Task<HttpResponseMessage> VerifyRestoreCode(string email, string code)
        {
            try
            {
                HttpResponseMessage response;
                string errorMessage;
                if (_UserRestoreLogic.IsValidCode(email, code, out errorMessage))
                {
                    response = Request.CreateResponse(HttpStatusCode.OK, true);
                }
                else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = errorMessage }); }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al verificar el codigo para restaurar su contraseña"));
            }
        }


        [HttpPost, Route("api/UserRestore/UpdatePassword")]
        //[ResponseType(typeof(DedicationRegistryEntity))]
        public async Task<HttpResponseMessage> UpdatePassword(string email, string code, string newPassword)
        {
            try
            {
                HttpResponseMessage response;
                string errorMessage;
                if (_UserRestoreLogic.IsValidCode(email, code, out errorMessage))
                {
                    if (_UserLogic.UpdatePassword(email, newPassword))
                    {
                        response = Request.CreateResponse(HttpStatusCode.OK, true);
                    }
                    else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = "Error al actualizar el password del usuario" }); }
                }
                else { response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, new { Message = errorMessage }); }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al verificar el codigo para restaurar su contraseña"));
            }
        }
    }
}
