using CarFleet.BLL;
using CarFleet.Models;
using System;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;

namespace CarFleet.API2.Controllers
{
    public class ConfigTagController : ApiController
    {
        private ConfigTagLogic _ConfigTagLogic = new ConfigTagLogic();

        [HttpPost, Route("api/ConfigTag/Insert")]
        [ResponseType(typeof(ConfigTagEntity))]
        public async Task<HttpResponseMessage> Insert(ConfigTagEntity entity)
        {
            try
            {
                HttpResponseMessage response;
                if (_ConfigTagLogic.Insert(entity))
                {
                    response = Request.CreateResponse(HttpStatusCode.OK, true);
                }
                else
                {
                    response = Request.CreateResponse(HttpStatusCode.PreconditionFailed, false);
                }
                return response;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Error al guardar la etiqueta de configuracion"));
            }
        }

        [HttpGet, Route("api/ConfigTag/GetAll")]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(_ConfigTagLogic.SelectAll());
            }
            catch (Exception)
            {
                throw new HttpResponseException(Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "No fue posible obtener el listado de etiquetas"));
            }
        }
    }
}
