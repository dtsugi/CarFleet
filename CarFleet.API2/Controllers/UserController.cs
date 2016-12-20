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

        [HttpPost, Route("api/User/Login")]
        [ResponseType(typeof(string))]
        public async Task<HttpResponseMessage> Login(string loginName)
        {
            try
            {
                HttpResponseMessage response;
                UserEntity userEntity = _UserLogic.Login(loginName);
                if (userEntity != null)
                {
                    response = Request.CreateResponse(HttpStatusCode.OK, userEntity);
                }
                else
                {
                    response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, false);
                    //userEntity = _UserLogic.Login("ManuelM");                    
                    //response = Request.CreateResponse(HttpStatusCode.OK, userEntity);
                }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al loguearse"));
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
